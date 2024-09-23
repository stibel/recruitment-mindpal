const notesList = document.getElementById('notesList');
const addNoteBtn = document.getElementById('addNoteBtn');
const searchBox = document.getElementById('search');
const noNotesIndicator = document.getElementById('noNotesIndicator')

// let notes = [{title: 'notatka', body: 'notować'}];
let notes = [];

const deleteIcon = 
`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.25 16.25H13.75V6.25H6.25V16.25ZM4.375 4.58333V3.33333H7.16667L8 2.5H12L12.8333 3.33333H15.625V4.58333H4.375ZM6.25 17.5C5.91667 17.5 5.625 17.375 5.375 17.125C5.125 16.875 5 16.5833 5 16.25V5H15V16.25C15 16.5833 14.875 16.875 14.625 17.125C14.375 17.375 14.0833 17.5 13.75 17.5H6.25ZM6.25 16.25H13.75H6.25Z" fill="#3B3C3E"/>
</svg>`

const editIcon = 
`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.875 12.1042L15.3958 10.625L16 10.0208C16.1111 9.90972 16.2569 9.85417 16.4375 9.85417C16.6181 9.85417 16.7639 9.90972 16.875 10.0208L17.4792 10.625C17.5903 10.7361 17.6458 10.8819 17.6458 11.0625C17.6458 11.2431 17.5903 11.3889 17.4792 11.5L16.875 12.1042ZM10 17.5V16.0208L14.5 11.5208L15.9792 13L11.4792 17.5H10ZM2.5 13.125V11.875H8.75V13.125H2.5ZM2.5 9.6875V8.4375H12.2917V9.6875H2.5ZM2.5 6.25V5H12.2917V6.25H2.5Z" fill="#3B3C3E"/>
</svg>`

const createNoteElem = ({title, body}, index) => {
    const date = new Date();

    const month = date.toLocaleString('en-EN', { month: 'long' });

    const day = date.getDate();

    const elem = document.createElement('div');

    elem.classList.add('note-item');

    elem.innerHTML = `<div class="note-header">
                <div class="note-title font-weight-500">${title}</div>
                <div>
                    <button class="note-btn">${editIcon}</button>
                    <button class="note-btn" onclick="deleteNote(${index})">${deleteIcon}</button>
                </div>
            </div>
            <div class="note-body">${body}</div>
            <div>${month} ${day}</div>`

    return elem;
}

function deleteNote(index) {
    notes.splice(index, 1);
    renderNotes();
}

function updateAddNoteBtn() {
    if (notes.length === 0) {
        noNotesIndicator.style.display = 'flex'
        addNoteBtn.className = 'add-note-btn centered-flex';
        addNoteBtn.innerHTML = `
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.25 14.425H12.75V14.925V17.65H12.25V14.925V14.425H11.75H9V13.925H11.75H12.25V13.425V10.675H12.75V13.425V13.925H13.25H16V14.425H13.25ZM14.775 7.65V3.5V3H14.275H6H5.5V3.5V8.15V20.5V21H6H19H19.5V20.5V8.15V7.65H19H14.775ZM19 21.5H6C5.74128 21.5 5.5161 21.409 5.30355 21.1964C5.09101 20.9839 5 20.7587 5 20.5V3.5C5 3.24128 5.09101 3.0161 5.30355 2.80355C5.5161 2.59101 5.74128 2.5 6 2.5H14.8179L20 7.68211V20.5C20 20.7587 19.909 20.9839 19.6964 21.1964C19.4839 21.409 19.2587 21.5 19 21.5Z" fill="black" stroke="#1B1C1E"/>
        </svg>    
        Add New
        `;
    } else {
        noNotesIndicator.style.display = 'none'
        addNoteBtn.className = 'add-another-note-btn clickable-elem';
        addNoteBtn.innerHTML = 'Add New'
    }
}

const renderNotes = () => {
    notesList.innerHTML = '';  // Clear the list
    notes.forEach((note, index) => {
        const noteElement = createNoteElem(note, index)
        notesList.appendChild(noteElement);
    });
    updateAddNoteBtn();
}



addNoteBtn.addEventListener('click', () => {
    const title = prompt('Enter note title:');
    const body = prompt('Enter note body:');
    if (title && body) {
        notes.push({ title, body });
        renderNotes();
    }
});


renderNotes();