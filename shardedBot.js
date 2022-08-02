const { ShardingManager } = require('discord.js')
require('dotenv').config();
const chalk = require('chalk')
const Table = require("cli-table3")
const manager = new ShardingManager('./bot.js', {
    token: process.env.CLIENT_TOKEN,
    mode: 'process',
    totalShards: 'auto',
    respawn: true,
    shardArgs: ['-a', '--alter', '-f', '--force']
});


manager.on('shardCreate', shard => {
    shard.on('spawn', () => {
        var shardSpawnTable = new Table({
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
                'middle': '║'
            },
            colWidths: [25, 25],
            style: { border: [], head: [] },
        });
        shardSpawnTable.push(
            [{content: `SHARD ${shard.id} SPAWNED`, hAlign: 'center', colSpan: 2}],

        )
        console.log(chalk.green(shardSpawnTable.toString()));
    })
    shard.on('ready', () => {
        var shardReadyTable = new Table({
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
                'middle': '║'
            },
            colWidths: [25, 25],
            style: { border: [], head: [] },
        });
        shardReadyTable.push(
            [{content: `SHARD ${shard.id} READY`, hAlign: 'center', colSpan: 2}],

        )
        console.log(chalk.green(shardReadyTable.toString()));
    });
    shard.on('death', () => {
        var shardReadyTable = new Table({
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
                'middle': '║'
            },
            colWidths: [25, 25],
            style: { border: [], head: [] },
        });
        shardReadyTable.push(
            [{ content: `SHARD ${shard.id} DIED`, hAlign: 'center', colSpan: 2 }],

        )
        console.log(chalk.redBright(shardReadyTable.toString()));
    });
    shard.on('disconnect', () => {
        var shardReadyTable = new Table({
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
                'middle': '║'
            },
            colWidths: [25, 25],
            style: { border: [], head: [] },
        });
        shardReadyTable.push(
            [{ content: `SHARD ${shard.id} DISCONNECTED`, hAlign: 'center', colSpan: 2 }],

        )
        console.log(chalk.redBright(shardReadyTable.toString()));
    });
    shard.on('reconnection', () => {
        var shardReadyTable = new Table({
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
                'middle': '║'
            },
            colWidths: [25, 25],
            style: { border: [], head: [] },
        });
        shardReadyTable.push(
            [{content: `SHARD ${shard.id} RECONNECTED`, hAlign: 'center', colSpan: 2}],

        )
        console.log(chalk.green(shardReadyTable.toString()));
    })
})
manager.spawn();