/* let p = new Promise((resolve, reject) => {
  let a = 1 + 4;
  if (a == 2) {
    resolve("accepted");
  } else {
    reject("failed");
  }
});

//catch is executed when promise is rejected
//then is executed when promise is accepted

p.then((message) => {
  console.log("This is in the then" + message);
}).catch((message) => {
  console.log("This is in the catch" + message);
});
 */
//****************
//****************
//FETCH

/* fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "User 1",
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data));
   */

fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Paul RICHARD",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
