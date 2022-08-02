module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user_balance', {
        user_id: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        wallet_amount: {
            type: DataTypes.STRING,
            defaultValue: '0',
        },
        bank_amount: {
            type: DataTypes.STRING,
            defaultValue: '0',
        },
        max_bank_amount: {
            type: DataTypes.STRING,
            defaultValue: '1000',
        },
        bank_infinite: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
	}, { 
		timestamps: false,
	});
};