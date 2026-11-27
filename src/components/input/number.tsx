"use client"
import { useController } from 'react-hook-form'
import { Field, FieldLabel, FieldError } from '../ui/field'
import { Input } from '../ui/input'

export const Number = ({control, name}:RegistrationFieldProps) => {
    const {field ,fieldState} = useController({control,name})
  return (
    <Field className= {  fieldState.invalid? "text-red-500 gap-2 ":"gap-2 "}>
        <FieldLabel className='text-[13px] text-[#FAF5FF] font-bold' htmlFor={field.name}>Phone number</FieldLabel>
        <input className='bg-[#34253F] h-11  border border-[#CAD5E2] rounded-lg pl-3'
          id={field.name}
          type="tel"
          {...field}
          autoComplete='off'
          placeholder="99119911"
          aria-invalid={fieldState.invalid}
        />
        <FieldError id={`${field.name}-error`}> {fieldState.error?.message}</FieldError>
    </Field>
  )
}
