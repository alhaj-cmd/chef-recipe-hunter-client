import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaArrowRight } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Home = () => {

  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch("https://b7a10-chef-recipe-hunter-server.vercel.app/allData")
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch(error => console.error(error))
  }, []);

  // console.log(recipe);

  return (
    <div>
      {/* extra card */}
      <div className='mt-4 '>
        <h1 className='text-center'>Chef's Recipes</h1>
        <div className='row g-4'>
          <div className='col-md-6 align-items-center'>
            <Card className="bg-dark text-white mb-2  card-style text-center">
              {/* lazyload */}
              <LazyLoad >
                <Card.Img style={{ height: '40vh' }} src="recipe2.avif" alt="Card image" />
              </LazyLoad>

              <Card.ImgOverlay>
                <Card.Title>Mongo Pickle</Card.Title>
                <Card.Text>
                  Pickle made from green Mango
                </Card.Text>

              </Card.ImgOverlay>

            </Card>
            <Card className="bg-dark text-white card-style text-center">
              <LazyLoad >
                <Card.Img style={{ height: '40vh' }} src="recipe3.avif" alt="Card image" />
              </LazyLoad>
              <Card.ImgOverlay>
                <Card.Title>vegetables</Card.Title>
                <Card.Text>
                  Different green or other vegetables
                </Card.Text>
              </Card.ImgOverlay>

            </Card>
          </div>
          <div className='col-md-6'>
            <Card className="bg-dark text-white mb-2 card-style  text-center">
              <LazyLoad >
                <Card.Img style={{ height: '40vh' }} src="recipe5.avif" alt="Card image" />
              </LazyLoad>
              <Card.ImgOverlay>
                <Card.Title>vegetables</Card.Title>
                <Card.Text>
                  Different green or other vegetables
                </Card.Text>
              </Card.ImgOverlay>

            </Card>
            <Card className="bg-dark text-white card-style text-center">
              <LazyLoad >
                <Card.Img style={{ height: '40vh' }} src="recipe1.avif" alt="Card image" />
              </LazyLoad>
              <Card.ImgOverlay>
                <Card.Title>Carrot</Card.Title>
                <Card.Text>
                  The carrot is a biennial plant in the umbellifer family, Apiaceae. At first, it grows a rosette of leaves while building up the enlarged taproot.
                </Card.Text>

              </Card.ImgOverlay>

            </Card>

          </div>
        </div>
      </div>


      {/* 
      
      server site load data
      
      */}


      <Row xs={1} md={2} lg={3} className="g-4 mt-4">
        {
          recipe.map(rec =>
            <div key={rec.id}>


              <Col>
                <Card>
                  <LazyLoad >
                    <Card.Img style={{ height: '40vh' }} variant="top" src={rec.chef_picture} />
                  </LazyLoad>

                  <Card.Body>
                    <Card.Text className='d-flex justify-content-between'>
                      <h3> {rec.chef_name}</h3>
                      <p>Like :{rec.likes}</p>
                    </Card.Text>
                    <Card.Text className='d-flex justify-content-between'>
                      <p>Experience : {rec.years_of_experience}</p>
                      <p><FaArrowRight></FaArrowRight>{rec.number_of_recipes}N</p>

                    </Card.Text>

                    <Link to={`/allData/${rec.id}`}>
                      <Button variant="primary">View Recipes <FaArrowRight></FaArrowRight></Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>

            </div>
          )
        }
      </Row>


      {/* 
      
      Overvied section 
      
      
      */}


      <div className='container row g-4'>
        <h1 className='text-center'>Invitation</h1>
        <div className='col-md-6 '>
          <h1>We Invite You To The Restaurant.</h1>
          <p>
            “Restaurant”, meaning a business or organisation that offers food and drink to paying guests, is a word with a long history and many different interpretations. Restaurants of one kind or another are popular all over the world, generating huge amounts of economic activity.
          </p>
          <p>What Are The Five Types of Menus? The five types of menus most commonly used are a la carte menus, static menus, du jour menus, cycle menus, and fixed menus.</p>

        </div>
        <div className='col-md-6'>
          <LazyLoad>
          <img src="recipe4.avif" alt="" />
          </LazyLoad>
        </div>
      </div>





    </div>
  );
};

export default Home;