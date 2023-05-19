import React, { Component } from 'react';
import PropTypes from 'prop-types';
import loading from '../../src/assets/loading.svg'

class Loading extends Component {
    render() {
        return (
            <div className='text-center w-20'>
                <img src={loading} alt='loading' width={"80px"} />
            </div>
        );
    }
}

Loading.propTypes = {

};

export default Loading;