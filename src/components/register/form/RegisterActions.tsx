type RegisterActionseType = {
  step : FormStep | 3;
  onBack :()=>void

};

export const RegisterActions = ({ step,onBack}: RegisterActionseType) => {
  return (
    <div className="flex flex-row gap-3 mt-3">
      {step > 0 && <button className="w-21 h-11 bg-[#34253F] rounded-lg border border-[#90A1B9] " type="button" onClick={onBack}>Back</button>}
      <button className="w-full rounded-lg h-11 bg-[#BE94FD] text-[#261432]   " type="submit">Continue</button>
    </div>
  );
};
