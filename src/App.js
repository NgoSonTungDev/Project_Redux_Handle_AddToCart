import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />         
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
