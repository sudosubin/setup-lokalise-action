import * as tc from '@actions/tool-cache';
import { OS } from '../types';
import { platform } from './os';
import { lokaliseVersion } from './version';

const getFilename = () => {
  const osPlatform = platform();

  switch (osPlatform) {
    case OS.Windows:
      return 'lokalise2_windows_x86_64.zip';
    case OS.MacOS:
      return 'lokalise2_darwin_x86_64.tar.gz';
    case OS.Linux:
      return 'lokalise2_linux_x86_64.tar.gz';
  }
};

export const download = async () => {
  const osPlatform = platform();
  const version = lokaliseVersion();
  const filename = getFilename();

  const downloadUrl =
    version === 'latest'
      ? `https://github.com/lokalise/lokalise-cli-2-go/releases/${version}/download/${filename}`
      : `https://github.com/lokalise/lokalise-cli-2-go/releases/download/v${version}/${filename}`;

  const lokalisePath = await tc.downloadTool(downloadUrl);

  return osPlatform === OS.Windows
    ? await tc.extractZip(lokalisePath)
    : await tc.extractTar(lokalisePath);
};
