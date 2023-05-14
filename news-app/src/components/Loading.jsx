import React, { Component } from 'react';
import PropTypes from 'prop-types';
import loading from '../../src/assets/react.svg'

class Loading extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={loading} alt='loading'  />
            </div>
        );
    }
}

Loading.propTypes = {

};

export default Loading;