import { Input } from "@/components/ui/input";
import React from "react";
import { FirstForm } from "./FirstForm";
import { SecondForm } from "./SecondForm";
import { LastForm } from "./LastForm";
import { Success } from "./Success";

type RegisterInputType = {
  step: FormStep | 3;
} & StepComponentProps;

const stepCompoents = [FirstForm, SecondForm, LastForm, Success] as const;

export const RegisterInput = ({ step, form }: RegisterInputType) => {
  if (step === 3) {
    const Success = stepCompoents[step];
    return <Success />;
  }
  const ActiveStep = stepCompoents[step];

  return <ActiveStep form={form} />;
};
