module.exports = (sequelize, Sequelize) => {
    const Phone = sequelize.define("phone", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        // DEFINE YOUR MODEL HERE
        names: {
            type: Sequelize.STRING,
            null: false
        },
        number: {
            type: Sequelize.INTEGER,
            null: false
        },
        contactId: {
            type: Sequelize.INTEGER,
            foreignKey: true
        },

    });
  
    return Phone;
};