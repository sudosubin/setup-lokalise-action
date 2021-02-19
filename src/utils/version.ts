import * as core from '@actions/core';

export const lokaliseVersion = () => {
  return core.getInput('lokalise-version').trim();
};
