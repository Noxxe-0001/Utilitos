module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user_economy_profile', {
        user_id: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        user_level: {
            type: DataTypes.STRING,
            defaultValue: '0',
        },
        experience: {
            type: DataTypes.STRING,
            defaultValue: '0',
        },
        double_xp: {
            type: DataTypes.BOOLEAN,
            defaultValue: 'false',
        },
        double_xp_duration: {
            type: DataTypes.INTEGER,
            defaultValue: '0',
        },
    }, {
        timestamps: false,
    })
};