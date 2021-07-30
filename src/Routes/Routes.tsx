import { BrowserRouter, Route, Switch } from "react-router-dom";
import Api from "Components/Api/api";
import Search from "Components/Search/Search";
import Auth from "Components/Auth/Auth";

const home = () => {
  return <p>Hola mundo</p>;
};
const home2 = () => {
  return <p>Hola mundo /id</p>;
};
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/auth" component={Auth}/>
        <Route exact path="/api/items/:id" component={Api} />
        <Route exact path="/items" component={Search}/>
        <Route exact path="/items/:id" component={home2} />
      </Switch>
    </BrowserRouter>
  );
}
