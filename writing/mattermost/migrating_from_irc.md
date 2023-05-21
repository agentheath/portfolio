---
layout: default
title: Migrating from IRC
---

# Migrating from IRC

This section is for IRC users migrating to Mattermost. It contains information on what's the same, what's different, and how common workflows may be affected.

## What's the same

* **Channel names**: All existing IRC channels have been imported to Mattermost.
* **User names**: Mattermost usernames will mirror IRC user names.
* **IRC commands**: Mattermost accepts IRC commands in the standard format: ```!command```.

## What's different

* **App support**: Mattermost offers a fully-featured web client as well as native desktop and mobile apps for Mac, Windows, Linux, iOS, and Android.
* **No intern dependencies**: Our deployment of Mattermost is externally hosted. Mattermost has minimal dependence on our internal _Company_ infrastructure. Even in the event of a major site event that takes down all _Company_ infrastructure, Mattermost will remain up and running. Our bots are the exception to this since they depend on internal servers.
* **UI**: The Mattermost user interface is modeled after Slack's interface.
* **IRC commands mirrored without usernames**: All commands in IRC are mirrored to Mattermost via the Matterbridge service. However, these messages and commands will be displayed in Mattermost as coming from the default user "*mattermost*" rather than the username of the original sender.

## Matterbridge

Matterbridge is a self-hosted Go application created by Wim to serve as a bridge between different chat services, programs, and protocols. We have deployed Matterbridge to smooth _Company_'s transition from IRC to Mattermost. This is a two-way bridge: IRC messages will be mirrored to the same channel in Mattermost, and messages sent in Mattermost will be relayed back to the same channel in IRC.

Matterbridge is also compatible with Gitter, XMPP, Slack, Discord, Telegram, Rocket.Chat, Hipchat (via XMPP), Steam, Twitch, ssh-chat, Zulip, and Matrix.

You can find more details and contribute to the [Matterbridge project on Github](https://github.com/42wim/matterbridge).

## Additional resources

* [Comparison of the pros and cons of both IRC and Mattermost](https://www.slant.co/versus/4557/12763/~irc_vs_mattermost) (external link)

[back](./)
