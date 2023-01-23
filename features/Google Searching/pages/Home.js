class Home {
    //path to get to the page - relative to the base url, if possible
    get url() {
        return "/";
    }
    
    //search field page object
    get searchField () {
        return $(".gLFyf.gsfi");
    }

    //search button page object
    get searchButton () {
        return $(".aajZCb .gN089b");
    }

    //method to search
    search (keyword) {
        this.searchField.waitForDisplayed(5000);
	    this.searchField.click();
	    this.searchField.setValue(keyword);
	    this.searchButton.waitForDisplayed(5000);
	    this.searchButton.click();
    }
}

module.exports = new Home();