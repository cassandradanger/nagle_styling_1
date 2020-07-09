import React, {Component} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import Card from 'react-bootstrap/Card'

import {Container, Row, Col, Jumbotron, Card as BSCard} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Jumbotron fluid>
            <Container>
            <h1>Casie's App!</h1>
            </Container>
          </Jumbotron>
        </header>
        <main>
          <BSCard body id="intro">
            Lorem Ipsum is the single greatest threat. 
            We are not - we are not keeping up with other websites. 
            Lorem Ipsum best not make any more threats to your website. 
            It will be met with fire and fury like the world has never seen.
            Does everybody know that pig named Lorem Ipsum? 
            An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.
          </BSCard>
          <Container>
            <Row>
              <Col lg={4}>
                <div id="form">
                  <TextField id="outlined-basic" label="Title" variant="outlined" />
                  <br/>
                  <TextField id="outlined-basic" label="Description" variant="outlined" />
                  <br/>
                  <TextField id="outlined-basic" label="Image URL" variant="outlined" />
                  <br/>
                  <Button variant="contained" color="primary">Submit</Button>
                </div>
              </Col>
              <Col lg={8}>
                <ul>
                  <li><Card variant="outlined"><img src="http://www.fillmurray.com/200/250"/></Card></li>
                  <li><Card variant="outlined"><img src="http://www.fillmurray.com/300/250"/></Card></li>
                  <li><Card variant="outlined"><img src="http://www.fillmurray.com/50/50"/></Card></li>
                  <li><Card variant="outlined"><img src="http://www.fillmurray.com/200/100"/></Card></li>
                  <li><Card variant="outlined"><img src="http://www.fillmurray.com/50/100"/></Card></li>
                  <li><Card variant="outlined"><img src="http://www.fillmurray.com/100/100"/></Card></li>
                </ul>
              </Col>
            </Row>
          </Container>
          </main>
          <footer id="footer">
            <p id="footerCopy">
              Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents.
            </p>
            <div id="contactInfo">
              <p>Casie Siekman</p>
              <p>@CassandraDanger</p>
              <p>www.cassandradanger.com</p>
            </div>
          </footer>
      </div>
    );
  }
}

export default App;
