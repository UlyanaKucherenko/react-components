import React from "react";
import MainComponents from "../../pages/MainComponents/MainComponents";
import { Route, Switch} from "react-router-dom";
import Posts from "../../pages/Posts/Posts";
import classes from "./Main.module.css";
import PostPage from "../../pages/PostPage/PostPage";
import QuotesPage from "../../pages/QuotesPage/QuotesPage";
import {AuthorsQuotes} from "../../components/Quotes/AuthorsQuotes/AuthorsQuotes";

const Main = () => {
  return(
    <div className={classes.container }>
      <Switch>
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:id" component={PostPage} />
        <Route exact path="/quotes/random" component={QuotesPage} />
        <Route exact path="/quotes/random/:author" component={AuthorsQuotes} />
        <Route exact path="/components" component={MainComponents} />
      </Switch>
    </div>
  )
}

export default Main