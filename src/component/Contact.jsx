import { BLONDE, COTTONRED } from "../helpers/Colors"

const Contact = () => {
  return (
    <div>
        <>
        <div className="col-6">
                        <div className="card" style={{backgroundColor: BLONDE}}>
                            <div className="card-body">
                                <div className="row d-flex align-item-center justify-content-center">
                                    <div className="col-3">
                                        <img src="https://via.placeholder.com/150" alt="" />
                                    </div>
                                    <div className="col-7">
                                        <ul class="list-group">
                                            <li className="list-group-item">نام و نام خانوادگی:  <span className="fw-small" style={{color: COTTONRED}}> آیلین فتوتی:</span></li>
                                            
                                            <li className="list-group-item">شماره تماس:  <span className="fw-small" style=
                                            {{color: COTTONRED}}>09152221234</span></li>
                                            
                                            <li className="list-group-item">ایمیل: 
                                                <br /><span className="fw-small" style={{color: COTTONRED}}>aili2004@gmail.com</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-1">
                                        <button className="btn btn-warning my-1"><i className="fa fa-eye" style={{alignItems: "center"}}></i></button>
                                        <button className="btn btn-info my-1"><i className="fa fa-edit" style={{alignItems: "center"}}></i></button>
                                        <button className="btn btn-danger text-dark my-1"><i className="fa fa-trash" style={{alignItems: "center"}}></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    </div>
  )
}

export default Contact