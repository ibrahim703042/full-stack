import { Form, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SelectInput = ({
  label,
  defaultValue,
  options,
  name,
  value,
  onChange,
  onBlur,
  error,
  className,
  touched,
  ...props
}) => {
  return (
    <Form.Group as={Col} controlId={`control${name}`}>
      <div className={className}>
        <Form.Label>{label}</Form.Label>
        <Form.Select
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          isInvalid={touched && error}
          defaultValue={defaultValue}
          {...props}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
        {touched && error ? (
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        ) : null}
      </div>
    </Form.Group>
  );
};

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  touched: PropTypes.bool,
  className: PropTypes.string,
};

SelectInput.defaultProps = {
  className: '',
  defaultValue: 'Choose...',
  onBlur: () => {},
  error: '',
  touched: false,
};

export default SelectInput;
