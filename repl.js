const repl = require("node:repl");
const app = require("./app_new.js");

const execute = async (method, params) => {
  const d = new Date();
  const id = String(d.getTime());
  console.time(id);
  await new Promise((resolve) => {
    return resolve(method(params));
  });
  console.timeEnd(id);
};

const replServer = repl.start({
  prompt: "> ",
});

replServer.context["app"] = app;
