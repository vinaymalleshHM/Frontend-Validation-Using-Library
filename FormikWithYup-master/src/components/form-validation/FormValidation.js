import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { withStyles } from "@material-ui/core";

import form from "../form/Form"

const FILE_SIZE = 2 * 1024;
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
];
const SUPPORTED_FORMATS1 = [
  "application/pdf"
];
const styles = () => ({
  card: {
    maxWidth: 420,
    marginTop: 50
  },
  container: {
    display: "Flex",
    justifyContent: "center"
  },
  actions: {
    float: "right"
  }
});
const FormValidation = withFormik({
  mapPropsToValues: ({
    firstName,
    lastName,
    email,
    course,
    toDate,
    fromDate,
    password,
    gender,
    address,
    resume,
    image,
    phoneno,
    checkBoxList,
    confirmPassword
  }) => {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      course: course || "",
      password: password || "",
      confirmPassword: confirmPassword || "",
      gender: gender || "",
      toDate: toDate || "",
      fromDate: fromDate || "",
      checkBoxList: checkBoxList || "",
      address: address || "",
      image: image || "",
      phoneno: phoneno || "",
      resume: resume || ""

    };
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .max(15, "The maximux length is 15")
      .matches(/^[A-Z]+$/i, "It should contain only alphabets")
      .required("Required"),
    lastName: Yup.string().required("Required")
      .max(15, "The maximux length is 15")
      .matches(/^[A-Z]+$/i, "It should contain only alphabets")
      .required("Required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    course: Yup.string().required("Select your course category"),
    password: Yup.string()
      .max(16, "Password is too long")
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "It should contain one uppercase , lowercase, special character, number")
      .min(8, "Password must contain at least 8 characters")
      .required("Enter your password"),
    confirmPassword: Yup.string()
      .required("Confirm your password")
      .oneOf([Yup.ref("password")], "Password does not match"),
    gender: Yup.string()
      .required("Required"),
    checkBoxList: Yup.string()
      .required("Required"),
    fromDate: Yup
      .date()
      .required("Required"),
    toDate: Yup
      .date()
      .required("Required")
      .when(
        'fromDate',
        (fromDate, schema) => (fromDate && schema.min(fromDate)),
      ),
    address: Yup.string()
      .max(150, "Maximum character is 150")
      .required("Required"),
    phoneno: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone should contain 10 digits")
      .required("Required"),
    image: Yup.mixed()
      .required("Required")
      .test('fileFormat', 'Image only', (value) => {
        console.log(value); return value && SUPPORTED_FORMATS.includes(value.type);
      })
      .test("fileSize", "Your image is too big ( the maximum size is 4KB)", value => {
       // console.log(value.size, value.type);
        return value && value.size <= FILE_SIZE;

      }),
      resume: Yup.mixed()
      .required("Required")
      .test('fileFormat', 'File must be in PDF format', (value) => {
        console.log(value); return value && SUPPORTED_FORMATS1.includes(value.type);
      })
      .test("fileSize", "Your image is too big ( the maximum size is 4KB)", value => {
       // console.log(value.size, value.type);
        return value && value.size <= FILE_SIZE;

      })
      




  }),





  handleSubmit: (values, { setSubmitting }) => {
    /*  setTimeout(() => {
       // submit to the server */
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    /*}, 1000); */
  }
})(form);

export default withStyles(styles)(FormValidation);

