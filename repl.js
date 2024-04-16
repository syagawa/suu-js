const repl = require("node:repl");
const app = require("./app.js");

const execute = async (method, params) => {
  const d = new Date();
  const id = String(d.getTime());
  console.time(id);
  const res = await new Promise((resolve) => {
    return resolve(method(params));
  })
    .catch(e => e)
    .then(res => res);
  console.log(res);
  console.timeEnd(id);
};

const replServer = repl.start({
  prompt: "> ",
});

replServer.context["app"] = app;
replServer.context["execute"] = execute;
