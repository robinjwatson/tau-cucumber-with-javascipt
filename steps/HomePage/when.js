import { When } from "@wdio/cucumber-framework";
import googleSearch from "C:/dev/tau_cucumber/features/Google Searching/support/actions/search.js";

When(/^The user enters "(.*)" into the search bar$/, (keyword) => {
	googleSearch(keyword);
});
