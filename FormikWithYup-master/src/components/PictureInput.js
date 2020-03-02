import React from "react";
import { TextField } from "@material-ui/core";
import { Field } from "formik";

export default ({ form, field, helperText, error,onBlur }) => (
    <>
        <TextField
            name={field.name}
            type="file"
            label={field.label}
            helperText={helperText}
            error={error}
            accept={field.accept}
            onBlur={onBlur}
            onChange={e => form.setFieldValue(field.name,e.target.files[0])}
            margin="dense"
            variant="outlined"
           
            fullWidth
        />
        {console.log(field)}

    </>
);