var config = {
	style: 'mapbox://styles/bvankat/clzx3cfap007501qr6xlh9qn6',
	accessToken: 'pk.eyJ1IjoiYnZhbmthdCIsImEiOiJjbDhremdwNjYwNG5sM3ZveWFjdnYyNWlrIn0.LbXcNG9B8t1-_FCVnE2_4A',
	showMarkers: false,
	markerColor: '#3FB1CE',
	projection: 'equirectangular',
	title: 'Testing a new story map',
	subtitle: 'Summary paragraph here',
	inset: false,
	theme: 'light',
	use3dTerrain: true, //set true for enabling 3D maps.
	chapters: [
		{
			id: 'chapter-1',
			alignment: 'left',
			hidden: false,
			description: 'Slide 1',
			location: {
				center: [-100, 41.5],
				zoom: 4.7,
				pitch: 5,
				bearing: 0,
				duration: 2000
			},
			mapAnimation: 'easeTo',
			rotateAnimation: false,
			callback: '',
			onChapterEnter: [
				{
					 layer: 'nebraska-ev-charging-stations',
					 opacity: 0
				 },
				{
					 layer: 'nebraska-ev-deserts',
					 opacity: 0
				 },
				{
					 layer: 'interstate-80',
					 opacity: 0
				 },
				{
					 layer: 'EV-planned-chargers',
					 opacity: 0
				 },
				{
					 layer: 'nebraska-outline',
					 opacity: 0.8,
					 duration: 500
				 },
				 {
					  layer: 'nebraska-ev-counties',
					  opacity: 1,
					  duration: 2000
				  }
			],
			onChapterExit: []
		},
		{
			id: 'chapter-2',
			alignment: 'left',
			hidden: false,
			description: 'Slide 2',
			location: {
				center: [-99.5, 41.5],
				zoom: 4.9,
				pitch: 0,
				bearing: 0,
				duration: 3000
			},
			mapAnimation: 'easeTo',
			rotateAnimation: false,
			callback: '',
			onChapterEnter: [
				{
					  layer: 'nebraska-ev-charging-stations',
					  opacity: 1,
					  duration: 1500
				  },  
				{
					  layer: 'nebraska-outline',
					  opacity: 0.5,
					  duration: 500
				  },
				{
					  layer: 'nebraska-ev-counties',
					  opacity: 0,
					  duration: 2000
				  },
				{
					  layer: 'interstate-80',
					  opacity: 1,
					  duration: 1000
				  }
			],
			onChapterExit: []
		},
		{
			id: 'chapter-3',
			alignment: 'left',
			hidden: false,
			description: '[ Slide 3 ]',
			location: {
				center: [-99.5, 41.5],
				zoom: 4.8,
				pitch: 0,
				bearing: 0,
				duration: 2000
			},
			mapAnimation: 'easeTo',
			rotateAnimation: false,
			callback: '',
			onChapterEnter: [
				{
					  layer: 'nebraska-ev-charging-stations',
					  opacity: 0,
					  duration: 2000
				  },
				{
					  layer: 'nebraska-ev-counties',
					  opacity: 0,
					  duration: 1000
				  },
				{
					  layer: 'nebraska-ev-deserts',
					  opacity: 1,
					  duration: 1000
				  }
			],
			onChapterExit: []
		},
		{
			id: 'chapter-4',
			alignment: 'left',
			hidden: false,
			description: 'Slide 4',
			location: {
				center: [-99.5, 41.5],
				zoom: 4.9,
				pitch: 5,
				bearing: 0,
				duration: 2000
			},
			mapAnimation: 'easeTo',
			rotateAnimation: false,
			callback: '',
			onChapterEnter: [
				  {
						layer: 'nebraska-ev-charging-stations',
						opacity: 0,
						duration: 3000
					},
				  {
						layer: 'nebraska-ev-deserts',
						opacity: 0.75,
						duration: 3000
					},
				  {
						layer: 'EV-planned-chargers',
						opacity: 1,
						duration: 1000
					},
			],
			onChapterExit: []
		}
		
	]
};