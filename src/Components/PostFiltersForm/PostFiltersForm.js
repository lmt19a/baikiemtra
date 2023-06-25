// import React, { useRef, useState } from 'react'
// import PropTypes from 'prop-types'
// import { Form, Input } from 'antd'

// PostFitlersForm.propTypes = {
//     onSubmit: PropTypes.func // poprs là onsubmit => 1 props type function là ptf
// }

// PostFitlersForm.defaultProps = {
//     onSubmit: null
// }
// function PostFitlersForm(props) {
//     const { onSubmit, searchTerm, setSearchTerm } = props
//     const typingTimeoutRef = useRef(null)
//     const handleSearchTermChange = (e) => {
//         const value = e.target.value
//         setSearchTerm(e.target.value)
//         // console.log(searchTerm);
//         if (!onSubmit) return

//         if (typingTimeoutRef.current) {
//             clearTimeout(typingTimeoutRef.current)
//         }
//         typingTimeoutRef.current = setTimeout(() => {

//             const formValues = {
//                 data: value
//             }
//             onSubmit(formValues)
//         }, 1000)
//     }
//     return (
//         <Form>
//             <Input
//                 type='text'
//                 value={searchTerm}
//                 onChange={handleSearchTermChange}
//             />
//         </Form>
//     )
// }

// export default PostFitlersForm
