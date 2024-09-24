class NoteForm {
    constructor(app) {
        this.app = app;
        //same case as with deletion
        this.editedNoteIndex = null;
        this.attachEventListeners();
    }

    attachEventListeners() {
        this.app.domElements.noteForm.addEventListener('submit', (e) => this.handleSubmit(e));
        this.app.domElements.cancelFormBtn.addEventListener('click', () => this.close());
    }

    //I decided to handle editing and adding notes in the same function
    open(noteIndex = null) {
        if (noteIndex !== null) {
            this.editedNoteIndex = noteIndex;
            this.app.domElements.formTitle.textContent = 'Edit Note';
            this.app.domElements.noteTitleInput.value = this.app.notes[noteIndex].title;
            this.app.domElements.noteBodyInput.value = this.app.notes[noteIndex].body;
        } else {
            this.editedNoteIndex = null;
            this.app.domElements.formTitle.textContent = 'Add New Note';
            this.app.domElements.noteTitleInput.value = '';
            this.app.domElements.noteBodyInput.value = '';
        }

        this.app.domElements.noteForm.classList.add('active');
        this.app.domElements.noNotesIndicator.classList.add('inactive');
        this.app.domElements.addNoteBtn.classList.add('inactive');
    }

    close() {
        this.app.domElements.noteForm.classList.remove('active');
        this.app.domElements.addNoteBtn.classList.remove('inactive');
        if (this.app.notes.length === 0) {
            this.app.domElements.noNotesIndicator.classList.remove('inactive');
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        //we could also prevent user from adding such notes, I decided to handle that case by addin "empty" ones
        const title = this.app.domElements.noteTitleInput.value.trim() || "Untitled";
        const body = this.app.domElements.noteBodyInput.value.trim() || "No content";

        if (this.editedNoteIndex !== null) {
            this.app.updateNote(this.editedNoteIndex, { title, body, date: new Date() });
            this.editedNoteIndex = null;
        } else {
            this.app.addNote({ title, body, date: new Date() });
        }

        this.close();
    }
}
