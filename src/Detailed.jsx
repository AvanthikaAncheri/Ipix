import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function Detailed() {

    const [first, setfirst] = useState([])
    const navigate = useNavigate();
    const {_id} = useParams()

    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/${_id}`).then((response) => {
            console.log(response.data); 
            setfirst(response.data);
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);
  return (
    <div>
         {first.map((display, index) => (
  <Card key={display._id || index} style={{ width: '18rem', display: 'inline-flex', marginLeft: '20px', marginTop: "20px" }}>
    <img src={display.images[0]} alt="" height={"200px"} />
    <Card.Body>
      <Card.Title>{display.title}</Card.Title>
      <Button variant="dark" onClick={() => navigate('/detailedProduct')}>Add to Cart</Button>
    </Card.Body>
  </Card>
))}
    </div>
  )
}

export default Detailed