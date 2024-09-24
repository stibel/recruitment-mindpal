//elements are used in different files so I decided to group them here
class DOMElements {
    constructor() {
        this.searchBox = document.getElementById('search');
        this.noNotesIndicator = document.getElementById('noNotesIndicator');
        this.deleteModal = document.getElementById('deleteModal');
        this.cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
        this.confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
        this.notesList = document.getElementById('notesList');
        this.noteForm = document.getElementById('noteForm');
        this.noteTitleInput = document.getElementById('noteTitleInput');
        this.noteBodyInput = document.getElementById('noteBodyInput');
        this.formTitle = document.getElementById('formTitle');
        this.saveNoteBtn = document.getElementById('saveNoteBtn');
        this.cancelFormBtn = document.getElementById('cancelFormBtn');
        this.addNoteBtn = document.getElementById('addNoteBtn');
    }
}