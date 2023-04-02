// import React from 'react'

// const Header = () => {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header
//! rafce


//! default props

// import React  from 'react'

// const Header = (props)=> {
//     return(
//       <div>ToDo {props.title}</div>
//     )
// }

// Header.defaultProps ={
//     title : 'defualt Heading'
// }

// export default Header


import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

//impt

const Header = ({ onAdd , isVisible,}) => {

    // const onclick = (e) => {
    //     console.log('click' + e)
    // };
    return (
        <div>
            {/* <p> {props.title + props.name}</p> */}
            <Button name={ isVisible ? 'Close' : 'Add'}  onclick={onAdd} color={isVisible ? "red" : "Green"}/>
        </div>

    )
}



// PropTypes.PropTypes = {
//     title: PropTypes.string.isRequired,
//     name: PropTypes.string,
// }



export default Header