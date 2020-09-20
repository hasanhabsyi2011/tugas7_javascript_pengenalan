console.log("perulangan biasa");

var tinggi=[180,181,182,183,184,185,186,187,188,189]

for (var i = 0; i < tinggi.length; i++) {
  console.log(tinggi[i]);
}

console.log("perulangan for of");

for (let tampil of tinggi) {
  console.log(tampil);
}
