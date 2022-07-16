import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";

const InsertProductos = () => {
  const { operatorId } = useContext(AuthContext);

  const exito = () => toast.success("Producto registrado correctamente");
  const error = () => toast.success("Producto no registrado");

  const validacion = yup.object({
    name: yup
      .string("Ingresa un nombre de producto")
      .required("el nombre es obligatorio"),
    MSU: yup
      .number("valor ingresado no es número")
      .positive("El valor debe ser positivo")
      .integer("el valor debe ser entero")
      .required("El msu es obligatorio"),
    price: yup
      .number("valor ingresado no es número")
      .positive("El valor debe ser positivo")
      .integer("el valor debe ser entero")
      .required("El precio es obligatorio"),
    stock: yup
      .number("valor ingresado no es número")
      .positive("El valor debe ser positivo")
      .integer("el valor debe ser entero")
      .required("El stock es obligatorio"),
    MDPrice: yup
      .number("valor ingresado no es número")
      .positive("El valor debe ser positivo")
      .integer("el valor debe ser entero")
      .required("El MDPrice es obligatorio"),
    MDPercentage: yup
      .number("valor ingresado no es número")
      .positive("El valor debe ser positivo")
      .required("El MDPercentage es obligatorio"),
  });

  const handleSubmit = async (valores) => {
    try {
      await axios.post(
        "https://us-central1-cloud-sales-da995.cloudfunctions.net/app/api/products/",
        {
          operatorId,
          name: valores.name,
          MSU: valores.MSU,
          price: valores.price,
          stock: valores.stock,
          MDPrice: valores.MDPrice,
          MDPercentage: valores.MDPercentage,
        }
      );

      exito();
    } catch {
      error();
    }
  };

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
                    <Link to="/productos" className="breadcrumb-item ">
                      Productos
                    </Link>
                    <Link to="/addprod" className="breadcrumb-item active">
                      Agregar Producto
                    </Link>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section className="content">
            <div className="container-fluid">
              <Formik
                initialValues={{
                  name: "",
                  MSU: "",
                  price: "",
                  stock: "",
                  MDPrice: "",
                  MDPercentage: "",
                }}
                onSubmit={(values, actions) => {
                  handleSubmit(values);
                  actions.resetForm();
                }}
                validationSchema={validacion}
              >
                {({ errors, touched, isValid, dirty }) => {
                  return (
                    <Form>
                      <div className="card card-default">
                        <div className="card-header">
                          <h3 className="card-title"> Agregar producto</h3>
                        </div>

                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label>Nombre</label>
                                <Field
                                  type="text"
                                  id="name"
                                  name="name"
                                  className="form-control"
                                  style={{ width: "100%" }}
                                />
                                {errors.name && touched.name ? (
                                  <div className="text-danger">
                                    {errors.name}
                                  </div>
                                ) : null}
                              </div>

                              <div className="row">
                                <div className="form-group col-md-4">
                                  <label>Un.min. de venta</label>
                                  <Field
                                    type={"number"}
                                    id="MSU"
                                    name="MSU"
                                    className="form-control"
                                    style={{ width: "100%" }}
                                  />
                                  {errors.MSU && touched.MSU ? (
                                    <div className="text-danger">
                                      {errors.MSU}
                                    </div>
                                  ) : null}
                                </div>
                                <div className="form-group col-md-4">
                                  <label>Precio</label>
                                  <Field
                                    type="number"
                                    id="price"
                                    name="price"
                                    className="form-control "
                                    style={{ width: "100%" }}
                                  />
                                  {errors.price && touched.price ? (
                                    <div className="text-danger">
                                      {errors.price}
                                    </div>
                                  ) : null}
                                </div>
                                <div className="form-group col-md-4">
                                  <label>Stock</label>
                                  <Field
                                    type="number"
                                    id="stock"
                                    name="stock"
                                    className="form-control "
                                    style={{ width: "100%" }}
                                  />
                                  {errors.stock && touched.stock ? (
                                    <div className="text-danger">
                                      {errors.stock}
                                    </div>
                                  ) : null}
                                </div>
                              </div>

                              <div className="row">
                                <div className="form-group col-md-6">
                                  <label>Máximo descuento precio</label>
                                  <Field
                                    type="number"
                                    id="MDPrice"
                                    name="MDPrice"
                                    className="form-control"
                                    style={{ width: "100%" }}
                                  />
                                  {errors.MDPrice && touched.MDPrice ? (
                                    <div className="text-danger">
                                      {errors.MDPrice}
                                    </div>
                                  ) : null}
                                </div>
                                <div className="form-group col-md-6">
                                  <label>Máximo descuento porcentaje</label>
                                  <Field
                                    type="number"
                                    id="MDPercentage"
                                    name="MDPercentage"
                                    className="form-control"
                                    style={{ width: "100%" }}
                                  />
                                  {errors.MDPercentage &&
                                  touched.MDPercentage ? (
                                    <div className="text-danger">
                                      {errors.MDPercentage}
                                    </div>
                                  ) : null}
                                </div>
                                <div className="row">
                                  <div className="form-group col-md-3 d-flex">
                                    <input
                                      type="submit"
                                      value="Guardar"
                                      className="btn btn-primary"
                                      disabled={!(isValid && dirty)}
                                    />
                                    <Link to={"/productos"} className="btn btn-secondary ml-2">Cancelar</Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form>
                  )
                }}
              </Formik>
            </div>
          </section>
        </div>
        <Footer />
        <Toaster />
      </div>
    </>
  )
}

export default InsertProductos;
