import OauthPopup from "react-oauth-popup";
import { useHistory } from "react-router-dom";

export default function Auth() {
  const history = useHistory();
  const token = localStorage.getItem("Logueado");
  if (token) {
    history.push("/");
  }

  const onClose = () => {
    const token = localStorage.getItem("Logueado");
    if (token) {
        history.push("/");
      }
      localStorage.setItem("Logueado",'true');
  }

  const onCode = (code: string, params: any) => {
    localStorage.setItem("Logueado",'true');
    console.log('code');
    history.push("/");
  };
  return (
    <OauthPopup
      url="https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=1455898828251959&redirect_uri=http://localhost:5200/api/auth"
      onCode={onCode}
      onClose={onClose}
      title="Auth"
      width={500}
      height={500}
    >
      <div>
        <img src="logo_ML.png" alt="Logo MeLi"></img>
      </div>
    </OauthPopup>
  );
}
