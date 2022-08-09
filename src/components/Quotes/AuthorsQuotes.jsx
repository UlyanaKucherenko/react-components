import {useEffect, useState} from "react";


const baseURL = "https://quote-garden.herokuapp.com/api/v3/quotes";

export function QuotesAuthor() {

  const [authorsQuotes, setAuthorsQuotes] = useState('Victor Hugo')


  useEffect(() => {
    fetch(`${baseURL}?author=Victor Hugo`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setAuthorsQuotes(json.data)
      })
  }, [])


  return (
    <div>
      <div>QuotesAuthor</div>
      {
        authorsQuotes.map((quote) =>
          <div key={quote._id}>
            <div>{quote._id}</div>
          </div>
        )}
    </div>
  )
}