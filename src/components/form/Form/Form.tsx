import React from "react";
import {Form as FinalForm, FormProps as FinalFormProps, FormRenderProps} from 'react-final-form'

interface FormProps<T> extends FinalFormProps<T> {
    children: (props: FormRenderProps<T>) => React.ReactElement
}


export const Form = <T extends object>({onSubmit, children, initialValues, ...props}: FormProps<T>) => {
    return (
        <FinalForm<T> onSubmit={onSubmit} initialValues={initialValues} {...props}>
            {props => (
                <form onSubmit={props.handleSubmit}>
                    {children(props)}
                </form>
            )}
        </FinalForm>)
};