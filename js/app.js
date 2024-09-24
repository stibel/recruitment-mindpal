class NotesApp {
    constructor() {
        this.notes = [];
        this.domElements = new DOMElements();
        this.noteForm = new NoteForm(this);
        this.noteList = new NoteList(this);
        this.search = new Search(this);
        this.deleteModal = new Modal(this);
        this.init();
    }

    init() {
        this.renderNotes();
        this.attachEventListeners();
    }

    renderNotes(filteredNotes = null) {
        this.noteList.render(filteredNotes || this.notes);
    }

    addNote(note) {
        this.notes.push(note);
        this.renderNotes();
        this.updateAddNoteBtn();
    }

    updateNote(index, updatedNote) {
        this.notes[index] = updatedNote;
        this.renderNotes();
    }

    deleteNote(index) {
        this.notes.splice(index, 1);
        this.renderNotes();
        this.updateAddNoteBtn();
    }

    attachEventListeners() {
        this.domElements.addNoteBtn.addEventListener('click', () => this.noteForm.open());
    }

    updateAddNoteBtn() {
        if (this.notes.length === 0) {
            this.domElements.addNoteBtn.className = 'add-note-btn centered-flex border-radius-12';
            this.domElements.addNoteBtn.innerHTML = `
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.25 14.425H12.75V14.925V17.65H12.25V14.925V14.425H11.75H9V13.925H11.75H12.25V13.425V10.675H12.75V13.425V13.925H13.25H16V14.425H13.25ZM14.775 7.65V3.5V3H14.275H6H5.5V3.5V8.15V20.5V21H6H19H19.5V20.5V8.15V7.65H19H14.775ZM19 21.5H6C5.74128 21.5 5.5161 21.409 5.30355 21.1964C5.09101 20.9839 5 20.7587 5 20.5V3.5C5 3.24128 5.09101 3.0161 5.30355 2.80355C5.5161 2.59101 5.74128 2.5 6 2.5H14.8179L20 7.68211V20.5C20 20.7587 19.909 20.9839 19.6964 21.1964C19.4839 21.409 19.2587 21.5 19 21.5Z" fill="black" stroke="#1B1C1E"/>
            </svg>    
            Add New
            `;
        } else {
            this.domElements.addNoteBtn.className = 'add-another-note-btn clickable-elem border-radius-12';
            this.domElements.addNoteBtn.innerHTML = 'Add New'
        }
    }
}

const app = new NotesApp();