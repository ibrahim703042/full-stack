import { Button as BootstrapButton } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FormButton = ({ variant, className, children, ...props }) => {
  return (
    <BootstrapButton variant={variant} className={className} {...props}>
      {children}
    </BootstrapButton>
  );
};

FormButton.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

FormButton.defaultProps = {
  variant: 'primary',
  className: '',
};

export default FormButton;
