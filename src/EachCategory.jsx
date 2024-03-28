import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function EachCategory() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const { categoryID } = useParams();

    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/categories/${categoryID}/products`)
            .then((response) => {
                console.log('API response:', response.data);
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [categoryID]);

    console.log('Products:', products);

    return (
        <div>
            {products.map((product, index) => (
                <Card key={product._id || index} style={{ width: '18rem', display: 'inline-flex', marginLeft: '20px', marginTop: "20px" }}>
                    <img src={product.image} alt="" height={"200px"} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Button variant="dark" onClick={() => navigate('/add')}>Add to Cart</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default EachCategory;
