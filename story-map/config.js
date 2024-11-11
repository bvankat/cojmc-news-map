var config = {
	style: 'mapbox://styles/bvankat/cm34xb3v1014e01pd0yj62683',
	accessToken: 'pk.eyJ1IjoiYnZhbmthdCIsImEiOiJjbDhremdwNjYwNG5sM3ZveWFjdnYyNWlrIn0.LbXcNG9B8t1-_FCVnE2_4A',
	showMarkers: false,
	markerColor: '#3FB1CE',
	//projection: 'equirectangular',
	//Read more about available projections here
	//https://docs.mapbox.com/mapbox-gl-js/example/projections/
	inset: true,
	theme: 'dark',
	use3dTerrain: false, //set true for enabling 3D maps.
	auto: false,
	title: 'Nebraska Local News Ecosystems Report and Map 2024',
	byline: 'Scroll down to continue ↓',
	description: 'In the vastness of the Great Plains state of Nebraska, there are wide stretches with no local journalists or local news organizations and other parts brimming with local media access. This report and digital map provides the true look at local journalism access in Nebraska. Explore this site to understand: Who has access to local news and who does not and why you should care.',
	footer: '',
	chapters: [
		{
			id: 'slide-1',
			alignment: 'left',
			hidden: false,
			title: '',
			description: '<p><strong>There are 584 full-time local journalists working in Nebraska.</strong></p><p><span class="blue">Blue</span> and <span class="green">green</span> counties on the map have higher concentrations of full- and part-time journalists.</p>',
			location: {
				center: [-100.53151, 42],
				zoom: 5.4,
				pitch: 20,
				bearing: 0,
				duration: 3000
			},
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',
			onChapterEnter: [
				 {
					 layer: 'Nebraska Counties',
					 opacity: 1,
					 duration: 1000
				 },
				 {
					 layer: 'Journalists per County',
					 opacity: 1,
					 duration: 1000
				 }
			],
			onChapterExit: [
				 {
					 layer: 'Journalists per County',
					 opacity: 0,
					 duration: 1000
				 }
			]
		},
		{
			id: 'slide-2',
			alignment: 'left',
			hidden: false,
			title: '',
			description: '<p><strong>Nebraska has 196 local and statewide news outlets.</strong></p><p>Red dots represent local outlets and orange dots are for statewide outlets.</p>',
			location: {
				center: [-98.53151, 40.98629],
				zoom: 5.6,
				pitch: 20,
				bearing: 0,
				duration: 4000
			},
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',
			onChapterEnter: [
				 {
					 layer: 'Local and Statewide Outlets',
					 opacity: 1,
					 duration: 2000
				 }
			],
			onChapterExit: [
				 {
					 layer: 'Local and Statewide Outlets',
					 opacity: 0,
					 duration: 2000
				 }
			]
		},
		{
			id: 'slide-3',
			alignment: 'right',
			hidden: false,
			title: '',
			description: '<p><strong>Eleven Nebraska counties have no local news organization based in that county.</strong></p><p>There are 42,942 Nebraskans living in counties that don\'t have any full-time or part-time local journalists.</strong></p>',
			location: {
				center: [-96.710, 40.833],
				zoom: 5.4,
				duration: 5000
			},
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',
			onChapterEnter: [
				 {
					 layer: 'Empty Counties',
					 opacity: 1,
					 duration: 2000
				 }
			],
			onChapterExit: [
				{
					 layer: 'Empty Counties',
					 opacity: 0,
					 duration: 2000
				 }
			]
		},
		{
			id: 'slide-4',
			alignment: 'left',
			hidden: false,
			title: '',
			description: '<p><strong>Fifty-five counties have two or fewer full-time local journalists.</strong></p><p>That\'s 58% of the state\'s counties.</p>',
			location: {
				center: [-99.886, 42.103],
				zoom: 5.7,
				duration: 5000
			},
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',
			onChapterEnter: [
				{
					 layer: 'Two Or Fewer',
					 opacity: 1,
					 duration: 2000
				 },
				{
					 layer: 'Empty Counties',
					 opacity: 0,
					 duration: 2000
				 }
			 ],
			onChapterExit: [
				{
					 layer: 'Two Or Fewer',
					 opacity: 0,
					 duration: 1000
				 }
			]
		},
		{
			id: 'slide-5',
			alignment: 'right',
			hidden: false,
			title: '',
			description: '<p><strong>17 county seats have no local news organization.</strong></p><p>No local news organizations based in: Alliance, Bartlett, Beaver City, Brewster, Center, Clay Center, Dakota City, Elwood, Tryon, Harrison, Harrisburg, Osceola, Papillion, Plattsmouth, Rushville, Stockville and Taylor.',
			location: {
				center: [-97.765, 40.768],
				zoom: 5.5,
				duration: 3000
			},
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',
			onChapterEnter: [
				{
					 layer: 'County Seats No LNO',
					 opacity: 1,
					 duration: 2000
				 }
			],
			onChapterExit: [
				{
					 layer: 'County Seats No LNO',
					 opacity: 0,
					 duration: 2000
				 }
			]
		},
		{
			id: 'slide-6',
			alignment: 'fully',
			hidden: false,
			title: '',
			description: 'Telemundo Nebraska is the only professional journalism organization in the state providing local news in Spanish with five local reporters in Omaha and one in Grand Island.',
			location: {
				center: [-96.765, 40.768],
				zoom: 6.2,
				pitch: 10,
				duration: 5000
			},
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',
			onChapterEnter: [
				{
					 layer: 'Nebraska Counties',
					 opacity: 0,
					 duration: 1000
				 },
				 {
					  layer: 'Telemundo Stations',
					  opacity: 1,
					  duration: 3000
				  }
			],
			onChapterExit: [
				{
					  layer: 'Telemundo Stations',
					  opacity: 0,
					  duration: 1000
				  },
				  
			]
		}
	]
};