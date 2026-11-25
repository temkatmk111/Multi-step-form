import { cn } from "cn";
import { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

type StepIndacetorType = {
  label: string;
  Icon: LucideIcon;
  step:number
  number:number
};

export const StepIndacetor = ({ label, Icon ,step , number}: StepIndacetorType) => {
  return (
    <div className="flex  absolute top-0  inset-x-0  items-center justify-between  flex-col first:items-start last:items-end">
      
      <div className={cn("h-8 w-8 rounded-full  border border-[#007A55] flex justify-center items-center" , step <=number? "bg-[#34253F]" : "bg-[#BE94FD]")}>
        {step <=number ? number:<Check />}
      </div>
      <div className="flex  items-center  ">
        <div><Icon className="  w-4 text-[#45556C]"/></div>
        <div className="text-[#FAF5FF] text-[12px] ">{label}</div>
      </div>
    </div>
  );
};
