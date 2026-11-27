"use client";
import { useController } from "react-hook-form";
import { Field, FieldLabel, FieldError } from "../ui/field";
import { Input } from "../ui/input";
import { ImageUpload } from "./ImageUpload";
import { ImageUploadPreview } from "./ImageUploadPreview";
import { useRef } from "react";

export const Image = ({ control, name }: RegistrationFieldProps) => {
  const { field, fieldState } = useController({ control, name });
  const inputRef = useRef<HTMLInputElement>(null);
  const { onChange, value } = field;
  const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!File) return;
    onChange(file);
    event.target.value = "";
  };

  
  const hanldettrigger = () => {  
    inputRef.current?.click()
  };

  const removeFile = () =>{
    onChange(undefined  )
  }
  return ( 
    <Field className={fieldState.invalid ? "text-red-500 gap-2 " : "gap-2 "}>
      <FieldLabel className='text-[13px] text-[#FAF5FF] font-bold' htmlFor={field.name}>Profile photo</FieldLabel>
      <input type="file" ref={inputRef} onChange={handlechange} hidden />
      {value ? (
        <ImageUploadPreview  file={value} triggerFile={hanldettrigger} removeFile={removeFile}/>
      ) : (
        <ImageUpload triggerFile={hanldettrigger} />
      )}

      <FieldError id={`${field.name}-error`}>
        {fieldState.error?.message}
      </FieldError>
    </Field>
  );
};
