/* eslint-disable react/prop-types */
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './index.css'
function DetailCards({props}) {
  return (
    <CardGroup className=''>
      <Card className='m-5'>
        <Card.Img variant="top" src={props?.primaryImage} />
        <Card.Body>
          <Card.Title>artistNationality {props?.artistNationality}</Card.Title>
          <Card.Title>Title {props?.name}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
        <Button className='button-style mb-4'>Go to Details</Button>
      </Card>
    </CardGroup>
    
  );
}

export default DetailCards;