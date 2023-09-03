const { Contact } = require("./contact.model");

module.exports = (sequelize, Sequelize) => {
    const Phone = sequelize.define("Phone", {
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
                model: Contact,
                key: 'id',
            }
        }

    });

  
    return Phone;
};