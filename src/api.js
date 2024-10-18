config = {
    SITE_ADDR: "http://localhost:3000",
    API_ADDR: "http://localhost:8000",
    // API_ADDR: "https://m4capi.niconiconii.xyz"
}

export async function login() {
    const response = await fetch(config.API_ADDR + "/login", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Credentials": "true",
		},
		credentials: "include",
	})
	if (response.ok) return true
	return await response.json()
}