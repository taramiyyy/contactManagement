import { useContext } from 'react';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import { ContactContext } from '../context/ContactContext';

const AddContact = (createContactForm) => {
  const { loading, contact, onContactChange, groups, createContact} = useContext(ContactContext)
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="p-3">
            <img
              src="https://cdn-icons-png.freepik.com/512/13219/13219269.png"
              height="400px"
              style={{
                position: "absolute",
                zIndex: "-1",
                top: "130px",
                right: "100px",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col">
                  <p
                    className="h4 fw-bold text-center"
                  >
                    ساخت مخاطب جدید
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
                          onChange={onContactChange}
                          className="form-control"
                          placeholder="نام و نام خانوادگی"
                          required={true}
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          type="text"
                          name="photo"
                          value={contact.photo}
                          onChange={onContactChange}
                          className="form-control"
                          placeholder="عکس"
                          required={true}
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          type="text"
                          name="mobile"
                          value={contact.mobile}
                          onChange={onContactChange}
                          className="form-control"
                          placeholder="تلفن"
                          required={true}
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          type="text"
                          name="email"
                          value={contact.email}
                          onChange={onContactChange}
                          className="form-control"
                          placeholder="ایمیل"
                          required={true}
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          type="text"
                          name="job"
                          value={contact.job}
                          onChange={onContactChange}
                          className="form-control"
                          placeholder="شغل"
                          required={true}
                        />
                      </div>
                      <div className="mb-2">
                        <select
                          name="group"
                          className="form-control"
                          required={false}
                        >
                          <option value="">انتخاب گروه</option>
                          {
                            groups.length > 0 &&
                            groups.map((group) => (
                              <option key={group.id} value={group.id}>
                                {group.name}
                              </option>
                            ))
                          }
                        </select>
                      </div>
                      <div className="mx-2">
                        <input
                          type="submit"
                          className="btn"
                          value="ساخت مخاطب"
                        />
                        {/* <span class="border border-2 rounded-pill border-success">
                        </span> */}
                        <Link
                          to={"/contacts"}
                          className="btn mx-4"
                        >
                          انصراف
                          {/* <span class="border border-2 rounded-pill border-warning"></span> */}
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AddContact