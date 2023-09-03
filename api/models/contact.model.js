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

    Contact.hasMany(Sequelize.models.phone, {
        foreignKey: 'contactId', 
        as: 'phone' 
    });
  
    return Contact;
};