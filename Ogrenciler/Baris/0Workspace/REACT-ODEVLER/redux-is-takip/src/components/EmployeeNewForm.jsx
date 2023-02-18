import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { newEmployeeSchemas } from "../schemas/newEmployeeSchemas";
import { addEmployee, postEmloyees } from "../slices/employeesSlice";

const EmployeeNewForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="mh-100">
      <h4 className="text-center">Yeni Personel Kayıt Formu</h4>
      <div className="container d-flex align-items-center justify-content-center mt-5 bg-white rounded p-4 bg-gradient">
        <Formik
          initialValues={{
            employeeId: "",
            employeeFirstName: "",
            employeeLastName: "",
            employeeGender: "...",
            employeeAge: "",
            employeePhone: "",
            employeeEmail: "",
            employeePassword: "",
            employeeAddress: "",
            employeeStatus: "",
            employeeRating: [],
          }}
          onSubmit={(value, { setSubmitting }) => {
            dispatch(postEmloyees(value));
            dispatch(addEmployee(value));
            setSubmitting(false);
          }}
          validationSchema={newEmployeeSchemas}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-floating mb-3">
                      <Field
                        type="number"
                        id="employeeId"
                        name="employeeId"
                        className="form-control"
                        placeholder="Personel ID"
                      />
                      <label htmlFor="">Personel ID</label>
                      <ErrorMessage
                        component="small"
                        name="employeeId"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <Field
                        type="text"
                        id="employeeFirstName"
                        name="employeeFirstName"
                        className="form-control"
                        placeholder="Personel Ad"
                      />
                      <label htmlFor="">Personel Ad</label>
                      <ErrorMessage
                        component="small"
                        name="employeeFirstName"
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
                        placeholder="Personel Soyad"
                      />
                      <label htmlFor="employeeLastName">Personel Soyad</label>
                      <ErrorMessage
                        component="small"
                        name="employeeLastName"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-floating mb-3">
                      <Field
                        as="select"
                        id="employeeGender"
                        name="employeeGender"
                        className="form-control"
                      >
                        <option>...</option>
                        <option value="e">Erkek</option>
                        <option value="k">Kadın</option>
                      </Field>
                      <label htmlFor="employeeGender">Cinsiyet</label>
                      <ErrorMessage
                        component="small"
                        name="employeeGender"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-floating mb-3">
                      <Field
                        type="number"
                        id="employeeAge"
                        name="employeeAge"
                        className="form-control"
                        placeholder="Yaş"
                      />
                      <label htmlFor="employeeAge">Yaş</label>
                      <ErrorMessage
                        component="small"
                        name="employeeAge"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-floating mb-3">
                      <Field
                        type="text"
                        id="employeePhone"
                        name="employeePhone"
                        className="form-control"
                        placeholder="Telefon Numarası"
                      />
                      <label htmlFor="employeePhone">Telefon Numarası</label>
                      <ErrorMessage
                        component="small"
                        name="employeePhone"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
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
                        component="small"
                        name="employeeEmail"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
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
                        component="small"
                        name="employeeAddress"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <Field
                        type="text"
                        id="employeeStatus"
                        name="employeeStatus"
                        className="form-control"
                        placeholder="Ünvan"
                      />
                      <label htmlFor="employeeStatus">Ünvan</label>
                      <ErrorMessage
                        component="small"
                        name="employeeStatus"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="d-flex mx-auto gap-2 justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-primary bg-gradient w-25"
                      disabled={isSubmitting}
                    >
                      Ekle
                    </button>
                    <button
                      type="reset"
                      className="btn btn-secondary bg-gradient w-25"
                      disabled={isSubmitting}
                    >
                      Temizle
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default EmployeeNewForm;
