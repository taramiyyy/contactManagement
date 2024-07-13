import React from 'react'
import {Routes, Route} from "react-router-dom"
import { useState } from 'react'
import { Navigate } from "react-router-dom";

import {
  Contacts,
  Contact,
  AddContact,
  EditContact,
  ViewContact,
  DeleteContact,
  Search,
  Navbar,
  Spinner
}
  from './component/index'

const App = () => {
  const [getContacts, setContact] = useState([])
  const [loading, setLoading] = useState (false)
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to="./contacts" />} />
        <Route path='/contacts' element={<Contacts contacts={getContacts} loading = {loading}/>} />
        <Route path='/contacts:contactId' element={<Contacts />} />
        <Route path='/contacts/add' element={<AddContact />} />
        <Route path='/contacts/edit/:contactId' element={<EditContact />} />
      </Routes>
    </div>
  )
}

export default App
