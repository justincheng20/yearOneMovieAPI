/** API routes for movies. */

const db = require("../db");
const express = require("express");
const router = new express.Router();

router.get("/:id", async function (req, res, next) {
  try {
    const result = await db.query(
      `SELECT 
      m.votes
      FROM movies m 
      WHERE m.movieId = $1
      `, [req.params.id]
    );
    return res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});

router.post("/:id/vote/:direction", async function (req, res, next) {
  try {
    let delta = req.params.direction === "up" ? +1 : -1;
    const result = await db.query(
      "UPDATE movies SET votes=votes + $1 WHERE movieId = $2 RETURNING votes",
      [delta, req.params.id]);
    return res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    const { id } = req.body;
    const result = await db.query(
      `INSERT INTO movies (movieId) 
        VALUES ($1) 
        RETURNING votes`,
      [id]);
    return res.status(201).json(result.rows[0].votes);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
