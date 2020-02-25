import React from "react";
import { ThemeProvider } from "react-jss";
import { Provider } from "react-redux";

import CounterPage from "./pages/CounterPage";
import configureStore from "./store/configure";
import createTheme from "./utils/createTheme";

const store = configureStore({});

const theme = createTheme({});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CounterPage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
