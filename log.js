const rewards = [
    {
        "desc": "Using public transportation",
        "carboncoins": 10,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 0,
        "unit": "trip"
    },
    {
        "desc": "Carpooling",
        "carboncoins": 15,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 0,
        "unit": "trip"
    },
    {
        "desc": "Biking or walking instead of driving",
        "carboncoins": 20,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 0,
        "unit": "trip"
    },
    {
        "desc": "Installing energy-efficient appliances",
        "carboncoins": 50,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 0,
        "unit": "appliance"
    },
    {
        "desc": "Using Renewable Energy Sources",
        "carboncoins": 100,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 0,
        "unit": "month"
    },
    {
        "desc": "Reducing Meat Consumption",
        "carboncoins": 30,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 0,
        "unit": "week"
    },
    {
        "desc": "Hiking",
        "carboncoins": 0,
        "admirecoins": 10,
        "sustaincoins": 0,
        "unitycoins": 0,
        "unit": "hour"
    },
    {
        "desc": "Visiting National Parks",
        "carboncoins": 0,
        "admirecoins": 50,
        "sustaincoins": 0,
        "unitycoins": 0,
        "unit": "visit"
    },
    {
        "desc": "Participating in Wildlife Watching",
        "carboncoins": 0,
        "admirecoins": 20,
        "sustaincoins": 0,
        "unitycoins": 0,
        "unit": "event"
    },
    {
        "desc": "Gardening or Planting Trees",
        "carboncoins": 0,
        "admirecoins": 25,
        "sustaincoins": 0,
        "unitycoins": 0,
        "unit": "session"
    },
    {
        "desc": "Photography of Nature",
        "carboncoins": 0,
        "admirecoins": 15,
        "sustaincoins": 0,
        "unitycoins": 0,
        "unit": "session"
    },
    {
        "desc": "Attending Environmental Workshops or Talks",
        "carboncoins": 0,
        "admirecoins": 30,
        "sustaincoins": 0,
        "unitycoins": 0,
        "unit": "event"
    },
    {
        "desc": "Recycling",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 10,
        "unitycoins": 0,
        "unit": "week"
    },
    {
        "desc": "Composting",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 20,
        "unitycoins": 0,
        "unit": "week"
    },
    {
        "desc": "Using Reusable Bags, Bottles, or Containers",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 5,
        "unitycoins": 0,
        "unit": "use"
    },
    {
        "desc": "Participating in Clean-Up Events",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 50,
        "unitycoins": 0,
        "unit": "event"
    },
    {
        "desc": "Properly Disposing of Hazardous Waste",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 30,
        "unitycoins": 0,
        "unit": "instance"
    },
    {
        "desc": "Reducing Water Usage",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 25,
        "unitycoins": 0,
        "unit": "month"
    },
    {
        "desc": "Participating in Community Clean-Ups",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 50,
        "unit": "event"
    },
    {
        "desc": "Volunteering for Environmental Organizations",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 40,
        "unit": "event"
    },
    {
        "desc": "Hosting Environmental Education Sessions",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 60,
        "unit": "session"
    },
    {
        "desc": "Organizing Local Green Events",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 70,
        "unit": "event"
    },
    {
        "desc": "Donating to Environmental Causes",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 30,
        "unit": "donation"
    },
    {
        "desc": "Mentoring on Sustainable Practices",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 35,
        "unit": "session"
    },
    {
        "desc": "Planting Trees in Community Projects",
        "carboncoins": 0,
        "admirecoins": 25,
        "sustaincoins": 0,
        "unitycoins": 25,
        "unit": "session"
    },
    {
        "desc": "Organizing Car-Free Days",
        "carboncoins": 30,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 40,
        "unit": "event"
    },
    {
        "desc": "Hosting Recycling Workshops",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 30,
        "unitycoins": 30,
        "unit": "event"
    },
    {
        "desc": "Attending Eco-Friendly Lifestyle Events",
        "carboncoins": 20,
        "admirecoins": 0,
        "sustaincoins": 20,
        "unitycoins": 0,
        "unit": "event"
    },
    {
        "desc": "Participating in Environmental Advocacy Campaigns",
        "carboncoins": 20,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 40,
        "unit": "campaign"
    },
    {
        "desc": "Using a Programmable Thermostat",
        "carboncoins": 10,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 0,
        "unit": "month"
    },
    {
        "desc": "Unplugging Electronics When Not in Use",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 5,
        "unitycoins": 0,
        "unit": "week"
    },
    {
        "desc": "Switching to LED Bulbs",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 15,
        "unitycoins": 0,
        "unit": "bulb"
    },
    {
        "desc": "Line Drying Clothes Instead of Using a Dryer",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 10,
        "unitycoins": 0,
        "unit": "load"
    },
    {
        "desc": "Working from Home",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 20,
        "unit": "week"
    },
    {
        "desc": "Walking in Local Parks",
        "carboncoins": 0,
        "admirecoins": 5,
        "sustaincoins": 0,
        "unitycoins": 0,
        "unit": "hour"
    },
    {
        "desc": "Reading Environmental Books or Articles",
        "carboncoins": 0,
        "admirecoins": 10,
        "sustaincoins": 0,
        "unitycoins": 0,
        "unit": "book/article"
    },
    {
        "desc": "Watching Documentaries about Nature",
        "carboncoins": 0,
        "admirecoins": 15,
        "sustaincoins": 0,
        "unitycoins": 0,
        "unit": "documentary"
    },
    {
        "desc": "Participating in Virtual Nature Tours",
        "carboncoins": 0,
        "admirecoins": 10,
        "sustaincoins": 0,
        "unitycoins": 0,
        "unit": "tour"
    },
    {
        "desc": "Joining Environmental Clubs or Groups",
        "carboncoins": 0,
        "admirecoins": 20,
        "sustaincoins": 0,
        "unitycoins": 0,
        "unit": "month"
    },
    {
        "desc": "Using a Refillable Water Bottle",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 5,
        "unitycoins": 0,
        "unit": "day"
    },
    {
        "desc": "Avoiding Single-Use Plastics",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 10,
        "unitycoins": 0,
        "unit": "week"
    },
    {
        "desc": "Properly Sorting Recycling",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 5,
        "unitycoins": 0,
        "unit": "week"
    },
    {
        "desc": "Buying Products with Minimal Packaging",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 10,
        "unitycoins": 0,
        "unit": "week"
    },
    {
        "desc": "Using Eco-Friendly Cleaning Products",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 15,
        "unitycoins": 0,
        "unit": "month"
    },
    {
        "desc": "Sharing Environmental Tips on Social Media",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 10,
        "unit": "post"
    },
    {
        "desc": "Encouraging Friends to Recycle",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 5,
        "unit": "person influenced"
    },
    {
        "desc": "Attending Local Environmental Meetings",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 15,
        "unit": "meeting"
    },
    {
        "desc": "Supporting Local Farmers by Buying Local Produce",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 10,
        "unit": "purchase"
    },
    {
        "desc": "Participating in Online Environmental Forums",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 0,
        "unitycoins": 5,
        "unit": "contribution"
    },
    {
        "desc": "Walking or Biking to Local Errands",
        "carboncoins": 10,
        "admirecoins": 5,
        "sustaincoins": 0,
        "unitycoins": 0,
        "unit": "trip"
    },
    {
        "desc": "Using Reusable Shopping Bags",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 5,
        "unitycoins": 5,
        "unit": "trip"
    },
    {
        "desc": "Encouraging Family to Adopt Eco-Friendly Habits",
        "carboncoins": 0,
        "admirecoins": 0,
        "sustaincoins": 10,
        "unitycoins": 10,
        "unit": "family member"
    },
    {
        "desc": "Switching to a Plant-Based Meal",
        "carboncoins": 15,
        "admirecoins": 0,
        "sustaincoins": 10,
        "unitycoins": 0,
        "unit": "meal"
    },
    {
        "desc": "Creating Eco-Friendly Crafts from Recycled Materials",
        "carboncoins": 0,
        "admirecoins": 10,
        "sustaincoins": 10,
        "unitycoins": 0,
        "unit": "project"
    }
]
// clear options
$(".options").html("");


function getTotal() {
    let total = [0, 0, 0, 0];
    $(".options").find("input").each((i, el) => {
        let reward = rewards[i];
        let quantity = $(el).val();
        total[0] += reward.carboncoins * quantity;
        total[1] += reward.admirecoins * quantity;
        total[2] += reward.sustaincoins * quantity;
        total[3] += reward.unitycoins * quantity;
    })
    return total;
}
function updateTotal() {
    total = getTotal();
    $(".total").eq(0).text(total[0]);
    $(".total").eq(1).text(total[1]);
    $(".total").eq(2).text(total[2]);
    $(".total").eq(3).text(total[3]);
}

for (let reward of rewards) {
    let choice = document.createElement("div");
    choice.classList = "d-flex justify-content-center align-items-center p-2 rounded-2 bg-primary my-2";
    choice.innerHTML = `
        <h4 class="text-light mx-2 flex-shrink-0">${reward.desc}</h4>
        <div class="rounded-2 mx-2 flex-shrink-0">
            <span class="bg-white p-1 rounded-start-2 fs-6 fw-light">
                <span class="mx-2">
                    ${reward.carboncoins}
                    <img class="d-inline-block" src="textures/carboncoin.png"/>
                </span>
                <span class="mx-2">
                    ${reward.admirecoins}
                    <img class="d-inline-block" src="textures/admirecoin.png"/>
                </span>
                <span class="mx-2">
                    ${reward.sustaincoins}
                    <img class="d-inline-block" src="textures/sustaincoin.png"/>
                </span>
                <span class="mx-2">
                    ${reward.unitycoins}
                    <img class="d-inline-block" src="textures/unitycoin.png"/>
                </span>
            </span>
            <span class="bg-light p-1 rounded-end-2 border-start border-dark">per ${reward.unit}</span>
        </div>
        <div class="input-group">
            <input type="number" class="form-control" placeholder="0" min="0" max="100" step="1" oninput="this.value = Math.max(0, Math.min(100, Math.floor(this.value)))">
            <span class="input-group-text">${reward.unit}s</span>
        </div>
    `;
    $(choice).find("input").on("input", updateTotal)
    $(".options").append(choice);
}

$("button").click(() => {
    total = getTotal();
    $.ajax({
        type: "POST",
        url: "updatecoins.php",
        data: {
            carboncoins: total[0],
            admirecoins: total[1],
            sustaincoins: total[2],
            unitycoins: total[3]
        },
        success: (data) => {
            if (data == "success") {
                $("button").replaceWith("<span class='text-success'>Coins added!</span>")
            } else {
                $("button").replaceWith("<span class='text-danger'>File never ran.</span>")
            }
        }
    })
    
    
})