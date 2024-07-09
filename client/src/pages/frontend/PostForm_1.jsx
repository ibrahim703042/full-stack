import { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import PostList from './PostList';

const UserForm = () => {
  const [post, setPost] = useState({
    nom: '',
    prenom: '',
    age: '',
    DateNaissance: '',
  });

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/posts/create',
        post
      );
      console.log(response.data);
      // Clear form after submission
      setPost({ nom: '', prenom: '', age: '', DateNaissance: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Add User</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formnom">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="nom"
                value={post.nom}
                onChange={handleChange}
                placeholder="Enter first name"
              />
            </Form.Group>

            <Form.Group controlId="formprenom">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="prenom"
                value={post.prenom}
                onChange={handleChange}
                placeholder="Enter last name"
              />
            </Form.Group>

            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={post.age}
                onChange={handleChange}
                placeholder="Enter age"
              />
            </Form.Group>

            <Form.Group controlId="formDateNaissance">
              <Form.Label>Birthday Date</Form.Label>
              <Form.Control
                type="date"
                name="DateNaissance"
                value={post.DateNaissance}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col>
          <PostList />
        </Col>
      </Row>
    </Container>
  );
};

export default UserForm;
