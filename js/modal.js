//since we can cancel or confirm the deletion, we need to keep track of the note's index until user decides
let noteToDeleteIndex = null;

function openDeleteModal(index) {
    noteToDeleteIndex = index; 
    domElements.deleteModal.classList.add('active'); 
}

domElements.cancelDeleteBtn.addEventListener('click', () => {
    noteToDeleteIndex = null;
    domElements.deleteModal.classList.remove('active')
})

domElements.confirmDeleteBtn.addEventListener('click', () => {
    notes.splice(noteToDeleteIndex, 1);
    noteToDeleteIndex = null;
    domElements.deleteModal.classList.remove('active')
    renderNotes();
});