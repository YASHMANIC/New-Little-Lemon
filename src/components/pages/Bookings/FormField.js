
const FormField = ({ children, label, htmlFor, hasError, errorMessage }) => {
  return (
    <div className="form-field">
      <label htmlFor={htmlFor}>{label}</label>
      {/* Children is for the input, do not have typo on it */}
      {children}
      {hasError && errorMessage ? 
        <p data-testid="error-message">{errorMessage}</p> : null}
    </div>
  );
};

export default FormField;
