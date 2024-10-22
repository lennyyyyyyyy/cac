const config = {
    SITE_ADDR: "http://localhost:3000",
    API_ADDR: "http://localhost:8000",
}

export async function getAccountData(data) {
	const response = await fetch(config.API_ADDR + '/getuser.php', {
		method: 'POST',
		body: JSON.stringify({
			id: data,
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	if (response.ok) {
		return await response.json(); // assuming the response is in JSON format
	}
	return undefined;

}

export async function loginApi(data) {
	const response = await fetch(config.API_ADDR + "/verifyuser.php", {
		method: "POST",
		body: JSON.stringify(data),
	})

	if (response.ok) {
		return await response.json(); // Return the actual data
	}
	else {
		console.log('Request failed:', response.status);
		return false;
	}
}

export async function signupApi(data) {
	const response = await fetch(config.API_ADDR + "/adduser.php", {
		method: "POST",
		body: JSON.stringify(data),
	})

	if (response.ok) {
		return await response.json();
	}
	else {
		console.log('Request failed:', response.status);
		return false;
	}
}

export async function editProfileApi(data) {
	const response = await fetch(config.API_ADDR + "/edituser.php", {
		method: "POST",
		body: JSON.stringify(data),
	})

	if (response.ok) {
		return await response.json();
	}
	else {
		console.log('Request failed:', response.status);
		return false;
	}
}