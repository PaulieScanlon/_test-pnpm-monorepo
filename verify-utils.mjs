import { testUtil, helloWorld } from "utils";

console.log("testUtil:", testUtil({ param: "dev" }));
console.log("helloWorld:", typeof helloWorld === "function" ? "OK" : "Not found");
