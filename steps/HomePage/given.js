import { Given } from "@wdio/cucumber-framework";
import goToURL from "C:/dev/tau_cucumber/features/Google Searching/support/actions/goToURL.js";

Given("A web browser is at the Google home page", () => {
	// the / lets us know that the url is a relative url, not an absolute.
	// It will navigate to the url defined in the config
	goToURL("/");
});
