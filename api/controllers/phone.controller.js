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
    const phoneId = req.params.phoneId;
    const { number } = req.body;

    Phones.update(
        {
            number: number
        },
        {
            where: { id: phoneId },
            returning: true
        }
    )

        .then(([rowUpdated, [updatedPhone]]) => {
            if (rowUpdated == 0) {
                return res.status(404).json({message: "Phone number not found"});
            }

            res.status(200).json(updatedPhone);
        })
    .catch((err) => {
        
        res.status(500).json({
            message: "Error when updating phone number.",
            error: err.message
        });
    });
};

// Delete one phone by id
exports.delete = (req, res) => {
    const phoneId = req.params.phoneId;

    Phones.destroy({
        where: { id: phoneId}
    })

        .then((rowDeleted) => {
            if (rowDeleted == 0) {
                return res.status(404).json({ message: "Number not found."});
            }

            res.status(200).json({});
        })
        .catch((err) => {
            res.status(500).json({
                message: "Error detecting phone number.",
                error: err.message
            });
            
        });
};