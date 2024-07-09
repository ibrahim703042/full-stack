import PropTypes from 'prop-types';
import { Col, Form } from 'react-bootstrap';

const TextInput = ({
  label,
  type,
  name,
  value,
  className,
  onChange,
  onBlur,
  error,
  touched,
  placeholder,
  ...props
}) => (
  <Form.Group as={Col} controlId={`form${name}`}>
    <div className={className}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isInvalid={touched && !!error}
        placeholder={placeholder}
        {...props}
      />
      {touched && error ? (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      ) : null}
    </div>
  </Form.Group>
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  touched: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

// TextInput.defaultProps = {
//   className: '',
//   onBlur: () => {},
//   error: '',
//   touched: false,
// };

export default TextInput;
