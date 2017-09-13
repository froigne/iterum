import { BrowserRouter } from "react-router-dom";
import { IntlProvider, addLocaleData } from "react-intl";
import { Provider } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React from "react";
import ReactDOM from "react-dom";
import createStore from "app/redux/createStore";
import "moment/locale/fr";
import frLocaleData from "react-intl/locale-data/fr";
import getMuiTheme from "material-ui/styles/getMuiTheme";

addLocaleData([...frLocaleData]);

const store = createStore();

const muiTheme = getMuiTheme({
  fontFamily: "Lato, sans-serif",
  palette: {
    primary1Color: "#244192",
    accent1Color: "#92BC42",
    textColor: "#333"
  }
});

const renderApp = (content, domElement) => {
  ReactDOM.render(
    <Provider store={store}>
      <IntlProvider locale="fr" defaultLocale="fr">
        <MuiThemeProvider muiTheme={muiTheme}>
          <BrowserRouter>{content}</BrowserRouter>
        </MuiThemeProvider>
      </IntlProvider>
    </Provider>,
    domElement
  );
};

export default renderApp;
