function displayUsername(response) {
	console.log(response.data.username);

	let h1 = document.querySelector("h1");
	h1.innerHTML = `Hey ${response.data.username}`;
}


let apiUrl = "https://jsonplaceholder.typicode.com/users/1";

axios.get(apiUrl).then(displayUsername);