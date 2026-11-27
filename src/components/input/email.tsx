"use client"
import React from 'react'
import { Field, FieldError, FieldLabel } from '../ui/field'
import { useController } from 'react-hook-form'



export const Email = ({control, name}:RegistrationFieldProps) => {
    const {field ,fieldState} = useController({control , name})
  return (
    <Field className= {  fieldState.invalid? "text-red-500 gap-2 ":"gap-2 "}>
        <FieldLabel className='text-[13px] text-[#FAF5FF] font-bold' htmlFor={field.name}>Email address</FieldLabel>
        <input className='bg-[#34253F] h-11  border border-[#CAD5E2] rounded-lg pl-3'
          id="field.name"
          {...field}
          autoComplete='off'
          placeholder="you@example.com"
          aria-invalid={fieldState.invalid}
        />
        <FieldError id={`${field.name}-error`}> {fieldState.error?.message}</FieldError>
    </Field>
  )
}
