import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel'
function MyRadioButton(props) {
    return (
        <>
            <FormControl component="fieldset" className="mt-2 mb-2">
                <FormLabel component="legend" labelPlacement="left" style={{color:props.error?"red":""}}>Gender</FormLabel>
                <RadioGroup aria-label="position" name="position" value={props.value} {...props} row>
                    {props.valuesofradiobutton.map((valuesOfgender,key) =>
                        <FormControlLabel key={valuesOfgender+key}
                            value={valuesOfgender.value}
                            control={<Radio color="default" size="small" />}
                            label={valuesOfgender.label}
                            size="small"
                            color="default"
                            labelplacement="end"
                          
                        />

                    )}
                </RadioGroup>
                <FormHelperText style={{color:props.error?"red":""}}>{props.helperText}</FormHelperText>
            </FormControl>

                    
        </>
    )
}

export default MyRadioButton

