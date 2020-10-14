$(() => {

	enableTooltips();

	//slide the banner in
	$('.content').animate({ 'left': 0 }, 800, (e) => {
		if($(window).innerWidth() > 760){
			positionAvatar()
		}
	});

	if($(window).innerWidth() > 760){
		messageTypingThingy()
	}

	//some parallax
	$(window).scroll(() => {
		$('.landing-sec .bg').css({'transform': 'translateY(' + String($(window).scrollTop()*0.25) + 'px)'});
	})

})

function enableTooltips(){
	//enable tooltips

	$('[data-tooltip-dn]').each((i, el) => {
		const text = $(el).attr('data-tooltip-dn');
		$(el).append('<span class="tooltip">' + text + '</span>');
	})

	$('[data-tooltip-up]').each((i, el) => {
		const text = $(el).attr('data-tooltip-up');
		$(el).append('<span class="tooltip">' + text + '</span>');
	})
}

function positionAvatar(){
	$('.avatar').animate({'opacity': 1}, 400, (e) => {

		const avatarSectionWidth = $('.avatar').innerWidth();
		$('.msg').css({
			'right': avatarSectionWidth*0.40,
			'opacity': 1
		});

	})
}

function messageTypingThingy(){
	const attribs = ['Hi!', 'I am a web developer', 'I am a music ethusiast', 'I am excited to have you here!'];
	const n = attribs.length;
	const msgbox = $('.avatar .msg span').typist({
		speed: 20,
		cursor: false,
		text: ''
	});
	
	counter = 0;
	setInterval(() => {
		msgbox
		.typistAdd(attribs[counter % n])
		.typistPause(1500 + 2000*(counter % n == n - 1))
		.typistRemove(attribs[counter++ % n].length)
	}, 1000)
}