import { Formik, Field, ErrorMessage, Form } from "formik";
import { registerSchemas } from "../schemas/registerSchemas";
import loginImage from "../images/loginImage.jpg";

const RegisterView = () => {
  return (
    <div className="mh-100">
      <div className="container d-flex align-items-center justify-content-center mt-5 shadow-lg rounded-3 bg-light bg-gradient">
        <div className="row">
          <div className="col-md-6 p-4 d-flex flex-column justify-content-center  ">
            <h4 className="text-secondary mb-5">Kayıt Ol</h4>
            <Formik
              initialValues={{
                employeeFirstName: "",
                employeeLastName: "",
                employeeEmail: "",
                employeePassword: "",
                employeeAddress: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
              }}
              validationSchema={registerSchemas}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-floating mb-3">
                    <Field
                      type="email"
                      id="employeeEmail"
                      name="employeeEmail"
                      className="form-control"
                      placeholder="E-Posta"
                    />
                    <label htmlFor="employeeEmail">E-Posta</label>

                    <ErrorMessage
                      name="employeeEmail"
                      component="small"
                      className="text-danger"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <Field
                          type="password"
                          id="employeePassword"
                          name="employeePassword"
                          className="form-control"
                          placeholder="Şifre"
                        />
                        <label htmlFor="employeePassword">Şifre</label>
                        <ErrorMessage
                          name="employeePassword"
                          component="small"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <Field
                          type="password"
                          id="employeeConfirmPassword"
                          name="employeeConfirmPassword"
                          className="form-control"
                          placeholder="Şifre(Tekrar)"
                        />
                        <label htmlFor="employeeConfirmPassword">
                          Şifre(Tekrar)
                        </label>
                        <ErrorMessage
                          name="employeeConfirmPassword"
                          component="small"
                          className="text-danger"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <Field
                          type="text"
                          id="employeeFirstName"
                          name="employeeFirstName"
                          className="form-control"
                          placeholder="İsim"
                        />
                        <label htmlFor="employeeFirstName">İsim</label>

                        <ErrorMessage
                          name="employeeFirstName"
                          component="small"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <Field
                          type="text"
                          id="employeeLastName"
                          name="employeeLastName"
                          className="form-control"
                          placeholder="Soyisim"
                        />
                        <label htmlFor="employeeLastName">Soyisim</label>

                        <ErrorMessage
                          name="employeeLastName"
                          component="small"
                          className="text-danger"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <Field
                      type="textarea"
                      id="employeeAddress"
                      name="employeeAddress"
                      className="form-control"
                      placeholder="Adres"
                    />
                    <label htmlFor="employeeAddress">Adres</label>

                    <ErrorMessage
                      name="employeeAddress"
                      component="small"
                      className="text-danger"
                    />
                  </div>
                  <div className="d-grid">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-outline-primary"
                    >
                      Kayıt Ol
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

export default RegisterView;
