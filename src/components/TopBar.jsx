import {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import {Link, useNavigate} from "react-router-dom"


const TopBar = () => {

    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    const logout = ()=> {
      localStorage.removeItem('user')
      setTimeout(() => {
        navigate("/")
      }, 500);
      
      
    }

  const usuario = ()=>{
    if(user){
    const usuario = JSON.parse(localStorage.getItem("user"))
    const datos = usuario.data[0].name
    let nombre = datos
    return nombre
    
    }else{
      return
    }
  }
  return (
    <nav className="main-header navbar navbar-expand navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a> */}
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to={"/dashboard"} className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/dashboard" className="nav-link">
            {user ? usuario() : null}
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <button onClick={logout} className="btn btn-danger cursor-pointer">
          <i className='fas fa-user-slash mr-2'/>
            Logout
          </button>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          
          <div className="navbar-search-block">
            <form className="form-inline">
              <div className="input-group input-group-sm">
                <input
                  className="form-control form-control-navbar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  
                  <button
                    className="btn btn-navbar"
                    type="button"
                    data-widget="navbar-search"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default TopBar