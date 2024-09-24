const deleteIcon = 
`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.25 16.25H13.75V6.25H6.25V16.25ZM4.375 4.58333V3.33333H7.16667L8 2.5H12L12.8333 3.33333H15.625V4.58333H4.375ZM6.25 17.5C5.91667 17.5 5.625 17.375 5.375 17.125C5.125 16.875 5 16.5833 5 16.25V5H15V16.25C15 16.5833 14.875 16.875 14.625 17.125C14.375 17.375 14.0833 17.5 13.75 17.5H6.25ZM6.25 16.25H13.75H6.25Z" fill="#3B3C3E"/>
</svg>`

const editIcon = 
`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.875 12.1042L15.3958 10.625L16 10.0208C16.1111 9.90972 16.2569 9.85417 16.4375 9.85417C16.6181 9.85417 16.7639 9.90972 16.875 10.0208L17.4792 10.625C17.5903 10.7361 17.6458 10.8819 17.6458 11.0625C17.6458 11.2431 17.5903 11.3889 17.4792 11.5L16.875 12.1042ZM10 17.5V16.0208L14.5 11.5208L15.9792 13L11.4792 17.5H10ZM2.5 13.125V11.875H8.75V13.125H2.5ZM2.5 9.6875V8.4375H12.2917V9.6875H2.5ZM2.5 6.25V5H12.2917V6.25H2.5Z" fill="#3B3C3E"/>
</svg>`

class NoteList {
    constructor(app) {
        this.app = app;
    }

    render(notes) {
        const notesList = this.app.domElements.notesList;
        notesList.innerHTML = '';

        //condition below prevents the indicator from showing up when the filtered notes are empty
        if (notes.length === 0 && this.app.notes.length === 0) {
            this.app.domElements.noNotesIndicator.classList.remove('inactive');
        } else {
            this.app.domElements.noNotesIndicator.classList.add('inactive');
            notes.forEach((note, index) => {
                const noteElement = this.createNoteElement(note, index);
                notesList.appendChild(noteElement);
            });
        }
    }

    createNoteElement(note, index) {
        const noteElement = document.createElement('div');

        noteElement.classList.add('note-item', 'border-radius-12');

        noteElement.innerHTML = 
            `<div class="note-header">
                <div class="note-title font-weight-500">${note.title}</div>
                <div>
                    <button style="cursor:pointer;" class="note-btn edit-btn">${editIcon}</button>
                    <button style="cursor:pointer;" class="note-btn delete-btn">${deleteIcon}</button>
                </div>
            </div>
            <div class="note-body">${note.body}</div>
            <div style="font-size:12px;">${note.date.toLocaleString('en-EN', { month: 'long' })} ${note.date.getDate()}</div>`;

        noteElement.querySelector('.edit-btn').addEventListener('click', () => this.app.noteForm.open(index));
        noteElement.querySelector('.delete-btn').addEventListener('click', () => this.app.deleteModal.open(index));

        return noteElement;
    }
}
