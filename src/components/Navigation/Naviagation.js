import './Navigation.css';
import { Button, Col, Container, FloatingLabel, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { useState } from 'react';

const Naviagation = () => {
    const [category, setCategory] = useState([]);
    const [parentCategory, setParentCategory] = useState("");
    const [first, setFirst] = useState(["Any Page", "Another Page"]);
    const [second, setSecond] = useState(["Any Page", "Another Page"]);
    const [third, setThird] = useState(["Any Page", "Another Page"]);


    // Get New Category Value
    const getCategory = e => {
        setCategory(e.target.value);
    }

    //Get Parent Category 
    const getParentCategory = e => {
        setParentCategory(e.target.value);
    }

    //Submit Category
    const submitCategory = e => {
        e.preventDefault();
        if (parentCategory === "firstLevel") {
            setFirst([...first, category])
            alert('Menu Added Done');
        } else if (parentCategory === "secondLevel") {
            setSecond([...second, category])
            alert('Menu Added Done');
        } else {
            setThird([...third, category])
            alert('Menu Added Done');
        };
    }
    return (
        //Header part
        <Container>
            <Row>
                <Col md={9}>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home Page</Nav.Link>
                                <NavDropdown className='parent-dropdown' title="Left dropdown" id="basic-nav-dropdown">
                                    {
                                        first.map((category) =>
                                            <NavDropdown.Item href="#action/3.1">{category}</NavDropdown.Item>)
                                    }
                                    <NavDropdown title="Second Level" id="basic-nav-dropdown">
                                        <div className='second-dropdown'>
                                            {
                                                second.map(category => <NavDropdown.Item href="#action/3.1">{category}</NavDropdown.Item>)
                                            }
                                            <NavDropdown title="Third Level" id="basic-nav-dropdown">
                                                <div className="third-dropdown">
                                                    {
                                                        third.map(category => <NavDropdown.Item href="#action/3.1">{category}</NavDropdown.Item>)
                                                    }
                                                </div>
                                            </NavDropdown>
                                        </div>
                                    </NavDropdown>
                                </NavDropdown>
                                <NavDropdown className='parent-dropdown' title="Mega Menu" id="basic-nav-dropdown">
                                </NavDropdown>
                                <Nav.Link href="#home">Any Page</Nav.Link>
                                <NavDropdown className='parent-dropdown' title="Right dropdown" id="basic-nav-dropdown">

                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>

                {/* Add Category Part */}


                <Col md={3} className='mt-5 border-1'>
                    <div className='form-wrapper'>
                        <h3>Add A Category</h3>
                        <form onSubmit={submitCategory}>
                            <Row className="mb-3">
                                <Col>
                                    <FloatingLabel controlId="floatingInputGrid" label="Category Name">
                                        <Form.Control onBlur={getCategory} type="text" placeholder="category name" name="category" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FloatingLabel controlId="floatingSelectGrid">
                                        <Form.Select onBlur={getParentCategory} aria-label="Floating label select example">
                                            <option>Select Category</option>
                                            <option value="firstLevel">First Level</option>
                                            <option value="secondLevel">Second Level</option>
                                            <option value="thirdLevel">Third Level</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Button className='mt-4' type='submit'>Add Category</Button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Naviagation;
