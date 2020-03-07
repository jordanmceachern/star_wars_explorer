const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

export const fetchPeople = () => async dispatch => {
  try {
    const res = await fetch('https://swapi.co/api/people/', {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'error',
      referrerPolicy: 'no-referrer'
    }).then(handleErrors).then(response => {
      return response
    })
    console.log('res: ', res)
    // dispatch({ type: 'fetch_people', payload: res })
  } catch (err) { return console.error(err) }
}

export const fetchPlanets = () => async dispatch => {
  try {
    const res = await fetch('https://swapi.co/api/planets/', {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'error',
      referrerPolicy: 'no-referrer'
    }).then(handleErrors).then(response => {
      return response
    })
    console.log('res: ', res)
    // dispatch({ type: 'fetch_planets', payload: res })
  } catch (err) { return console.error(err) }
}

export const fetchMovies = () => async dispatch => {
  try {
    const res = await fetch('https://swapi.co/api/films/', {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'error',
      referrerPolicy: 'no-referrer'
    }).then(handleErrors).then(response => {
      return response
    })
    console.log('res: ', res)
    // dispatch({ type: 'fetch_movies', payload: res })
  } catch (err) { return console.error(err) }
}
