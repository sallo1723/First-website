let myImage = document.querySelector('img');

myImage.onclick = function() {
    let ImageSrc = myImage.getAttribute('Src');
    if(ImageSrc === 'images/golden-puppy.jpg'){
        myImage.setAttribute('src','images/brown-puppy.jpg');
        alert('The brown puppy will appear!');
    } else {
        myImage.setAttribute('src','images/golden-puppy.jpg');
        alert('The golden puppy will appear!');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to the puppy place, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to the puppy place, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}