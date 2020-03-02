import React from 'react'
import TextField from "@material-ui/core/TextField";

function MyTextField(props) {
    return (
        <>
        <TextField
               {...props}
               margin="dense"
               /*  variant="outlined" */
               autoFocus="true"
                fullWidth
               
              />
              <br/>
              </>
    )
}

export default MyTextField
