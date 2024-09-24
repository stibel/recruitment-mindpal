class Search {
    constructor(app) {
        this.app = app;
        this.attachEventListeners();
    }

    attachEventListeners() {
        this.app.domElements.searchBox.addEventListener('input', ({target: {value}}) => this.handleSearch(value));
    }

    handleSearch(query) {
        //make search as userproof as possible
        query = query.toLowerCase().trim();
        const filteredNotes = this.app.notes.filter(note => 
            note.title.toLowerCase().includes(query) || note.body.toLowerCase().includes(query)
        );
        this.app.renderNotes(filteredNotes);
    }
}