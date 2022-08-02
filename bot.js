const Table = require('cli-table3');
const chalk = require('chalk');
const { errorLogger } = require('./logger.js');
(async () => {
	// Import the required modules
	const Discord = require('discord.js');
	const Sequelize = require('sequelize');
	require('dotenv').config();
	// Custom Logger to log SQLite/Sequelize Queries and Errors
	// Initialise/Connect the Economy Database File
	const logger = (...msg) => {
		const shardReadyTable = new Table({
			chars: {
				'top': '═',
				'top-mid': '╦',
				'top-left': '╔',
				'top-right': '╗',
				'bottom': '═',
				'bottom-mid': '╩',
				'bottom-left': '╚',
				'bottom-right': '╝',
				'left': '║',
				'left-mid': '╠',
				'mid': '═',
				'mid-mid': '╬',
				'right': '║',
				'right-mid': '╣',
				'middle': '║',
			},
			colWidths: [25, 25],
			style: { border: [], head: [] },
			wordWrap: true,
			wrapOnWordBoundary: false,
		});
		const querytype = `${msg[1].type}`;
		shardReadyTable.push(
			[{ content: `${querytype.toUpperCase()} QUERY EXECUTED`, hAlign: 'center', colSpan: 2 }],
			[{ content: 'QUERY', hAlign: 'center', colSpan: 2 }],
			[{ content: `${msg[0]}`, hAlign: 'center', colSpan: 2 }],
		);
		if (msg[1].type === 'SELECT') {
			shardReadyTable.push(
				['TABLE NAME', `${msg[1].tableNames}`],
			);
		}
		else if (!msg[1].tableNames) {
			shardReadyTable.push(
				['TABLE NAME', 'Not Found!'],
			);
		} else {
			console.log(msg[0])
		}
		console.log(chalk.yellowBright(shardReadyTable.toString()));
	};
	const sequelize = new Sequelize('dashboardDatabase', 'noxxe', 'ConnorLee05.', {
		host: 'localhost',
		dialect: 'sqlite',
		logging: logger,
		storage: './Databases/Dashboard/dashboardDatabase.sqlite',
		port: 8654,
		timestamps: false,
	});
	// Load external config, etc.
	const config = require('./Config');
	const path = __dirname;
	const client = new Discord.Client({
		intents: 131071/*[
			Discord.GatewayIntentBits.Guilds,
			Discord.GatewayIntentBits.GuildMessages,
			Discord.GatewayIntentBits.GuildPresences,
			Discord.GatewayIntentBits.DirectMessages,
			Discord.GatewayIntentBits.DirectMessageReactions,
			Discord.GatewayIntentBits.GuildMembers,
			Discord.GatewayIntentBits.GuildMessageReactions,
			Discord.GatewayIntentBits.GuildWebhooks,
			Discord.GatewayIntentBits.GuildVoiceStates,
			Discord.GatewayIntentBits.GuildInvites,
			Discord.GatewayIntentBits.GuildBans,
		]*/,
		partials: ['CHANNEL', 'USER', 'GUILD_MEMBER', 'REACTION', 'MESSAGE'],
	});
	const shardReadyTable = new Table({
		chars: {
			'top': '═',
			'top-mid': '╦',
			'top-left': '╔',
			'top-right': '╗',
			'bottom': '═',
			'bottom-mid': '╩',
			'bottom-left': '╚',
			'bottom-right': '╝',
			'left': '║',
			'left-mid': '╠',
			'mid': '═',
			'mid-mid': '╬',
			'right': '║',
			'right-mid': '╣',
			'middle': '║',
		},
		colWidths: [25, 25],
		style: { border: [], head: [] },
		wordWrap: true,
		wrapOnWordBoundary: false,
	});
	const log_settings = sequelize.define('log_settings', {
		guild_id: {
			type: Sequelize.STRING,
			unique: true,
			allowNull: false,
		},
		log_channel: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		role_create: {
			type: Sequelize.BOOLEAN,
			defaultValue: 'true',
		},
		role_delete: {
			type: Sequelize.BOOLEAN,
			defaultValue: 'true',
		},
		role_update: {
			type: Sequelize.BOOLEAN,
			defaultValue: 'true',
		},
		message_delete: {
			type: Sequelize.BOOLEAN,
			defaultValue: 'true',
		},
		message_edit: {
			type: Sequelize.BOOLEAN,
			defaultValue: 'true',
		},
		member_kick: {
			type: Sequelize.BOOLEAN,
			defaultValue: 'true',
		},
		member_ban: {
			type: Sequelize.BOOLEAN,
			defaultValue: 'true',
		},
		member_timeout: {
			type: Sequelize.BOOLEAN,
			defaultValue: 'true',
		},
		member_nickname_change: {
			type: Sequelize.BOOLEAN,
			defaultValue: 'true',
		},
		member_temp_ban: {
			type: Sequelize.BOOLEAN,
			defaultValue: 'true',
		},
		member_unban: {
			type: Sequelize.BOOLEAN,
			defaultValue: 'true',
		},
		member_warn: {
			type: Sequelize.BOOLEAN,
			defaultValue: 'true',
		},
		member_muted: {
			type: Sequelize.BOOLEAN,
			defaultValue: 'true',
		},
		member_unmuted: {
			type: Sequelize.BOOLEAN,
			defaultValue: 'true',
		},

	}, {
		timestamps: false,
	});
	const guild_config = sequelize.define('guild_configuration', {
		guild_id: {
			unique: true,
			type: Sequelize.STRING,
		},
	}, {
		timestamps: false,
	});
	const command_usage = sequelize.define('command_usage', {
		command_name: {
			unique: true,
			type: Sequelize.STRING,
			allowNull: false,
		},
		usage_count: {
			type: Sequelize.INTEGER,
			defaultValue: '0',
		},
	}, {
		timestamps: false,
	});
	const ticket_configuration = sequelize.define('ticket_configuration', {
		guild_id: {
			unique: true,
			type: Sequelize.STRING,
			allowNull: false,
		},
		ticket_log_channel: {
			unique: true,
			type: Sequelize.STRING,
		},
		ticket_category: {
			type: Sequelize.STRING,
		},
		tickets_per_user: {
			type: Sequelize.NUMBER,
			allowNull: false,
			defaultValue: '1'
		},
		allow_users_close_ticket: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: 'false'
		},
		ticket_close_confirmation: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: 'false'
		},
		user_feedback: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: 'false'
		},
		archive_channel: {
			type: Sequelize.STRING,
		},
		overflow_category: {
			type: Sequelize.STRING
		},
		ticket_transcripts: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: 'false'
		},
		hide_claim_button: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: 'false'
		},
		disable_ticket_open_command: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: 'false'
		},
		welcome_message: {
			type: Sequelize.TEXT,
			allowNull: false,
			defaultValue: "Welcome to your ticket, please be patient and wait for someone to assist you!"
		},
		auto_close: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: 'false'
		},
		auto_close_on_user_leave: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: 'false'
		},
		blacklisted_roles: {
			type: Sequelize.TEXT
		},
		blacklisted_channels: {
			type: Sequelize.TEXT
		},
	}, {
		timestamps: false
	});
	// const guild_modules = sequelize.define('guild_modules', {
	// 	guild_id: {
	// 		unique: true,
	// 		type: Sequelize.STRING,
	// 		allowNull: false,
	// 	},
	// 	ticket_system: {
	// 		type: Sequelize.BOOLEAN,
	// 		defaultValue: 'false',
	// 	},
	// 	moderation_log: {
	// 		type: Sequelize.BOOLEAN,
	// 		defaultValue: 'false'
	// 	},
	// 	server_log: {
	// 		type: sequelize.BOOLEAN,
	// 		defaultValue: ``
	// 	}
	// })


	if (process.argv.includes('--force') || process.argv.includes('-f')) {
		sequelize.sync({ force: true }).then(async () => {
			shardReadyTable.push([{ content: `DATABASE SYNCED FORCED`, hAlign: 'center', colSpan: 2 }])
			console.log(chalk.greenBright(shardReadyTable.toString()));
		}).catch(console.error);
	}
	else if (process.argv.includes('--alter') || process.argv.includes('-a')) {
		sequelize.sync({ alter: true }).then(async () => {
			shardReadyTable.push([{ content: `DATABASE SYNCED ALTERED`, hAlign: 'center', colSpan: 2 }])
			console.log(chalk.greenBright(shardReadyTable.toString()));
		}).catch(console.error);
	}
	else {
		sequelize.sync({}).then(async () => {
			shardReadyTable.push([{ content: `DATABASE SYNCED NORMALLY`, hAlign: 'center', colSpan: 2 }])
			console.log(chalk.greenBright(shardReadyTable.toString()));
		}).catch(console.error);
	}

	// Export some params
	exports.log_settings = log_settings;
	exports.guild_config = guild_config;
	exports.ticket_configuration = ticket_configuration;
	exports.sequelize = sequelize;
	exports.client = client;
	exports.path = path;
	exports.config = config;
	client.commands = {};
	client.events = new Discord.Collection();
	client.commands.messageCommands = new Discord.Collection();
	client.commands.messageCommands.aliases = new Discord.Collection();
	client.commands.contextMenus = new Discord.Collection();
	client.commands.slashCommands = new Discord.Collection();
	client.commands.buttonCommands = new Discord.Collection();
	client.commands.selectMenus = new Discord.Collection();

	const Handler = require(`${path}/Src/Structures/Handlers/Handler`);
	await Handler.loadMessageCommands(client, path);
	await Handler.loadEvents(client);
	await client.login(process.env.CLIENT_TOKEN);
	await Handler.loadSlashCommands(client, path);
	await Handler.loadContextMenus(client, path);
	await Handler.loadButtonCommands(client, path);
	await Handler.loadSelectMenus(client, path);
})();
