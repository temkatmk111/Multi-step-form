import React from 'react'
import { useController } from 'react-hook-form'
import { Field, FieldLabel, FieldError } from '../ui/field'

export const Password = ({control, name}:RegistrationFieldProps) => {
    const {field ,fieldState} = useController({control , name})
    const isFirstname = field.name === "password"
  return (
    <Field className= {  fieldState.invalid? "text-red-500 gap-2 ":"gap-2 "}>
        <FieldLabel className='text-[13px] text-[#FAF5FF] font-bold' htmlFor={field.name}>{isFirstname ?"Password":"Confirm password"}</FieldLabel>
        <input className='bg-[#34253F] h-11  border border-[#CAD5E2] rounded-lg pl-3'
          id="field.name"
          {...field}
          autoComplete='off'
          placeholder={isFirstname ? "Create strong password" : "Comfirm password "}
          aria-invalid={fieldState.invalid}
        />
        <FieldError id={`${field.name}-error`}> {fieldState.error?.message}</FieldError>
    </Field>
  )
}