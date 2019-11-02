import React, {FC} from "react";
import {FormControl, FormHelperText, useTheme} from "@material-ui/core";
import {Field} from "react-final-form";
import Select from 'react-select';
import {useStyles} from "./Autcomplete.styles";
import {components} from "./Components";

interface AutocompleteProps {
    name: string;
    placeholder?: string;
    options: Array<{ label: string, value: string }>
    isMulti?: boolean
}

export const Autocomplete: FC<AutocompleteProps> = ({options, name, isMulti = false, placeholder}) => {
    const classes = useStyles();
    const theme = useTheme();

    const selectStyles = {
        input: (base: any) => ({
            ...base,
            color: theme.palette.text.primary,
            '& input': {
                font: 'inherit',
            },
        }),
    };

    return (
        <Field name={name}>
            {({input: {name, onChange, value, ...restInput}, meta}) => {
                const isError = ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched;

                return (
                    <FormControl error={isError}>
                        <Select
                            classes={classes}
                            styles={selectStyles}
                            placeholder={placeholder}
                            options={options}
                            components={components}
                            value={value}
                            onChange={onChange}
                            isMulti={isMulti}
                        />
                        <FormHelperText id="component-error-text">{isError && meta.error}</FormHelperText>
                    </FormControl>
                )
            }}
        </Field>
    )
}