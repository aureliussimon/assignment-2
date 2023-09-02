const db = require("../models");
const Contacts = db.contacts;
const Phones = db.phones;
const Op = db.Sequelize.Op;

// Create contact
exports.create = (req, res) => {
    const{ names } = req.body;

    Contacts.create({
        names: names
    })
    .then(contact => {
        res.json(contact);
    })
    .catch(err => {
        res.json({
            message: "Error when creating a new contact.",
            error: err.message
        });
    });
};

// Get all contacts
exports.findAll = (req, res) => {
    
};

// Get one contact by id
exports.findOne = (req, res) => {
    const contactId = req.params.contactId;

    Contacts.findByPk(contactId)
    .then(contact => {
        if (!contact) {
            return res.json({ message: "Contact not found."});
        }

        res.json(contact);
    })
    .catch(err => {
        res.json({
            message: "Error retrieving contact by ID.",
            error: err.message
        });
    });
  
};

// Update one contact by id
exports.update = (req, res) => {
    
};

// Delete one contact by id
exports.delete = (req, res) => {
    
};