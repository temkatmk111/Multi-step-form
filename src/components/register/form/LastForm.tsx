import React from "react";
import { Field, FieldLabel, FieldError } from "../../ui/field";
import { Input } from "../../ui/input";
import { Image } from "@/components/input/image";
import { Number } from "@/components/input/number";
import { CCalendar } from "@/components/input/calendar";

export const LastForm = ({ form }: StepComponentProps) => {
  return (
    <div className="mt-30 flex flex-col gap-2.5">
      <Number control={form.control} name="phoneNumber" />
      <CCalendar control={form.control} name="dateOfBirth" />
      <Image control={form.control} name="profileImage" />
    </div>
  );
};
