import { BrowserRouter as Router, Route } from "react-router-dom";
import Api from 'Components/Api/api';

const home = () => {
  return <p>Hola mundo</p>;
};

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={home} />
      <Route exact path="/api/items/:id" component={Api} />
    </Router>
  );
}
