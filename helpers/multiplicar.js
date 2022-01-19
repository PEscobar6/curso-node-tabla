const fs = require("fs");
const colors = require('colors');
const crearArchivo = async (base = 5, isListar, alcance) => {
  let salida = "";
  let consola = "";
  for (let i = 1; i <= alcance; i++) {
    salida += `${base} x ${i} = ${base * i}\n`;
    consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
  }

  if (isListar) {
    console.log(colors.green.bold("==============="));
    console.log(colors.white.bold(` TABLA DEL ${base} `));
    console.log(colors.green.bold("==============="));
    console.log(consola);
  }

  try {
    let response = await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `./salida/tabla-${base}.txt`;
  } catch (error) {
    return new Error(error);
  }
};
module.exports = { crearArchivo };
