import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './components/Route';
import { Home } from './pages/Home';
import { Provider } from "react-redux";
import GlobalStyle from "./styles/global";
import store from "./store";
import { ProductPage } from './pages/ProductPage';
import { Login } from './pages/Login';
import AppProvider from './hooks';
import { Admin } from './pages/Admin';
import { EditProduct } from './pages/EditProduct';
import { NewProduct } from './pages/NewProduct';
import { Signin } from './pages/Signin';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Provider store={store}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/produto/:id" component={ProductPage} />
            <Route path="/login" component={Login} />
            <Route path="/signin" component={Signin} />
            <Route path="/admin/produto/novo" component={NewProduct} isPrivate/>
            <Route path="/admin/produto/:id" component={EditProduct} isPrivate/>
            <Route path="/admin" component={Admin} isPrivate/>
          </Switch>
        </Provider>
      </AppProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
