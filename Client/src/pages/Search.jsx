import React, { useState } from 'react';

const Search = () => {
  const [name, setName] = useState('');
  const [cityData, setCityData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://flixbus.p.rapidapi.com/v1/stations', {
      method: 'POST',
      body: JSON.stringify({
        name: name
      }),
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'dc66c7ea2emsha6c7a2e618149d4p17da80jsn5c1e1cd8cb27',
        'X-RapidAPI-Host': 'flixbus.p.rapidapi.com'
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch city data');
        }
        return res.json();
      })
      .then((data) => {
        setCityData(data.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className='container'>
      <div className='row'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='CityName'>City name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              className='form-control'
              id='CityName'
              aria-describedby='CityName'
              placeholder='Enter name of city'
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
      {error && <div className='error'>{error}</div>}
      {cityData && (
        <div className='row'>
          <div className='col-md-12'>
            <h3>City Data:</h3>
            <pre>{JSON.stringify(cityData, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
