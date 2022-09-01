import classes from "./UserLayouts.module.css";
import {Route, Switch} from "react-router-dom";
import Posts from "../../pages/User/Posts/Posts";
import PostPage from "../../pages/User/PostPage/PostPage";
import QuotesPage from "../../pages/User/QuotesPage/QuotesPage";
import {AuthorsQuotes} from "../../components/Quotes/AuthorsQuotes/AuthorsQuotes";
import MainComponents from "../../pages/User/MainComponents/MainComponents";
import React from "react";
import Sidebar from "../../components/User/Sidebar/Sidebar";
import Header from "../../components/User/Header/Header";


const UserLayouts = () => {

  return (
    <div className={classes.Layout}>
      <Sidebar />
      <div className={classes.UserLayout}>
        <div className={classes.Main}>
          <Header />
          <div className={classes.content}>
            <Switch>
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/posts/:id" component={PostPage} />
              <Route exact path="/quotes/random" component={QuotesPage} />
              <Route exact path="/quotes/random/:author" component={AuthorsQuotes} />
              <Route exact path="/components" component={MainComponents} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLayouts