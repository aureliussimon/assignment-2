const { contacts } = require(".");

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
                model: 'Contact',
                key: 'id'
            }
        }

    });

    Phone.belongsTo(Sequelize.models.Contact, {
        foreignKey: 'contactId',
        as: 'contact', 
    });
  
    return Phone;
};