//I wanted to make it as userproof as possible, hence the trimming and making the input lowercase 
domElements.searchBox.addEventListener('input', ({target: {value}}) => {
    const query = value.toLowerCase().trim();
    const filteredNotes = notes.filter(note => 
        note.title.toLowerCase().includes(query) || note.body.toLowerCase().includes(query)
    );
    renderNotes(filteredNotes);
});