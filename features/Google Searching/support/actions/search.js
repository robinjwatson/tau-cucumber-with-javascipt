import homePage from "C:/dev/tau_cucumber/features/Google Searching/pages/Home.js"

/**
 * Search for a keyword
 *
 * @param {String}  keyword keyword to search for
 * @param {object}  inputField WebDriverIO input field
 * @param {object}  submitButton WebDriverIO submit button
 */

export default (keyword, inputField, submitButton) => {
	homePage.search(keyword);
};
