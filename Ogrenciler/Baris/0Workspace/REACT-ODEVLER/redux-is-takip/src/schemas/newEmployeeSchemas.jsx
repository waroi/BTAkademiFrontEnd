import * as Yup from "yup";

export const newEmployeeSchemas = Yup.object({
  employeeId: Yup.number()
    .positive("*Negatif bir değer giremezsiniz")
    .required("*Bu alanın doldurulması zorunludur"),
  employeeFirstName: Yup.string().required(
    "*Bu alanın doldurulması zorunludur"
  ),
  employeeLastName: Yup.string().required("*Bu alanın doldurulması zorunludur"),
  employeeGender: Yup.mixed()
    .oneOf(["e", "k"], "Geçerli bir cinsiyet seçiniz")
    .required("*Bu alanın doldurulması zorunludur"),
  employeeAge: Yup.number()
    .positive("* 0(Sıfır)'dan büyük bir değer girin")
    .required("*Bu alanın doldurulması zorunludur"),
  employeePhone: Yup.number()
    .positive("*Negatif bir değer giremezsiniz")
    .typeError("*Geçerli bir telefon numarası girin")
    .required("*Bu alanın doldurulması zorunludur"),
  employeeEmail: Yup.string()
    .email("*Geçerli bir mail adresi girin")
    .required("*Bu alanın doldurulması zorunludur"),
  employeeAddress: Yup.string().required("*Bu alanın doldurulması zorunludur"),
  employeeStatus: Yup.string().required("*Bu alanın doldurulması zorunludur"),
});
