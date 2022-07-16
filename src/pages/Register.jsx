import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useFormik } from "formik";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (valores) => {
    registerUser(
      valores.operatorId,
      valores.name,
      valores.nickname,
      valores.password,
      valores.level
    );
  };

  const formik = useFormik({
    initialValues: {
      operatorId: "",
      name: "",
      nickname: "",
      password: "",
      level: "Seller",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <div className="hold-transition register-page">
      <div className="register-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="../../index2.html" className="h1">
              <b>Cloud</b>SALES
            </a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Register a new membership</p>

            <form onSubmit={formik.handleSubmit} name="registrar" method="post">
              <div className="input-group mb-3">
                <input
                  type="text"
                  value={formik.values.operatorId}
                  className="form-control"
                  id="operatorId"
                  name="operatorId"
                  onChange={formik.handleChange}
                  placeholder="Operator Id"
                />

                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-id-card"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Full name"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  values={formik.values.nickname}
                  onChange={formik.handleChange}
                  className="form-control"
                  id="nickname"
                  name="nickname"
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  values={formik.values.password}
                  onChange={formik.handleChange}
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <div className="form-group">
                  <label>Tipo de usuario</label>
                  <select
                    id="level"
                    className="form-control"
                    value={formik.values.level}
                    onChange={formik.handleChange}
                  >
                    <option value="admin">Administrador</option>
                    <option value="seller">Vendedor</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-8"></div>

                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Register
                  </button>
                </div>
              </div>
            </form>

            <Link to={{ pathname: "/" }} className="text-center">
              Tengo credenciales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
