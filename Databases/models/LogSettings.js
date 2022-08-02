module.exports = (sequelize, DataTypes) => {
    return sequelize.define('log_settings', {
        guild_id: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        log_channel: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        role_add: {
            type: DataTypes.BOOLEAN,
            defaultValue: 'true',
        },
        role_remove: {
            type: DataTypes.BOOLEAN,
            defaultValue: 'true',
        },
        message_delete: {
            type: DataTypes.BOOLEAN,
            defaultValue: 'true',
        },
        message_edit: {
            type: DataTypes.BOOLEAN,
            defaultValue: 'true',
        },
        member_kick: {
            type: DataTypes.BOOLEAN,
            defaultValue: 'true',
        },
        member_ban: {
            type: DataTypes.BOOLEAN,
            defaultValue: 'true'
        },
        member_timeout: {
            type: DataTypes.BOOLEAN,
            defaultValue: 'true'
        },
        member_nickname_change: {
            type: DataTypes.BOOLEAN,
            defaultValue: 'true'
        },
        member_temp_ban: {
            type: DataTypes.BOOLEAN,
            defaultValue: 'true'
        },
        member_unban: {
            type: DataTypes.BOOLEAN,
            defaultValue: 'true'
        },
        member_warn: {
            type: DataTypes.BOOLEAN,
            defaultValue: 'true'
        },
        member_muted: {
            type: DataTypes.BOOLEAN,
            defaultValue: 'true'
        },
        member_unmuted: {
            type: DataTypes.BOOLEAN,
            defaultValue: 'true'
        },
        member_ban: {
            type: DataTypes.BOOLEAN,
            defaultValue: 'true'
        },
        member_ban: {
            type: DataTypes.BOOLEAN,
            defaultValue: 'true'
        },
        member_ban: {
            type: DataTypes.BOOLEAN,
            defaultValue: 'true'
        },
    }, {
        timestamps: false,
    });
};