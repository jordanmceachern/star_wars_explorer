export const fetchPeople = () => async dispatch => {
  try {
    const res = await fetch('https://swapi.co/api/people/', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'omit', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'error', // manual, *follow, error
      referrerPolicy: 'no-referrer' // no-referrer, *client
    })
    const data = await res.json().then((data, err) => { /// ////////////////////////// TODO: Add res.ok check! ///////////////////////////////////////
      if (data) {
        return data
      } else {
        throw err
      }
    })
    dispatch({ type: 'fetch_people', payload: data })
  } catch (err) { return console.error(err) }
}
