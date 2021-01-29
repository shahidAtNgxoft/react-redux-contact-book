import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getContact,updateContact} from '../../redux/Actions'
import {useParams} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
const EditContact = () => {
    let {id} =useParams() ;

    const dispatch = useDispatch();
    const contact = useSelector(state=>state.Contacts.contact)
    const history =useHistory();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphoneNo] = useState("");


        
        useEffect(() => {
            
            if(contact != null){
                setname(contact.name);
                setphoneNo(contact.phone);
                setemail(contact.email);
            }
            
            dispatch(getContact(id));

        },[contact]); 


        const onUpdateContact = (e)=>{
            e.preventDefault( );
            const Update_Contact = Object.assign(contact,{name:name,phone:phone,email:email});
      
      dispatch(updateContact(Update_Contact));
      
      history.push("/")
      
            // const    update_contact = {
        //         name:name,
        //         phone:phone,
        //         email:email
        //     }
        //     console.log(update_contact)
            // console.log(Update_Contact)
            // setname("");
            // setemail("");
            // setphoneNo("");
        }

    return (
        <div className="card border-0 shadow">
            <div className="card-header">
            Add a Contact
            </div>
            <div className="card-body">
            <form  onSubmit={(e)=>onUpdateContact(e)}>
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
                value={phone}
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
                <button className="btn btn-warning" type="Submit">Update Contact</button>
            </form>
            </div>
        </div>
    )
}

export default EditContact
