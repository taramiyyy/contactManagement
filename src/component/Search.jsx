import { useContext } from 'react';
import { ContactContext } from '../context/ContactContext';
import { COTTONRED, BLONDEY } from "../helpers/Colors"

const Search = () => {
  const {contactQuery, contactSearch} = useContext(ContactContext);
  return (
    <>
      <div className="input-group mx-2 w-75" dir="ltr">
        <span className="input-group-text" style={{ backgroundColor: COTTONRED, borderColor: COTTONRED }}><i className="fa fa-search"></i></span>
        <input
          dir="rtl"
          type="text"
          value={contactQuery.text}
          onChange={contactSearch}
          style={{ backgroundColor: BLONDEY, borderColor: COTTONRED }}
          className="form-control"
          placeholder="جستجوی مخاطبین...">
        </input>
      </div>
    </>
  )
}

export default Search