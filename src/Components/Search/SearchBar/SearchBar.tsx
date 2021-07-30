import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "Styles/App.scss";

export default function Search(): JSX.Element {
  return (
    <div className="container-fluid">
      <div className="row searchRow">
        <div className="col"></div>
        <div className="col right"><img src="logo_ML.png"></img></div>
        <div className="col-9"><InputGroup className="mb-3 right">
            <FormControl
              placeholder="Nunca dejes de buscar"
              aria-label="Search"
              aria-describedby="Search"
            />
            <InputGroup.Text id="basic-addon2">
              <img src="ic_Search.png"></img>
            </InputGroup.Text>
          </InputGroup></div>
        <div className="col"></div>
      </div>
    
    </div>
  );
}
