// rollup.config.js
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';

const pkg = require('./package.json');
const name = pkg.name;
const version = pkg.version;

// Used for main.js version output at the moment
const plugins = [
    json(),
    replace({
        delimiters: ['{{', '}}'],
        name,
        version
    })
];

export default [
    {
        input: './src/scripts/main.js',
        output: [
            {
                dir: 'www/scripts',
                format: 'cjs',
            }
        ],
        plugins: plugins
    }
];
