import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FaArrowRight, FaFan, FaHackerNews } from 'react-icons/fa';
import { Button, Container, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';

const ChefPrivet = () => {

    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);

    const allData = useLoaderData();
    // console.log(allData)
    const { chef_picture, chef_name, years_of_experience, number_of_recipes, likes, description, recipes, rating } = allData;
    return (
        <>

            <Container className='mt-4' >
                <Row xs={1} md={1} lg={1} className="g-4 mb-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={chef_picture} />
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

                </Row>

            </Container>

            {/* Group Card */}

            <h3 className='text-center mt-4 mb-4'>About a section displaying the information of the selected chef's recipes in a Card group</h3>

            {/* toast added */}

            <Toast show={showA} onClose={toggleShowA}>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Hurrah!!!</strong>
                    <small><FaHackerNews style={{fontSize:"2rem"}}></FaHackerNews></small>
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
                                    <p>Ingredients: {recipe.ingredients}</p>
                                    <p>Rating: {recipe.rating}</p>

                                </Card.Text>
                                <Card.Text>
                                    <p>{description.slice(0, 200)}...</p>
                                </Card.Text>

                                {/* <Col md={6} className="mb-2"> */}
                                <Button onClick={toggleShowA} className="mb-2">
                                    Favorite <FaFan></FaFan>
                                </Button>

                                {/* </Col> */}

                            </Card.Body>
                        </Card>
                    </div>)
                }
            </Row>
        </>
    );
};

export default ChefPrivet;