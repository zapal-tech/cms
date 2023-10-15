import { CollectionBeforeValidateHook } from 'payload/types';

export const checkImageAspectRatio =
  (x: number, y: number): CollectionBeforeValidateHook =>
  async ({ data }) => {
    const imageAspectRatio = data?.width / data?.height;
    const requiredAspectRatio = x / y;

    if (imageAspectRatio !== requiredAspectRatio) {
      throw new Error(`Image aspect ratio must be ${x}:${y}`);
    }
  };
