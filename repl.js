const repl = require("node:repl");
const app = require("./app_new.js");

const replServer = repl.start({
  prompt: "> ",
});

replServer.context["app"] = app;
