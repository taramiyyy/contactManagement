import { useContext } from 'react'

import Contact from './Contact'
import Spinner from './Spinner'

import { ContactContext } from '../context/ContactContext'

import { BLONDEY } from "../helpers/Colors"
import { Link } from 'react-router-dom'

const Contacts = () => {
    const { contacts, loading, deleteContact } = useContext(ContactContext)
    return (
        <div>
            <section>
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3" dir="rtl">
                                    <Link to={"add"} className="btn mx-2 mt-2" dir="rtl" style={{ backgroundColor: BLONDEY }}>
                                        <i className="fa fa-plus"></i>
                                        افزودن مخاطب</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container" dir="rtl">
                <div className="row">
                    {
                        loading ? <Spinner /> :
                            contacts.length > 0 ? contacts.map(c => (
                                <Contact key={c.id} contacts={c}
                                    deleteContact={() => deleteContact(c.id, c.fullname)} />
                            )) : (
                                <div className="text-warning text-center"> <i class="fa fa-warning"></i>
                                    مخاطبی یافت نشد <i class="fa fa-warning"></i>
                                </div>
                            )
                    }
                </div>
            </section>
        </div>
    )
}

export default Contacts