import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Api from "Helper/Axios";

export default function Token(props: any) {
  const [redirctTo, setRedirctTo] = useState(false); // your state value to manipulate
  useEffect(() => {
    let code = "";
    code = new URLSearchParams(props.location.search).get("code") || "";
    //code = code?.toString();
    localStorage.setItem("Code", code);

    Api.get("/api/auth?code=" + code)
      .then((response, ...other) => {
        // console.log("/api/auth?code=" + code);
        //console.log(response);
        localStorage.setItem("token", response.data);
        setRedirctTo(true);

        //history.push("/");
      })
      .catch(() => {
        //toast.error('Ocurrió un error');
        console.log("error");
      });
  }, [props.location.search]);

  let url;
  if (redirctTo) {
    url = <Redirect to="/" />;
  }
  return <>{url}</>;
}
