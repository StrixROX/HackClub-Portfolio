$(() => {

	enableTooltips();
	animateHome();

})

function enableTooltips(){
	//enable tooltips

	$('[data-tooltip-dn]').each((i, el) => {
		const text = $(el).attr('data-tooltip-dn');
		$(el).append('<span class="tooltip">' + text + '</span>');
	})
}

function animateHome(){
	//slide the banner in

	$('.content').animate({ 'left': 0 }, 600, 'swing', (e) => {
		//then position the avatar msg bubble

		const avatarSectionWidth = $('.avatar').innerWidth();
		$('.msg').css({
			'right': avatarSectionWidth*0.40,
			'opacity': 1
		});
	});

	const attribs = ['Hi!', 'I am a web developer', 'I am a music ethusiast', 'I am excited to have you here!'];
	const msgbox = $('.avatar .msg span').typist({
		speed: 20,
		cursor: false,
		text: ''
	});
	
	counter = 0;
	setInterval(() => {
		msgbox
		.typistAdd(attribs[counter % attribs.length])
		.typistPause(1000 + 3000*(counter % attribs.length == attribs.length - 1))
		.typistRemove(attribs[counter++ % attribs.length].length)
	}, 1000)
}