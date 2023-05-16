---
layout: default
title: Mattermost User Guide
---

# Mattermost User Guide

## Overview

Mattermost is an open-source, externally-hosted messaging platform that is modeled after Slack, both in terms of looks as
well as functionality. Mattermost offers a mature platform for self-hosting, resiliency in case of infra failures or
outages, and a near-zero configuration setup with simple-to-use clients for web and mobile devices.

Since Mattermost is externally hosted on AWS and largely independent of our production technology and infra, it is an
essential communications resource during outages and SEVs. Users can communicate with each other privately or in easily-created
public or private group chats called *channels*.

### Who is Mattermost for?

It is available to all _Company_ employees! It is essential for oncalls, production engineers, incident managers, and others
involved in Incident Management and Response. All _Company_ employees can use Mattermost as a fallback communications
platform in the event of major infra failures or outages.

**Global Security Operations**: Mattermost is to be used in the event Safety Center is unavailable (an outage, etc).

IMPORTANT: Mattermost is **not** intended to replace Workplace Chat or email! It is a **backup** communications platform
intended primarily for engineers responding to the outage. During a major infrastructure failure or outage, Mattermost may
not be able to support all the users of workplace, which could result in system slowness and potentially interfere with the
engineers addressing the SEV.Therefore, if you are not directly involved in addressing the outage, we advise you to limit your
usage of Mattermost during the outage.

---

## Get Started

This section has instructions for users who want to login to Mattermost for the first time and set up Mattermost apps
on their laptop and mobile device.

### Mattermost Setup: Web Client

The easiest way to get started with Mattermost is by using the in-browser web client:

* [Log in to the Web Client](web_client)

### Mattermost Setup: Mobile

Your _Company_-issued mobile device comes pre-installed with the Mattermost app. Here are instructions for setting that up:

* [Mobile App Setup](mobile_app)

### Mattermost Setup: Desktop/Laptop

To install the Mattermost native client on your laptop, see the following instructions:

* [Mac Client Setup](mac_client)
* [Windows Client Setup](windows_client)
* [Linux Client Setup](linux_client)

### Join Channels and Setup Notifications

Once you're logged into Mattermost, the first thing you will need to do is to join channels and set up your notifications.
Here are instructions to get you started with that:

* [Channels and Notifications Setup](channels_notifications)

### Migrate from IRC

If you're a current IRC user migrating to Mattermost, see [Migrating from IRC](migrating_from_irc)

* For a comparison of features between Mattermost, IRC, and other popular messaging platforms, see the [Feature Comparison](link)
section.

* For tips to make Mattermost look, feel, and operate more like IRC, see the [Make _Chat
Platform_ Feel More Like IRC](link) section.

## Other Resources

* See the [FAQs](faqs) for answers to common questions.
* See [Best Practices](best_practices) for tips from other Mattermost users.



[back](./)
