import React from 'react'
import './style/App.css';
import Navbar from './components/Navbar';
import Contacts from './components/contact/Contacts';
import EditContact from './components/contact/EditContact'
import AddContact from './components/contact/AddContact'
import { } from 'react-redux'
import store from  './redux/store'
import { Provider } from 'react-redux'
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Provider store={store}>
   <Router>
   <div className="App">
     <Navbar/>
     <div className="container">
       <div className="py-3">
        <Switch>
      <Route exact path="/" component={Contacts} />
      <Route exact path="/contacts/addcontact" component={AddContact} />
      <Route exact path="/contacts/edit/:id" component={EditContact} />
        </Switch>
       </div>
     </div>
    </div>
   </Router>
    </Provider>
  );
}

export default App;
