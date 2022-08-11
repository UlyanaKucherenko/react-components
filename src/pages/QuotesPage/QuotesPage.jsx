import {useEffect, useState} from "react";

import RButton from "../../components/ui/RButton/RButton";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import {Link} from "react-router-dom";
import QuotesItem from "../../components/Quotes/QuotesItem/QuotesItem";

import classes from "./QuotesPage.module.css";

const baseURL = "https://quote-garden.herokuapp.com/api/v3";


const Quotes = ({quotes, loadMore}) => {

  return (
    <div>
      <h2>Quotes</h2>
      <div className={classes.quotesWrap}>
        <div className={classes.quotesContent}>
          {
            quotes.map((item, idx) => {
              return (
                <div key={idx} className={classes.quotesItem}>
                  <b className={classes.quotesItemAuthor}>{item.quoteAuthor}</b>
                  <div className={classes.quotesItemText}>"{item.quoteText}"</div>
                </div>
              )
            })
          }
        </div>
        <button type="button" className={classes.btnMore} onClick={() => loadMore()}>load more
        </button>
      </div>
    </div>
  )
}

const RandomQuote = ({quote, load, getRandomQuote}) => {
  return (
    <div className={classes.randomWrap}>
      <div className={classes.randomHeader}>
        <h3>Random Quote</h3>
        <RButton text="" color="secondary" startIcon={<AutorenewIcon/>} onClick={getRandomQuote}/>
      </div>
      {
        load ?
          `loading...` :
          <div>
            <QuotesItem quote={quote}/>
            <div className={classes.randomFooter}>
              <Link
                to={`/quotes/random/${quote.quoteAuthor}`}
                className={classes.link}
              >
                <cite>{quote.quoteAuthor} ({quote.quoteGenre})</cite>
              </Link>
            </div>
          </div>
      }
    </div>
  )
}


const QuotesPage = () => {

  const [quote, setQuote] = useState({})
  const [quotes, setQuotes] = useState([])
  const [load, setLoad] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const getRandomQuote = async () => {
    setLoad(true)
    await fetch(`${baseURL}/quotes/random`)
      .then(response => response.json())
      .then((res) => {
        setQuote(res.data[0])
        setLoad(false)
      });
  }

  const getQuotes = async (_currentPage = currentPage) => {
    await fetch(`${baseURL}/quotes?page=${_currentPage}`)
      .then(response => response.json())
      .then((res) => {
        setQuotes(prevState => [...prevState, ...res.data])
        console.log('quotes res =>', res)
      });
  }

  useEffect(() => {
    getRandomQuote()

  }, [])

  useEffect(() => {
    getQuotes()
  }, [currentPage])


  function loadMore() {
    return setCurrentPage(prevState => prevState + 1)
  }

  return (
    <div>
      <h2>Page Quote</h2>
      <div className={classes.container}>
        <RandomQuote quote={quote} load={load} getRandomQuote={getRandomQuote}/>
        <Quotes quotes={quotes} loadMore={() => loadMore()}/>
      </div>
    </div>
  )
}

export default QuotesPage