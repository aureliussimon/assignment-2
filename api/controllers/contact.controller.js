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
    const contactId = req.params.contactId;
    const { names } = req.body

    Contacts.update(
        {names: names},
        {
            where: {id: contactId},
            returning: true
        }
    )
    .then(([rowsUpdated, [updatedContact]]) => {
        if (rowsUpdated == 0) {
            return res.status(400).json({ message: "Contact does not exist." });
        }
        res.status(200).json(updatedContact);
    })    
    .catch(err => {
        res.status(500).json({
            message: "Unable to update contact.",
            error: err.message
        });
    });
};

// Delete one contact by id
exports.delete = (req, res) => {
    const contactId = req.params.contactId;

    Contacts.destroy({
        where: {contactId: contactId}
    })
    .then(num => {
        if (num == 1){
            res.send({
                message: "Contact was deleted successfully!"
            });
        }else{
            res.send({
                message: 'Cannot delete contact.'
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete contact with id=" + contactId
        });
    });
};