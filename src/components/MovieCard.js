import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

const MovieCard = (props) => {
return (

    <Link to ={`/movieinfo/${props.movies.title}`}>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.movies.posterURL} />
    <Card.Body>
        <Card.Title> {props.movies.title}</Card.Title>
        <Card.Text>
        {props.movies.description}
        </Card.Text>
        
    </Card.Body>
    </Card>
    </Link>
)
}

export default MovieCard