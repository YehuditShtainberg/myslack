
# Connection list to Slack via the WEB API

In this task, we connect to Slack via the web api.

To access Slack via code, a `Token` is required.

The `Token` is taken from the App that we created in Slack.

* Add new App in Slack

* Go to `Your Apps`, click on the desired app. In the `OAuth & Permission` tab there is the `Token`

To connect to Slack from code use `WebClient` from the `@slack/web-api` module.

This task has two functions:

* createNewChannel() - create new conversation in slack.
this method need get a name of the channel.

* getListOfChannels() - get list of conversation that in slack.
