import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addContact} from '../../redux/Actions'
import shortid from 'shortid'
import {useHistory} from 'react-router-dom'
const AddContact = () => {
    const history = useHistory()
     const dispatch = useDispatch();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phoneNo, setphoneNo] = useState("");


        const CreateContact= e =>{
            e.preventDefault();
            const New_Create={
                id:shortid.generate(),
                name:name,
                phone:phoneNo,
                email:email
            }
            // console.log(New_Create);
            // JSON.stringify(New_Create) 
            
            dispatch(addContact(New_Create));
            history.push('/')
            setname("");
            setemail("");
            setphoneNo("");
        }



    return (
        <div className="card border-0 shadow">
            <div className="card-header">
            Add a Contact
            </div>
            <div className="card-body">
            <form onSubmit={(e)=>CreateContact(e)}>
                <div className="form-group">
                <input 
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e)=>setname(e.target.value)} 
                />
                </div>
                <div className="form-group">
                <input 
                type="text"
                className="form-control"
                placeholder="Enter Your Phone"
                value={phoneNo}
                onChange={(e)=>setphoneNo(e.target.value)}
                />
                </div>
                <div className="form-group">
                <input 
                type="text"
                className="form-control"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                />
                </div>
                <button className="btn btn-primary" type="Submit">Create Contact</button>
            </form>
            </div>
        </div>
    )
}

export default AddContact
