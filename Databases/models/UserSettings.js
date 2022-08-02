module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user_settings', {
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        compact_view: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
	}, { 
		timestamps: false,
	});
};