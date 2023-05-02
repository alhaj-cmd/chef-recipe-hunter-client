import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {

  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allData")
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch(error => console.error(error))
  }, []);

  // console.log(recipe);

  return (
    <div>
       <Row xs={1} md={2} lg={3} className="g-4 mt-4">
      {
        recipe.map(rec =>
          <div key={rec.id}>
           

              <Col>
                <Card>
                  <Card.Img style={{ height: '40vh' }} variant="top" src={rec.chef_picture} />
                  <Card.Body>
                    <Card.Text className='d-flex justify-content-between'>
                     <h3> {rec.chef_name}</h3>
                     <p>Like :{rec.likes}</p>
                     </Card.Text>
                    <Card.Text className='d-flex justify-content-between'>
                     <p>Experience : {rec.years_of_experience}</p>
                     <p><FaArrowRight></FaArrowRight>{rec.number_of_recipes}N</p>
                     
                    </Card.Text>
                    <Button  variant="primary">View Recipes <FaArrowRight></FaArrowRight></Button>
                  </Card.Body>
                </Card>
              </Col>

          </div>
        )
      }
      </Row>






    </div>
  );
};

export default Home;