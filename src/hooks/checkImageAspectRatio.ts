import { CollectionBeforeValidateHook } from 'payload/types';

export const checkImageAspectRatio =
  (x: number, y: number): CollectionBeforeValidateHook =>
  async ({ data }) => {
    const imageAspectRatio = data?.width / data?.height;
    const requiredAspectRatio = x / y;
    const isValidAspectRatio =
      imageAspectRatio - requiredAspectRatio > -0.001 && imageAspectRatio - requiredAspectRatio < 0.001;

    if (!isValidAspectRatio)
      throw new Error(`Image aspect ratio must be ${x}:${y}. Image is ${data?.width}:${data?.height}`);
  };
