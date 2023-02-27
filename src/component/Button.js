import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, name , onclick }) => {
    return (
        <button onClick ={ onclick} style={{ backgroundColor: color }} className='btn'>
            {name}
        </button>
    )
}

Button.defaultProps = {
    color: 'red',

}

Button.propTypes={
    color : PropTypes.string,
    name: PropTypes.string,
    onclick: PropTypes.func
}
export default Button

