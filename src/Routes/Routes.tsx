import { BrowserRouter, Route, Switch } from "react-router-dom";
import Api from "Components/Api/api";
import Search from "Components/Search/Search";
import Auth from "Components/Auth/Auth";
import Token from "Components/Auth/Token";
import SearchList from "Components/Search/SearchList/SearchList";
import ItemDetail from "Components/Search/SearchList/ItemDetail";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Auth />
          <Search />
        </Route>
        <Route exact path="/auth" component={Token} />
        <Route exact path="/api/items/:id" component={Api} />
        <Route exact path="/items/id/:id" component={ItemDetail} />
        <Route exact path="/items/:text" component={SearchList} />
      </Switch>
    </BrowserRouter>
  );
}
