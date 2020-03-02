import React, { useRef } from "react";
import Card from "@material-ui/core/Card";
import { Field } from 'formik';
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import MyTextField from '../text-field/MyTextField'
import SelectField from '../select-field/SelectField'
import MyCheckBoxList from '../my-check-box-list/MyCheckBoxList'
import MyRadioButton from '../radio-button/MyRadioButton'

import PictureInput from '../PictureInput'

/*  */
const courseCategory = [
  {
    value: "webDevelopment",
    label: "Web Development"
  },
  {
    value: "networking",
    label: "Networking"
  },
  {
    value: "computerScience",
    label: "Computer Science"
  }
];

const gender = [
  {
    value: "male",
    label: "Male",

  },
  {
    value: "female",
    label: "Female",

  },
  {
    value: "others",
    label: "Other"
  }
];

const checkBoxList = [
  {
    value: "tea",
    label: "Tea",

  },
  {
    value: "coffee",
    label: "Coffee",

  },
  {
    value: "milk",
    label: "Milk"
  }
]

const form = props => {
  const {
    classes,
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <Card className={classes.card}>
          <CardContent>
            <MyTextField
              id="firstName"
              label="First Name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.firstName ? errors.firstName : ""}
              error={touched.firstName && Boolean(errors.firstName)}

            />
            <MyTextField
              id="lastName"
              label="Last Name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.lastName ? errors.lastName : ""}
              error={touched.lastName && Boolean(errors.lastName)}

            />
            <MyTextField
              id="email"
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.email ? errors.email : ""}
              error={touched.email && Boolean(errors.email)}

            />




            <SelectField
              select
              id="course"
              valuesofselectoption={courseCategory}
              label="Course Category"
              value={values.course}
              onChange={handleChange("course")}
              helperText={touched.course ? errors.course : ""}
              error={touched.course && Boolean(errors.course)}
            />

            <MyTextField
              id="fromDate"
              label="fromDate"
              type="date"
              defaultValue={new Date()}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              value={values.fromDate}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.fromDate ? errors.fromDate : ""}
              error={touched.fromDate && Boolean(errors.fromDate)}
            />
            <MyTextField
              id="toDate"
              label="toDate"
              type="date"
              defaultValue={new Date()}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              value={values.toDate}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.toDate ? errors.toDate : ""}
              error={touched.toDate && Boolean(errors.toDate)}
            />


            <MyTextField
              id="address"
              label="Address"
              type="text"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              onBlur={handleBlur}
              helperText={touched.address ? errors.address : ""}
              error={touched.address && Boolean(errors.address)}
              multiline={true}
              rows={2}
              rowsMax={4}
            />




            <MyTextField
              id="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.password ? errors.password : ""}
              error={touched.password && Boolean(errors.password)}
            />
            <MyTextField
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.confirmPassword ? errors.confirmPassword : ""}
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}

            />


            <MyTextField
              id="phoneno"
              label="Phone Number"
              type="number"
              value={values.phoneno}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.phoneno ? errors.phoneno : ""}
              error={touched.phoneno && Boolean(errors.phoneno)}
            />



            <Field name="image"
              label="Photo"
              accept="image/*"
              helperText={touched.image ? errors.image : ""}
              error={touched.image && Boolean(errors.image)}
              onBlur={handleBlur}
              component={PictureInput}
            />

            <Field name="resume"
              accept="pdf/*"
              helperText={touched.resume ? errors.resume : ""}
              error={touched.resume && Boolean(errors.resume)}
              onBlur={handleBlur}
              component={PictureInput}
            />

            <MyRadioButton
              id="gender"
              label="gender"
              valuesofradiobutton={gender}
              value={values.gender}
              onChange={handleChange("gender")}
              onBlur={handleBlur}
              helperText={touched.gender ? errors.gender : ""}
              error={touched.gender && Boolean(errors.gender)}
            />

            <MyCheckBoxList
              id="checkBoxList"
              label="checkBoxList"
              valuesofcheckbox={checkBoxList}
              value={values.checkBoxList}
              onChange={handleChange("checkBoxList")}
              onBlur={handleBlur}
              helperText={touched.checkBoxList ? errors.checkBoxList : ""}
              error={touched.checkBoxList && Boolean(errors.checkBoxList)}
            />


          </CardContent>
          <CardActions className={classes.actions}>
            <Button type="submit" color="primary" disabled={isSubmitting}>
              SUBMIT
              </Button>
            <Button color="secondary" onClick={handleReset}>
              CLEAR
              </Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
};
export default form