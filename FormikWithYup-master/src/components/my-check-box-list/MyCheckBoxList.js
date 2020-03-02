import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel'
import FormGroup from '@material-ui/core/FormGroup'

function MyCheckBoxList(props) {
    return (
        <FormControl component="fieldset" className="mt-2 mb-2">
            <FormLabel component="legend" style={{color:props.error?"red":""}}>Drinks</FormLabel>
            <FormGroup aria-label="position" value={props.value} {...props} row>
            
                {props.valuesofcheckbox.map((valuesofBox,key) => 

                    <FormControlLabel
                    key={valuesofBox+key}
                        value={valuesofBox.value}
                        control={<Checkbox color="primary" />}
                        label={valuesofBox.label}
                        labelplacement="end"
                        fullWidth
                    />
                )}

            </FormGroup>
            <FormHelperText style={{color:props.error?"red":""}}>{props.helperText}</FormHelperText>
            <br></br>
        </FormControl>
       
    )
}

export default MyCheckBoxList
