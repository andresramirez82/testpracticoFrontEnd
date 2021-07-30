import { useEffect } from "react";
import "Styles/App.scss";
import Routes from "Routes/Routes";

function App() {
  useEffect(() => {
    window.open(
      "https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=1455898828251959&redirect_uri=http://localhost:5200/api/auth",
      "Data",
      "height=250,width=250"
    );
    return () => {};
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Routes></Routes>
      <footer></footer>
    </div>
  );
}

export default App;
