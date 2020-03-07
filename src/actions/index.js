import parallel from 'async/parallel'

const handleErrors = response => {
  if (!response.ok) {
    console.error(response.statusText)
  }
  return response.json()
}

// the following is in place to return a manageable batch size for each route
// this is why graphql takes the trophy...
const indices = ['1', '2', '3', '4', '5', '6', '7']

const asyncfuncs = segment => indices.map(index => callback => {
  fetch(`https://swapi.co/api/${segment}/${index}/`, {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'error',
    referrerPolicy: 'no-referrer'
  }).then(response => handleErrors(response)).then((data, error) => {
    if (error) { console.error(error) } else { callback(null, data) }
  })
})

export const fetchPeople = () => dispatch => {
  parallel(asyncfuncs('people'), (err, results) => {
    if (err) { console.error(err) }
    dispatch({ type: 'fetch_people', payload: results })
  })
}

export const fetchPlanets = () => dispatch => {
  parallel(asyncfuncs('planets'), (err, results) => {
    if (err) { console.error(err) }
    dispatch({ type: 'fetch_planets', payload: results })
  })
}

export const fetchMovies = () => dispatch => {
  parallel(asyncfuncs('films'), (err, results) => {
    if (err) { console.error(err) }
    dispatch({ type: 'fetch_movies', payload: results })
  })
}
