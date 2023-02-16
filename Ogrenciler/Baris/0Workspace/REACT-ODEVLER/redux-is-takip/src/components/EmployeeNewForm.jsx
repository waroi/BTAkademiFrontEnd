import { Field, Form, Formik } from "formik";

const EmployeeNewForm = () => {
  return (
    <div className="mh-100">
      <h4 className="text-center">Yeni Personel Kayıt Formu</h4>
      <div className="container d-flex align-items-center justify-content-center mt-5 bg-white rounded p-4 bg-gradient">
        <Formik
          initialValues={{
            employeeId: null,
            employeeFirstName: "",
            employeeLastName: "",
            employeeGender: "",
            employeeAge: "",
            employeePhone: "",
            employeeEmail: "",
            employeePassword: "",
            employeeAddress: "",
            employeeStatus: "",
          }}
          onSubmit={(value, { setSubmitting }) => {
            alert(value, null, 2);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <div className="row">
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
                        <option value="male">Erkek</option>
                        <option value="female">Kadın</option>
                      </Field>
                      <label htmlFor="employeeGender">Cinsiyet</label>
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
