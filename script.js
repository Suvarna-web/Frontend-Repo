let info;
setTimeout(function () {
  ifn = { name: "Raju" };
}, 2000);

console.log(info);

// ------------------

let data = new Promise((resolve, reject) => {
  if (false) {
    resolve({ name: "Raju" });
  } else {
    reject("Data not found");
  }
});

data
  .then(() => {
    console.log(data);
    return data;
  })
  .then((value) => {
    console.log(value);
    return value;
  })
  .then((value) => {
    console.log(value.name);
  })
  .catch((error) => {
    console.log(error);
  });