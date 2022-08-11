import {useEffect, useState} from "react";


const useFetch = (defaultValue = [], url = '', params = []) => {

  const [data, setData] = useState(defaultValue)
  const [load, setLoad] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoad(true)
    fetch(url)
      .then(response => response.json())
      .then((res) => setData(res))
      .catch(setError)
      .finally(() => setLoad(false));
  }, [...params])

  return [data, load, error]
}

export {useFetch} ;