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
	title: 'Nebraska Local News Map 2024',
	byline: 'Report by XXXXXXXX',
	description: 'In the vastness of the Great Plains state of Nebraska, there are wide stretches with no local journalists or local news organizations and other parts brimming with local media access. This report and digital map provides the true look at local journalism access in Nebraska. Explore this site to understand: Who has access to local news and who does not and why you should care.',
	footer: 'Source: source citations, etc.',
	chapters: [
		{
			id: 'slide-1',
			alignment: 'left',
			hidden: false,
			title: '',
			description: '<p><strong>There are 584 full-time local journalists working in Nebraska.</strong></p><p>This map is shaded by the number of journalists per county. The blue and green areas have higher concentrations of full- and part-time journalists.</p>',
			location: {
				center: [-98.53151, 40.98629],
				zoom: 5,
				pitch: 20,
				bearing: 0
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
					 duration: 5000
				 }
			],
			onChapterExit: [
				 {
				     layer: 'Journalists per County',
				     opacity: 0,
					 duration: 2000
				 }
			]
		},
		{
			id: 'slide-2',
			alignment: 'right',
			hidden: false,
			title: '',
			description: '<p><strong>Eleven Nebraska counties have no local news organization based in that county.</strong></p><p>42,942 Nebraskans live in counties that don’t have any full-time or part-time local journalists.</strong>',
			location: {
				center: [-96.710, 40.833],
				zoom: 5.3,
				duration: 5000
				// pitch: 60,
				// bearing: -43.2,
				// flyTo additional controls-
				// These options control the flight curve, making it move
				// slowly and zoom out almost completely before starting
				// to pan.
				//speed: 2, // make the flying slow
				//curve: 1, // change the speed at which it zooms out
			},
			mapAnimation: 'flyTo',
			rotateAnimation: true,
			callback: '',
			onChapterEnter: [
				 {
				     layer: 'Empty Counties',
				     opacity: 1,
				     duration: 5000
				 }
			],
			onChapterExit: []
		},
		{
			id: 'slide-3',
			alignment: 'left',
			hidden: false,
			title: '[Slide 3]',
			description: '<p><strong>55 counties have two or fewer full-time local journalists, or about 58%</strong></p>',
			location: {
				center: [-99.886, 42.103],
				zoom: 5.5,
				duration: 5000
			},
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',
			onChapterEnter: [
				{
					 layer: 'Local and Statewide Outlets',
					 opacity: 1,
					 duration: 1000
				 },
				{
					 layer: 'Journalists per County',
					 opacity: 0,
					 duration: 2000
				 }
			 ],
			onChapterExit: []
		},
		{
			id: 'slide-4',
			alignment: 'right',
			hidden: false,
			title: '[Slide 4]',
			description: 'Sample text goes in here. Each slide needs a location point and a zoom level. We can customize the base map by turning on/off any of the existing layers.',
			location: {
				center: [-99.765, 40.768],
				zoom: 4,
				pitch: 0,
				bearing: 0
			},
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',
			onChapterEnter: [
				{
					 layer: 'Public Safety Entities',
					 opacity: 1,
					 duration: 5000
				 }
			],
			onChapterExit: []
		},
		{
			id: 'slide-5',
			alignment: 'fully',
			hidden: false,
			title: '[Slide 5]',
			description: 'Sample text goes in here. Each slide needs a location point and a zoom level. We can customize the base map by turning on/off any of the existing layers.',
			location: {
				center: [-99.765, 40.768],
				zoom: 4,
				pitch: 0,
				bearing: 0
			},
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',
			onChapterEnter: [
				{
					 layer: 'Public Safety Entities',
					 opacity: 1,
					 duration: 5000
				 }
			],
			onChapterExit: []
		}
	]
};