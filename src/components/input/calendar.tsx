"use client";
import React from "react";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useController } from "react-hook-form";
import { Button } from "../ui/button";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { format, compareAsc, parseISO } from "date-fns";
import { CalendarIcon } from "lucide-react";

export const CCalendar = ({
  control,
  name,
}: RegistrationFieldProps): React.ReactElement => {
  const { field, fieldState } = useController({ control, name });
  const value = field.value as string | undefined;

  function isDateDisabled(date: Date): boolean {
    return date > (latestBirthDate() ?? new Date());
  }

  function handleSelect(selected: Date | undefined): void {
    field.onChange(selected ? format(selected, "yyyy-MM-dd") : "");
  }

  function latestBirthDate(): Date | undefined {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 13);
    return date;
  }

  return (
    <Field >
      <FieldLabel className='text-[13px] text-[#FAF5FF] font-bold' htmlFor={field.name}>Date of birth</FieldLabel>
      <Popover >
        <PopoverTrigger >
          <Button
            id={name}
            type="button"
            variant="outline"
            className="rounded-[9px] border-[#d8c1f459] bg-[#110c1861]! focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bd8aff] h-11 w-full justify-start gap-3 px-3.5 font-normal shadow-none"
          >
            <CalendarIcon className="size-4 shrink-0 text-[#c3b7d4]" />
            {value ? format(parseISO(value), "MMMM d, yyyy") : <span className="text-[#c3b7d4]">Choose your birthday</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full bg-black flex ">
           <Calendar
            autoFocus
            mode="single"
            onSelect={handleSelect}
            captionLayout="dropdown"
            disabled={isDateDisabled}
            endMonth={latestBirthDate()}
            startMonth={new Date(1900, 0)}
            selected={value ? parseISO(value) : undefined}
            defaultMonth={value ? parseISO(value) : latestBirthDate()}
          />
        </PopoverContent>
      </Popover>
      <FieldError id={`${field.name}-error`}>
        {fieldState.error?.message}
      </FieldError>
    </Field>
  );
};
