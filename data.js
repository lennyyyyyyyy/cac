const locs = [
  {
    "name": "Painesville Recycling",
    "address_1": "83 Stage Ave",
    "address_2": "Painesville, OH 44077",
    "phone_number": "(440) 354-5700",
    "address": "530 Grant St Akron, OH 44311",
    "latitude": 41.0691008,
    "longitude": -81.5183472
  },
  {
    "name": "Royal Oak Recycling",
    "address_1": "16065 Industrial Ln",
    "address_2": "Cleveland, OH 44135",
    "phone_number": "(216) 325-1500",
    "address": "1535 Exeter Rd Bldg E Akron, OH 44306",
    "latitude": 41.4730976,
    "longitude": -81.7693258
  },
  {
    "name": "Alliance Recycling Center",
    "address_1": "15969 River St NE",
    "address_2": "Alliance, OH 44601",
    "phone_number": "(330) 821-8057",
    "address": "3588 Mogadore Rd Kent, OH 44240",
    "latitude": 41.3957186,
    "longitude": -81.8359082
  },
  {
    "name": "Summit e-Waste Recycling Solutions",
    "address_1": "530 Grant St",
    "address_2": "Akron, OH 44311",
    "phone_number": "(330) 800-6657",
    "address": "19100 Holland Rd Brook Park, OH 44142",
    "latitude": 41.087106,
    "longitude": -81.3861002
  },
  {
    "name": "Hazel Street Recycling",
    "address_1": "963 Hazel St",
    "address_2": "Akron, OH 44305",
    "phone_number": "(330) 258-2040",
    "address": "1125 National Pkwy Mansfield, OH 44903",
    "latitude": 40.8372809,
    "longitude": -81.2595519
  },
  {
    "name": "SA Recycling",
    "address_1": "3101 Varley Ave SW",
    "address_2": "Canton, OH 44706",
    "phone_number": "(330) 484-7610",
    "address": "3894 State St NW North Canton, OH 44720",
    "latitude": 41.5614631,
    "longitude": -81.5655454
  },
  {
    "name": "SA Recycling",
    "address_1": "Westgate Dr",
    "address_2": "Beaver Falls, PA 15010",
    "phone_number": "(724) 846-9400",
    "address": "1201 Graham Rd Stow, OH 44224",
    "latitude": 41.284215,
    "longitude": -81.481781
  },
  {
    "name": "Westpark Recycling Co.",
    "address_1": "401 Lowell St",
    "address_2": "Elyria, OH 44035",
    "phone_number": "(440) 281-9415",
    "address": "5383 Massillon Rd North Canton, OH 44720",
    "latitude": 41.0323041,
    "longitude": -81.473209
  },
  {
    "name": "SA Recycling",
    "address_1": "701 W Hopocan Ave",
    "address_2": "Barberton, OH 44203",
    "phone_number": "(330) 745-4437",
    "address": "600 E Exchange St Akron, OH 44306",
    "latitude": 41.456428,
    "longitude": -81.4930432
  },
  {
    "name": "SA Recycling",
    "address_1": "800 Infirmary Rd",
    "address_2": "Elyria, OH 44035",
    "phone_number": "(440) 322-1333",
    "address": "352 South St Galion, OH 44833",
    "latitude": 40.7713583,
    "longitude": -82.5563295
  },
  {
    "name": "SA Recycling",
    "address_1": "972 Old Columbus Rd",
    "address_2": "Wooster, OH 44691",
    "phone_number": "(330) 264-8956",
    "address": "15535 Burton-Windsor Rd Middlefield, OH 44062",
    "latitude": 41.0709172,
    "longitude": -81.5007601
  },
  {
    "name": "SA Recycling",
    "address_1": "4226 E 71st St",
    "address_2": "Cleveland, OH 44105",
    "phone_number": "(216) 341-3400",
    "address": "7450 Oak Leaf Rd Oakwood, OH 44146",
    "latitude": 41.485068,
    "longitude": -81.757317
  },
  {
    "name": "Medina Recycling Inc",
    "address_1": "370 Lake Rd",
    "address_2": "Medina, OH 44256",
    "phone_number": "(330) 723-4334",
    "address": "3651 Broadway Lorain, OH 44052",
    "latitude": 40.791191,
    "longitude": -82.7459154
  },
  {
    "name": "North Canton Metal Recycling",
    "address_1": "6434 Wise Ave NW",
    "address_2": "North Canton, OH 44720",
    "phone_number": "(330) 499-5500",
    "address": "708 Marks Rd #410 Valley City, OH 44280",
    "latitude": 41.3616343,
    "longitude": -81.5183171
  },
  {
    "name": "SA Recycling",
    "address_1": "780 Warmington Rd SW",
    "address_2": "Navarre, OH 44662",
    "phone_number": "(330) 879-5661",
    "address": "5505 Center Rd Lowellville, OH 44436",
    "latitude": 40.727039,
    "longitude": -82.785596
  },
  {
    "name": "WM - Akron Greenstar Recycling",
    "address_1": "1535 Exeter Rd Bldg E",
    "address_2": "Akron, OH 44306",
    "phone_number": "(844) 492-9417",
    "address": "470 N Arlington St Akron, OH 44305",
    "latitude": 41.4363092,
    "longitude": -82.1630666
  },
  {
    "name": "AIM Recycling Cleveland",
    "address_1": "1240 Marquette St",
    "address_2": "Cleveland, OH 44114",
    "phone_number": "(216) 266-0509",
    "address": "540 S Abbe Rd Elyria, OH 44035",
    "latitude": 41.103362,
    "longitude": -80.64178
  },
  {
    "name": "Gateway Recycling Inc",
    "address_1": "4223 E 49th St",
    "address_2": "Cleveland, OH 44125",
    "phone_number": "(216) 341-8777",
    "address": "8492 Valley View Rd Macedonia, OH 44056",
    "latitude": 41.0232047,
    "longitude": -80.545164
  },
  {
    "name": "Clover Recycling",
    "address_1": "1411 W Market St",
    "address_2": "Warren, OH 44485",
    "phone_number": "(877) 737-4286",
    "address": "3049 E 55th St Cleveland, OH 44127",
    "latitude": 40.9281845,
    "longitude": -81.417109
  },
  {
    "name": "Richland County Solid Waste Recycling and Electronics Collection Facility",
    "address_1": "1125 National Pkwy",
    "address_2": "Mansfield, OH 44903",
    "phone_number": "(419) 774-5861",
    "address": "1536 1st St A Newton Falls, OH 44444",
    "latitude": 41.1989123,
    "longitude": -80.9651319
  },
  {
    "name": "Streetsboro Metal Recycling",
    "address_1": "10380 OH-43",
    "address_2": "Streetsboro, OH 44241",
    "phone_number": "(330) 995-0340",
    "address": "3550 W 140th St Cleveland, OH 44111",
    "latitude": 41.256273,
    "longitude": -81.879857
  },
  {
    "name": "Recycleit",
    "address_1": "19100 Holland Rd",
    "address_2": "Brook Park, OH 44142",
    "phone_number": "(440) 234-4099",
    "address": "10431 Clifton Blvd Cleveland, OH 44102",
    "latitude": 41.1657312,
    "longitude": -81.4741641
  },
  {
    "name": "Portage County Recycling Center",
    "address_1": "3588 Mogadore Rd",
    "address_2": "Kent, OH 44240",
    "phone_number": "(330) 678-8808",
    "address": "245 Adams St Youngstown, OH 44505",
    "latitude": 40.9305905,
    "longitude": -81.1072383
  },
  {
    "name": "SA Recycling",
    "address_1": "359 State Ave NW",
    "address_2": "Massillon, OH 44647",
    "phone_number": "(330) 236-2250",
    "address": "2000 Auburn Dr #200 Beachwood, OH 44122",
    "latitude": 41.898514,
    "longitude": -80.752728
  },
  {
    "name": "Ashtabula Recycling",
    "address_1": "1713 Lake Ave",
    "address_2": "Ashtabula, OH 44004",
    "phone_number": "(440) 964-0388",
    "address": "3325 Middle Rd Ashtabula, OH 44004",
    "latitude": 40.9148691,
    "longitude": -81.4601631
  },
  {
    "name": "Innovative Recycling",
    "address_1": "352 South St",
    "address_2": "Galion, OH 44833",
    "phone_number": "(419) 468-2988",
    "address": "Louisville, OH 44641",
    "latitude": 41.4756023,
    "longitude": -81.6508287
  },
  {
    "name": "Dille Road Recycling",
    "address_1": "1423 Dille Rd",
    "address_2": "Euclid, OH 44117",
    "phone_number": "(216) 383-9000",
    "address": "4794 Cummings Ln Ravenna, OH 44266",
    "latitude": 41.0236417,
    "longitude": -81.418788
  },
  {
    "name": "Girard Metal Recycling",
    "address_1": "1715 N State St",
    "address_2": "Girard, OH 44420",
    "phone_number": "(330) 545-5191",
    "address": "2150 W 117th St #1037 Cleveland, OH 44111",
    "latitude": 41.508716,
    "longitude": -81.5401014
  },
  {
    "name": "Berea Metals & Recycling",
    "address_1": "5201 W 164th St",
    "address_2": "Brook Park, OH 44142",
    "phone_number": "(216) 465-9066",
    "address": "16419 St Clair Ave. Cleveland, OH 44110",
    "latitude": 41.0851883,
    "longitude": -81.4908398
  },
  {
    "name": "Bedford Metal Recycling",
    "address_1": "144 Northfield Rd",
    "address_2": "Bedford, OH 44146",
    "phone_number": "(440) 439-8044",
    "address": "1514 Maple Ave NE Canton, OH 44705",
    "latitude": 41.1422989,
    "longitude": -81.2207496
  },
  {
    "name": "eCycle Solutions of Ohio",
    "address_1": "3894 State St NW",
    "address_2": "North Canton, OH 44720",
    "phone_number": "(234) 209-9602",
    "address": "8784 Snow St Windham, OH 44288",
    "latitude": 40.7713583,
    "longitude": -82.5563295
  },
  {
    "name": "National Material Recycling Co",
    "address_1": "3651 Broadway",
    "address_2": "Lorain, OH 44052",
    "phone_number": "(440) 233-5500",
    "address": "29601 Solon Rd Solon, OH 44139",
    "latitude": 41.1710929,
    "longitude": -80.7674707
  },
  {
    "name": "City of Green Recycling Center",
    "address_1": "5383 Massillon Rd",
    "address_2": "North Canton, OH 44720",
    "phone_number": "",
    "address": "1605 Canton Rd Rear Akron, OH 44312",
    "latitude": 41.46181,
    "longitude": -81.3395073
  },
  {
    "name": "Recycling Coordinators Inc",
    "address_1": "600 E Exchange St",
    "address_2": "Akron, OH 44306",
    "phone_number": "(330) 434-4500",
    "address": "927 Warner Rd SE Canton, OH 44707",
    "latitude": 41.3676878,
    "longitude": -82.0767937
  },
  {
    "name": "WM - Cleveland Recycling Center",
    "address_1": "7450 Oak Leaf Rd",
    "address_2": "Oakwood, OH 44146",
    "phone_number": "(844) 492-9417",
    "address": "700 S Main St Niles, OH 44446",
    "latitude": 41.488469,
    "longitude": -81.0879512
  },
  {
    "name": "D & L Recycling LLC",
    "address_1": "708 Marks Rd #410",
    "address_2": "Valley City, OH 44280",
    "phone_number": "(330) 225-7507",
    "address": "2384 Springmill Rd Mansfield, OH 44903",
    "latitude": 40.629985,
    "longitude": -80.5547825
  },
  {
    "name": "Honest Scales Recycling LLC",
    "address_1": "15535 Burton-Windsor Rd",
    "address_2": "Middlefield, OH 44062",
    "phone_number": "(440) 632-3083",
    "address": "54 E Schaaf Rd Brooklyn Heights, OH 44131",
    "latitude": 40.8288812,
    "longitude": -81.3034826
  },
  {
    "name": "Resource Metal Recycling",
    "address_1": "8509 S Fwy Dr",
    "address_2": "Macedonia, OH 44056",
    "phone_number": "(330) 908-0400",
    "address": "3938 Jeffries Cir Louisville, OH 44641",
    "latitude": 41.3961765,
    "longitude": -81.6626513
  },
  {
    "name": "Greenville Recycling",
    "address_1": "192 S Mercer St",
    "address_2": "Greenville, PA 16125",
    "phone_number": "(724) 373-8176",
    "address": "6100 Oak Tree Blvd Independence, OH 44131",
    "latitude": 41.2380326,
    "longitude": -80.8751633
  },
  {
    "name": "Holub Recycling",
    "address_1": "470 N Arlington St",
    "address_2": "Akron, OH 44305",
    "phone_number": "(330) 252-5655",
    "address": "8550 Aetna Rd Cleveland, OH 44105",
    "latitude": 41.468842,
    "longitude": -81.7292963
  },
  {
    "name": "River Recycling Industries",
    "address_1": "4195 Bradley Rd",
    "address_2": "Cleveland, OH 44109",
    "phone_number": "(216) 255-3267",
    "address": "6400 Stock Ave Cleveland, OH 44102",
    "latitude": 41.3881711,
    "longitude": -81.4702986
  },
  {
    "name": "American Metal Recycling Inc",
    "address_1": "13170 York Rd",
    "address_2": "Cleveland, OH 44133",
    "phone_number": "(440) 237-1500",
    "address": "1125 National Pkwy Mansfield, OH 44906",
    "latitude": 41.4566804,
    "longitude": -81.7906182
  },
  {
    "name": "Jefferson recycling",
    "address_1": "941 OH-46",
    "address_2": "Jefferson, OH 44047",
    "phone_number": "(440) 576-0107",
    "address": "725 W Main St Crestline, OH 44827",
    "latitude": 41.4197214,
    "longitude": -81.6740625
  },
  {
    "name": "Kanect Recycling",
    "address_1": "5700 W 58th St",
    "address_2": "Ashtabula, OH 44004",
    "phone_number": "(844) 452-6328",
    "address": "67 W Vine St Alliance, OH 44601",
    "latitude": 40.8207943,
    "longitude": -82.5924278
  },
  {
    "name": "Keep It Green Recycling Inc.",
    "address_1": "",
    "address_2": "",
    "phone_number": "(216) 440-2121",
    "address": "971 W Longview Ave Mansfield, OH 44903",
    "latitude": 41.228777,
    "longitude": -80.506122
  },
  {
    "name": "Wayco Recycling",
    "address_1": "7679 Burbank Rd",
    "address_2": "Wooster, OH 44691",
    "phone_number": "(330) 345-1236",
    "address": "8500 Chamberlin Rd Twinsburg, OH 44087",
    "latitude": 41.1896047,
    "longitude": -81.4406083
  },
  {
    "name": "WM - Poland Recycling Facility",
    "address_1": "5505 Center Rd",
    "address_2": "Lowellville, OH 44436",
    "phone_number": "(330) 536-6746",
    "address": "40346 Butternut Ridge Rd Elyria, OH 44035",
    "latitude": 41.2313009,
    "longitude": -81.0206633
  },
  {
    "name": "AAA E WASTE RECYCLING. Free Pick-Up",
    "address_1": "8492 Valley View Rd",
    "address_2": "Macedonia, OH 44056",
    "phone_number": "(330) 523-9887",
    "address": "4550 Darrow Rd Stow, OH 44224",
    "latitude": 40.7758509,
    "longitude": -82.5490581
  },
  {
    "name": "A&B Metal Recycling",
    "address_1": "3049 E 55th St",
    "address_2": "Cleveland, OH 44127",
    "phone_number": "(216) 640-2920",
    "address": "1814 E 40th St Cleveland, OH 44103",
    "latitude": 41.473824,
    "longitude": -81.6487036
  },
  {
    "name": "Perry Twp Recycling Station",
    "address_1": "5075 Southway St SW",
    "address_2": "Canton, OH 44706",
    "phone_number": "",
    "address": "329 S Dock St Sharon, PA 16146",
    "latitude": 40.7901756,
    "longitude": -81.3598087
  },
  {
    "name": "All Scrap Salvage Co Inc",
    "address_1": "3550 W 140th St",
    "address_2": "Cleveland, OH 44111",
    "phone_number": "(216) 941-7100",
    "address": "4255 W Market St Leavittsburg, OH 44430",
    "latitude": 40.79431,
    "longitude": -81.4222778
  },
  {
    "name": "Falls Recycling",
    "address_1": "1536 1st St A",
    "address_2": "Newton Falls, OH 44444",
    "phone_number": "(330) 872-0402",
    "address": "1000 Addison Rd Cleveland, OH 44103",
    "latitude": 41.5085763,
    "longitude": -81.6599254
  },
  {
    "name": "Perry Twp Recycle",
    "address_1": "1500 Jackson Ave SW",
    "address_2": "Massillon, OH 44646",
    "phone_number": "",
    "address": "9450 Newton St NW Minerva, OH 44657",
    "latitude": 41.4069242,
    "longitude": -82.6590189
  },
  {
    "name": "Connelly Recycling Center",
    "address_1": "4119 N Ridge Rd",
    "address_2": "Perry, OH 44081",
    "phone_number": "(440) 259-8222",
    "address": "760 Flora Ave Akron, OH 44314",
    "latitude": 41.8471978,
    "longitude": -80.8323101
  },
  {
    "name": "Recycling center",
    "address_1": "245 Adams St",
    "address_2": "Youngstown, OH 44505",
    "phone_number": "",
    "address": "505 Maple St East Liverpool, OH 43920",
    "latitude": 40.805938,
    "longitude": -82.529352
  },
  {
    "name": "Cuyahoga e-Waste Recycling Solutions",
    "address_1": "2150 W 117th St #1037",
    "address_2": "Cleveland, OH 44111",
    "phone_number": "",
    "address": "16800 S Waterloo Rd Cleveland, OH 44110",
    "latitude": 40.6749793,
    "longitude": -80.3134546
  },
  {
    "name": "Louisville Recycle Drop-off",
    "address_1": "Louisville, OH 44641",
    "address_2": "",
    "phone_number": "",
    "address": "833 Cleveland Ave SW Canton, OH 44702",
    "latitude": 40.7655405,
    "longitude": -82.5478467
  },
  {
    "name": "Global Waste & Recycling LLC",
    "address_1": "2000 Auburn Dr #200",
    "address_2": "Beachwood, OH 44122",
    "phone_number": "(216) 672-5959",
    "address": "1420 Burton St SE Warren, OH 44484",
    "latitude": 41.3013441,
    "longitude": -81.4743546
  },
  {
    "name": "Cleveland Industrial Recycling",
    "address_1": "3325 Middle Rd",
    "address_2": "Ashtabula, OH 44004",
    "phone_number": "(440) 992-3783",
    "address": "943 Hazel St Akron, OH 44305",
    "latitude": 40.8132896,
    "longitude": -81.3532334
  },
  {
    "name": "Midwest Recycling Inc.",
    "address_1": "16419 St Clair Ave.",
    "address_2": "Cleveland, OH 44110",
    "phone_number": "(216) 481-9490",
    "address": "30700 Carter St Solon, OH 44139",
    "latitude": 41.4585343,
    "longitude": -81.6267534
  },
  {
    "name": "Cleveland Computer Recycling",
    "address_1": "29333 Clayton Ave",
    "address_2": "Wickliffe, OH 44092",
    "phone_number": "(440) 840-2139",
    "address": "27 Furnace Ln Girard, OH 44420",
    "latitude": 40.7663344,
    "longitude": -81.5241883
  },
  {
    "name": "B&B Recycling",
    "address_1": "4794 Cummings Ln",
    "address_2": "Ravenna, OH 44266",
    "phone_number": "(330) 298-3000",
    "address": "922 W 4th St Ontario, OH 44906",
    "latitude": 41.4308217,
    "longitude": -81.5940023
  },
  {
    "name": "Aetna Metal Recycling",
    "address_1": "8300 Aetna Rd",
    "address_2": "Cleveland, OH 44105",
    "phone_number": "(216) 441-7025",
    "address": "5463 Dunham Rd Cleveland, OH 44137",
    "latitude": 41.1318692,
    "longitude": -81.6174052
  },
  {
    "name": "Erie County Recycling Center",
    "address_1": "10101 Hoover Rd",
    "address_2": "Huron, OH 44839",
    "phone_number": "(419) 433-7303 ext. 2303",
    "address": "67 W Vine St Alliance, OH 44601",
    "latitude": 41.080991,
    "longitude": -81.487314
  },
  {
    "name": "C & B Recycling Inc",
    "address_1": "8784 Snow St",
    "address_2": "Windham, OH 44288",
    "phone_number": "(330) 326-2800",
    "address": "5138 Enterprise Dr NW Warren, OH 44481",
    "latitude": 41.2193429,
    "longitude": -80.8010421
  },
  {
    "name": "Secure Recycling / SECURE IT Asset Disposition Services",
    "address_1": "29601 Solon Rd",
    "address_2": "Solon, OH 44139",
    "phone_number": "(216) 424-3400",
    "address": "3619 Gracemont St SW East Sparta, OH 44626",
    "latitude": 40.7880492,
    "longitude": -80.345962
  },
  {
    "name": "U.S. 20 Metal Recycling LLC",
    "address_1": "1640 US-20",
    "address_2": "Norwalk, OH 44857",
    "phone_number": "(419) 668-2425",
    "address": "591 S Van Buren Barberton, OH 44203",
    "latitude": 41.43652,
    "longitude": -81.7078717
  },
  {
    "name": "Ferrous Processing & Trading Co Canton LLC",
    "address_1": "1514 Maple Ave NE",
    "address_2": "Canton, OH 44705",
    "phone_number": "(330) 456-9649",
    "address": "2701 St Clair Ave NE Cleveland, OH 44114",
    "latitude": 41.1449407,
    "longitude": -80.7021117
  },
  {
    "name": "OmniSource LLC",
    "address_1": "1500 Bowman St",
    "address_2": "Mansfield, OH 44903",
    "phone_number": "(419) 747-4733",
    "address": "261 Wallace Run Rd Beaver Falls, PA 15010",
    "latitude": 40.6641979,
    "longitude": -80.586545
  },
  {
    "name": "Salem Recycling",
    "address_1": "231 S Broadway Ave",
    "address_2": "Salem, OH 44460",
    "phone_number": "(330) 337-0937",
    "address": "707 Sharon New Castle Rd Farrell, PA 16121",
    "latitude": 41.0216655,
    "longitude": -80.6595224
  },
  {
    "name": "Action Recycling",
    "address_1": "1111 Oberlin Ave SW",
    "address_2": "Massillon, OH 44647",
    "phone_number": "",
    "address": "8229 Tyler Blvd Mentor, OH 44060",
    "latitude": 41.5708418,
    "longitude": -81.563108
  },
  {
    "name": "Sharon Community Recycling Center",
    "address_1": "6655-6789 Ridge Rd",
    "address_2": "Wadsworth, OH 44281",
    "phone_number": "",
    "address": "255 Woodford Ave Elyria, OH 44035",
    "latitude": 41.430191,
    "longitude": -82.208046
  },
  {
    "name": "Slesnick Steel & Recycling",
    "address_1": "927 Warner Rd SE",
    "address_2": "Canton, OH 44707",
    "phone_number": "(330) 453-8475",
    "address": "3915 E 91st St Cleveland, OH 44105",
    "latitude": 40.762133,
    "longitude": -82.5949299
  },
  {
    "name": "Aaromet Metal Recycling",
    "address_1": "3208 W 63rd St",
    "address_2": "Cleveland, OH 44102",
    "phone_number": "(216) 961-5050",
    "address": "29309 Clayton Ave Wickliffe, OH 44092",
    "latitude": 41.420266,
    "longitude": -81.7538945
  },
  {
    "name": "First Recycling",
    "address_1": "5040 Hudson Dr",
    "address_2": "Stow, OH 44224",
    "phone_number": "(330) 686-8000",
    "address": "4371 Pearl Rd Cleveland, OH 44109",
    "latitude": 41.6406304,
    "longitude": -81.4470794
  },
  {
    "name": "BlueScope Recycling and Materials, LLC Millirun",
    "address_1": "2384 Springmill Rd",
    "address_2": "Mansfield, OH 44903",
    "phone_number": "(419) 747-6522",
    "address": "576 W Park Ave Barberton, OH 44203",
    "latitude": 41.0359664,
    "longitude": -81.5546668
  },
  {
    "name": "North Royalton Recycle Yard",
    "address_1": "11545 Royalton Rd",
    "address_2": "North Royalton, OH 44133",
    "phone_number": "(440) 582-3002",
    "address": "5500 Milan Rd Suite 200 Sandusky, OH 44870",
    "latitude": 41.3799372,
    "longitude": -81.4599994
  },
  {
    "name": "Hartville Recycling",
    "address_1": "E Maple St",
    "address_2": "Hartville, OH 44632",
    "phone_number": "",
    "address": "3265 W Market St Akron, OH 44333",
    "latitude": 41.1658904,
    "longitude": -81.480013
  },
  {
    "name": "Better Earth Recycling",
    "address_1": "4415 Brookpark Rd",
    "address_2": "Cleveland, OH 44134",
    "phone_number": "(216) 767-5516",
    "address": "570 Beaver Valley Mall Monaca, PA 15061",
    "latitude": 41.4615191,
    "longitude": -81.6928838
  },
  {
    "name": "Rumpke Waste & Recycling",
    "address_1": "",
    "address_2": "",
    "phone_number": "(800) 828-8171",
    "address": "4004 Tuscarawas St W Canton, OH 44708",
    "latitude": 41.0526217,
    "longitude": -81.7250151
  },
  {
    "name": "Alliance Recycling",
    "address_1": "23389 US-62",
    "address_2": "Alliance, OH 44601",
    "phone_number": "",
    "address": "3075 Smith Rd Fairlawn, OH 44333",
    "latitude": 40.9925967,
    "longitude": -81.4891256
  },
  {
    "name": "Poland Township Recycling center",
    "address_1": "7474 Clingan Rd",
    "address_2": "Youngstown, OH 44514",
    "phone_number": "",
    "address": "803 S Mahoning Ave Alliance, OH 44601",
    "latitude": 40.9305905,
    "longitude": -81.1072383
  },
  {
    "name": "Rosby Resource Recycling Inc",
    "address_1": "54 E Schaaf Rd",
    "address_2": "Brooklyn Heights, OH 44131",
    "phone_number": "(216) 661-6102 ext. 3",
    "address": "509 Water St SW Bolivar, OH 44612",
    "latitude": 40.774042,
    "longitude": -82.4758555
  },
  {
    "name": "Buckeye Metal Recycling",
    "address_1": "922 W 4th St",
    "address_2": "Mansfield, OH 44906",
    "phone_number": "(419) 775-7034",
    "address": "222 E Smokerise Dr Wadsworth, OH 44281",
    "latitude": 40.719503,
    "longitude": -81.118983
  },
  {
    "name": "Cuyahoga e-Waste Recycling Solutions",
    "address_1": "5247 Wilson Mills Rd #172",
    "address_2": "Richmond Heights, OH 44143",
    "phone_number": "(216) 314-2897",
    "address": "10606 Bellaire Rd Cleveland, OH 44111",
    "latitude": 41.211588,
    "longitude": -80.7502862
  },
  {
    "name": "Buehler's Community Recycle Center",
    "address_1": "Burbank Rd",
    "address_2": "Wooster, OH 44691",
    "phone_number": "",
    "address": "4339 Tuttle Rd Geneva, OH 44041",
    "latitude": 40.7924125,
    "longitude": -81.3790323
  },
  {
    "name": "Constant Recycling",
    "address_1": "6100 Oak Tree Blvd",
    "address_2": "Independence, OH 44131",
    "phone_number": "(877) 630-6705",
    "address": "1868 Warrensville Center Rd South Euclid, OH 44121",
    "latitude": 40.8343088,
    "longitude": -81.3293288
  },
  {
    "name": "Cleveland Computer Recycling and Disposal",
    "address_1": "",
    "address_2": "",
    "phone_number": "(866) 569-0951",
    "address": "5125 Canton Rd NW Carrollton, OH 44615",
    "latitude": 41.5124229,
    "longitude": -81.6736803
  },
  {
    "name": "Lorain Metals",
    "address_1": "3651 Broadway",
    "address_2": "Lorain, OH 44052",
    "phone_number": "(440) 233-5500",
    "address": "16280 Dresden Ave East Liverpool, OH 43920",
    "latitude": 41.8471978,
    "longitude": -80.8323101
  },
  {
    "name": "2M Metals LLC",
    "address_1": "526 2nd Ave",
    "address_2": "Beaver Falls, PA 15010",
    "phone_number": "(724) 683-5668",
    "address": "7401 Market St Youngstown, OH 44512",
    "latitude": 41.4316534,
    "longitude": -82.6944956
  },
  {
    "name": "Cleveland Bulk Recycling",
    "address_1": "2070 W 3rd St",
    "address_2": "Cleveland, OH 44113",
    "phone_number": "(216) 344-3911",
    "address": "226 E Perkins Ave Sandusky, OH 44870",
    "latitude": 41.097468,
    "longitude": -80.7740762
  },
  {
    "name": "Second Chance recycling",
    "address_1": "1367 Bank St",
    "address_2": "Atwater, OH 44201",
    "phone_number": "",
    "address": "3520 Hudson Dr Stow, OH 44224",
    "latitude": 41.3194373,
    "longitude": -82.1052815
  },
  {
    "name": "Sugar Ridge Auto Recycling",
    "address_1": "41820 Oberlin Elyria Rd",
    "address_2": "Elyria, OH 44035",
    "phone_number": "(440) 322-0597",
    "address": "4380 N Leavitt Rd Lorain, OH 44053",
    "latitude": 41.5259678,
    "longitude": -81.6458103
  },
  {
    "name": "Richland County Recycling And Electronic Collection Facility",
    "address_1": "1125 National Pkwy",
    "address_2": "Mansfield, OH 44906",
    "phone_number": "(419) 774-5861",
    "address": "10000 Brookpark Rd Cleveland, OH 44130",
    "latitude": 41.2498373,
    "longitude": -80.4528555
  },
  {
    "name": "Innovative Recycling",
    "address_1": "725 W Main St",
    "address_2": "Crestline, OH 44827",
    "phone_number": "",
    "address": "2887 S Arlington Rd Akron, OH 44312",
    "latitude": 41.1227665,
    "longitude": -81.4830867
  },
  {
    "name": "Boggs Recycling Inc",
    "address_1": "12355 Kinsman Rd",
    "address_2": "Newbury Township, OH 44065",
    "phone_number": "(800) 837-8101",
    "address": "1 Massillon Marketplace Dr SW Massillon, OH 44646",
    "latitude": 41.3654467,
    "longitude": -82.1239066
  },
  {
    "name": "I-80 Metals Recycling",
    "address_1": "27 Furnace Ln STE 5",
    "address_2": "Girard, OH 44420",
    "phone_number": "(234) 230-3198",
    "address": "3400 Steelyard Dr Cleveland, OH 44109",
    "latitude": 40.6917239,
    "longitude": -82.507991
  },
  {
    "name": "Jasar Recycling",
    "address_1": "18 Edgeworth Ave",
    "address_2": "East Palestine, OH 44413",
    "phone_number": "(330) 426-2538",
    "address": "4750 E 131st St Garfield Heights, OH 44105",
    "latitude": 41.6842425,
    "longitude": -81.3459623
  },
  {
    "name": "RNI, Inc. Electronic Recycling",
    "address_1": "971 W Longview Ave",
    "address_2": "Mansfield, OH 44903",
    "phone_number": "(419) 774-4437",
    "address": "5555 Youngstown Warren Rd Niles, OH 44446",
    "latitude": 41.1363115,
    "longitude": -81.6209034
  },
  {
    "name": "Dave's Recycling",
    "address_1": "1336 Seaborn St",
    "address_2": "Mineral Ridge, OH 44440",
    "phone_number": "",
    "address": "3551 N Ridge Rd W E Ashtabula, OH 44004",
    "latitude": 41.17289,
    "longitude": -81.498115
  },
  {
    "name": "Oak Tree Recycling",
    "address_1": "14606 Arcadia St NW",
    "address_2": "New Franklin, OH 44614",
    "phone_number": "(330) 338-6444",
    "address": "3200 Atlantic Blvd NE Canton, OH 44705",
    "latitude": 41.4515649,
    "longitude": -81.7601371
  },
  {
    "name": "Recycling",
    "address_1": "14921 Chillicothe Rd",
    "address_2": "Novelty, OH 44072",
    "phone_number": "",
    "address": "6001 Mahoning Ave Austintown, OH 44515",
    "latitude": 41.379119,
    "longitude": -81.4694439
  },
  {
    "name": "Butternut Auto & Recycling",
    "address_1": "40346 Butternut Ridge Rd",
    "address_2": "Elyria, OH 44035",
    "phone_number": "(440) 458-5220",
    "address": "88 Ohl St Greenville, PA 16125",
    "latitude": 40.6655011,
    "longitude": -81.4210501
  },
  {
    "name": "Cleveland Industrial Recycling",
    "address_1": "3203 Harvard Ave",
    "address_2": "Newburgh Heights, OH 44105",
    "phone_number": "(216) 441-2020",
    "address": "6640 Cochran Rd Solon, OH 44139",
    "latitude": 41.6083675,
    "longitude": -81.477481
  },
  {
    "name": "Akron Canton Computer Recycling",
    "address_1": "67 W Vine St",
    "address_2": "Alliance, OH 44601",
    "phone_number": "",
    "address": "1060 Ashland Rd Mansfield, OH 44905",
    "latitude": 41.0965439,
    "longitude": -80.63881
  },
  {
    "name": "Dover Road Recycling",
    "address_1": "17368 Dover Rd",
    "address_2": "Dundee, OH 44662",
    "phone_number": "(330) 231-6810",
    "address": "2485 Possum Run Rd Mansfield, OH 44903",
    "latitude": 40.913581,
    "longitude": -81.0870952
  },
  {
    "name": "Abi Bow Recycling",
    "address_1": "16065 Industrial Pkwy",
    "address_2": "Cleveland, OH 44135",
    "phone_number": "(216) 265-3658",
    "address": "24869 Lorain Rd North Olmsted, OH 44070",
    "latitude": 41.8007613,
    "longitude": -80.910441
  },
  {
    "name": "Franklin Township Drop-off Recycling Depot",
    "address_1": "10411 PA-98",
    "address_2": "Edinboro, PA 16412",
    "phone_number": "",
    "address": "1996 East Ave Akron, OH 44314",
    "latitude": 33.8796688,
    "longitude": -84.7072329
  },
  {
    "name": "Baumann's Recycling Center",
    "address_1": "4801 Chaincraft Rd",
    "address_2": "Cleveland, OH 44125",
    "phone_number": "(216) 823-2244",
    "address": "1387 Clarendon Ave SW #9 Canton, OH 44710",
    "latitude": 41.3656669,
    "longitude": -81.8241727
  },
  {
    "name": "Downtown Metal Recycling",
    "address_1": "423 W Pershing St",
    "address_2": "Salem, OH 44460",
    "phone_number": "(234) 567-4709",
    "address": "3510 E Garfield Rd New Springfield, OH 44443",
    "latitude": 40.6515015,
    "longitude": -81.4610183
  },
  {
    "name": "J Mobley's Recycling",
    "address_1": "1215 W 10th St #814",
    "address_2": "Cleveland, OH 44113",
    "phone_number": "(216) 254-1758",
    "address": "24801 Brookpark Rd North Olmsted, OH 44070",
    "latitude": 41.4516141,
    "longitude": -81.6232216
  },
  {
    "name": "Six Recycling",
    "address_1": "505 Maple St",
    "address_2": "East Liverpool, OH 43920",
    "phone_number": "(330) 385-1452",
    "address": "8875 Windswept Dr McKean, PA 16426",
    "latitude": 41.0921243,
    "longitude": -80.5619893
  },
  {
    "name": "Mad Mike's Demo and Recycling",
    "address_1": "876 E Jamestown Rd",
    "address_2": "Jamestown, PA 16134",
    "phone_number": "(724) 866-6609",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Recycling Center",
    "address_1": "New Waterford, OH 44445",
    "address_2": "",
    "phone_number": "",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "7th Generation Recycling Ohio",
    "address_1": "4255 W Market St",
    "address_2": "Leavittsburg, OH 44430",
    "phone_number": "",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Mobile Industrial Recycling",
    "address_1": "3950 Ben Hur Ave",
    "address_2": "Willoughby, OH 44094",
    "phone_number": "(440) 942-4355",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "A J Recycling",
    "address_1": "7130 Orangeville Kinsman Rd",
    "address_2": "Kinsman, OH 44428",
    "phone_number": "(330) 876-0229",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "amware recycling",
    "address_1": "19801 Holland Rd",
    "address_2": "Brook Park, OH 44142",
    "phone_number": "(440) 234-4088",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Jcomp Recycling Inc",
    "address_1": "1000 Addison Rd",
    "address_2": "Cleveland, OH 44103",
    "phone_number": "(216) 417-3490",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Rock Creek Aluminum Recycling",
    "address_1": "Elyria, OH 44035",
    "address_2": "",
    "phone_number": "(440) 323-0094",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "DiFrischia Recycling And Junk Removal",
    "address_1": "113 Clarksville St",
    "address_2": "Greenville, PA 16125",
    "phone_number": "(724) 877-8713",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Creative Recycling",
    "address_1": "16855 Park Cir Dr",
    "address_2": "Chagrin Falls, OH 44023",
    "phone_number": "(440) 543-3866",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "DSI-Copper Wire Recycling",
    "address_1": "",
    "address_2": "",
    "phone_number": "(440) 212-8008",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Associated Paper Stock Inc",
    "address_1": "11510 South Ave",
    "address_2": "North Lima, OH 44452",
    "phone_number": "(330) 549-5311",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Puritech Recycling Systems Inc",
    "address_1": "2993 Perry Dr SW",
    "address_2": "Canton, OH 44706",
    "phone_number": "(330) 478-6975",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Ohio Concrete Recycling",
    "address_1": "1 General St",
    "address_2": "Akron, OH 44305",
    "phone_number": "(330) 798-2908",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Wadsworth Recycling",
    "address_1": "9950 Rittman Rd",
    "address_2": "Wadsworth, OH 44281",
    "phone_number": "(330) 334-6900",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "DSI Metals LLC Nickel, Stainless & Bronze Recycling",
    "address_1": "",
    "address_2": "",
    "phone_number": "(440) 212-8008",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "iP3 Data Destruction & ewaste recycling",
    "address_1": "3287 Kent Rd Ste B",
    "address_2": "Stow, OH 44224",
    "phone_number": "(234) 206-1349",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Liberty Tire Recycling LLC",
    "address_1": "14864 Lincoln St SE",
    "address_2": "Minerva, OH 44657",
    "phone_number": "(330) 868-0097",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Integrity Auto Recycling",
    "address_1": "1550 N Ridge Rd",
    "address_2": "Painesville, OH 44077",
    "phone_number": "(440) 354-6457",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Vinyl sidng recycling",
    "address_1": "16909 OH-58",
    "address_2": "Oberlin, OH 44074",
    "phone_number": "(440) 776-8534",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Green Processing Company Inc.",
    "address_1": "18615 Industrial Circle",
    "address_2": "Parkman, OH 44021",
    "phone_number": "(248) 794-6191",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Fat Boys Recycling",
    "address_1": "9384 Avon Lake Rd",
    "address_2": "Lodi, OH 44254",
    "phone_number": "(330) 340-0653",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Niles Iron & Metal Co LLC",
    "address_1": "45 W Federal St",
    "address_2": "Niles, OH 44446",
    "phone_number": "(330) 652-0799",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Rhino Metal Recycling And Distinctive Salvage Co",
    "address_1": "",
    "address_2": "",
    "phone_number": "+1 519-890-0354",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Dan Foster's Auto Recycling",
    "address_1": "735 E Lake St",
    "address_2": "Ravenna, OH 44266",
    "phone_number": "(330) 296-1050",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Countywide Recycling & Disposal Facility & Landfill",
    "address_1": "3619 Gracemont St SW",
    "address_2": "East Sparta, OH 44626",
    "phone_number": "(330) 874-3855",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Boardsort.com",
    "address_1": "67 W Vine St",
    "address_2": "Alliance, OH 44601",
    "phone_number": "(440) 497-0222",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Rubber City Reuse Portage County Recycling Center Compost Drop-Off",
    "address_1": "3588 Mogadore Rd",
    "address_2": "Kent, OH 44240",
    "phone_number": "(330) 466-1028",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Northcoast Shredding Services & Record Center, Northcoast Inc. Recycling Specialists",
    "address_1": "8229 Tyler Blvd",
    "address_2": "Mentor, OH 44060",
    "phone_number": "(440) 943-6968",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Allen Alloys And Iron",
    "address_1": "8693 OH-14",
    "address_2": "Streetsboro, OH 44241",
    "phone_number": "(330) 422-1814",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Aliquippa Recycling",
    "address_1": "12 Woodlawn Rd",
    "address_2": "Aliquippa, PA 15001",
    "phone_number": "(724) 378-3734",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "MERP (Medical Equipment Recycling Program)",
    "address_1": "707 Sharon New Castle Rd",
    "address_2": "Farrell, PA 16121",
    "phone_number": "(724) 347-6377",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "BBN Oil Recycling Inc",
    "address_1": "6442 Metro Ct",
    "address_2": "Bedford, OH 44146",
    "phone_number": "(440) 786-1888",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Conrad's Auto Recycling",
    "address_1": "22650 Alliance-Sebring Rd",
    "address_2": "Alliance, OH 44601",
    "phone_number": "(330) 823-2555",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Willig Tire Recycling",
    "address_1": "352 South St",
    "address_2": "Galion, OH 44833",
    "phone_number": "(330) 326-7048",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "X-Ray Film Recycling & Destruction",
    "address_1": "",
    "address_2": "",
    "phone_number": "(440) 212-8008",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "twelve baskets recycling services",
    "address_1": "",
    "address_2": "",
    "phone_number": "(216) 242-9180",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Next Generation Plastics",
    "address_1": "3075 Smith Rd",
    "address_2": "Fairlawn, OH 44333",
    "phone_number": "(330) 668-1200",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Carpenter Metal Solutions",
    "address_1": "803 S Mahoning Ave",
    "address_2": "Alliance, OH 44601",
    "phone_number": "(330) 829-2771",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Lang's Barn Recycling",
    "address_1": "161 Hamburg Rd",
    "address_2": "Greenville, PA 16125",
    "phone_number": "(724) 815-7958",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "A & A Discount Tire & Recycling",
    "address_1": "5125 Canton Rd NW",
    "address_2": "Carrollton, OH 44615",
    "phone_number": "(330) 863-1936",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Cuyahoga County Solid Waste District",
    "address_1": "4750 E 131st St",
    "address_2": "Garfield Heights, OH 44105",
    "phone_number": "(216) 443-3749",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Simple Recycling Clothing Collection Drop-off Center",
    "address_1": "24869 Lorain Rd",
    "address_2": "North Olmsted, OH 44070",
    "phone_number": "(866) 835-5068",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "NexGen Tire Recycling LLC",
    "address_1": "",
    "address_2": "",
    "phone_number": "(614) 212-4281",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Cash 4 Cars Akron",
    "address_1": "173 N Portage Path #2",
    "address_2": "Akron, OH 44303",
    "phone_number": "(330) 271-6464",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Allstar Recycling",
    "address_1": "2007 State Rd",
    "address_2": "Ashtabula, OH 44004",
    "phone_number": "(440) 536-8003",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Chuck's Westside Recycling Center",
    "address_1": "1849 Waverly Ave",
    "address_2": "Youngstown, OH 44509",
    "phone_number": "(330) 799-4278",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Enivronmental Reclamation Services",
    "address_1": "380 E Bayfront Pkwy Suite 3",
    "address_2": "Erie, PA 16507",
    "phone_number": "(814) 464-1800",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Weirton Recycling Center",
    "address_1": "3924 Main St",
    "address_2": "Weirton, WV 26062",
    "phone_number": "(304) 748-1407",
    "address": "",
    "latitude": "",
    "longitude": ""
  },
  {
    "name": "Bowling Green Recycling Center",
    "address_1": "1040 N College Dr",
    "address_2": "Bowling Green, OH 43402",
    "phone_number": "(419) 352-5446",
    "address": "",
    "latitude": "",
    "longitude": ""
  }
]