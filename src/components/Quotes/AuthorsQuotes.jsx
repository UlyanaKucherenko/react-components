import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import QuotesItem from "./QuotesItem/QuotesItem";

const baseURL = "https://quote-garden.herokuapp.com/api/v3/quotes";

export function AuthorsQuotes() {
  const {author} = useParams();
  const [authorsQuotes, setAuthorsQuotes] = useState([])

  useEffect(() => {
    fetch(`${baseURL}/?author=${author}`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setAuthorsQuotes(json.data)
      })
  }, [author])


  return (
    <div>
      <h2>{author}</h2>
      {
        authorsQuotes.map((quote) =>
          <QuotesItem  key={quote._id} quote={quote} />
        )}
    </div>
  )
}