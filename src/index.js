
let apiUrl = "https://jsonplaceholder.typicode.com/users";


function displayUsername(response) {
	console.log(response.data.username);

	let h1 = document.querySelector("h1");
	h1.innerHTML = `Hey ${response.data.username}`;
}

let userId = 1; // Assign a value to the userId variable
let getUserName = `${apiUrl}/${userId}`;

axios.get(getUserName).then(displayUsername);

//const element = document.querySelector('.your-class');
//In this example, the variable element
//will store the first element having the class name your - class.


// querySelector("#myElement"); 
// In the above example, the querySelector method is used to 
// select the element with the ID "myElement".The ID is specified 
// as "#myElement" in the CSS selector format.
// This will return the first element that matches the specified ID.


function displayFullName(response) {
	console.log(response.data.name);

	let fullName = document.querySelector('.fullName');
	fullName.innerHTML = `Hello, my name is ${response.data.name}!`;
}

let userId2 = 5;
let getName = `${apiUrl}/${userId2}`;

axios.get(getName).then(displayFullName);

