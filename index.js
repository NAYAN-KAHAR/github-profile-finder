
let display = document.querySelector('#display');
let h2 = document.querySelector('#show-message');

let name = document.querySelector('#name');
let form = document.querySelector('#form');
let img = document.querySelector('#img');
let title = document.querySelector('#title');
let bio = document.querySelector('#bio');
let link = document.querySelector('#link');

let repository = document.querySelector('#repository2');
let followers = document.querySelector('#followers2');
let following = document.querySelector('#following2');


form.addEventListener('submit',async function(e){
	e.preventDefault();
	display.style.display='block';
	const value = name.value;
	name.value="";
	const name_title = title.value;
	try{
		let response = await fetch(`https://api.github.com/users/${value}`);
		response = await response.json();
		console.log(response)
		if (response.message === 'Not Found') {
		display.style.display = "none";
		h2.innerHTML = "profile not found";
		}else{
		h2.style.display ="none";
		img.src= response.avatar_url;
		title.innerText = response.name;
		bio.innerText = response.bio;
		link.href =response.html_url;
		repository.innerText =response.public_repos;
		followers.innerText = response.followers;
		following.innerText = response.following;
	
		}
		
	}
	catch(error){console.log(error)}
	
})

let themeToggle = document.querySelector('#theme-toggle'); // Theme toggle button


// Theme toggle functionality
themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  
  // Change the icon based on the mode
  if(document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = '🌞';
  } else {
    themeToggle.textContent = '🌙';
  }
});

