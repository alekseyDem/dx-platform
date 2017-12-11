import path from 'path';
import fs from 'fs';
let OVERRIDES = {};

export const TOOLS_ROOT = path.join(__dirname, '../');

export const ROOT = process.cwd();

if (fs.existsSync(path.resolve(ROOT, '.dx-tools'))) {
	OVERRIDES = require(path.resolve(ROOT, '.dx-tools'));
}

export const NODE_MODULES_PATH = path.resolve(ROOT, 'node_modules');
export const TOOLS_NODE_MODULES_PATH = path.resolve(TOOLS_ROOT, 'node_modules');

export const TOOLS_CONFIG_PATH = path.resolve(TOOLS_ROOT, 'config');
export const TOOLS_UTILS_PATH = path.resolve(TOOLS_ROOT, 'utils');

export const PKG = require(path.join(ROOT, 'package.json'));

export const SRC_PATH = OVERRIDES.SRC_PATH || path.resolve(ROOT, 'src');
export const DIST_PATH = OVERRIDES.DIST_PATH || path.resolve(ROOT, 'lib');
export const STYLUS_PROCESSABLES = OVERRIDES.STYLUS_PROCESSABLES || [];

export const STATS = OVERRIDES.STATS || {
	assets: true,
	colors: true,
	version: false,
	hash: false,
	timings: false,
	chunks: false,
	chunkModules: false,
	children: false
};