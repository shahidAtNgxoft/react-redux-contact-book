import React from 'react'
import Avatar from 'react-avatar'
import {Link} from 'react-router-dom'
import {deleteContact} from '../../redux/Actions'
import {useDispatch} from 'react-redux'
const Contact = ({contact,AllSelect}) => {
    const dispatch = useDispatch()
    const {name,phone,email,id} =contact;
    return (
        
           
            <tr>
            <td> <div className="custom-control custom-checkbox ">

                 <input checked={AllSelect} type="checkbox" className="" />
                 <lable className="custom-control-lable"></lable>
                 </div></td>
                 <td><Avatar className="mr-2" name={name} size="45" round={true}/></td>
            <td> {name}</td>
            <td>{phone}</td>
            <td>{email}</td>
           <td className="actions">
             <Link to={`contacts/edit/${id}`}>
            <span className="material-icons text-success ">edit</span>
            </Link>
          <Link to="#">
            <span className="material-icons text-danger" onClick={()=>dispatch(deleteContact(id))}>remove_circle</span>
            </Link>
            </td>
          </tr>
    )
}

export default Contact
