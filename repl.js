const repl = require("node:repl");
const app = require("./app_new.js");

const execute = async (method, params) => {
  const d = new Date();
  const id = String(d.getTime());
  console.time(id);
  const p = new Promise((resolve) => {
    return resolve(method(params));
  });
  await p;
  console.timeEnd(id);
};

const replServer = repl.start({
  prompt: "> ",
});

replServer.context["app"] = app;
