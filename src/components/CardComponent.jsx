import React from 'react';
// import  {Card} from 'react-bootstrap';
// import {Container, Card} from 'semantic-ui-react';
import {Container, Card} from 'react-bootstrap';
// import holder from '../assets/holder.png';

class CardComponent extends React.Component {
  render() {
    return (
      <Container>
        <Card style={{backgroundColor: 'grey', width: '18rem'}}>
          {/* <Card.Img variant='top' src={holder}/> */}
          Akeem
        </Card>
      </Container>
    );
  }
}

export default CardComponent;
