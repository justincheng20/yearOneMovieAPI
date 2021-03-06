import React, { useState } from 'react';

function SearchForm({searchMovies, setLoading}) {
  const [formData, setFormData] = useState({
    title: "",
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    searchMovies(formData.title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          <label>Title</label>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            value={formData.title}
            id="title"
          />
        </div>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;