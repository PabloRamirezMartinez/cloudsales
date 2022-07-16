
import {Link} from 'react-router-dom'

const SideBar = () => {
    
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4 vh-100">
      <Link to={"/dashboard"} className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">CloudSales</span>
      </Link>
      <div className="sidebar">
        <div className="form-inline">
          
        </div>
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item menu-open">
              
            </li>
            <li className="nav-item">
              <Link to={"/usuarios"} className="nav-link disabled">
                <i className="nav-icon fas fa-user" />
                <p>
                  Usuarios
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/productos"} className="nav-link">
                <i className="nav-icon fas fa-shopping-cart" />
                <p>
                  Productos
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link disabled">
                <i className="nav-icon fas fa-briefcase" />
                <p>
                  Clientes
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link disabled">
                <i className="nav-icon fas fa-store" />
                <p>
                  Punto de venta
                  
                </p>
              </a>
            </li>
          </ul>
      
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
      
    </aside>
    
  )
}

export default SideBar