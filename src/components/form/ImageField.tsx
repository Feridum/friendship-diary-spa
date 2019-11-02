import React, {FC, useRef} from "react";
import {Field} from "react-final-form";
import {FormControl, FormHelperText, makeStyles, Typography} from "@material-ui/core";

interface ImageFieldProps {
    name: string
    label: string;
}

const toBase64 = (file: Blob) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.readAsDataURL(file);
        reader.onload = async () => {
            await resolve(reader.result)
        };
        reader.onerror = error => reject(error);
    });
}

const useStyles = makeStyles({
        image: {
            height: 400,
        },
    })
;

export const ImageField: FC<ImageFieldProps> = ({name, label}) => {
    const file = useRef(null);
    const classes = useStyles();

    return (
        <Field name={name}>
            {({input: {name, onChange, value, ...restInput}, meta}) => {
                const isError = ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched;

                const handleFileUpload = async () => {
                    if (file && file.current) {
                        // @ts-ignore-next-line
                        const result = await toBase64(file.current.files[0]);

                        onChange(result);
                    }
                };

                return (
                    <FormControl error={isError}>
                        <Typography variant="h6" component="h6">
                            {label}
                        </Typography>
                        <input type='file' onChange={handleFileUpload} ref={file}/>
                        {value && <img src={value} className={classes.image}/>}
                        <FormHelperText id="component-error-text">{isError && meta.error}</FormHelperText>
                    </FormControl>
                )
            }}
        </Field>
    )
}