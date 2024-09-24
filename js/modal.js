class Modal {
    constructor(app) {
        this.app = app;
        //since we can confim or cancel deletion we have to keep track of the note's index
        this.noteIndexToDelete = null;
        this.attachEventListeners();
    }

    attachEventListeners() {
        this.app.domElements.cancelDeleteBtn.addEventListener('click', () => this.close());
        this.app.domElements.confirmDeleteBtn.addEventListener('click', () => this.confirmDelete());
    }

    open(noteIndex) {
        this.noteIndexToDelete = noteIndex;
        this.app.domElements.deleteModal.classList.add('active');
    }

    close() {
        this.app.domElements.deleteModal.classList.remove('active');
    }

    confirmDelete() {
        if (this.noteIndexToDelete !== null) {
            this.app.deleteNote(this.noteIndexToDelete);
            this.close();
            this.noteIndexToDelete = null;
        }
    }
}