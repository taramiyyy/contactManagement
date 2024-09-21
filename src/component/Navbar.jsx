import { useLocation } from 'react-router-dom';
import { COTTONRED, BLONDE } from '../helpers/Colors';
import Search from '../component/Search';

const Navbar = () => {
  const location = useLocation()


  return (
    <>
      <nav>
        <nav className="navbar navbar-dark navbar-expand-sm shadow-lg" style={{ background: BLONDE }}>
          <div className="container">
            <div className="row w-100">
              <div className="col">
                <i className="fa fa-user" style={{ color: COTTONRED }}></i>
                {" "}
                وب اپلیکیشن <span style={{ color: COTTONRED }}>مدیریت مخاطبین</span>
              </div>
              {
                location.pathname === "/contacts" ? (
                  <div className="col">
                    <Search/>
                  </div>
                ) : null
              }
            </div>
          </div>
        </nav>
      </nav>
    </>
  )
}
export default Navbar

