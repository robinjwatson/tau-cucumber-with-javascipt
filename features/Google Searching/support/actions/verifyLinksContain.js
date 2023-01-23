/**
 * Ensure link text iunclude keyword
 *
 * @param {Array.Object}  links list of WebDriverIO elements
 * @param {String}  keyword keyword to search for
 */

export default (links, keyword) => {
	links.forEach((link) => {
		const linkText = link.getText().toLowerCase();
		if (linkText) {
			assert(
				linkText.includes(keyword),
				`Link ${linkText} does not include ${keyword}`
			);
		}
	});
};
