import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Form, Container, Row, Col } from 'react-bootstrap';
import PostList from './PostList';
import TextInput from '../../components/TextInput';
import FormButton from '../../components/FormButton';

const UserForm = () => {
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
          <h2>Create Post</h2>
          <Form onSubmit={formik.handleSubmit}>
            <TextInput
              label="First Name"
              type="text"
              name="nom"
              className="mt-2"
              value={formik.values.nom}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.nom}
              touched={formik.touched.nom}
              placeholder="Enter first name"
            />
            <TextInput
              label="Last Name"
              type="text"
              name="prenom"
              className="mt-2"
              value={formik.values.prenom}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.prenom}
              touched={formik.touched.prenom}
              placeholder="Enter last name"
            />
            <TextInput
              label="Age"
              type="number"
              name="age"
              className="mt-2"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.age}
              touched={formik.touched.age}
              placeholder="Enter age"
            />
            <TextInput
              label="Birthday Date"
              type="date"
              name="DateNaissance"
              className="mt-2"
              value={formik.values.DateNaissance}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.DateNaissance}
              touched={formik.touched.DateNaissance}
            />
            <FormButton variant="dark" type="submit" className="mt-3">
              Submit
            </FormButton>
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
