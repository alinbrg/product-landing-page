let atags = document.querySelectorAll('a');
for (let i = 0; i < atags.length; i++) {
	atags[i].addEventListener('click', function(e) {
		console.log(this.href);
		
		let id = this.getAttribute('href').slice(1);
		console.log(id);
		
		let scroll = document.getElementById(id).offsetTop;
		e.preventDefault();

		scrollDown(scroll);
	})
	
}

function scrollDown(max) {
	let scrollTop = document.querySelector('html').scrollTop;

	if(scrollTop < max) {
		setTimeout(() => {
			document.querySelector('html').scrollTop += 7;
			scrollDown(max);
		}, 2);
	}
}
scrollUp();
function scrollUp(){

    document.getElementById('arrow').addEventListener('click', ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });      
    })
}
