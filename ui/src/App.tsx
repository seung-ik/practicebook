import DashBoard from "./components/menu/dashBoard";
import React, { FC } from "react";
import { Route, Switch } from "react-router";
import UserMenu from "./components/menu/userMenu";
import Modal  from './components/modal'
import LeftNav from "./components/leftNav";
import { makeStyles } from "@material-ui/core";
import { LEFT_NAV_WIDTH } from "./const/styles";


const useStyles = makeStyles(()=>({
  root:{
    display:"flex",
    minHeight:"100vh"
  },
  content:{
    paddingLeft : LEFT_NAV_WIDTH,
    flexGrow:1,
    flexShrink:1
  }
}))

const App: FC = () => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
        <Modal/>
        <LeftNav/>
      <div>
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route path="/user" component={UserMenu} />
        </Switch>
      </div>
    </main>
  );
};

export default App;
