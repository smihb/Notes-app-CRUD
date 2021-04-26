const {Router} = require('express');
const { renderEditForm, updateNotes } = require('../controllers/notes.controller');
const router = Router();
const notesCtrl = require('../controllers/notes.controller');
const {isAuthenticated} = require('../helpers/auth');
const { route } = require('./index.routes');

// New notes
router.get('/notes/add', isAuthenticated, notesCtrl.renderNotesForm);
router.post('/notes/new-note', isAuthenticated, notesCtrl.createNewNote);

// Get all notes
router.get('/notes', isAuthenticated, notesCtrl.renderNotes)

// Edit notes
router.get('/notes/edit/:id', isAuthenticated, notesCtrl.renderEditForm)
router.put('/notes/edit/:id', isAuthenticated, notesCtrl.updateNotes)

// Delete Notes
router.delete('/notes/delete/:id', isAuthenticated, notesCtrl.deleteNote)



module.exports = router;