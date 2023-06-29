import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Form, Field, SubmitBtn, Icon } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={({ query }, { resetForm }) => {
        onSubmit(query);
        resetForm();
      }}
    >
      <Form>
        <SubmitBtn type="submit">
          <Icon />
        </SubmitBtn>

        <Field
          type="text"
          name="query"
          title="Please enter movie name."
          placeholder="Movie name"
          required
        />
      </Form>
    </Formik>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
