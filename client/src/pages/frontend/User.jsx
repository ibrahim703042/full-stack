import { Container, Form, Card, Row } from 'react-bootstrap';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../components/TextInput';
import FormButton from '../../components/FormButton';
// import SelectInput from '../../components/SelectInput';

const Client = () => {
  const formik = useFormik(
    {
      initialValues: {
        fname: '',
        lname: '',
        email: '',
        password: '',
        birthDay: '',
        // gender: '',
      },

      validationSchema: Yup.object().shape({
        fname: Yup.string().max(15).required('Required'),
        lname: Yup.string().max(20).required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(8).max(120).required('Required'),
        birthDay: Yup.date().required('Required'),
        // gender: Yup.string().required('Required'),
      }),

      onSubmit: async (values, { resetForm }) => {
        try {
          const response = await axios.post(
            'http://localhost:3000/users/create',
            values
          );
          console.log(response.data);
          resetForm();
        } catch (error) {
          console.error(error);
        }
      },
    },
    []
  );

  return (
    <>
      <Container>
        {/* <Row>
          <Col> */}
        <Card>
          <Card.Header>
            <h2>User Form </h2>
          </Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              <Form onSubmit={formik.handleSubmit}>
                <Row className="mb-3">
                  <TextInput
                    label="First Name"
                    type="text"
                    name="fname"
                    className="mt-2"
                    value={formik.values.fname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.fname}
                    touched={formik.touched.fname}
                    placeholder="Enter first name"
                  />
                  <TextInput
                    label="Last Name"
                    type="text"
                    name="lname"
                    className="mt-2"
                    value={formik.values.lname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.lname}
                    touched={formik.touched.lname}
                    placeholder="Enter last name"
                  />
                </Row>
                <Row>
                  <TextInput
                    label="E-mail"
                    type="text"
                    name="email"
                    className="mt-2"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.email}
                    touched={formik.touched.email}
                    placeholder="example@yahoo.com"
                  />

                  <TextInput
                    label="Password"
                    type="text"
                    name="password"
                    className="mt-2"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.password}
                    touched={formik.touched.password}
                    placeholder="Enter password"
                  />
                </Row>

                {/* <SelectInput
                  controlId="formGridState"
                  label="Gender"
                  name="gender"
                  className="mt-2"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.gender}
                  touched={formik.touched.gender}
                  defaultValue="Choose..."
                  options={[
                    { value: '', label: 'Choose...' },
                    { value: 'Male', label: 'Male' },
                    { value: 'Female', label: 'Female' },
                  ]}
                /> */}
                <FormButton variant="dark" type="submit" className="mt-3">
                  Submit
                </FormButton>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
        {/* </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default Client;
