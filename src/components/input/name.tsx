"use client"


import React from 'react'
import { Field, FieldError, FieldLabel } from '../ui/field'
import { useController } from 'react-hook-form'
import { Input } from '../ui/input'


export const Name = ({control, name}:RegistrationFieldProps) => {
    const {field ,fieldState} = useController({control , name})
    const isFirstname = field.name === "firstname"
  return (
    <Field className= {  fieldState.invalid? "text-red-500 gap-2 ":"gap-2 "}>
        <FieldLabel className='text-[13px] text-[#FAF5FF] font-bold' htmlFor={field.name}>{isFirstname ?"First name":"Last name"}</FieldLabel>
        <input className='bg-[#34253F] h-11  border border-[#CAD5E2] rounded-lg pl-3'
          id="field.name"
          {...field}
          autoComplete='off'
          placeholder={isFirstname ? "e.g. Alex" : "e.g. Morgan"}
          aria-invalid={fieldState.invalid}
        />
        <FieldError id={`${field.name}-error`}> {fieldState.error?.message}</FieldError>
    </Field>
  )
}
