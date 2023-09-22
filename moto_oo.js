function Veiculo() {
  this.proprietario = "David Vilela";
  this.acelera = function () {
    console.log(this.proprietario + " acelera o motor");
  };
}

function Moto1(modelo, fabricante, anoFabricacao) {
  this.modelo = modelo;
  this.fabricante = fabricante;
  this.anoFabricacao = anoFabricacao;

  Veiculo.call(this);
}

function Moto2(modelo, fabricante, anoFabricacao) {
  this.modelo = modelo;
  this.fabricante = fabricante;
  this.anoFabricacao = anoFabricacao;

  Veiculo.call(this);
}

function Moto3(modelo, fabricante, anoFabricacao) {
  this.modelo = modelo;
  this.fabricante = fabricante;
  this.anoFabricacao = anoFabricacao;

  Veiculo.call(this);
}

const moto1 = new Moto1("Boulevard M800", "Suzuki", 2007);
const moto2 = new Moto2("Shadow 750", "Honda", 1999);
const moto3 = new Moto3("Dragstar", "Yamaha", 2009);

console.log(moto1);
console.log(moto2);
console.log(moto3);

moto1.acelera();
moto2.acelera();
moto3.acelera();
