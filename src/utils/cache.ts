import * as tc from '@actions/tool-cache';
import { TOOL_NAME } from './constant';
import { lokaliseVersion } from './version';

export const addToCache = async (sourceDir: string) => {
  const version = lokaliseVersion();
  return await tc.cacheDir(sourceDir, TOOL_NAME, version);
};
