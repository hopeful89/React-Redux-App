import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { fetchTemtemStart } from "./actions/defaultActions";

const App = (props) => {
  console.log("bs: APP.js: propsFromState", props);
  return (
    //write map to state with incoming information from api
    //decide on a styling library and work on this project
    //whiteboard out a flow and practice
    <div className="App">
      {props.isFetching ? (//removes button during fetch
        <div>**Please wait**</div>
      ) : (
        <button onClick={() => props.fetchTemtemStart()}>test button</button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    temtem: state.temtem,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, { fetchTemtemStart })(App);
