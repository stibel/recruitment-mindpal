//since we can cancel or confirm the edit, we need to keep track of edited note's index for the duration of the editing
let editedNodeIndex = null;

//I didn't want to duplicate forms or functions so this one distinguishes cases when we add and edit a note
function openNoteForm(noteIndex = null) {
    if (noteIndex !== null) {
        editedNodeIndex = noteIndex;
        // Change form header and fill inputs with current note data
        domElements.formTitle.textContent = 'Edit Note';
        domElements.noteTitleInput.value = notes[noteIndex].title;
        domElements.noteBodyInput.value = notes[noteIndex].body;
    } else {
        editedNodeIndex = null;
        domElements.formTitle.textContent = 'Add New Note';
        domElements.noteTitleInput.value = '';
        domElements.noteBodyInput.value = '';
    }

    //show the addition/edit form, hide the no notes indicator and add button (which opens the form)
    domElements.noteForm.classList.add('active');
    domElements.noNotesIndicator.classList.add('inactive');
    domElements.addNoteBtn.classList.add('inactive');
}

domElements.addNoteBtn.addEventListener('click', () => {
    openNoteForm();
});

function editNote(index) {
    openNoteForm(index);
}

//hide the form and show the addition button, if no notes are present, show the no notes indicator
domElements.cancelFormBtn.addEventListener('click', () => {
    domElements.noteForm.classList.remove('active');
    domElements.addNoteBtn.classList.remove('inactive');
    if (notes.length === 0) {
        domElements.noNotesIndicator.classList.remove('inactive');
    }
});

domElements.noteForm.addEventListener('submit', (e) => {
    //prevent page reload
    e.preventDefault(); 

    //we could also prevent user from saving such notes
    const title = domElements.noteTitleInput.value.trim() || "Untitled";
    const body = domElements.noteBodyInput.value.trim() || "No content";

    //overwrite an existing note or create a new one;
    if (editedNodeIndex !== null) {
        notes[editedNodeIndex].title = title;
        notes[editedNodeIndex].body = body;
    } else {
        notes.push({ title, body });
    }

    //update notes, hide the form, show the addition button
    renderNotes();
    domElements.noteForm.classList.remove('active');
    domElements.addNoteBtn.classList.remove('inactive');
    
});
