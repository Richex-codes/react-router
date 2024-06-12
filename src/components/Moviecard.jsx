import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({id, title, posterUrl, rating}) => {

  const navigate = useNavigate();

    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={posterUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {rating}
        </Card.Text>
        <Button variant="primary" onClick={() => navigate(`/movies/${id}`)}>Watch Trailer...</Button>
      </Card.Body>
    </Card>
    )
}

export default MovieCard;




