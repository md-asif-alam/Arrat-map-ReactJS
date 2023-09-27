const oldarr = ["Md", "Asif", "Alam"];
//Before map()
console.log(oldarr[0]);
console.log(oldarr[1]);
console.log(oldarr[2]);

const newarr = oldarr.map(function (cvalue, i) {
  return i + ":" + cvalue + "Asif";
});
console.log(newarr);
