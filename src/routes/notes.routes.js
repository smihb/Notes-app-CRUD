const {Router} = require('express');
const { renderEditForm, updateNotes } = require('../controllers/notes.controller');
const router = Router();
const notesCtrl = require('../controllers/notes.controller');
const { route } = require('./index.routes');

// New notes
router.get('/notes/add', notesCtrl.renderNotesForm);
router.post('/notes/new-note', notesCtrl.createNewNote);

// Get all notes
router.get('/notes', notesCtrl.renderNotes)

// Edit notes
router.get('/notes/edit/:id', notesCtrl.renderEditForm)
router.put('/notes/edit/:id', notesCtrl.updateNotes)

// Delete Notes
router.delete('/notes/delete/:id', notesCtrl.deleteNote)



module.exports = router;