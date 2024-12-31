const { WebClient } = require('@slack/web-api');
require('dotenv').config()

const client = new WebClient(process.env.TOKEN, {});

async function createNewChannel(cl = client, name) {
    try {
        const result = await cl.conversations.create({
            name: name
        });
        return 'succeeded!'
    }
    catch {
        throw new Error('failed to create');
    }
}

async function getListOfChannels(cl = client) {
    try {
        const result = await cl.conversations.list();
        return result
    }
    catch (error) {
        throw new Error('failed to connection');
    }
};

module.exports = { createNewChannel, getListOfChannels }
