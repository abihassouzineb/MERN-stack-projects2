// importing chalk library : is a terminal text styling library
import chalk from "chalk";
import figlet from "figlet";

// styling figlet
console.log(figlet.textSync("Hello, World!", { font: "ANSI Shadow" },  { horizontalLayout: "full" }, { verticalLayout: "full" }));
// styling text
console.log("#".repeat(40))
console.log(chalk.red.bold.bgCyan("Hello, World!"));
console.log(chalk.red.underline.italic("Hello, World!"));
console.log(chalk.green("Hello, World!"));
console.log("#".repeat(40))