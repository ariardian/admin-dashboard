import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import _ from 'lodash';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      getfields: [
          {
              "c_rid": 1,
              "emp%20id": "DO130042",
              "emp%20no": "ID12080027",
              "position%20id": 4523,
              "name": "Aashka Valencia"
          },
          {
              "c_rid": 2,
              "emp%20id": "DO130011",
              "emp%20no": "ID12080005",
              "position%20id": 4514,
              "name": "Abdi Maru Wirajaya"
          },
          {
              "c_rid": 3,
              "emp%20id": "DO130040",
              "emp%20no": "ID12080025",
              "position%20id": 4533,
              "name": "Bernedictha Syahbana"
          },
          {
              "c_rid": 4,
              "emp%20id": "DO130032",
              "emp%20no": "ID12080017",
              "position%20id": 4517,
              "name": "Bruced Ex Willy"
          },
          {
              "c_rid": 5,
              "emp%20id": "DO130010",
              "emp%20no": "ID12080004",
              "position%20id": 4546,
              "name": "Katrina Allbright"
          },
          {
              "c_rid": 6,
              "emp%20id": "DO130008",
              "emp%20no": "ID12080002",
              "position%20id": 4512,
              "name": "Yves Wang"
          },
          {
              "c_rid": 7,
              "emp%20id": "DO130009",
              "emp%20no": "ID12080003",
              "position%20id": 4531,
              "name": "Teguh Jaya Widjatnako"
          },
          {
              "c_rid": 8,
              "emp%20id": "DO130039",
              "emp%20no": "ID12080024",
              "position%20id": 4548,
              "name": "Christine Atmadja"
          },
          {
              "c_rid": 9,
              "emp%20id": "DO130026",
              "emp%20no": "ID12080011",
              "position%20id": 4536,
              "name": "Christoper Paulo"
          },
          {
              "c_rid": 10,
              "emp%20id": "DO130011",
              "emp%20no": "ID12080005",
              "position%20id": 4514,
              "name": "Abdi Maru Wirajaya"
          },
          {
              "c_rid": 11,
              "emp%20id": "DO130030",
              "emp%20no": "ID12080015",
              "position%20id": 4534,
              "name": "Wahyudi Setioso"
          },
          {
              "c_rid": 12,
              "emp%20id": "DO130009",
              "emp%20no": "ID12080003",
              "position%20id": 4531,
              "name": "Teguh Jaya Widjatnako"
          },
          {
              "c_rid": 13,
              "emp%20id": "DO130034",
              "emp%20no": "ID12080019",
              "position%20id": 4544,
              "name": "Rahmani Ayu"
          },
          {
              "c_rid": 14,
              "emp%20id": "DO130037",
              "emp%20no": "ID12080022",
              "position%20id": 4508,
              "name": "Joana Chrishanty"
          },
          {
              "c_rid": 15,
              "emp%20id": "DO130012",
              "emp%20no": "ID12080006",
              "position%20id": 4542,
              "name": "Winarto Seventino"
          },
          {
              "c_rid": 16,
              "emp%20id": "DO130033",
              "emp%20no": "ID12080018",
              "position%20id": 4543,
              "name": "Syamsul Septiano"
          },
          {
              "c_rid": 17,
              "emp%20id": "DO130032",
              "emp%20no": "ID12080017",
              "position%20id": 4517,
              "name": "Bruced Ex Willy"
          },
          {
              "c_rid": 18,
              "emp%20id": "DO130039",
              "emp%20no": "ID12080024",
              "position%20id": 4548,
              "name": "Christine Atmadja"
          },
          {
              "c_rid": 19,
              "emp%20id": "DO130012",
              "emp%20no": "ID12080006",
              "position%20id": 4542,
              "name": "Winarto Seventino"
          },
          {
              "c_rid": 20,
              "emp%20id": "DO130028",
              "emp%20no": "ID12080013",
              "position%20id": 4528,
              "name": "Deisy Yolanda"
          },
          {
              "c_rid": 21,
              "emp%20id": "DO140096",
              "emp%20no": "ID140280054",
              "position%20id": 4518,
              "name": "Kesia Theresia"
          },
          {
              "c_rid": 22,
              "emp%20id": "DO140091",
              "emp%20no": "ID14010042",
              "position%20id": 4525,
              "name": "Alberta Tyas"
          },
          {
              "c_rid": 23,
              "emp%20id": "DO140098",
              "emp%20no": "ID14030049",
              "position%20id": 4534,
              "name": "Anggy Sofyan"
          },
          {
              "c_rid": 24,
              "emp%20id": "DO140099",
              "emp%20no": "ID14030050",
              "position%20id": 4534,
              "name": "Deni Bahtiar"
          },
          {
              "c_rid": 25,
              "emp%20id": "DO140121",
              "emp%20no": "ID14040064",
              "position%20id": 4553,
              "name": "Nur Khufido"
          },
          {
              "c_rid": 26,
              "emp%20id": "DO130042",
              "emp%20no": "ID13060042",
              "position%20id": 4523,
              "name": "Aashka Valencia"
          },
          {
              "c_rid": 27,
              "emp%20id": "DO140104",
              "emp%20no": "ID14030059",
              "position%20id": 4547,
              "name": "Ato San"
          },
          {
              "c_rid": 28,
              "emp%20id": "DO130026",
              "emp%20no": "ID05010011",
              "position%20id": 4536,
              "name": "Christoper Paulo"
          },
          {
              "c_rid": 29,
              "emp%20id": "DO130032",
              "emp%20no": "ID09040017",
              "position%20id": 4517,
              "name": "Bruced Ex Willy"
          },
          {
              "c_rid": 30,
              "emp%20id": "DO140085",
              "emp%20no": "ID11120027",
              "position%20id": 4547,
              "name": "Irene Caroline"
          },
          {
              "c_rid": 31,
              "emp%20id": "DO140087",
              "emp%20no": "ID13120046",
              "position%20id": 4522,
              "name": "Michael Hann"
          },
          {
              "c_rid": 32,
              "emp%20id": "DO130010",
              "emp%20no": "ID00090004",
              "position%20id": 4546,
              "name": "Katrina Allbright"
          },
          {
              "c_rid": 33,
              "emp%20id": "DO140182",
              "emp%20no": "ID14080068",
              "position%20id": 4548,
              "name": "Andry Maulana"
          },
          {
              "c_rid": 34,
              "emp%20id": "DO140103",
              "emp%20no": "ID12030032",
              "position%20id": 4543,
              "name": "Rizzaldi"
          },
          {
              "c_rid": 35,
              "emp%20id": "DO130032",
              "emp%20no": "ID09040017",
              "position%20id": 4517,
              "name": "Bruced Ex Willy"
          },
          {
              "c_rid": 36,
              "emp%20id": "DO150194",
              "emp%20no": "ID15010073",
              "position%20id": 4558,
              "name": "Syihab Al fatih"
          },
          {
              "c_rid": 37,
              "emp%20id": "DO140109",
              "emp%20no": "ID14030061",
              "position%20id": 4557,
              "name": "Veronica Corby"
          },
          {
              "c_rid": 38,
              "emp%20id": "DO140097",
              "emp%20no": "ID14030055",
              "position%20id": 4552,
              "name": "Christianto Wijaya"
          },
          {
              "c_rid": 39,
              "emp%20id": "DO130008",
              "emp%20no": "ID00060002",
              "position%20id": 4512,
              "name": "Yves Wang"
          },
          {
              "c_rid": 40,
              "emp%20id": "DO140182",
              "emp%20no": "ID14080068",
              "position%20id": 4548,
              "name": "Andry Maulana"
          },
          {
              "c_rid": 41,
              "emp%20id": "DO170222",
              "emp%20no": "ID17050094",
              "position%20id": 4529,
              "name": "Rafanzah Putria Nugroho"
          },
          {
              "c_rid": 42,
              "emp%20id": "DO130011",
              "emp%20no": "ID02110008",
              "position%20id": 4514,
              "name": "Abdi Maru Wirajaya"
          },
          {
              "c_rid": 43,
              "emp%20id": "DO130042",
              "emp%20no": "ID13060042",
              "position%20id": 4523,
              "name": "Aashka Valencia"
          },
          {
              "c_rid": 44,
              "emp%20id": "DO140104",
              "emp%20no": "ID14030059",
              "position%20id": 4547,
              "name": "Ato San"
          },
          {
              "c_rid": 45,
              "emp%20id": "DO190233",
              "emp%20no": "ID19030106",
              "position%20id": 4655,
              "name": "Cecep Laksita"
          },
          {
              "c_rid": 46,
              "emp%20id": "DO190239",
              "emp%20no": "ID19090111",
              "position%20id": 4522,
              "name": "Irvan Arivin Harvi"
          },
          {
              "c_rid": 47,
              "emp%20id": "DO190239",
              "emp%20no": "ID19090111",
              "position%20id": 4522,
              "name": "Irvan Arivin Harvi"
          }
      ],
      joindata :[
          {
              "id": "link-1580281005231",
              "nodeId": "3066ea3c-0968-4690-a7e4-3924e27412ec",
              "joinType": "and",
              "from": "",
              "to": "Emp Id",
              "operator": "=",
              "value": "",
              "selected": []
          },
          {
              "id": "link-1580281009472",
              "nodeId": "4f2ea441-fe2e-4607-b11d-c5f905f44008",
              "joinType": "and",
              "from": "emp_no",
              "to": "Emp No",
              "operator": "=",
              "value": "",
              "selected": []
          },
          {
              "id": "link-1580281012349",
              "nodeId": "f3f52874-8b8e-43b7-b65b-0cf5075ca3e1",
              "joinType": "and",
              "from": "position_id",
              "to": "Position Id",
              "operator": "=",
              "value": "",
              "selected": []
          },
          {
              "id": "link-1580281019624",
              "formatOpt":"group",
              "formatVal": "position%20id",
              "nodeId": "4f1c2a08-78eb-466d-9fa0-deaa1111de79",
              "joinType": "and",
              "from": "name",
              "to": "Name",
              "operator": "=",
              "value": "",
              "selected": []
          }
      ]    

    }
  }
filterdata = (a, b) =>{
    let _data = a;
    for(var i=0; i<b.length; i++){
      if(_.find(this.state.joindata, {nodeId: b[i]})){
        console.log(_.find(this.state.joindata, {nodeId: b[i]}))
      }
    }
    return _data
}
  componentDidMount(){
    let _selectOpr = ["4f1c2a08-78eb-466d-9fa0-deaa1111de79"];
    let hasil = this.filterdata(this.state.getfields, _selectOpr);
    console.log("hasil request = ",hasil)
  }
  render=()=>{
    return (
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Sign in with</small>
              </div>
              <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={''}
                    />
                  </span>
                  <span className="btn-inner--text">Github</span>
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={''}
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Create new account</small>
              </a>
            </Col>
          </Row>
        </Col>
    );
  }
}

export default Login;
