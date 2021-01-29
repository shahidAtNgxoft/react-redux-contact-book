// import React from 'react'

// export const  Actions = ({contact}) => {
//     return ({
       
//             type:"Create_Contact",
//              payload:contact,
//         } )
// }

// export default Actions
// const CREATE_CONTACT = "CREATE_CONTACT"
export const addContact = (contact)=>{
    return{
      type:"CREATE_CONTACT",
      payload:contact,

    }
}

//get Contact for edit
export const getContact=(id)=>{
    return{
        type:"GET_CONTACT",
        payload:id,
    }
}
//delete contact
export const deleteContact=(id)=>{
    return{
        type:"DELETE_CONTACT",
        payload:id,
    }
}

//delete contact
export const selectAllContact=(id)=>{
    return{
        type:"SELECT_CONTACT",
        payload:id,
    }
}
//clear all contact
export const clearAllContact = () => ({
    type: "CLEAR_CONTACT",
})

//delete all contact
export const deleteAllContact = () => ({
    type: "DELETE_ALL_CONTACT",
})
//Update edit data
export const updateContact = (contact) => ({
    type: "UPDATE_CONTACT",
    payload:contact,
})
