import { Container, Form, Card } from 'react-bootstrap';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import TextInput from '../../components/TextInput';
import FormButton from '../../components/FormButton';
import SelectInput from '../../components/SelectInput';

const Role = () => {
  const formik = useFormik(
    {
      initialValues: {
        name: '',
      },

      validationSchema: Yup.object().shape({
        name: Yup.string().max(15).required('Required'),
      }),

      onSubmit: async (values, { resetForm }) => {
        try {
          const response = await axios.post(
            'http://localhost:3000/roles/create',
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
            <h2>Role Form </h2>
          </Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              <Form onSubmit={formik.handleSubmit}>
                <SelectInput
                  label="Role"
                  name="name"
                  className="mb-3"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.name}
                  touched={formik.touched.name}
                  defaultValue="Choose..."
                  options={[
                    { value: '', label: 'Choose...' },
                    { value: 'User', label: 'User' },
                    { value: 'Admin', label: 'Admin' },
                    { value: 'Super admin', label: 'Super admin' },
                  ]}
                />
                {/* <TextInput
                  label="Description"
                  type="text"
                  name="description"
                  className="mb-3"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.description}
                  touched={formik.touched.description}
                  placeholder="Message..."
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

export default Role;
