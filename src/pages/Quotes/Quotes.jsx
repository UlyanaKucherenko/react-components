import classes from "./PageQuotes.module.css";
import {useEffect, useState} from "react";
import RButton from "../../components/common/RButton/RButton";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import {NavLink} from "react-router-dom";


const baseURL = "https://quote-garden.herokuapp.com/api/v3/quotes";

const PageQuotes = () => {

  const [quotes, setQuotes] = useState([])

  const getQuotes = () => {
    fetch(`${baseURL}/random`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setQuotes(json.data)
      })
  }

  useEffect(() => {
    getQuotes()
  }, [])

  return (
    <div>
      <h2>PageQuote</h2>
      <div>
        <RButton text="random" color="secondary" startIcon={<AutorenewIcon/>} onClick={getQuotes}/>
      </div>
      <div className={classes.container}>
        <div>
          {
            quotes.map((quote) =>
              <div key={quote._id}>
                <div className={classes.item}>
                  <div>{quote.quoteText}</div>
                </div>
                <NavLink to={`/quote/${quote.quoteAuthor}`} className={classes.link}>
                  <div>{quote.quoteAuthor}</div>
                  <div>({quote.quoteGenre})</div>
                </NavLink>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default PageQuotes