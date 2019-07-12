import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

const Form = (props) => {
  const {
    values,
    handleSubmit,
    validationSchema,
    MyForm,
    valuesSelect,
    valueButton,
    handleData,
    closeModal,
    disabled

  } = props
  return(
    <Formik
     initialValues={values}
     onSubmit={handleSubmit}
     validationSchema={validationSchema}
     children={props => <MyForm
       handleSubmit={props.handleSubmit}
       handleChange={props.handleChange}
       handleBlur={props.handleBlur}
       values={props.values}
       valuesSelect={valuesSelect}
       error={props.errors}
       touched={props.touched}
       valueButton={valueButton}
       setFieldValue={props.setFieldValue}
       handleData={handleData}
       closeModal={closeModal}
       disabled={disabled}
        />} />
  )
}

Form.propTypes = {
  valuesSelect: PropTypes.object,
  values: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  MyForm: PropTypes.func.isRequired,
  validationSchema: PropTypes.object.isRequired,
  valueButton: PropTypes.bool.isRequired,
  handleData: PropTypes.func,
  closeModal: PropTypes.func,
  disabled: PropTypes
};

Form.defaultProps = {
  valuesSelect: {id: 1, label: 'prueba'},
};

export default Form
