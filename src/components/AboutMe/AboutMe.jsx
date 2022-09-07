import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function AboutMe() {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>About Ryan</Card.Title>
        <Card.Text>
        Well hello there and thanks for checking out my portfolio. I am a full stack developer and recent graduate of the General Assembly Software Engineering Immersive program. 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </>
  );
}
