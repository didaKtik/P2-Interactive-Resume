var drawResume = function() {

	//
	// DATA
	//
	var y1991 = {
		x : 0.4,
		y : 0.293,
		img : 'arcachon.jpg',
		year : '1991+',
		color : '#a65628',
		snd : 'bullet-shell-1',
		allTheRest : [
			{
				'date' : '1991 -<br> 2008',
				'institution' : 'In the melting pot',
				'location' : 'Arcachon, France',
				'descriptions' : [
					'Enjoyed a big family and the sea',
					'Got interested in science'
				],
				'img' : 'arcachon.jpg'
			}
		]
	};

	var y2009 = {
		x : 0,
		y : 1,
		img : 'streamline.png',
		year : '2009',
		color : '#ffff33',
		snd : 'bullet-shell-2',
		schools : [
			{
				'date' : 'September 2008 -<br> July 2010',
				'institution' : 'Lycée Sainte Geneviève',
				'location' : 'Versailles, France',
				'descriptions' : [
					'Studied mathematics, physics and chemistry to prepare for the national entrance exams to French engineering schools.'
				],
				'img' : 'streamline.png'
			}
		]
	};

	var y2011 = {
		x : 0.293,
		y : 1.707,
		img : 'army.jpg',
		year : '2011',
		color : '#ff7f00',
		snd : 'bullet-shell-3',
		schools : [
			{
				'date' : 'Mai 2011 -<br> July 2011',
				'institution' : 'École Polytechnique',
				'location' : 'Palaiseau, France',
				'descriptions' : [
					'First year: classes on mathematics, quantum physics, computer science, economics, probabilities.'
				],
				'img' : 'logo-X-small.jpg'
			}
		],
		works : [
			{
				'date' : 'September 2010 -<br> April 2011',
				'institution' : 'French Army',
				'location' : 'Fort-de-France, Martinique',
				'descriptions' : [
					'Served in a regiment dedicated to giving professional training and confidence to young people failing at school.'
				],
				'img' : 'army.jpg'
			}
		]
	};

	var y2012 = {
		x : 1,
		y : 2,
		img : 'logo-X-small.jpg',
		year : '2012',
		color : '#984ea3',
		snd : 'bullet-shell-4',
		schools : [
			{
				'date' : 'September 2011 -<br> Mai 2012',
				'institution' : 'École Polytechnique',
				'location' : 'Palaiseau, France',
				'descriptions' : [
					'Second year: classes on mechanics, statistical physics, numerical analysis, relativity, statistics, economics, philosophy and sociology.'
				],
				'img' : 'logo-X-small.jpg'
			}
		],
		works : [
			{
				'date' : 'June 2012 -<br> August 2012',
				'institution' : 'Berner & Mattner',
				'location' : 'Munich, Germany',
				'descriptions' : [
					'Took part in the regional project "Bayerische Kompetenzen für Schwarm-Missionen".',
					'Comparison of softwares and testbeds to choose the most appropriate tools to simulate communications between drones.'
				],
				'img' : 'swarm.jpg'
			}
		]
	}

	var y2013 = {
		x : 1.707,
		y : 2.293,
		img : 'eiffel.jpg',
		year : '2013',
		color : '#4daf4a',
		snd : 'bullet-shell-5',
		schools : [
			{
				'date' : 'September 2013 -<br> April 2014',
				'institution' : 'École Polytechnique',
				'location' : 'Palaiseau, France',
				'descriptions' : [
					'Third year: classes on random models in mathematic, biodiversity, statistics, hydrology, economics.'
				],
				'img' : 'logo-X-small.jpg'
			}
		],
		works : [
			{
				'date' : 'Mai 2013 -<br> July 2013',
				'institution' : 'Max Planck Institüt für Meteorologie',
				'location' : 'Hamburg',
				'descriptions' : [
					'Developed a toy climate model in Fortran',
					'Prepared and gave a two-hour lecture to present the model to master students'
				],
				'img' : 'cloud.jpg'
			}
		]
	}

	var y2014 = {
		x : 2,
		y : 3,
		img : 'paulaner.png',
		year : '2014',
		color : '#377eb8',
		snd : 'bullet-shell-6',
		schools : [
			{
				'date' : 'October 2013 -<br> June 2014',
				'institution' : 'Technische Universität München (TUM)',
				'location' : 'Munich, Germany',
				'descriptions' : [
					'M.Sc. in Transportation Systems, first year.',
					'Classes on traffic control, transport planning, intelligent vehicles, geographic information systems (GIS), sociology.'
				],
				'img' : 'paulaner.png'
			}
		],
		works : [
			{
				'date' : 'August 2014 -<br> Ocotber 2014',
				'institution' : 'The Shift Project',
				'location' : 'Paris, France',
				'descriptions' : [
					'Took part in a working group on daily mobility in periurban areas.',
					'Focused on simulating the consumption of vehicles.'
				],
				'img' : 'shift.jpg'
			}
		]
	}

	var y2015 = {
		x : 1.707,
		y : 3.707,
		img : 'gaston.jpg',
		year : '2015',
		color : '#e41a1c',
		snd : 'bleeeh',
		schools : [
			{
				'date' : 'October 2014 -<br> Present',
				'institution' : 'Technische Universität München (TUM)',
				'location' : 'Munich, Germany',
				'descriptions' : [
					'M.Sc. in Transportation Systems, second year.',
					'Project seminar: development of a parking management strategy on a research center of BMW.',
					'Master thesis on a policy to promote the use of lighter vehicles in city centers.'
				],
				'img' : 'paulaner.png'
			}
		],
		onlineCourses : [
			{
				'date' : 'April 2015',
				'institution' : 'Udacity',
				'title' : 'Intro to HTML and CSS',
				'url' : 'https://www.udacity.com/course/intro-to-html-and-css--ud304',
				'urlImg' : 'https://lh6.ggpht.com/KHjK8i_BBLXVYAverR73RvYt06rPk7JnKQWcUIyzMYUnVSPL_zC_asTuM-e69zkibagGRnC5u-bB04nPTQ=s276#w=1278&h=786'
			},
			{
				'date' : 'April 2015 -<br> Mai 2015',
				'institution' : 'Udacity',
				'title' : 'Responsive Web Design Fundamentals',
				'url' : 'https://www.udacity.com/course/responsive-web-design-fundamentals--ud893',
				'urlImg' : 'https://lh6.ggpht.com/nKVxhzkzJcyDvw2QxIO1nH55uk5Y6e34XNGnnRUWS3No2wRZ8fyBfYzfILhJZslqnbvt6yHpbNlnor6S4vA=s276#w=2080&h=1279'
			},
			{
				'date' : 'Mai 2015',
				'institution' : 'Udacity',
				'title' : 'Responsive Images',
				'url' : 'https://www.udacity.com/course/responsive-images--ud882',
				'urlImg' : 'https://lh3.googleusercontent.com/0-8SA41CiD_MZ-yRZ3YX04wYYtV4IjKuVvuRHl-LB2h_2pCDw2UEkLFjUf86GcHGJO1rhRFTBoq9bULT1Qc=s276#w=1724&h=1060'
			},
			{
				'date' : 'Mai 2015',
				'institution' : 'Udacity',
				'title' : 'How to Use Git and Github',
				'url' : 'https://www.udacity.com/course/how-to-use-git-and-github--ud775',
				'urlImg' : 'https://lh5.ggpht.com/y6QqOHLmFIoeSfv2eTSAkqKxFiWVXaWvpIfInxf9nhf_SPBFf5rXElThQTZbsUFram7UEb8eN2gAUe9fLE5H=s277#w=1725&h=1060'
			},
			{
				'date' : 'Mai 2015 -<br> June 2015',
				'institution' : 'Udacity',
				'title' : 'Javascript Basics',
				'url' : 'https://www.udacity.com/course/javascript-basics--ud804',
				'urlImg' : 'https://lh6.ggpht.com/TY7yDlB-w_lMOQHAtOBZjnn-hYAsggB_9TX8TcX1XeR1kTYF4HEggwsxGKd8Ri3rag1USR0gPQvcZvJN5cw=s277#w=788&h=484'
			},
			{
				'date' : 'Mai 2015 -<br> June 2015',
				'institution' : 'Udacity',
				'title' : 'Intro to jQuery',
				'url' : 'https://www.udacity.com/course/intro-to-jquery--ud245',
				'urlImg' : 'https://lh3.ggpht.com/lB5iRpDRGX9DbDvxXD1yyJO_ogqX2_XX1zgeAV9tOovVPc6VLgTb77YglQ_CkILg7KQGoFGys04UYOk-C3Pf=s276#w=1753&h=1078'
			}
		]
	};

	var myData = [];
	myData.push(y1991);
	myData.push(y2009);
	myData.push(y2011);
	myData.push(y2012);
	myData.push(y2013);
	myData.push(y2014);
	myData.push(y2015);



	//
	// LIFE GRAPH WITH D3
	//
	var drawLifeGraph = function() {

		// SIZES
		// All sizes are proportional to img_wdt, so the graph is easy to scale
		// Whatever the dimensions of the images, they are fitted in a img_wdt * img_wdt box
		var img_wdt = 60,
				margin = {top: img_wdt / 3, right: img_wdt / 3, bottom: img_wdt / 3, left: img_wdt / 3},
				width = 7 * img_wdt - margin.right - margin.left,
				height = 8.5 * img_wdt - margin.top - margin.bottom,
				textSize = 13 / 60 * img_wdt,
				totWidth = width + margin.right + margin.left,
				totHeight = height + margin.bottom + margin.right;

		// Set graph container width for correct centering
		d3.select('#graph')
				.style('width', totWidth + 'px')

		// MARGINS
		// Use d3 margin convention
		var graph = d3.select('#graph svg')
				.attr('width', totWidth)
				.attr('height', totHeight)
			.append('g')
				.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

		// SCALES
		// - img_wdt so that the images fit in the g container
		var xScale = d3.scale.linear()
				.range([0, width - img_wdt])
				.domain([0, d3.max(myData, function(d) { return d.x; })]);

		var yScale = d3.scale.linear()
				.range([height - img_wdt, 0])
				.domain(
					[
					d3.min(myData, function(d) { return d.y; }),
					d3.max(myData, function(d) { return d.y; })
					]
				);

		// X AXIS
		var xCenter = xScale(1) + img_wdt / 2,
				yCenter = yScale(2) + img_wdt / 2;
		var xAxis = graph.append('g')
				.attr('class', 'xAxis')
				.attr('transform', 'translate(' + xCenter + ',' + yCenter + ') ' + 'rotate(30)');

		// Left arrow, the line is made invisible, only the head is displayed
		xAxis.append('line')
				.attr({
						x1: 0,
						x2: -width / 3,
						y1: 0,
						y2: 0
				});

		// Right arrow
		xAxis.append('line')
				.attr({
						x1: 0,
						x2: width / 3,
						y1: 0,
						y2: 0
				});

		xAxis.append('text')
				.attr({
						class: 'left-text',
						x: -width / 3 + 3,
						y: textSize / 3,
						'font-size': textSize
				})
				.text('Focusing');

		xAxis.append('text')
				.attr({
						class: 'right-text',
						x: width / 3 - 3,
						y: textSize / 3,
						'font-size': textSize
				})
				.text('Enjoying');

		// TILES
		var tile = graph.selectAll('.graph-tile')
				.data(myData)
			.enter().append('g')
				.attr('class', 'graph-tile hvr-buzz-out')

		// YEARS
		tile.append('text')
				.attr('transform', function(d) {
					var yOffset = yScale(d.y) - 2;
					var xOffset = xScale(d.x) + img_wdt / 2;
					return 'translate(' + xOffset + ', ' + yOffset + ')';
				})
				.attr('class', 'year')
				.attr('fill', function(d) { return d.color; })
				.attr('font-size', textSize)
				.text(function(d) { return d.year; });

		// IMAGES
		var tileImage = tile.append('image')
				.attr({
						class: 'graph-img',
						width: img_wdt,
						height: img_wdt,
						x: function(d) { return xScale(d.x); },
						y: function(d) { return yScale(d.y); },
						'xlink:href': function(d) { return './img/' + d.img; }
				});



		// SOUNDS
		var audio = d3.select('body').selectAll('audio')
				.data(myData)
			.enter().append('audio')
				.attr('src', function(d) { return './snd/' + d.snd +'.mp3'; })
				.attr('class', function(d) { return d.snd; });

		tile.on('mouseenter', function(d) {
			var selector = '.' + d.snd;
			$(selector)[0].play();
			// audio[i].play();
		});

		// ANIMATION: CLICK
		tileImage.on('click', function(d) {
			emptySection('schools');
			emptySection('onlineCourses');
			emptySection('works');
			emptySection('allTheRest');
			if (d.hasOwnProperty('schools')) {
				displaySchools(d.schools);
			}
			if (d.hasOwnProperty('onlineCourses')) {
				displayOnlineCourses(d.onlineCourses);
			}
			if (d.hasOwnProperty('works')) {
				displayWorks(d.works);
			}
			if (d.hasOwnProperty('allTheRest')) {
				displayAllTheRest(d.allTheRest);
			}
		});

	}

	drawLifeGraph();




	//
	// GENERAL PURPOSE FUNCTIONS TO DISPLAY RESUME ENTRIES
	//
	// entryType can be: school, onlineCourse, work, project, language
	// entriesType can be: schools, onlineCourses, works, projects, languages
	var HTMLtitle =
		'<div class="row">' +
		  '<div class="col-xs-12">' +
		  	'<hr class="hr-title">' +
		    '<h2>%title%</h2>' +
		  '</div>' +
		'</div>';
	var addTitle = function(titleString, entriesType) {
		var selector = '#' + entriesType;
		$(selector).before(HTMLtitle.replace('%title%', titleString));
		var className = 'row ' + entriesType + '-title';
		$(selector).prev().attr('class', className);
	}

	var HTMLimg =
		'<div class="col-xs-12 col-sm-2 col-sm-offset-1 magnify">' +
		  '<div class="large"></div>' +
		  '<img class="entry-img small" src="img/%img%"/>' +
		'</div>';
	var HTMLurlImg =
		'<div class="col-xs-12 col-sm-2 col-sm-offset-1 magnify">' +
		  '<div class="large"></div>' +
		  '<a href="%url%"><img class="entry-img small" src="%urlImg%"/></a>' +
		'</div>';
	var addImg = function(object, entryType) {
		if (object.hasOwnProperty('img')) {
    		var selector = '.' + entryType + '-entry:last';
			$(selector).append(HTMLimg.replace('%img%', object.img));
		}
		else if (object.hasOwnProperty('urlImg')) {
    		var selector = '.' + entryType + '-entry:last';
    		var html = HTMLurlImg.replace('%urlImg%', object.urlImg)
    			.replace('%url%', object.url)
			$(selector).append(html);
		}
	}

	var HTMLdescription = '<i class="fa fa-circle-o bullet"></i>%description%<br>';
	var addDescriptions = function(object) {
		object.descriptions.forEach(function(description) {
			var html = HTMLdescription
				.replace('%description%', description);
			$('.entry-descriptions:last').append(html);
		});
	}

	var emptySection = function(entriesType) {
		var selector = '.' + entriesType + '-title';
		$(selector).remove();
		selector = '#' + entriesType;
		$(selector).empty();
	}



	//
	// ACADEMIC EDUCATION (SCHOOLS)
	//

	// MAIN HTML
	var HTMLschoolEntry =
	  '<div class="row school-entry">' +
	    '<div class="col-xs-12 col-sm-2 entry-date">' +
	      '%date%' +
	    '</div>' +
	    '<div class="col-xs-12 col-sm-7">' +
	      '<div class="entry-institution">%institution%</div>' +
	      '<div class="entry-location"> - %location%</div>' +
	      '<div class="entry-descriptions"></div>' +
	    '</div>' +
	  '</div>';

	// DISPLAY FUNCTION
	var displaySchools = function(schools) {
		// Header is added
		addTitle('Academic Education', 'schools');
		// Header is added
		schools.forEach(function(school) {
			var html = HTMLschoolEntry
				.replace("%date%", school.date)
				.replace("%institution%", school.institution)
				.replace("%location%", school.location);
			$("#schools").append(html);
			// Add descriptions (bullet points)
			addDescriptions(school);
			// Add image if it exists
			addImg(school, 'school');
		});
	};



	//
	// ONLINE COURSES
	//

	// MAIN HTML
	var HTMLonlineCourseEntry =
	  '<div class="row onlineCourse-entry">' +
	    '<div class="col-xs-12 col-sm-2 entry-date">' +
	      '%date%' +
	    '</div>' +
	    '<div class="col-xs-12 col-sm-7">' +
	      '<div class="entry-title">' +
	        '<a class="a-entry-title" href=%url%>%title%</a>' +
	      '</div>' +
	      '<div class="entry-institution"> - %institution%</div>' +
	    '</div>' +
	  '</div>';

	// DISPLAY FUNCTION
	var displayOnlineCourses = function(onlineCourses) {
		// Header is added
		addTitle('Online courses', 'onlineCourses');
		// Entries are added
		onlineCourses.forEach(function(course) {
			var html = HTMLonlineCourseEntry
				.replace('%date%', course.date)
				.replace("%title%", course.title)
				.replace("%url%", course.url)
				.replace("%institution%", course.institution)
			$("#onlineCourses").append(html);
			// Add image if it exists
			addImg(course, 'onlineCourse');
		});
	};



	//
	// WORKS
	//

	// MAIN HTML
	var HTMLworkEntry =
	  '<div class="row work-entry">' +
	    '<div class="col-xs-12 col-sm-2 entry-date">' +
	      '%date%' +
	    '</div>' +
	    '<div class="col-xs-12 col-sm-7">' +
	      '<div class="entry-institution">%institution%</div>' +
	      '<div class="entry-location"> - %location%</div>' +
	      '<div class="entry-descriptions"></div>' +
	    '</div>' +
	  '</div>';

	// DISPLAY FUNCTION
	var displayWorks = function(works) {
		// Header is added
		addTitle('Work Experience', 'works');
		// Entries are added
		works.forEach(function(work) {
			var html = HTMLworkEntry
				.replace('%date%', work.date)
				.replace('%institution%', work.institution)
				.replace('%location%', work.location);
			$('#works').append(html);
			// Add descriptions (bullet points)
			addDescriptions(work);
			// Add image if it exists
			addImg(work, 'work');
		});
	};



	//
	// HUMAN AND MACHINE LANGUAGES
	//



	//
	// PROJECTS
	//



	//
	// ALL THE REST
	//

	// MAIN HTML
	var HTMLrestEntry =
	  '<div class="row rest-entry">' +
	    '<div class="col-xs-12 col-sm-2 entry-date">' +
	      '%date%' +
	    '</div>' +
	    '<div class="col-xs-12 col-sm-7">' +
	      '<div class="entry-institution">%institution%</div>' +
	      '<div class="entry-location"> - %location%</div>' +
	      '<div class="entry-descriptions"></div>' +
	    '</div>' +
	  '</div>';

	// DISPLAY FUNCTION
	var displayAllTheRest = function(allTheRest) {
		// Header is added
		addTitle('All The Rest', 'allTheRest');
		// Entries are added
		allTheRest.forEach(function(rest) {
			var html = HTMLrestEntry
				.replace('%date%', rest.date)
				.replace('%institution%', rest.institution)
				.replace('%location%', rest.location);
			$('#allTheRest').append(html);
			// Add descriptions (bullet points)
			addDescriptions(rest);
			// Add image if it exists
			addImg(rest, 'rest');
		});
	};



	//
	// MAP
	//

	// map is a global variable
	var map;

	function initializeMap() {
		var locations;
		var placeArray = [];
		var mapOptions = {
			zoom: 2,
			minZoom: 2,
			backgroundColor: 'rgb(1,1,1)'
		};

		map = new google.maps.Map(document.querySelector('#map'), mapOptions);


		/*
		removeDuplicate() removes duplicate from an array and returns the new array
		*/
		function removeDuplicate(a) {
		    var seen = {};
		    var out = [];
		    var len = a.length;
		    var j = 0;
		    for(var i = 0; i < len; i++) {
		         var item = a[i];
		         if(seen[item] !== 1) {
		               seen[item] = 1;
		               out[j++] = item;
		         }
		    }
		    return out;
		}

		/*
		locationFinder() returns an array of location strings present in myData
		*/
		function locationFinder() {
			var locations = [];
			// iterates through entries location and appends each location to
			// the locations array
			function appendLocations(entriesID) {
				myData.forEach(function(tile) {
					if (tile.hasOwnProperty(entriesID)) {
						tile[entriesID].forEach(function(entry) {
							if (entry.hasOwnProperty('location')) {
								locations.push(entry.location);
							}
						});
					}
				});
			}
			appendLocations('schools');
			appendLocations('works');
			appendLocations('allTheRest');
			return removeDuplicate(locations);
		}

		/*
		createMapMarker(placeData) reads Google Places search results to create map markers.
		placeData is the array of objects returned from textSearch results.
		When a marker is clicked, all infoWindows are closed and one appears.
		*/
		function createMapMarker(placeData) {

			placeData.forEach(function(place) {
				// console.log(place);
				// The next lines save location data from the search result object to local variables
				var lat = place.geometry.location.lat();  // latitude from the place service
				var lon = place.geometry.location.lng();  // longitude from the place service
				var name = place.name;   // name of the place from the place service
				var bounds = window.mapBounds;            // current boundaries of the map window
				// marker is an object with additional data about the pin for a single location
				place.marker = new google.maps.Marker({
					map: map,
					position: place.geometry.location,
					title: name
				});
				// infoWindows are the little helper windows that open when you click
				// or hover over a pin on a map. They usually contain more information
				// about a location.
				place.infoWindow = new google.maps.InfoWindow({
					content: name
				});
				// bounds.extend() takes in a map location object
				bounds.extend(new google.maps.LatLng(lat, lon));
				// fit the map to the new marker
				map.fitBounds(bounds);
				// center the map
				map.setCenter(bounds.getCenter());
			});

			placeData.forEach(function(place) {
				// add an info window to the markers
				google.maps.event.addListener(place.marker, 'click', function() {
					placeData.forEach(function(plc) {
						plc.infoWindow.close();
					});
					place.infoWindow.open(map, place.marker);
				});
			});

		}

		/*
		callback(results, status) makes sure the search returned results for a location.
		If so, it adds a new object (result of the request) to placeArray.
		*/
		function callback(results, status) {
			if (status == google.maps.places.PlacesServiceStatus.OK) {
				placeArray.push(results[0]);
			}
		}

		/*
		lastCallback adds the last result to placeArray, and when placeArray is complete ,
		it is sent to createMapMarker.
		*/
		function lastCallback(results, status) {
			if (status == google.maps.places.PlacesServiceStatus.OK) {
				placeArray.push(results[0]);
			}
			createMapMarker(placeArray);
		}

		/*
		pinPoster(locations) takes in the array of locations created by locationFinder()
		and fires off Google place searches for each location
		*/
		function pinPoster(locations) {
			// creates a Google place search service object. PlacesService does the work of
			// actually searching for location data.
			var service = new google.maps.places.PlacesService(map);

			// Iterates through the array of locations, creates a search object for each location
			for (var i = 0; i < locations.length - 1; i++) {
				// the search request object
				var request = {
					query: locations[i]
				};
				// Actually searches the Google Maps API for location data and runs the callback
				// function with the search results after each search.
				service.textSearch(request, callback);
			}
			var request = {
				query: locations[locations.length - 1]
			};
			service.textSearch(request, lastCallback);

		}

		// Sets the boundaries of the map based on pin locations
		window.mapBounds = new google.maps.LatLngBounds();

		// locations is an array of location strings returned from locationFinder()
		locations = locationFinder();

		// pinPoster(locations) creates pins on the map for each location in
		// the locations array
		pinPoster(locations);

	}

	// Calls the initializeMap() function when the page loads
	window.addEventListener('load', initializeMap);

	// Vanilla JS way to listen for resizing of the window
	// and adjust map bounds
	window.addEventListener('resize', function(e) {
		// Make sure the map bounds get updated on page resize
	 	map.fitBounds(mapBounds);
	});



	//
	// OTHER EFFECTS
	//

	// BIO PICTURE ANIMATION
	$('.biopic').on('mouseover', function() {
		$('.biopic').attr('src', 'img/tolstoi.jpg')
	});
	$('.biopic').mouseleave(function() {
		$('.biopic').attr('src', 'img/biopic.jpg')
	});

	// SOUNDS
	// Biopic
	$('<audio></audio>').attr({
			'src': 'snd/pigeon-wings.mp3',
			'class': 'pigeon-wings'
		}).appendTo('body');

	$('.biopic').mouseenter(function() {
	  $('.pigeon-wings')[0].play();
	});
	// Map
	$('<audio></audio>').attr({
			'src': 'snd/water-splash.mp3',
			'class': 'water-splash'
		}).appendTo('body');

	$('#map').mouseenter(function() {
	  $('.water-splash')[0].play();
	});

	// MAGNIFYING GLASS
	/*
	  From thecodeplayer.com:
	  http://thecodeplayer.com/walkthrough/magnifying-glass-for-images-using-jquery-and-css3
	*/
	var native_width = 0;
	var native_height = 0;

	//Now the mousemove function
	$('.magnify').mousemove(function(e) {
	  	$( '.header' ).remove();
		// alert('Handler for .mousemove() called at ');
		// console.log('Hello Dear');
		//When the user hovers on the image, the script will first calculate
		//the native dimensions if they don't exist. Only after the native dimensions
		//are available, the script will show the zoomed version.
		if(!native_width && !native_height)
		{
			//This will create a new image object with the same image as that in .small
			//We cannot directly get the dimensions from .small because of the
			//width specified to 200px in the html. To get the actual dimensions we have
			//created this image object.
			var image_object = new Image();
			image_object.src = $('.small').attr('src');

			//This code is wrapped in the .load function which is important.
			//width and height of the object would return 0 if accessed before
			//the image gets loaded.
			console.log(image_object.width);
			native_width = image_object.width;
			native_height = image_object.height;
		}
		else
		{
			//x/y coordinates of the mouse
			//This is the position of .magnify with respect to the document.
			var magnify_offset = $(this).offset();
			//We will deduct the positions of .magnify from the mouse positions with
			//respect to the document to get the mouse positions with respect to the
			//container(.magnify)
			var mx = e.pageX - magnify_offset.left;
			var my = e.pageY - magnify_offset.top;

			//Finally the code to fade out the glass if the mouse is outside the container
			if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0)
			{
				$('.large').fadeIn(100);
			}
			else
			{
				$('.large').fadeOut(100);
			}
			if($('.large').is(':visible'))
			{
				//The background position of .large will be changed according to the position
				//of the mouse over the .small image. So we will get the ratio of the pixel
				//under the mouse pointer with respect to the image and use that to position the
				//large image inside the magnifying glass
				var rx = Math.round(mx/$('.small').width()*native_width - $('.large').width()/2)*-1;
				var ry = Math.round(my/$('.small').height()*native_height - $('.large').height()/2)*-1;
				var bgp = rx + 'px ' + ry + 'px';

				//Time to move the magnifying glass with the mouse
				var px = mx - $('.large').width()/2;
				var py = my - $('.large').height()/2;
				//Now the glass moves with the mouse
				//The logic is to deduct half of the glass's width and height from the
				//mouse coordinates to place it with its center at the mouse coordinates

				//If you hover on the image now, you should see the magnifying glass in action
				$('.large').css({left: px, top: py, backgroundPosition: bgp});
			}
		}
	});
};

drawResume();
