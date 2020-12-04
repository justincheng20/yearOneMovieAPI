import axios from 'axios';

const BASE_URL = "http://localhost:5000/api";

class BackendApi {
  static async getMovieScore(id) {
    try {
      const resp = await axios.get(`${BASE_URL}/movies/${id}`);
      return resp;
    } catch (err) {
      return err;
    }
  }

  static async addMovie(id) {
    try {
      const resp = await axios.post(`${BASE_URL}/movies`, {id} );
      return resp;
    } catch (err) {
      return err;
    }
  }

  static async updateMovieScore(movieId, direction) {
    try {
      console.log(movieId)
      const resp = await axios.post(`${BASE_URL}/movies/${movieId}/vote/${direction}`);
      return resp;
    } catch (err) {
      return err;
    }
  }

}

export default BackendApi;