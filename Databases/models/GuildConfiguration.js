module.exports = (sequelize, DataTypes) => {
    return sequelize.define('guild_configuration', {
        guildId: {
            unique: true,
            type: DataTypes.STRING,
        },
        guildPrefix: {
            type: DataTypes.STRING(5),
            defaultValue: 'u/'
        },
        welcomeChannel: {
            type: DataTypes.STRING(18),
            allowNull: true,
        },
	}, {
		timestamps: false,
	});
};