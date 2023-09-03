const phones  = require("./phone.model");

module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        // DEFINE YOUR MODEL HERE
        name: {
            type: Sequelize.STRING
        }
    });

    Contact.hasMany(phones, { as: 'phones'});
    phones.belongsTo(Contact,{
        foreignKey: 'contactId', 
        as: 'contact' 

    });
        
    
  
    return Contact;
};