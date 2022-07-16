import { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import BtnHabi from "../components/BtnHabi";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import BtnEdi from "../components/BtnEdi";

const Productos = () => {
  const { operatorId } = useContext(AuthContext);
  const [res, setRes] = useState("");
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://us-central1-cloud-sales-da995.cloudfunctions.net/app/api/products/${operatorId}`
        );
        setRes(response.data.data);
      } catch {
        setRes("Algo salió mal");
      }
    };
    getData();
  }, [])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://us-central1-cloud-sales-da995.cloudfunctions.net/app/api/products/${operatorId}`
        );
        setRes(response.data.data);
      } catch {
        setRes("Algo salió mal");
      }
    };
    getData();
    setLoading(false);
  }, [loading]);

  return (
    <>
      <div className="wrapper">

        <TopBar />

        <SideBar />
        <div className="content-wrapper">

          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Productos</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to={"/dashboard"}>Home</Link>
                    </li>
                    <Link to={"/productos"} className="breadcrumb-item active">
                      Productos
                    </Link>
                  </ol>
                </div>
              </div>
            </div>

          </section>

          <section className="content">
            <div className="container-fluid">

              <div className="card card-default">
                <div className="card-header">
                  <Link to="/addprod" className="btn btn-success">
                  <i className='fas fa-plus mr-2'/>
                    Agregar producto
                  </Link>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Producto</th>
                            <th>Precio unitario</th>
                            <th>Stock Actual</th>
                            <th>Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          {res
                            ? res.map((prod) => {
                                return (
                                  <tr key={prod.id}>
                                    <td>{prod.name}</td>
                                    <td>{prod.price}</td>
                                    <td>{prod.stock}</td>
                                    <td className="d-flex justify-content-center">
                                      <BtnHabi
                                        prod={prod}
                                        loading={setLoading}
                                      />{" "}
                                      <BtnEdi prod={prod} />
                                    </td>
                                  </tr>
                                );
                              })
                            : null}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </section>
   
        </div>
        <Footer />
        <Toaster />
      </div>
   
    </>
  );
};

export default Productos;
