// "example to fetch image" 
// console.log('about to fetch rainbow');
// fetch('rainbow.jpg')
// .then(response => {
//     console.log(response);
//     return response.blob();
// })
// .then(blob => {
//     console.log(blob);
//     document.getElementById('rainbow').src = URL.createObjectURL(blob)
// });

// promise.all
let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];
  let requests = urls.map(url => fetch(url));
  console.log(requests)
  Promise.all(requests)
  .then(reponses =>reponses.forEach(
    reponse => console.log(`${reponse.url} : ${reponse.status}`)
  ));

 
// promise.all example-2
  let p1 = new Promise(resolve => setTimeout(()=> resolve(1),3000))
  let p2 = new Promise(resolve => setTimeout(()=> resolve(2),2000))
  let p3 = new Promise(resolve => setTimeout(()=> resolve(3),1000))
  Promise.all([p1,p2,p3]).then(i => console.log(i));

  // Chaining promises
  const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].name);
    });


    
// returns a promise

let countValue = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

// executes when promise is resolved successfully

countValue
  .then(function successValue(result) {
    console.log(result);
  })

  .then(function successValue1() {
    console.log("You can call multiple functions this way.");
  });