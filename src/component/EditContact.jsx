import { useState, useEffect } from "react"
import { contactServices } from "../services/ContactService"
import { Link, useParams, useNavigate } from "react-router-dom"
import {
  getContact, getAllGroups, updateContact
} from "../services/ContactService"
import spinner from "../component/Spinner"

const EditContact = ({ forceRender, setForceRender, createContactForm }) => {
  const { contactId } = useParams()
  const navigate = useNavigate()

  const [state, setState] = useState({
    loading: false,
    contact: {
      fuulname: "",
      photo: "",
      mobile: "",
      email: "",
      job: "",
      group: "",
    },
    groups: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ ...state, loading: true });
        const { data: contactData } = await getContact(contactId);
        const { data: groupsData } = await getAllGroups();
        setState({
          ...state, loading: false,
          contact: contactData,
          groups: groupsData
        });
      } catch (err) {
        console.log(err);
        setState({ ...state, loading: false });
      }
    };
    fetchData();
  }, [])

  const setContactInfo = (event) => {
    setState({

      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: event.target.value,
      },
    });
  }

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      setState({ ...state, loading: true });
      const { data } = await updateContact(state.contact, contactId);
      setState({ ...state, loading: (false) });
      if (data) {
        setForceRender(!forceRender)
        navigate("./contacts")
      }
    } catch (err) {
      console.log(err);
      setState({ ...state, loading: false });
    }
  }

  const { loading, contact, groups } = state;
  return (
    <>
    <section className="viewcontact p-2">
      <div className="container">
        <div className="row">
          <div className="col">
            <p
              className="h4 fw-bold text-center">
              ویرایش مخاطب
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <form dir='rtl' onSubmit={createContactForm}>
                <div className="mb-2">
                  <input
                    type="text"
                    name="fullname"
                    value={contact.fullname}
                    onChange={setContactInfo}
                    className="form-control"
                    placeholder="نام و نام خانوادگی"
                    required={true} />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="fullname"
                    value={contact.photo}
                    onChange={setContactInfo}
                    className="form-control"
                    placeholder="عکس"
                    required={true}/>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="fullname"
                    value={contact.mobile}
                    onChange={setContactInfo}
                    className="form-control"
                    placeholder="تلفن"
                    required={true}/>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="fullname"
                    value={contact.email}
                    onChange={setContactInfo}
                    className="form-control"
                    placeholder="ایمیل"
                    required={true}/>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="fullname"
                    value={contact.job}
                    onChange={setContactInfo}
                    className="form-control"
                    placeholder="شغل"
                    required={true}/>
                </div>
                <div className="mb-2">
                  <select
                    name="group"
                    className="form-control"
                    required={true}>
                    <option value=""></option>
                    {groups.length > 0 &&
                      groups.map((group) => {
                        <option key={group.id} value={group.id}>
                          {group.name}
                        </option>
                      })
                    }
                  </select>
                </div>
                <div className="mx-2">
                  <input type="submit" className="btn" value="ویرایش مخاطب" />
                  <Link to={"/contacts"} className="btn mx-2">انصراف</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section >
        </>
      )}
 

export default EditContact