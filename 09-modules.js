// CommonJS
const { sum } = require("./09.a-submodule");

// ES6 Modules
// import { sum } from "./09.a-submodule.js";

console.log("I'm the main module");

console.log(sum(2, 3));
