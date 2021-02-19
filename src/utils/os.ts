import { OS } from '../types';

export const platform = () => {
  const osPlatform = process.platform as OS;

  if (!Object.values(OS).includes(osPlatform)) {
    throw new Error(`Unexpected OS: ${osPlatform}`);
  }

  return osPlatform;
};
