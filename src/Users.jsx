import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Users() {

    const [first, setfirst] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/users').then((response) => {
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
    <img src={display.avatar} alt="" height={"200px"} />
    <Card.Body>
      <Card.Title>Name : {display.name}</Card.Title>
      <Card.Title>Email : {display.email}</Card.Title>
      <Card.Title>Role : {display.role}</Card.Title>
    </Card.Body>
  </Card>
))}
    </div>
  )
}

export default Users