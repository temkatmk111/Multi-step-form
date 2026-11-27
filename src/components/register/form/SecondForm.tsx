import React from "react";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";
import { Field, FieldError, FieldLabel } from "../../ui/field";
import { Password } from "@/components/input/password";


export const SecondForm = ({form}:StepComponentProps) => {
  return (
    <div className="mt-30 gap-2.5">
      <Password control={form.control} name="password"/>
      <Password control={form.control} name="confirmPassword"/>
    </div>
  );
};
