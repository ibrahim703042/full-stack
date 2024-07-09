import { Form, Card, CardHeader, CardBody, CardTitle } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import TextInput from '../../components/TextInput';
import FormButton from '../../components/FormButton';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('Required'),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          'http://localhost:3000/users/store',
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
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <h2>Login</h2>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Form onSubmit={formik.handleSubmit}>
            <TextInput
              label="First Name"
              type="text"
              name="email"
              className="mt-3"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.email}
              touched={formik.touched.email}
              placeholder="Enter email"
            />
            <TextInput
              label="Password"
              type="text"
              name="password"
              className="mt-3"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.password}
              touched={formik.touched.password}
              placeholder="Enter Password"
            />
            <FormButton variant="success" type="submit" className="mt-3">
              Submit
            </FormButton>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default LoginForm;
