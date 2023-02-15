import * as Yup from "yup";

export const loginSchemas = Yup.object({
  employeeId: Yup.number()
    .positive()
    .typeError("*Çalışan sicil numarası sayısal bir değer olmak zorundadır")
    .required("*Bu alanın doldurulması zorunludur"),
  employeePassword: Yup.string()
    .min(8, "Şifre minimum 8 karakter olmalıdır")
    .required("*Bu alanın doldurulması zorunludur"),
});
