
		const text = document.getElementById('text');
		const prog = ' আপনার প্রয়োজনীয় রক্ত খুঁজুন ....';
		let idx = 1;

		setInterval(typingText, 150);

		function typingText(){
			text.innerText = prog.slice(0, idx);
			idx++;

			if (idx > prog.length) {
				idx = 1;
			}
		}


		$('.icon').click(function(){
			$('.menu1').slideToggle(500);
		});
