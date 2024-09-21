import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'
import { ContactContext } from './context/ContactContext'


import "./App.css"

import { STRONGRED } from './helpers/Colors'


import {
  Contacts,
  Contact,
  AddContact,
  EditContact,
  ViewContact,
  DeleteContact,
  Search,
  Navbar
} from "./component/index"
import { getAllGroups, getAllContact, createContact, deleteContact } from './services/ContactService'
import { BLONDE } from './helpers/Colors'

const App = () => {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [filtredContacts, setFliteredContacts] = useState([]);
  const [groups, setgroups] = useState([]);
  const [contact, setContact] = useState({});

  const [contactQuery, setcontactQuery] = useState({ text: "" });

  const navigate = useNavigate

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: contactsData } = await getAllContact();
        const { data: groupsData } = await getAllGroups();
        setContacts(contactsData);
        setFliteredContacts(contactsData);
        setgroups(groupsData);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [])

  const onContactChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const createContactForm = async (event) => {
    event.preventDefault();
    try {
      setLoading((prevLoading) =>
        !prevLoading
      )
      const { status, data } = await createContact(contact);
      if (status === 201) {
        const allContacts = [...contacts, data]

        setContacts(allContacts)
        filtredContacts(allContacts)

        setContact({})
        setLoading((prevLoading) =>
          !prevLoading
        )
        navigate("./contacts")
      }
    } catch (err) {
      console.log(err.message);
      setLoading((prevLoading) =>
        !prevLoading
      )
    }
  };

  const confirmDelete = (contactId, contactFullname) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div dir='rtl' style={{ backgroundColor: STRONGRED, border: '1 px solid ${BLONDE}', padding: "2rem", borderRadius: "1em" }}>
            <h1 style={{ color: STRONGRED }}>پاک کردن مخاطب</h1>
            <p> آیا از حذف {contactFullname}اطمینان دارید؟</p>
            <button onClick={() => {
              removeContact(contactId)
              onClose()
            }}>تائید</button>
            <button onClick={onClose}>خیر</button>
          </div>
        )
      }
    })
  };

  const removeContact = async (contactId) => {
    try {
      setLoading(true)
      const response = await deleteContact(contactId)
      if (response) {
        const { data: contactsData } = await getAllContact();
        setContact(contactsData);
        setFliteredContacts(contactsData);
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message);
      setLoading(false)
    }
  };

  const contactSearch = (event) => {
    setcontactQuery({ ...contactQuery, text: event.target.value })
    const allContacts = contacts.filter((contact) => {
      return contact.fullname.toLowerCase().includes(event.target.value.toLowerCase)
    })
    setFliteredContacts(allContacts);
  };
  return (
    <ContactContext.Provider value={{
      loading,
      setLoading,
      contact,
      setContact,
      contacts,
      filtredContacts,
      contactQuery,
      groups,
      onContactChange,
      deleteContact: confirmDelete,
      createContact: createContactForm,
      contactSearch
    }}>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to="./contacts" />} />

          <Route path='/contacts' element={<Contacts />} />

          <Route path='contacts/:contactId' element={<ViewContact />} />

          <Route path='/contacts/add' element={
            <AddContact createContactForm={createContactForm}/>} />

          <Route path='/contacts/edit/:contactId' element={<EditContact />}></Route>
        </Routes>
      </div>
    </ContactContext.Provider>
  )
}

export default App
