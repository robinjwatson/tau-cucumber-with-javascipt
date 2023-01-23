import { Then } from "@wdio/cucumber-framework";
import verifyLinksContain from "C:/dev/tau_cucumber/features/Google Searching/support/actions/verifyLinksContain.js";

Then(/^links related to "(.*)" are shown on the results page$/, (keyword) => {
	const links = $$(".LC20lb");
	verifyLinksContain(keyword);
});
