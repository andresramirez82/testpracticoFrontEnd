import { useEffect, useState } from "react";
import api from "Helper/Axios";

type data = {
  title: string;
}
export default function App(props: any) {
  const id = props.match.params.id;
  const [datos, setdatos] = useState([]);
  useEffect(() => {
    const query = `{
      “author”: {
      “name”: String
      “lastname”: String
      },
      categories: [String, String, String, ...],
      items: [
      {
      
      "id": String,
      "title": ${id},
      "price": {
      "currency": String,
      "amount": Number,
      "decimals": Number
      },
      “picture”: String,
      "condition": String,
      "free_shipping": Boolean
      },
      {...},
      {...},
      {...}
      ]
      }`;
    const url = `/search?q=${id}&limit=4`;
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
        { (datos).map( ({title, id})  => <li key={id}>{title}</li>)}
      </ul>
    </>
  );
}
