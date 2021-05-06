import React from 'react';
import PropTypes from 'prop-types';
import InputForm from "../../../../components/form-controls/InputForm";

TodoForm.propTypes = {

};

function TodoForm(props) {
    const handleSubmitForm = (value) => {
        console.log(value)
    }
    return (
        <div>
            <InputForm handleSubmitForm/>
        </div>
    );
}

export default TodoForm;