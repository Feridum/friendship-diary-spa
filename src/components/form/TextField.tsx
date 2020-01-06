import React, {FC} from "react";
import {Field} from "react-final-form";
import {FormControl, FormHelperText, Input, InputLabel} from "@material-ui/core";

interface TextFieldProps {
    name: string
    type?: string
    label?: string
}

export const TextField: FC<TextFieldProps> = ({name, type = 'text', label = ''}) => {
    return (
        <Field name={name}>
            {({input: {name, onChange, value, ...restInput}, meta}) => {
                const isError = ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched;

                return (
                    <FormControl error={isError}>
                        <InputLabel htmlFor="adornment-password">{label ? label : name}</InputLabel>
                        <Input
                            type={type}
                            value={value}
                            onChange={onChange}
                            placeholder={name}
                        />
                        <FormHelperText id="component-error-text">{isError && meta.error}</FormHelperText>
                    </FormControl>
                )
            }}
        </Field>
    )
}