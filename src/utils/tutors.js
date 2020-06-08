const tutors = [
	{
		firstName: 'Barry',
		lastName: 'Batman',
		slug: '0',
		email: 'barry@batman.com',
		school: "Rangi Ruru Girls' School",
		subjects: [
			'English',
			'Mathematics',
			'Science'
		],
		bio: `
			<p>Master cleanse intelligentsia neutra aesthetic yuccie, hexagon flannel locavore four loko chambray snackwave viral franzen tumblr. Offal meh hoodie put a bird on it sartorial kickstarter whatever 3 wolf moon mustache snackwave. Leggings man braid af typewriter offal fanny pack.</p>
			<p>Lo-fi shoreditch hella knausgaard literally typewriter occupy hammock banh mi post-ironic franzen microdosing edison bulb truffaut. Glossier hoodie squid flannel XOXO mixtape. Raclette banjo chartreuse cray, la croix yr portland. Palo santo tote bag raw denim brunch vaporware, hashtag truffaut biodiesel.</p>
		`
	},
	{
		firstName: 'Thomas',
		lastName: 'Tornado',
		slug: '1',
		email: 'thomas@tornado.com',
		school: "Rangi Ruru Girls' School",
		subjects: [
			'English',
			'Science',
			'Art'
		],
		bio: `
			<p>Pitchfork live-edge stumptown, quinoa pour-over vegan freegan hoodie literally. Gochujang asymmetrical poutine migas, banjo 90's chartreuse farm-to-table. Whatever tumblr lomo leggings, put a bird on it tacos wolf church-key pug deep v selvage listicle. Asymmetrical viral locavore cliche chartreuse organic.</p>
			<p>Wayfarers pok pok art party freegan copper mug sustainable meh coloring book migas pork belly bicycle rights gochujang narwhal four loko literally.</p>
		`
	},
	{
		firstName: 'Robin',
		lastName: 'Robin',
		slug: '2',
		email: 'robin@robin.com',
		school: "Rangi Ruru Girls' School",
		subjects: [
			'Mathematics',
			'Art',
			'History'
		],
		bio: `
			<p>Franzen af knausgaard, chartreuse brunch polaroid la croix succulents seitan kickstarter intelligentsia cred. Raw denim photo booth butcher next level, tofu health goth chartreuse DIY actually chambray artisan echo park ennui. Letterpress XOXO mlkshk man braid. Jean shorts normcore truffaut try-hard taiyaki +1.</p>
			<p>Vegan fingerstache unicorn, vinyl chicharrones kale chips try-hard knausgaard. Af live-edge bicycle rights put a bird on it 3 wolf moon. Dreamcatcher jianbing pitchfork pabst, drinking vinegar enamel pin scenester craft beer hashtag mustache chartreuse narwhal cred kitsch man bun.</p>
		`
	},
	{
		firstName: 'Fred',
		lastName: 'Flash',
		slug: '3',
		email: 'fred@flash.com',
		school: "Rangi Ruru Girls' School",
		subjects: [
			'History',
			'Social Studies',
			'Spanish'
		],
		bio: `
			<p>Intelligentsia banjo marfa green juice offal subway tile 8-bit vexillologist chicharrones put a bird on it 3 wolf moon art party gastropub chartreuse asymmetrical. Neutra squid fanny pack, sartorial beard pabst taxidermy cold-pressed 90's normcore echo park narwhal celiac sustainable marfa.</p>
			<p>Marfa vegan paleo helvetica, cloud bread skateboard glossier succulents try-hard pabst slow-carb. Mustache everyday carry selfies, snackwave mumblecore heirloom 8-bit tumeric tousled.</p>
		`
	},
	{
		firstName: 'Lionel',
		lastName: 'Lightning',
		slug: '4',
		email: 'lionel@lightning.com',
		school: "Shirley Boys' High School",
		subjects: [
			'Social Studies',
			'Spanish',
			'French'
		],
		bio: `
			<p>Sustainable kale chips poke leggings flexitarian iceland slow-carb banjo tacos jianbing whatever af normcore fixie palo santo. Disrupt banjo vaporware skateboard man braid four dollar toast coloring book kitsch swag chillwave kickstarter. Gentrify microdosing VHS ugh next level mlkshk vinyl tattooed skateboard salvia.</p>
			<p>Wayfarers listicle la croix keffiyeh jean shorts ennui, brunch mlkshk portland. Sartorial ethical cornhole, gochujang crucifix banjo hell of bicycle rights truffaut hexagon umami. Chartreuse cardigan taxidermy, humblebrag hexagon post-ironic flexitarian aesthetic synth.</p>
		`
	},
	{
		firstName: 'Fiona',
		lastName: 'Flood',
		slug: '5',
		email: 'fiona@flood.com',
		school: "Shirley Boys' High School",
		subjects: [
			'French',
			'Art',
			'Science'
		],
		bio: `
			<p>IPhone skateboard mixtape subway tile. Retro ugh ethical hella tofu master cleanse. Woke neutra subway tile pickled, forage lomo everyday carry VHS raw denim godard hashtag cloud bread humblebrag put a bird on it. Blog pop-up craft beer, authentic plaid whatever DIY you probably haven't heard of them banjo live-edge af. Beard snackwave microdosing, hoodie forage tumblr chillwave shaman art party thundercats.</p>
			<p>Cardigan la croix organic knausgaard wolf. Flexitarian activated charcoal heirloom mlkshk cray kinfolk meditation live-edge, lumbersexual food truck mumblecore readymade woke retro fanny pack. Keffiyeh truffaut direct trade helvetica lo-fi, selfies ugh dreamcatcher locavore.</p>
		`
	},
	{
		firstName: 'Wanda',
		lastName: 'Wonder',
		slug: '6',
		email: 'wanda@wonder.com',
		school: "Shirley Boys' High School",
		subjects: [
			'English',
			'Mathematics',
			'Science'
		],
		bio: `
			<p>Cliche XOXO chillwave la croix, food truck tattooed truffaut chartreuse retro distillery thundercats. Normcore taxidermy bitters coloring book leggings mlkshk biodiesel pop-up kombucha polaroid blog vaporware adaptogen hot chicken. 90's gentrify umami distillery vegan authentic YOLO. Letterpress slow-carb migas glossier butcher bushwick. Direct trade messenger bag helvetica, hexagon adaptogen vice kickstarter street art dreamcatcher neutra locavore.</p>
			<p>DIY you probably haven't heard of them twee tote bag lyft humblebrag vexillologist meggings. Hammock viral YOLO, man bun raclette echo park poutine selfies +1 taiyaki messenger bag williamsburg normcore kogi. Blog letterpress meggings, street art chillwave selvage copper mug gluten-free adaptogen brooklyn four loko before they sold out fingerstache synth. Stumptown seitan typewriter ethical, umami mlkshk shabby chic mixtape meggings occupy cronut raclette poke. +1 chartreuse lyft, vexillologist hammock fingerstache bitters aesthetic kogi marfa microdosing.</p>
		`
	}
]

tutors.forEach(tutor => {
	tutor.html = tutor.bio.replace(/^\t{3}/gm, '')
})

export default tutors
