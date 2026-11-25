
import { Name } from "@/components/input/name";
import { Email } from "@/components/input/email";
import { Form } from "react-hook-form";

export const FirstForm = ({ form }: StepComponentProps) => {
  return (
    <div className="mt-30">
      <div className="space-y-5 flex gap-5 ">
        <Name control={form.control} name="firstname" />
        <Name   control={form.control} name="lastname" />
      </div>
      <Email control={form.control} name="email"/>
    </div>
  );
};
