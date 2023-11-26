const TRANSITION_DURATION = 200;
// dropdown
(function () {
	const dropdownToggles = document.querySelectorAll('.dropdown>.btn');

	dropdownToggles.forEach(function (dropdownToggle) {
		dropdownToggle.addEventListener('click', function () {
			const parent = dropdownToggle.parentElement;

			dropdownToggle.classList.toggle('active');

			// hide dropdown
			if (parent.classList.contains('show')) {
				dropdownToggle.nextElementSibling.classList.remove('visible');
				setTimeout(() => {
					parent.classList.remove('show');
				}, TRANSITION_DURATION);
			}
			else {
				parent.classList.add('show');
				setTimeout(() => {
					dropdownToggle.nextElementSibling.classList.toggle('visible');
				}, TRANSITION_DURATION);
			}

		});
	})
})();

// alert
(function () {
	const alertCloseButtons = document.querySelectorAll('.alert .btn-close');

	alertCloseButtons.forEach(function (closeBtn) {
		closeBtn.addEventListener('click', function () {
			const parent = closeBtn.closest('.alert');
			parent.classList.add('invisible');
			setTimeout(() => {
				parent.remove();
			}, TRANSITION_DURATION);
		});
	})
})();

// collapse
(function () {
	const collapseToggle = document.getElementById('collapseToggle');
	const accordion = document.getElementById('accordion');

	collapseToggle.addEventListener('click', function () {
		// if active, hide
		// accordion.classList.toggle('show');
		collapseToggle.classList.toggle('active');


		if (collapseToggle.classList.contains('active')) {
			accordion.classList.add('visible');
			setTimeout(() => {
				accordion.classList.add('show');
			}, TRANSITION_DURATION);
		}
		else {
			accordion.classList.remove('visible');

			setTimeout(() => {
				accordion.classList.remove('show');
			}, TRANSITION_DURATION);
		}
	});
})();

// accordion
(function () {
	const accordionItems = document.querySelectorAll('.accordion-item');

	accordionItems.forEach(function (item) {
		item.addEventListener('click', function (e) {
			// if target is clickable, do nothing
			if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;

			if (!(item.classList.contains('show'))) {
				// close open item
				const open = document.querySelector('.accordion-item.show');
				if (open) open.classList.remove('show');
				item.classList.add('show');
			}
			else {
				item.classList.remove('show');
			}
		});
	});
})();