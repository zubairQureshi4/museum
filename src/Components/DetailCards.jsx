/* eslint-disable react/prop-types */
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './DetailCard.css'
function DetailCards({props, setItemDetail, setSingleData}) {
  return (
    <div className='divContainer'>
    
    <CardGroup className='CardImg'>
      <Card className='m-5 cardHeight'>
      {props?.primaryImage ? 
        <Card.Img variant="top" src={props?.primaryImage} />
      : <h1 className='text-center mt-3'>No Image</h1>}
        <Card.Body>
          <Card.Title>Title: {props?.title}</Card.Title>
          <Card.Title>Name: {props?.objectName}</Card.Title>
          <Card.Text>
            Credit Line: {props?.creditLine}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='bgColor'>
          <small className="text-muted">Object Date: {props?.objectDate} </small>
        <Button className='button-style' variant='danger' onClick={()=>{setItemDetail(false), setSingleData(props)}}>Open Furthur Details</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
    
  );
}

export default DetailCards;