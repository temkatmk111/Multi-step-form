"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Stepper } from "@/components/stepper /stepper";
import React, { useState ,useEffect} from "react";
import { RegisterActions } from "./RegisterActions";
import { Form } from "radix-ui";
import { useForm } from "react-hook-form";
import { RegisterInput } from "./RegisterInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "../../../../schema/register.schema";
import { defaults } from "@/components/constant";
import { Field } from "../../ui/field";
import { saveDraft,loadDraft } from "@/lib/local-storage";

export const RegisterForm = () => {
  const form = useForm<RegistrationValues>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
    defaultValues: defaults,
  });

  const [step, setStep] = useState<FormStep | 3>(0);

  const submit = (values: RegistrationValues) => {
    console.log(values);

    setStep(3);
  };

  const startOver = () => {
    setStep(0);
  };

 useEffect(()=>{
  const savedValues = loadDraft()
  console.log(savedValues);
  
 },[])





  const handleback = () => {
    const previousStep = step === 2 ? 1 : 0;
    setStep(previousStep);
  };

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
  if(step ===3)return
    if (step === 2) return form.handleSubmit(submit)(event);
    // const valid = await form.trigger(fields[step],{shouldFocus :true})
    // if(!valid) return;
   
    const nextStep = step === 0 ? 1 : 2;
    saveDraft(nextStep, form.getValues() as unknown as Parameters<typeof saveDraft>[1])
    setStep(nextStep);
  };

  return (
    <Card className="relative w-full gap-0 rounded-[20px] border-[#ddc2ff5c] bg-transparent p-6">
      <CardContent className="p-4  sm:p-6"></CardContent>
      <Stepper step={step + 1} />
      <form onSubmit={handleSubmit}>
        <RegisterInput step={step} form={form} />
        {step === 3 ? (
          <button
            type="button"
            onClick={startOver}
            className="h-11 w-full bg-red"
          >
            Start over
          </button>
        ) : (
          <RegisterActions step={step} onBack={handleback} />
        )}
      </form>
    </Card>
  );
};
