import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'

const Dashboard = () => {
  
  return (
    <>

<div className="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
  <div className="wrapper">
    <TopBar/>
    <SideBar/>
    {/* Content Wrapper. Contains page content */}
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Dashboard</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          {/* Info boxes */}
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box">
                <span className="info-box-icon bg-info elevation-1">
                  <i className="fas fa-cog" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">CPU Traffic</span>
                  <span className="info-box-number">
                    0
                    <small>%</small>
                  </span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box mb-3">
                <span className="info-box-icon bg-danger elevation-1">
                  <i className="fas fa-thumbs-up" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Likes</span>
                  <span className="info-box-number">0</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            {/* fix for small devices only */}
            <div className="clearfix hidden-md-up" />
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box mb-3">
                <span className="info-box-icon bg-success elevation-1">
                  <i className="fas fa-shopping-cart" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Sales</span>
                  <span className="info-box-number">0</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box mb-3">
                <span className="info-box-icon bg-warning elevation-1">
                  <i className="fas fa-users" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">New Members</span>
                  <span className="info-box-number">0</span>
                </div>
               
              </div>
             
            </div>
           
          </div>
          
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">CLOUD SALES APP</h5>
                  
                </div>
                
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-8">
                      <i>Ev4 front end P.Ramírez</i>
                      <p>Solo funciona el menú de producto con su crud completo  </p>
                      <i>Solicitado por el docente</i>
                      <div className="chart">
                      
                        <canvas
                          id="salesChart"
                          height={180}
                          style={{ height: 180 }}
                        />
                      </div>
                     
                    </div>
                   
                  </div>
              
                </div>
               
              </div>
              
            </div>
        
          </div>
          
          <div className="row">
          
          </div>
         
        </div>
       
      </section>
    
    </div>
   
    <aside className="control-sidebar control-sidebar-dark"></aside>
    <Footer/>
  </div>
</div>

    </>
  )
}

export default Dashboard