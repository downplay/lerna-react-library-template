const { spawn } = require("child_process");

spawn(
    "parcel",
    [`source/index.html`],
    { stdio: "inherit" },
    (err, stdout, stderr) => {
        console.log("Finished");
    }
);
