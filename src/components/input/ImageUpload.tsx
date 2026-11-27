import { CloudUpload, CloudUploadIcon } from "lucide-react";
import React, { useRef } from "react";

type ImageUploadType = {
  triggerFile: () => void;
};
export const ImageUpload = ({ triggerFile }: ImageUploadType) => {
  return (
    <button  className="bg-[#34253F] w-full  h-22.5 border border-dashed rounded-xl  border-[#E2E8F0] flex flex-col justify-around items-center" type="button" onClick={triggerFile}>
      <CloudUploadIcon className="text-[#C5A6FF]"/>
     <div className="text-[13px] text-[#FAF5FF] font-bold">Choose photo</div>
     <div className="text-[#FAF5FF] text-[10px] ">JPG, PNG or WebP · Up to 5 MB</div>
    </button>
  );
};
