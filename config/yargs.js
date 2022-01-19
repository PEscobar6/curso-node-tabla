const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      describe: 'Es la base de la tabla de multiplicar'
    },
    l: {
      alias: "listar",
      type: "boolean",
      default: false,
      describe: "Muestra la tabla en consola"
    },
    h: {
        alias: "hasta",
        type: "number",
        default: 10,
        describe: "Es el alcance que va a tener la tabla"
    }
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    if (isNaN(argv.h)) {
        throw "el alcance tiene que ser un número";
      }
    return true;
  }).argv;

module.exports = argv;
