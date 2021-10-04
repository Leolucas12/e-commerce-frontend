import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Provider } from "react-redux";
import GlobalStyle from "./styles/global";
import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Provider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
