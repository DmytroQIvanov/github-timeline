import ChartBlock from "./components/ChartBlock/ChartBlock";
import SearchBlock from "./components/SearchBlock/SearchBlock";
import { useState } from "react";
import { connect } from "react-redux";
import ReposBlock from "./components/ReposBlock/ReposBlock";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { Loader } from "./components/Loader/Loader";
import { createBrowserHistory } from "history";

function App(props) {
  let [obtained, setObtained] = useState(false);

  let history = createBrowserHistory();

  return (
    <div className="App">
      <Router history={history}>
        <Redirect to="/home" />
        User: {props.store[0].name}
        <Switch>
          <Route path="/home">
            <SearchBlock setObtained={setObtained} />
          </Route>

          <Route path="/repositories/">
            <SearchBlock setObtained={setObtained} />
            {obtained ? <ReposBlock /> : <Loader />}
          </Route>

          <Route path="/chart/">
            <ChartBlock />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function mapStateToProps(store) {
  return { store };
}

export default connect(mapStateToProps)(App);
