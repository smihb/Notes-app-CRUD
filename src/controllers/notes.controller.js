const { json } = require('express');
const { findByIdAndUpdate } = require('../models/note');
const Note = require('../models/note');
const notesCtrl = {};

notesCtrl.renderNotesForm = (req, res) =>{
    res.render('notes/new-note')
}

notesCtrl.createNewNote = async (req, res) =>{
    const { title, description } = req.body
    const note = new Note({title, description});
    await note.save();
    res.redirect('/notes');
}

notesCtrl.renderNotes = async (req, res) =>{
    const notes = await Note.find().lean()
    res.render('notes/all-notes', {notes})
}

notesCtrl.renderEditForm = async (req, res) =>{
    const {id} = req.params
    const note = await Note.findById(id).lean();
    res.render('notes/edit-notes', {note})
}

notesCtrl.updateNotes = async (req, res) =>{
    const {id} = req.params; 
    const {title, description} = req.body;
    console.log(id, title, description)
    await Note.findByIdAndUpdate(id, {title, description})
    res.redirect('/notes')
}

notesCtrl.deleteNote = async (req, res) =>{
    const {id} = req.params;
    await Note.findByIdAndDelete(id);
    res.redirect('/notes');
}



module.exports = notesCtrl;