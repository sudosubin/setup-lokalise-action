import * as core from '@actions/core';
import { addToCache } from './utils/cache';
import { download } from './utils/download';

export const run = async () => {
  try {
    core.info('Downloading from github release');
    const toolPath = await download();

    core.info('Add lokalise dir to cache');
    const cachedPath = await addToCache(toolPath);

    core.info('Add to system path');
    core.addPath(cachedPath);
  } catch (error) {
    core.setFailed(`Action failed for uncaught error: ${error}`);
  }
};

run();
