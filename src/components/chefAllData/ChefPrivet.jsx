import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FaArrowRight, FaFan, FaHackerNews, FaStar } from 'react-icons/fa';
import { Button, Container, Row } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import LazyLoad from 'react-lazy-load';

const ChefPrivet = ({ favorite}) => {
   
        const [isFavorite, setIsFavorite] = useState(favorite);
        const [showToast, setShowToast] = useState(false);
      
    
        const handleClickFavorite = () => {
            setIsFavorite(true);
            setShowToast(true);
    
        };


    const allData = useLoaderData();
    // console.log(allData)
    const { chef_picture, chef_name, years_of_experience, number_of_recipes, likes, description, recipes, rating } = allData;
    return (
        <>

            <Container className='mt-4' >
                    <Col>
                        <Card className='h-50 m-auto w-50'>
                            {/* lazyload */}
                            <LazyLoad>

                            <Card.Img  variant="top" src={chef_picture} />

                            </LazyLoad>
                            <Card.Body>
                                <Card.Text className='d-flex justify-content-between'>
                                    <h3> {chef_name}</h3>
                                    <p>Like :{likes}</p>
                                </Card.Text>
                                <Card.Text className='d-flex justify-content-between'>
                                    <p>Experience : {years_of_experience}</p>
                                    <p><FaArrowRight></FaArrowRight>{number_of_recipes}</p>

                                </Card.Text>
                                <Card.Text>
                                    <p>{description.slice(0, 200)}...</p>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>

                {/* </Row> */}

            </Container>

            {/* Group Card */}

            <h3 className='text-center mt-4 mb-4'>About a section displaying the information of the selected chef's recipes in a Card group</h3>

            {/* toast added */}
            <Toast
                show={showToast}
                onClose={() => setShowToast(false)}
            >
                 <Toast.Header>
                 <strong className="me-auto">Hurrah!!!</strong>
                    <small><FaHackerNews style={{ fontSize: "2rem" }}></FaHackerNews></small>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>

            <Row xs={1} md={3} lg={3} className="g-4 p-2 h-100 mb-4">
                {
                    recipes.map(recipe => <div
                        key={recipe.id}

                    >

                        <Card className='h-100'>
                            <Card.Body>
                                <Card.Text>
                                    <h3> {recipe.recipe_name}</h3>
                                    <p>{recipe.cooking_method}</p>
                                </Card.Text>
                                <Card.Text>

                                    {recipe.ingredients.map(ins => <li key={ins.id}>
                                        {ins}
                                    </li>)}

                                </Card.Text>
                                <Card.Text>
                                    <p>{description.slice(0, 200)}...</p>
                                    <p><FaStar></FaStar> {recipe.rating}</p>
                                </Card.Text>
                                {/* Favorite button */}

                                <Button
                                    
                                    disabled={isFavorite}
                                    onClick={handleClickFavorite}
                                >
                                    {isFavorite ? "Favorite" : "Favorite"}
                                </Button>

                            </Card.Body>
                        </Card>
                    </div>)
                }
            </Row>
        </>
    );
};

export default ChefPrivet;