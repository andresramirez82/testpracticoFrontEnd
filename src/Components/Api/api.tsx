import { useEffect, useState } from "react";
import api from "Helper/Axios";

export default function App(props: any) {
  const id = props.match.params.id;
  const [datos, setdatos] = useState([]);
  useEffect(() => {
    const url = `/search?q=%${id}`;
    api
      .get(url)
      .then((response, ...other) => {
        setdatos(response.data.results);
        console.log(response.data.results);
      })
      .catch(() => {
        //toast.error('Ocurrió un error');
        console.log("error");
      });
  }, [id]);

  return (
    <>
      <p>Hola mundo api {id}</p>
      <ul>
        { Object.keys(datos).map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  );
}
