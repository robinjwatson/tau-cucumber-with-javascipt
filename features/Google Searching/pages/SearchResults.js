class SearchResults {
    //no defined url, as this changes with search criterion 
    get searchResultsLinks() {
        return $$(".LC20lb");
    }
}

module.exports = new SearchResults();