---
layout: default
title: Bot Framework
---

# Mattermost Bot Framework

The bot framework is built on top of an existing open source bot framework for Mattermost called the _mmpy bot framework_. Refer to [mmpy_bot](https://github.com/attzonko/mmpy_bot) for details.

Conceptually, a bot has one or many plugins. Learn more about [mmpy-based plugins](https://mmpy-bot.readthedocs.io/en/latest/plugins.html).

## Bot Framework Flow }}

* Bot Server &rarr; Connects to Mattermost Server
* Bot Server &rarr; Loads Plugins
* Plugins &rarr; Listen to specific bot commands
* User &rarr; Sends a bot command
* Bot Server &rarr; Received the bot command and passes on the bot command to respective plugin
* Plugins &rarr; Parse the bot command,  execute the intent function and returns  a text response
* Bot Server &rarr; Get the plugin’s response and send the message back to the Mattermost server using the Mattermost create post API

## Base Plugin

The BasePlugin extends the mmpy bot framework Plugin class and will provide other value-added features like access to config, caching, logging of request etc. This is work in progress that will be taken up as needed when we port the bot commands.

## Crushinator Bot

**Crushinator** is an IRC bot that is based on Python Async IrcBot framework (pyaib) an internal bot framework built for IRC. There are about 60+ bot commands with 25+ commands most actively used.

## Steps to Create a New Plugin for an Existing Bot

1. Write a plugin that extends the BasePlugin
	1. A plugin listens to a  specific bot command that is sent by the user via Mattermost.
	2. This command can be specified using a regex string pattern.
	3. A command can have none, one or many arguments.
	4. Implement what the command should do when it is received by the plugin.
	5. Respond back with a message (text based) to convey the results of command execution.
	6. Write any applicable tests to automatically test your bot plugin.

2. Start the bot process on your development machine (devserver or on demand)
	1. Make sure the HTTP_PROXY env variable is set to use the forward proxy.

3. Start your bot server and test the  functionality of your plugin
	1. Mattermost server is hosted externally in AWS, so make sure the HTTP_PROXY env variable is set to use the forward proxy.
	2. First test manually test your server in the development environment.
	3. Send bot commands as you except via the Mattermost client and verify that your plugin is correctly listening to the bot command and the
	4. Repeat the same tests but this time against the dev (rc/canary) environment. (Optional)
4. Submit your diff for review
	1. Add reviewers: fim, manpreetvohra, mattermost
5.  Land your diff and profit
	1. The Crushinator bot uses a conveyor to automate the bot plugin deployments.
	2. Once your diff has landed, the Crushinator bot package will be built and deployed into the both dev and production infra automatically.
	3. Verify that a new version of the bot has been landed successfully.
	4. Test your plugin functionality against the dev/production mattermost instance.

## Steps to Create a New Bot Server

1. Create a bot account for use in Mattermost.
	1. Reach out the Mattermost infra team and request a bot account.
	2. A separate bot account will be setup for each environment (dev and prod)
	3. The infra team will create the bot account and provide the bot token (password) for each environment.
	4. Store the bot tokens securely in a key chain (with ACL). These tokens will be used by the bot to connect and login to the mattermost server on startup.
		1. Unless revoked for the mattermost administrator, these tokens do not expire, so there is no need to change or renew them.

2. Write the skeleton code to build your new bot, following the following example of the Crushinator bot that is built on top of this framework.
Your bot needs to extend the MM_py bot framework class called as Bot.
e.g.  class CrushinatorBot(Bot):
Upon the startup of the bot, perform the following actions:
	1. Login into mattermost using the mattermost driver
		1. Pull the bot token (secret) from the keychain
	2. Initialize the plugins
	3. Setup event handlers
	4. Initialize webhooks if required
	5. Perform other initializations (e.g. loading config, logging setup etc.)

	Example : [The Crushinator bot](https://www.internalfb.com/code/fbsource/fbcode/sro/recrushinator/recrushinator.py)

3. Write your first bot plugin
	1. Follow the setup outlined in the section below:


## Build and Test Commands

1. Build the bot locally.
	1. Change directory to fbsource/fbcode
	2. buck build //sro/recrushinator:recrushinator_cli
2. Start the bot
	1. EXPORT HTTPS_PROXY="http://fwdproxy:8080" ./buck-out/gen/sro/recrushinator/recrushinator_cli.par **NOTE: If the server won't start because of proxy issues and you are on a On Demand machine, consider trying it on a devserver.**
3. Login to Mattermost Dev https://dev-mm.do-not-panic.net/ and start a private chat with @crushinator. **NOTE: Click on Office 365 button to login; your regular meta credentials won't work**.
4.  Test your bot command e.g. https://pxl.cl/21Wxj
	1. Send message to the bot and verify the expected response
	2. Test all variations of the commands taking in various parameters.
5. Test your command on canary  (Optional)
	1. sf canary -b --sfid mattermost/recrushinator --tw-job tsp_global/mattermost/recrushinator-rc --fbpkg recrushinator --entire-job --duration 1h --merge-update
6. Commit your plugin and submit for review.
	1. hg commit -m '[mm] Implement command x' ;
	2. add reviewers fim, manpreetvohra, mattermost
	3. jf s

## Slack Bots

The yolobot is built on top of Slack used by the IG.
The following are the bots commands that are supported by the bot.

| Command Name | Ported in Crushinator | Comment |
|:------|-------|------:|
| bunnylol | Yes |  |
| chrip_bot | Yes |  |
| fb_ric | N/A | Not needed anymore |
| oncall | Yes |  |
| outofoffice_bot | No |  |
| robodial_bot | No |  |
| thanks_bot | No | WIP |
| unixname_check | Yes | Other equivalent commands like employee exist |


These commands are a small subset of the commands that are supported by crushinator. So, once the Crushinator bot commands are built, most of the Slack IG bots commands will be supported automatically.

## Interactive Bot Commands

The [Interactive Bot Commands](https://docs.mattermost.com/developer/interactive-messages.html) that support rich dialogs are not in the scope of phase 1 and may be considered later on a need by need basis. The focus is to port and support text based on rollout.

[back](./)
