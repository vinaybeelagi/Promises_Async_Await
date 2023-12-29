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