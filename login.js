document.querySelector('#register').addEventListener('click', function() {
    const name = document.querySelector('#registerName').value;
    const email = document.querySelector('#registerEmail').value;
    const password = document.querySelector('#registerPassword').value;
	fetch('https://whatyearisit-backend-nine-ivory.vercel.app/signup', { 
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ 
            name: name,
            email: email,
            password: password
        })
     })
		.then(response => response.json())
		.then((data) => {
		console.log('Réponse de la BDD : ', data);
        document.querySelector('#signup-title').textContent = data.result
        window.location.assign('index.html');
	    })
})

document.querySelector('#connection').addEventListener('click', function() {
    const email = document.querySelector('#connectionEmail').value;
    const password = document.querySelector('#connectionPassword').value;

	fetch('https://whatyearisit-backend-nine-ivory.vercel.app/signin', { 
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ 
            email: email,
            password: password
        })
     })
		.then(response => response.json())
		.then((data) => {
		console.log('Réponse de la BDD : ', data);
        if (data.result === true) {
            window.location.assign('index.html');
        }
	    })
})