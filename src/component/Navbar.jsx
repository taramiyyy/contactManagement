import { COTTONRED, BLONDE } from '../helpers/Colors'
import Search from '../component/Search'

const Navbar = () => {
  return (
   <>
    <nav>
      <nav className="navbar navbar-dark navbar-expand-sm shadow-lg" style={{background: BLONDE}}>
        <div className="container">
          <div className="row w-100">
            <div className="col">
              <i className="fa fa-user" style={{color: COTTONRED}}></i>
              {" "}
              وب اپلیکیشن <span style={{ color: COTTONRED }}>مدیریت مخاطبین</span>
            </div>
            <div className="col">
              <Search />
            </div>
          </div>
        </div>
      </nav>
    </nav>
   </>
  )
}
export default Navbar

