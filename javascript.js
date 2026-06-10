// 1. Change Text
function changeText() {
    document.getElementById('myText').innerText = 'Wow! JavaScript is very easy😂!';
}

// 2. Change Color
function changeColor() {
    document.getElementById('colorText').style.color = 'red';
    document.getElementById('colorText').style.fontWeight = 'bold';
}

// 3. Hide Element
function hideElement() {
    document.getElementById('hideText').style.display = 'none';
}

// 4. Show Element
function showElement() {
    document.getElementById('hideText').style.display = 'block';
}

// 5. Greet User
function greetUser() {
    let name = document.getElementById('nameInput').value;
    if (name === '') {
        document.getElementById('greetMsg').innerText = 'Please type your name!';
        document.getElementById('greetMsg').style.color = 'red';
    } else {
        document.getElementById('greetMsg').innerText = 'Hello, ' + name + '! Welcome 👋';
        document.getElementById('greetMsg').style.color = 'green';
    }
}
