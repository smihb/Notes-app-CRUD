const { json } = require('express');
const { findByIdAndUpdate } = require('../models/note');
const Note = require('../models/note');
const notesCtrl = {};

notesCtrl.renderNotesForm = (req, res) =>{
    res.render('notes/new-note')
}

notesCtrl.createNewNote = async (req, res) =>{
    const { title, description } = req.body
    if(title === "" ||description === "" ){
        req.flash('error_msg', 'Should complete title and description')
        return res.redirect('/notes/add')
    }
    const note = new Note({title, description});
    note.user = req.user.id;
    await note.save();
    req.flash('success_msg', 'Note added successfully')
    res.redirect('/notes');
}

notesCtrl.renderNotes = async (req, res) =>{
    const notes = await Note.find({user: req.user.id}).sort({createdAt: 'desc'}).lean()
    res.render('notes/all-notes', {notes})
}

notesCtrl.renderEditForm = async (req, res) =>{
    const {id} = req.params
    const note = await Note.findById(id).lean();
    if(note.user != req.user.id){
        req.flash('error_msg', 'Not authorized')
        return res.redirect('/notes')
    }
    res.render('notes/edit-notes', {note})
}

notesCtrl.updateNotes = async (req, res) =>{
    const {id} = req.params; 
    const {title, description} = req.body;
    if(title === "" ||description === "" ){
        req.flash('error_msg', 'Not edited, should complete title and description')
        return res.redirect(`/notes`)
    }
    await Note.findByIdAndUpdate(id, {title, description})
    req.flash('success_msg', 'Note updated successfully')
    res.redirect('/notes')
}

notesCtrl.deleteNote = async (req, res) =>{
    const {id} = req.params;
    await Note.findByIdAndDelete(id);
    req.flash('success_msg', 'Note deleted successfully')
    res.redirect('/notes');
}



module.exports = notesCtrl;