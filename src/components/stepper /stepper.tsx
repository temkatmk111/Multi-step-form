import { STEPS } from "../constant/step";
import { StepLine } from "./stepLine";
import { StepIndacetor } from "./stepIndacetor";

type StepperType = {
  step: number;
};
const words = [
  "Let's start with you.",
  "Keep it just yours.",
  "Make yourself at home.",
];
const labels = [
  "A few details to make this space your own.",
  "A strong password for everything that's ahead.",
  "The finishing touches. A little personality goes a long way.",
];

export const Stepper = ({ step }: StepperType) => {
  return (
    <div className="relative w-full mb-20">
      <div className="absolute flex inset-0 top-3.5 bg-[#34253F] h-0.5">
        <StepLine filled={step > 1} />
        <StepLine filled={step > 2} />
      </div>
      <div className="flex absolute  inset-x-0  items-center ">
        {STEPS.map(({ Icon, label }, index) => (
          <StepIndacetor
            key={index}
            Icon={Icon}
            label={label}
            number={index + 1}
            step={step}
          />
        ))}
      </div>
      <div className="flex absolute  inset-x-0 top-17  text-[12px] text-[#FAF5FF] font-bold ">
        STEP {step} OF 3
      </div>
      <div className="flex absolute  inset-x-0 top-20 text-[30px] text-[#F4EDFF] font-bold ">
        {words[step - 1]}
      </div>
      <div className="flex absolute  inset-x-0 top-31  text-[12px] text-[#FAF5FF] ">
        {labels[step - 1]}
      </div>
    </div>
  );
};
