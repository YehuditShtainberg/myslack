const {createNewChannel, getListOfChannels } = require('../src/slack.js')

describe('CHECK CREATENEWCHANNEL FUNCTION', () => {
    it('throw error if the creating failed', () => {
        expect(async () => { await createNewChannel("newslack") }).rejects.toThrow('failed to create')
    })
})

describe('CHECK GETLISTOFCHANNELS FUNCTION', () => {
    it('throw error if the connection failed', () => {
        expect(async () => { await getListOfChannels("stamClient") }).rejects.toThrow('failed')
        expect(async () => { await getListOfChannels("") }).rejects.toThrow('failed')
    })
})

