/**
 * Search for a keyword
 *
 * @param {String}  keyword keyword to search for
 * @param {object}  inputField WebDriverIO input field
 * @param {object}  submitButton WebDriverIO submit button
 */

export default (keyword, inputField, submitButton) => {
	inputField.waitForDisplayed(5000);
	inputField.click();
	inputField.setValue(keyword);
	submitButton.waitForDisplayed(5000);
	submitButton.click();
};
