// "example to fetch image" 
console.log('about to fetch rainbow');
fetch('rainbow.jpg')
.then(response => {
    console.log(response);
    return response.blob();
})
.then(blob => {
    console.log(blob);
    document.getElementById('rainbow').src = URL.createObjectURL(blob)
});