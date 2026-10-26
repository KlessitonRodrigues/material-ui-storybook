import prettyFormatBundle from './pretty-format.esm.js';

const prettyFormat = prettyFormatBundle?.default || prettyFormatBundle;

export default prettyFormat;
export const plugins = prettyFormatBundle.plugins;
