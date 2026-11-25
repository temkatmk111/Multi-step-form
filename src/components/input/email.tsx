import React from 'react'
import { Field, FieldError, FieldLabel } from '../ui/field'
import { useController } from 'react-hook-form'



export const Email = ({control, name}:RegistrationFieldProps) => {
  return (
    <Field>
        <FieldLabel></FieldLabel>
        <input type="text" />
        <FieldError></FieldError>


    </Field>
  )
}
