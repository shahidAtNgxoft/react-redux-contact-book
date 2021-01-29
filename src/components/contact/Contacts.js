import React ,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Contact from './Contact'
import {selectAllContact,clearAllContact,deleteAllContact} from '../../redux/Actions'

const Contacts = () => {
                const dispatch = useDispatch();
                  const [AllSelect, setAllSelect] = useState(false)
                    const contacts = useSelector  ((state) => state.Contacts.Contact);
                  const selectedContacts =  useSelector  ((state) => state.Contacts.selectedContacts);
                    useEffect(()=>{
                    if(AllSelect){
                         dispatch(selectAllContact(contacts.map(contact=>contact.id)))
                    }else{
                      dispatch(clearAllContact())
                    }
                  },[AllSelect] )
    return (
        <>
            <div className="container">

  
  {selectedContacts.length > 0 ?
  
  (<button className="btn btn-danger mb-3" onClick={()=>dispatch(deleteAllContact())}>Deleted All</button>):
  null}
  
  <table className="table shadow table-striped">
    <thead className="bg-danger text-white">
      <tr> 
          <th >
              
             <div className="custom-control custom-checkbox ">
                 <input id="AllSelect" type="checkbox" value={AllSelect} onClick={()=>setAllSelect(!AllSelect)} />
                 <lable htmlfor="AllSelect" className="custom-control-lable"></lable>
                 </div> 
          </th>
          <th></th>
        <th>Name</th>
        <th>Phone No</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        contacts.map(contacts =>
          <Contact contact={contacts} key={contacts.id} AllSelect={AllSelect}/>
          )
      }
      
    </tbody>
  </table>
</div>

        </>
    )
}

export default Contacts
