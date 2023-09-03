const { phones } = require("./phone.model");

module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        // DEFINE YOUR MODEL HERE
        names: {
            type: Sequelize.STRING
        }
    });

    Contact.hasMany(Sequelize.models.Phones, {
        foreignKey: 'contactId', 
        as: 'contact' 
    });
  
    return Contact;
};