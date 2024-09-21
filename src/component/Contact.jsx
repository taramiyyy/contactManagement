import { BLONDE, COTTONRED } from "../helpers/Colors"
 
import { Link } from "react-router-dom"

const Contact = ({contacts, deleteContact}) => {
    return (
        
            <>
                <div className="col-6 p-2">
                    <div className="card" style={{backgroundColor: BLONDE}}>
                        <div className="card-body">
                            <div className="row d-flex align-items-center  justify-content-center">
                                <div className="col-3">
                                    <img src={contacts.photo || "data:image/png;base64,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"} className="img_contacts" />
                                </div>
                                <div className="col-7">
                                    <ul className="list-group">
                                        <li className="list-group-item disabled">نام: 
                                            <span className="fw-small" style={{ color: COTTONRED}}>{contacts.fullname}</span>
                                            </li>
                                        <li className="list-group-item disabled">شماره تماس:
                                             <span className="fw-small" style={{ color: COTTONRED}}>{contacts.mobile}</span>
                                             </li>
                                        <li className="list-group-item disabled">ایمیل: 
                                            <span className="fw-small" style={{ color: COTTONRED}}>{contacts.email}</span>
                                            </li>
                                    </ul>
                                </div>
                                <div className="col-1">
                                    <Link to={contacts.id} className="btn btn-warning my-1"> <i className="fa fa-eye"></i> </Link>
                                    <Link to={`edit/${contacts.id}`} className="btn btn-info my-1"> <i className="fa fa-edit"></i> </Link>
                                    <button onClick={deleteContact} className="btn btn-danger text-dark my-1"> <i className="fa fa-trash"></i> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

    )

}

export default Contact
