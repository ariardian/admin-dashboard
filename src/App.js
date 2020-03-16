import React from 'react';
import './App.scss';
import NavMain from './containers/admin/navmain';
import LandingPage from './containers/page/landingpage';
import Login from './containers/page/login'
import { Container, Row, Col } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavMain />
      <Container className="mt--7 test" fluid>
        <LandingPage />
      </Container>
    </React.Fragment>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <Login />;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
