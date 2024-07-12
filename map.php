<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Find Recycling Centers near you</title>
    <link rel="stylesheet" href="bootstrap.css">
</head>
<body>
    <nav></nav>
    <div class="d-flex flex-column w-100 align-items-center p-2">
        <h1 class="display-4 text-primary">Make your impact with the resources around you!</h1>
        <div class="d-flex align-items-center justify-content-center w-100 mt-4">
            <span class="text-primary display-6">Filter:</span>
            <button class="btn btn-primary mx-2 p-2">Recycling Centers</button>
        </div>
        <div class="d-flex w-100 mt-2 border border-primary">
            <div class="flex-shrink-0 p-2 d-flex flex-column align-items-center border-end border-primary overflow-auto" style="max-height: 80vw" id="places">
            </div>
            <div class="flex-grow-1 p-2" id="description">
            </div>
        </div>
        <p>Note: please allow location permissions</p>
        <h1 class="display-6 text-primary">Why is it important to actually go to recycling centers?</h1>
        <h3 class="fs-5 fw-light text-primary">Yes, letting the recycling truck pick up materials at your house is convenient and effective. However, visiting recycling centers has additional benefits:</h3>
        <p><span class="fw-bold text-primary">Proper Sorting:</span> Recycling centers often have more advanced sorting technology, ensuring materials are processed correctly.</p>
        <p><span class="fw-bold text-primary">Special Items:</span> Some items, like electronics or hazardous waste, may not be picked up curbside but can be recycled at dedicated centers.</p>
        <p><span class="fw-bold text-primary">Community Education:</span> Visiting centers can provide information on recycling practices and how to reduce waste.</p>
        <p><span class="fw-bold text-primary">Encouragement:</span> It reinforces the habit of recycling and makes you more aware of what can and cannot be recycled.</p>
    </div>
</body>
<script src="jquery.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="data.js"></script>
<script src="map.js"></script>
<script src="all.js"></script>
</html>