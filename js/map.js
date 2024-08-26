const locations = locs.filter(location => {
    return location.address && location.longitude && location.latitude;
});

function distance(lat1, lat2, lon1, lon2) {
    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI/180; // φ, λ in radians
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (lon2-lon1) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    const d = R * c; // in metres

    return Math.round(d)/1000;
}

function updatePlaces() {
    console.log("hello")
    $("#places, #description").html("Loading...");
    navigator.geolocation.getCurrentPosition(function(position){
        const {latitude, longitude} = position.coords;
        locations.forEach((location) => {
            location['distance'] = distance(latitude, location.latitude, longitude, location.longitude);
        })
        locations.sort((a, b) => a.distance - b.distance);
        $("#places, #description").html("");
        locations.forEach((location) => {
            var button = $("<button>", {
                class: "btn btn-light rounded-0 w-100 p-1",
                html: `${location.name} <span class="rounded-pill bg-primary text-light p-1">${location.distance} km</span>`
            });
            button.click(() => {
                $("#description").html(`
                    <h3>${location.name}</h3>
                    <h4>${location.address}</h4>
                    <h4>${location.phone_number}</h4>
                `);
            })
            $("#places").append(button);
        })
    })
}

updatePlaces();