import { useState, useContext } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "Styles/App.scss";
import { useHistory } from "react-router-dom";
import { SerachBarProps } from "Models/Models";
var encodeUrl = require('encodeurl');




export default function Search(props: SerachBarProps): JSX.Element {
  const [text, settext] = useState(props.text);
  const history = useHistory();

  const Enter = (event: any) => {
    if (event.key === 'Enter') {
      clickSearch();
    }
  };

  const clickSearch = () => {
    history.push("/items/" + encodeUrl(text));
    //setSearchText(text);
  }
  return (
    <div className="container-fluid">
      <div className="row searchRow">
        <div className="col"></div>
        <div className="col right">
          <img src="/logo_ML.png" alt="Logo MeLi"></img>
        </div>
        <div className="col-9">
          <InputGroup className="mb-3 right">
            <FormControl
              placeholder="Nunca dejes de buscar"
              aria-label="Search"
              aria-describedby="Search"
              onChange={(event) => settext(event.target.value)}
              value={text}
              onKeyPress={Enter}
            />
            <InputGroup.Text id="basic-addon2" onClick={clickSearch}>
              <img src="/ic_Search.png" alt="Search Icon"></img>
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
