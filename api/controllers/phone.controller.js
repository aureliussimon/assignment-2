const db = require("../models");
const Phones = db.phones;
const Contacts = db.contacts;
const Op = db.Sequelize.Op;

// Create phone
exports.create = (req, res) => {
    const{ names, number } = req.body;

    Contacts.create({
        names: names,
        number: number
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

// Get all phones
exports.findAll = (req, res) => {
    const contactId = req.params.contactId;

    Phones.findAll({
        where: {
            contactId: contactId
        }
    })
    .then(phones => {
        res.json(phones); //.status(200)
    })
    .catch(err => {
        res.json({        //.status(500)
            message: "Error retrieving phones for the contact with id=" + contactId,
            error: err.message
        });
    });
    
};

// Get one phone by id
exports.findOne = (req, res) => {
    const phoneId = req.params.phoneId;

    Phones.findByPk(phoneId)
        .then((phone) => {
            if(!phone) {
                return res.status(400).json({ message: "Number not found!"});
            }

            res.status(200).json(phone);
        })

        .catch((err) => {
            res.status(500).json({
                message: "Error experienced retrieving phone number.",
                error: err.message
            });
        });
  
};

// Update one phone by id
exports.update = (req, res) => {
    
};

// Delete one phone by id
exports.delete = (req, res) => {
    
};