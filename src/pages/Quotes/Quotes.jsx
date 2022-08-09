import classes from "./Quotes.module.css";
import React, {useEffect, useState} from "react";
import RButton from "../../components/common/RButton/RButton";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import {Link} from "react-router-dom";
import QuotesItem from "../../components/Quotes/QuotesItem/QuotesItem";

const baseURL = "https://quote-garden.herokuapp.com/api/v3/quotes";



const Quotes = () => {

  const [quote, setQuote] = useState({})

  const getQuotes = () => {
    fetch(`${baseURL}/random`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setQuote(json.data[0])
      })
  }

  useEffect(() => {
    getQuotes()
  }, [])

  return (
    <div>

      <h2>Page Random Quote</h2>
      <div>
        <RButton text="random" color="secondary" startIcon={<AutorenewIcon/>} onClick={getQuotes}/>
      </div>

      <div className={classes.container}>

        <div>
          <QuotesItem quote={quote}/>
          <Link to={`/quotes/random/${quote.quoteAuthor}`} className={classes.link}>
            <div>{quote.quoteAuthor}</div>
            <div>({quote.quoteGenre})</div>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Quotes