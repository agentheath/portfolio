---
layout: default
title: Migrating from Slack
---

# Migrating from Slack

This section is for Slack users migrating to Mattermost. It contains information on what's the same, what's different, and how common workflows may be affected.

## What's the same

* **Channel names**: All existing Slack channels will be imported to Mattermost except channels with names that are only a single character like *#e*.
    * Mattermost currently does not allow single-character channel names, but we are working with the vendor to enable this functionality.
    * All Slack IG channels that have the same name as an existing Mattermost channel will be imported with a new channel name prefixed with "ig-" to avoid conflict of messages and context.
* **User names**: Most* Meta employees have Mattermost accounts with their unixname as the default user name. *For some users who joined Meta earlier, their unixname may be different from their assigned user name  - regardless, all Mattermost usernames will mirror all Slack user names.
* **Slack IG commands**: See [[#Instagram_Slack_Bots | Instagram Slack Bots]]
* **UI**: The Mattermost user interface is modeled after Slack's interface.
* **App support**: Mattermost offers a fully featured web client as well as native desktop and mobile apps for Mac, Windows, Linux, iOS, and Android.

## What's different

* **No intern dependencies**: Our deployment of Mattermost is hosted on AWS with SSO via Azure. Mattermost has minimal dependence on our internal Meta infrastructure. Even in the event of a SEV0 that takes down all Meta infra, Mattermost should remain up and running. Our bots are the exception to this since they depend on internal servers. Unlike with Slack's 3rd party hosting, Mattermost gives Meta more control over our own data as Mattermost instances are self-hosted.

## Matterbridge

Matterbridge was used for testing (1 channel only) during the Mattermost proof-of-concept phase, and will not be a permanent solution for replicating data from Slack IG to Mattermost. Instead, data from Slack IG will be exported and imported into Mattermost to bridge as the former is deprecated.

## Bot support

The current Mattermost Team roadmap is currently slating other bot integrations such as Butterfly, IGDD Alarms, and Mandoline for work in Q3 2022.

NOTE: Crushinator (IRC) bot commands have been imported into Mattermost, so former Slack users will now have access to [Crushinator Bot]().

## Slack deprecation schedule

The Slack instance will be available in read-only mode for 30 days after the migration before it is deprecated and made non-available.

---

[back](./)
