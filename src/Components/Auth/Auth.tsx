import { useHistory } from "react-router-dom";

export default function Auth() {
  const history = useHistory();
  const token = localStorage.getItem("token");
  if (token) {
    history.push("/");
  } else {
    window.location.href = "https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=1455898828251959&redirect_uri=http://localhost:3000/auth";
  }



  return <></>;
}
