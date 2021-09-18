import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import NewDescription1 from '../../Components/NewDescription'

function NewDescription(props) {
    return <div>
        <NewDescription1/> 
        {/* NewDescription1 để k bị trùng với trên fuct component */}
    </div>
}

NewDescription.propTypes = {};

export default NewDescription;
