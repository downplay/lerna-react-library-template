const { execSync } = require("child_process");

const exec = (cmd, env) =>
    execSync(cmd, {
        stdio: "inherit",
        env: Object.assign({}, process.env, env)
    });

if (process.env.CI) {
    exec("lerna run build --stream --ignore my-demo-component-demo");
} else {
    exec("lerna run build --stream");
}
