module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user_inventory', {
        user_id: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        item_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        item_amount: {
            type: DataTypes.STRING,
            allowNull: false,
        }
	}, { 
		timestamps: false,
	});
};