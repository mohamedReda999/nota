document.addEventListener('DOMContentLoaded', function() {
    const addNoteButton = document.getElementById('add-note-button');
    const noteInput = document.getElementById('note-input');
    const notesList = document.getElementById('notes-list');

    // Load notes from Local Storage
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    // Function to render notes
    function renderNotes() {
        notesList.innerHTML = '';
        notes.forEach((note, index) => {
            const listItem = document.createElement('li');

            const noteSpan = document.createElement('span');
            noteSpan.textContent = note;

            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('note-buttons');

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit');
            editButton.addEventListener('click', function() {
                noteInput.value = note;
                addNoteButton.textContent = 'Update Note';
                addNoteButton.setAttribute('data-editing', index);
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', function() {
                notes.splice(index, 1);
                localStorage.setItem('notes', JSON.stringify(notes));
                renderNotes();
            });

            buttonContainer.appendChild(editButton);
            buttonContainer.appendChild(deleteButton);
            listItem.appendChild(noteSpan);
            listItem.appendChild(buttonContainer);
            notesList.appendChild(listItem);
        });
    }

    // Function to add or update a note
    function addOrUpdateNote() {
        const noteText = noteInput.value.trim();
        if (noteText === '') {
            return;
        }

        const editingIndex = addNoteButton.getAttribute('data-editing');
        if (editingIndex !== null) {
            notes[editingIndex] = noteText;
            addNoteButton.removeAttribute('data-editing');
            addNoteButton.textContent = 'Add Note';
        } else {
            notes.push(noteText);
        }

        noteInput.value = '';
        localStorage.setItem('notes', JSON.stringify(notes));
        renderNotes();
    }

    // Event listener for the add/update button
    addNoteButton.addEventListener('click', addOrUpdateNote);

    // Initial render of notes
    renderNotes();
});