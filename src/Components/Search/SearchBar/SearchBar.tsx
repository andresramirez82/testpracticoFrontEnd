import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "Styles/App.scss";

export default function Search(): JSX.Element {
  return (
    <div className='container-fluid'>
      <Row className="searchRow">
        <Col xl={1} className='d-xl-block d-none'></Col>
        <Col xl={1}>
          <img src="logo_ML.png"></img>
        </Col>
        <Col sm={6} xl={9}>
          <InputGroup className="mb-3 right">
            <FormControl
              placeholder="Nunca dejes de buscas"
              aria-label="Search"
              aria-describedby="Search"
            />
            <InputGroup.Text id="basic-addon2">
              <img src="ic_Search.png"></img>
            </InputGroup.Text>
          </InputGroup>
        </Col>
        <Col xl={1} className='d-xl-block d-none'></Col>
      </Row>
    </div>
  );
}
