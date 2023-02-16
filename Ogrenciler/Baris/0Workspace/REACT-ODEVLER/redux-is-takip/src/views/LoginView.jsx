import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import loginImage from "../images/loginImage.jpg";
import { loginSchemas } from "../schemas/loginSchemas";
import { CiLogin } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginView = () => {
  return (
    <div className="mh-100">
      <div className="container d-flex align-items-center justify-content-center mt-5 shadow-lg rounded-3 bg-light bg-gradient">
        <div className="row">
          <div className="col-md-6 p-4 d-flex flex-column justify-content-center  ">
            <h4 className="text-secondary mb-5">Giriş yap</h4>
            <Formik
              initialValues={{ employeeId: "", employeePassword: "" }}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
              }}
              validationSchema={loginSchemas}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-floating mb-3">
                    <Field
                      type="text"
                      id="employeeId"
                      name="employeeId"
                      className="form-control"
                      placeholder="Çalışan ID"
                    />
                    <label htmlFor="employeeId">
                      <FaUser /> ID
                    </label>

                    <ErrorMessage
                      name="employeeId"
                      component="small"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-floating mb-3">
                    <Field
                      type="password"
                      id="employeePassword"
                      name="employeePassword"
                      className="form-control"
                      placeholder="Şifre"
                    />
                    <label htmlFor="employeePassword">
                      <RiLockPasswordFill /> Şifre
                    </label>
                    <ErrorMessage
                      name="employeePassword"
                      component="small"
                      className="text-danger"
                    />
                  </div>
                  <div className="d-grid">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary bg-gradient d-flex align-items-center justify-content-center"
                    >
                      Giriş
                      <CiLogin className="fs-3" />
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="col-md-6 p-0">
            <img
              src={loginImage}
              alt={loginImage}
              className="img-fluid rounded-end h-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
