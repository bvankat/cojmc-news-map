var config = {
	style: 'mapbox://styles/mapbox/streets-v11',
	accessToken: 'pk.eyJ1IjoiYnZhbmthdCIsImEiOiJjbHhlemU4bmcwMjVqMmxwdzRhYXNpMXR3In0.9nLycyn371SDdXa_rdOTuA',
	showMarkers: false,
	markerColor: '#3FB1CE',
	//projection: 'equirectangular',
	//Read more about available projections here
	//https://docs.mapbox.com/mapbox-gl-js/example/projections/
	inset: true,
	theme: 'light',
	use3dTerrain: false, //set true for enabling 3D maps.
	auto: false,
	title: 'Optional story heading and title slide',
	subtitle: 'Summary and description.',
	byline: 'Optional byline goes here',
	footer: 'Source: source citations, etc.',
	chapters: [
		{
			id: 'slug-style-id',
			alignment: 'left',
			hidden: false,
			title: 'Slide 1',
			description: 'Sample text goes in here. Each slide needs a location point and a zoom level. We can customize the base map by turning on/off any of the existing layers.',
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
				// {
				//     layer: 'layer-name',
				//     opacity: 1,
				//     duration: 5000
				// }
			],
			onChapterExit: [
				// {
				//     layer: 'layer-name',
				//     opacity: 0
				// }
			]
		},
		{
			id: 'second-identifier',
			alignment: 'right',
			hidden: false,
			title: 'Slide 2',
			description: 'Sample text goes in here. Each slide needs a location point and a zoom level. We can customize the base map by turning on/off any of the existing layers.',
			location: {
				center: [-96.710, 40.833],
				zoom: 8.5,
				pitch: 60,
				bearing: -43.2,
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
			onChapterEnter: [],
			onChapterExit: []
		},
		{
			id: 'third-identifier',
			alignment: 'left',
			hidden: false,
			title: 'Third Title',
			description: 'Sample text goes in here. Each slide needs a location point and a zoom level. We can customize the base map by turning on/off any of the existing layers.',
			location: {
				center: [-102.886, 42.103],
				zoom: 12.52,
				pitch: 8.01,
				bearing: 0.00
			},
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',
			onChapterEnter: [],
			onChapterExit: []
		},
		{
			id: 'fourth-chapter',
			alignment: 'fully',
			hidden: false,
			title: 'Slide 4',
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
			onChapterEnter: [],
			onChapterExit: []
		}
	]
};