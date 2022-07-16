import { useContext } from "react";
import {useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";


const Login = () => {
  
  const navigate = useNavigate();

  const { loginUser } = useContext(AuthContext);

  const handleSubmit = async (valores) => {
    try {
      await loginUser(valores.nickname, valores.password);
      navigate("/dashboard");
    } catch {}
  };

  const loginSchema = yup.object().shape({
    nickname: yup
      .string()

      .required("El nombre de usuario es obligatorio"),
    password: yup.string().required("La contraseña es obligatoria"),
  });

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Cloud</b>SALES
          </a>
        </div>

        <div className="card p-3">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Inicia Sesión</p>
            <Formik
              initialValues={{
                nickname: "",
                password: "",
              }}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
              validationSchema={loginSchema}
            >
              {({ errors, touched, isValid, dirty }) => {
                return (
                  <Form>
                    <div className="input-group mb-3">
                      <Field
                        type="text"
                        name="nickname"
                        className="form-control"
                        placeholder="Nickname"
                      />

                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-envelope"></span>
                        </div>
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <Field
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                      />

                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-lock"></span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block "
                          disabled={!(isValid && dirty)}
                        >
                          Sign In
                        </button>
                      </div>
                    </div>
                    {errors.nickname && touched.nickname ? (
                      <div className="text-danger text-center">
                        {errors.nickname}
                      </div>
                    ) : null}
                    {errors.password && touched.password ? (
                      <div className="text-danger text-center">
                        {errors.password}
                      </div>
                    ) : null}
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
