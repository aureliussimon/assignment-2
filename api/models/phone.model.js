const { contacts } = require("./contact.model");

module.exports = (sequelize, Sequelize) => {
    const Phone = sequelize.define("phone", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        // DEFINE YOUR MODEL HERE
        name: {
            type: Sequelize.STRING
        },
        number: {
            type: Sequelize.INTEGER
        },
        contactId: {
            type: Sequelize.INTEGER,
            references:{
                model: contacts,
                key: id
            }
        }

    });

    Phone.belongsTo(contacts, {
        foreignKey: 'contactId',
        as: 'contact', 
    });
  
    return Phone;
};