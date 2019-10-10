// rollup.config.js
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';

const pkg = require('./package.json');
const name = pkg.name;
const version = pkg.version;

// Used for serviceworker.js in this instance
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
        // Me trying to dynamically update the service worker version number
        input: './src/serviceworker.js',
        output: [
            {
                dir: 'dist',
                format: 'cjs',
            }
        ],
        plugins: plugins
    }
];
