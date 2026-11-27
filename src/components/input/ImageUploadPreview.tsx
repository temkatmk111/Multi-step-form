import { url } from "inspector";
import React from "react";
import { useRef } from "react";

type ImageUploadPreviewType = {
  file: File;
  triggerFile: () => void;
  removeFile: () => void;
};
export const ImageUploadPreview = ({
  file,
  triggerFile,
  removeFile,
}: ImageUploadPreviewType) => {
  const attchImage = (element: HTMLImageElement) => {
    if (!element) return;
    const url = URL.createObjectURL(file);
    element.src = url;
    return () => URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-[#34253F] w-full  h-22.5 border border-dashed rounded-xl  border-[#E2E8F0] flex flex-row justify-between items-center p-3">
      <div className="flex flex-row gap-4">
    
        <img className="w-16 h-16 rounded-full" ref={attchImage} />
        <div className="flex flex-col ">
          <div>name</div>
          <div>
        
            <button className="font-bold" type="button" onClick={triggerFile}>
              Choose another photo
            </button>
          </div>
        </div>
      </div>
      <button className="text-[#45556C]  h-8 w-8rounded-full" type="button" onClick={removeFile}>
        X
      </button>
    </div>
  );
};
