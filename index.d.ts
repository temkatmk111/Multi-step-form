declare global {
  type FormStep = 0 | 1 | 2;

  type UploadResult = { url: string };

  type ApiError = { error: string };

  type UploadedImageType = {
    file: File;
    result: UploadResult;
  };

}
