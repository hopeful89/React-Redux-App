import React from "react";
import { connect } from 'react-redux';
import "./App.css";
import { fetchTemtemStart } from './actions/defaultActions'

const App = (props) => {
  return (
    //write map to state with incoming information from api
    //decide on a styling library and work on this project
    //whiteboard out a flow and practice
    <div className="App">
      <button onClick={props.fetchTemtemStart}>test button</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    temtem: state.temtem
  }
}

export default connect(mapStateToProps,{ fetchTemtemStart })(App);
