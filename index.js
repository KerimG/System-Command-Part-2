const { exec } = require("child_process");
exec("system wrkactjob", { encoding: "latin1" }, (error, stdout, stderr) => {
  console.log(stdout);
});
