// const oldarr = ["Md", "Asif", "Alam"];
// //Before map()
// console.log(oldarr[0]);
// console.log(oldarr[1]);
// console.log(oldarr[2]);

// const newarr = oldarr.map(function (cvalue, i) {
//   return i + ":" + cvalue + "Asif";
// });
// console.log(newarr);

const sdata = [
  { id: 1, name: "Asif", degree: "B.tech" },
  { id: 2, name: "Alam", degree: "M.tech" },
  { id: 3, name: "Albert", degree: "PhD" },
];

const sarr = sdata.map((cvalue) => {
  return `My name is ${cvalue.name}. and my highest degree is ${cvalue.degree}`;
});

console.log(sarr);
