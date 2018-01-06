import babel from "rollup-plugin-babel";
import babelrc from "babelrc-rollup";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

import pkg from "./package.json";

const plugins = [
    babel(
        Object.assign(
            {},
            babelrc({
                path: ".babelrc.rollup.json",
                addModuleOptions: false
            }),
            {
                exclude: "node_modules/**",
                runtimeHelpers: true
            }
        )
    )
];

const modules = ["index", "redux"];

export default modules
        .map(name =>
            // CommonJS (for Node) and ES module (for bundlers) build.
            // (We could have three entries in the configuration array
            // instead of two, but it's quicker to generate multiple
            // builds from a single configuration where possible, using
            // the `targets` option which can specify `dest` and `format`)
            ({
                entry: `source/${name}.js`,
                external: [
                    "react",
                    "prop-types",
                    "url-pattern",
                    "hoist-non-react-statics"
                ],
                targets: [
                    { dest: `dist/${name}.js`, format: "cjs" },
                    { dest: `dist/${name}.cjs.js`, format: "cjs" }
                ],
                plugins: plugins.concat([resolve(), commonjs()])
            }));
