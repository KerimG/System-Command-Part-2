const app = require("express")();
const { exec } = require("child_process");
let port = 8080;

app.get("/wrkactjob", (req, res) => {
  exec("system wrkactjob", { encoding: "latin1" }, (error, stdout, stderr) => {
    res.send(`<pre>${stdout}</pre>`);
  });
});

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
