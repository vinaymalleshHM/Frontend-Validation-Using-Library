import React from 'react'
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

function SelectField(props) {
    return (
       <>
        {console.log(props.valuesofselectoption)}
             <TextField
                select
               {...props}
                margin="dense"
                variant="outlined"
                fullWidth
              >
                {props.valuesofselectoption.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
        </>
    )
}

export default SelectField
