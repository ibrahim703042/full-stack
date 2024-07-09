import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import PostList from './PostList';

const PostForm_2 = () => {
  const formik = useFormik({
    initialValues: {
      nom: '',
      prenom: '',
      age: '',
      DateNaissance: '',
    },
    validationSchema: Yup.object({
      nom: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      prenom: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      age: Yup.number()
        .min(0, 'Age must be greater than 0')
        .max(120, 'Age must be 120 or less')
        .required('Required'),
      DateNaissance: Yup.date().required('Required'),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          'http://localhost:3000/posts/create',
          values
        );
        console.log(response.data);
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Add User</h2>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="formnom">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="nom"
                value={formik.values.nom}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.nom && formik.errors.nom}
                placeholder="Enter first name"
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.nom}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formprenom">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="prenom"
                value={formik.values.prenom}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.prenom && formik.errors.prenom}
                placeholder="Enter last name"
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.prenom}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={formik.values.age}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.age && formik.errors.age}
                placeholder="Enter age"
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.age}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formDateNaissance">
              <Form.Label>Birthday Date</Form.Label>
              <Form.Control
                type="date"
                name="DateNaissance"
                value={formik.values.DateNaissance}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.DateNaissance && formik.errors.DateNaissance
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.DateNaissance}
              </Form.Control.Feedback>
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

export default PostForm_2;
