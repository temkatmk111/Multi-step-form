import { registrationSchema } from "./schema/register.schema";
import { z } from "zod";
import { UseFromReturn , Control } from "react-hook-form";

declare global {
  type FormStep = 0 | 1 | 2;

  type RegistrationValues = z.infer<typeof registrationSchema>;

  type StepComponentProps = { form: UseFromReturn<RegistrationValues> };
  type RegistrationFieldProps= { control : Control<RegistrationValues>; name:T}
}
