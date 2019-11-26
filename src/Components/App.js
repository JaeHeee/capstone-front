// import React, {Component, PropTypes} from 'react';
// import GlobalStyle from "./GlobalStyles"
// import Router from "./Router"
// import Contact from './Contact'
// import Counter from './Counter'

// class App extends Component {

//     render() {
//         return(
//           <Router/>
//         );
//     }
// }

// export default App;

import React, { Component, Fragment } from "react";
import GlobalStyle from "./layout/GlobalStyles";
import HomeContainer from "./home/HomeContainer";
import { Provider } from "react-redux";
import store from "../store";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./layout/Alerts";

import Router from "./Router";

const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <>
            <GlobalStyle />
            <Alerts />
            <HomeContainer />
          </>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
