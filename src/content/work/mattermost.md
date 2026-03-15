---
title: "Mattermost User Guide"
description: "Multi-platform deployment and user guide for an enterprise backup communications platform, covering 5 clients, IRC migration, and admin best practices."
tags: ["User Guide", "Multi-platform", "Enterprise"]
metric: "9"
metricLabel: "docs · 5 platforms"
problem: "A company needed to deploy Mattermost — an externally-hosted Slack-like platform — as an emergency backup communications channel for all employees, with special urgency for oncalls and incident responders. The challenge was documenting setup across five very different platforms (Web, Mac, Windows, Linux, iOS/Android), plus a migration path for existing IRC users, while ensuring the docs could serve both non-technical and technical audiences."
approach: "I structured the guide as a hub-and-spoke information architecture: a central overview page that routes users immediately to their platform-specific path, then self-contained setup guides for each client. The IRC migration guide used a 'what's the same / what's different' comparative structure to meet IRC users where they were rather than asking them to learn from scratch. Each client guide was audience-calibrated — the Linux guide assumes command-line comfort; the Mac guide references familiar macOS affordances."
outcome: "A complete, platform-differentiated user guide that served both the onboarding needs of general employees and the high-urgency needs of oncall engineers. The external hosting architecture was surfaced prominently to ensure users understood the 'works during outages' value proposition."
---

# Mattermost User Guide

## Overview

Mattermost is an open-source, externally-hosted messaging platform modeled after Slack, both in terms of UI as well as functionality. Mattermost offers a mature platform for self-hosting, resiliency in case of internal infrastructure failures or outages, and a near-zero configuration setup with simple-to-use clients for web and mobile devices.

Since Mattermost is externally hosted and largely independent of our production technology and infrastructure, it's an essential communications resource during outages. Users can communicate with each other privately or in easily-created public or private group chats called *channels*.

### Who is Mattermost for?

Mattermost is available to all _Company_ employees. However, it is *essential* for oncalls, production engineers, incident managers, and others involved in Incident Response. All _Company_ employees can use Mattermost as a fallback communications platform in the event of infrastructure outages.

---

## Get Started

### Web Client

The easiest way to get started with Mattermost is by using the in-browser web client.

1. Access Mattermost via the following URL: [mattermost.com](https://mattermost.com)
2. You'll be prompted to sign into _SSO Service_. Click on the _SSO Service_ button to initiate the SSO login.
    * Your *username* is your *@company.com* email address.
    * Your *password* is the same password that you use to log in to your laptop.
3. You'll then be prompted for 2-factor authentication via your hardware authentication device or the Google app on your work phone.
4. You'll then be prompted to join a team. Join the *Company* team by clicking the arrow pointing right.
5. You're in! Now set up your [channels and notifications](#channels-and-notifications).

---

## Client Setup: Desktop

### Mac Client

The Mattermost desktop client is available for installation through your **Managed Software Center** app.

1. Search for *Mattermost* in your Managed Software Center and click the **Install button**.
2. After the Mattermost app finishes installing, open the app by searching for *Mattermost* in the *Launchpad* app, or by pressing **Command + Spacebar** to open Spotlight search.
3. The first time you open the app you will be prompted to sign in via _SSO Service_ with your *@company.com* email address and laptop password.
4. Add Mattermost to the "Login Items" list of applications launched on MacOS login.

### Windows Client

1. Click the Windows icon and type `Powershell`. Right-click the PowerShell app icon and click **Run as Administrator**.
2. At the PowerShell command prompt, type `choco list mattermost` and press *Enter*.
3. To install Mattermost, type `choco install mattermost` and press *Enter*.
4. You'll be asked "Do you want to continue?" Type `Y` and press *Enter*.
5. Click the Windows icon and type `Mattermost` to find and launch the program.
6. Log in with your _@company.com_ email address and laptop password.

### Linux Client

1. Download the latest version from the [Mattermost GitHub repo](https://github.com/mattermost/desktop/releases/latest). There are prebuilt RPM packages.
2. Install with `dnf install ./mattermost.rpm`.

---

## Client Setup: Mobile

The Mattermost app is deployed through MDM and pre-installed on all _Company_-issued iOS and Android devices.

* The app will auto-install, even if you manually remove it.
* The app authenticates with _SSO Service_ credentials.
* The app will unlock with a device passcode, Face ID, or fingerprint. Once authenticated, you won't be prompted to log in again for 14 days.

**Setup:**
1. The Mattermost app is pre-installed on your mobile device. Tap the icon to launch the app.
2. The server URL is pre-populated. If it is not, enter the server URL and tap connect.
3. You will be prompted to login. Tap the *SSO Service* button to authenticate.
4. After you've authenticated, you are automatically prompted to **Open this page in "Mattermost"**. If you are not, tap the link provided.
5. Tap **Open** and Mattermost will launch and display the *ALL FYI* channel. Say hello!

---

## Channels and Notifications

### How to Join Channels

Mattermost has different chat rooms called **channels**. You will automatically join the _ALL FYI_ channel the first time you log in.

**Desktop:** Click the **Find channel** search field in the left sidebar to search for channels by name. Mattermost has two types: *Public* (anyone can join) and *Private* (must be added by an existing member).

**Mobile (iOS/Android):** Tap the hamburger icon in the upper-left corner or use the **Find channel** search box.

### How to Create Channels

1. Click the **+** icon above the **Find channel** search box and click **+ Create New Channel**.
2. Give your channel a name, select Public or Private, and write a description.

### How to Add Members

Any member of a channel can add new members. Click the channel name at the top to open the drop-down menu, then click **Add Members** and search by username or full name. You can also add a user to a public channel by mentioning them with *@username* in that channel.

### How to Configure Notifications

**Desktop:** Click the gear icon in the top-right corner to go to Settings. Configure **Desktop Notifications**, **Email Notifications**, and **Mobile Push Notifications** individually.

**Mobile:** Tap the three vertical dots icon in the upper-right corner, then **Settings → Notifications → Mobile**.

---

## Migrating from IRC

### What's the same

* **Channel names**: All existing IRC channels have been imported to Mattermost.
* **User names**: Mattermost usernames mirror IRC usernames.
* **IRC commands**: Mattermost accepts IRC commands in the standard format: `!command`.

### What's different

* **App support**: Mattermost offers a fully-featured web client as well as native desktop and mobile apps for Mac, Windows, Linux, iOS, and Android.
* **No internal dependencies**: Our deployment of Mattermost is externally hosted. Even in the event of a major site event that takes down all _Company_ infrastructure, Mattermost will remain up and running.
* **UI**: The Mattermost user interface is modeled after Slack's interface.
* **IRC commands mirrored without usernames**: All commands in IRC are mirrored to Mattermost via the Matterbridge service. However, these messages will be displayed in Mattermost as coming from the default user "*mattermost*" rather than the username of the original sender.

### Matterbridge

Matterbridge is a self-hosted Go application that serves as a bridge between different chat services. We have deployed Matterbridge to smooth _Company_'s transition from IRC to Mattermost. This is a two-way bridge: IRC messages will be mirrored to the same channel in Mattermost, and messages sent in Mattermost will be relayed back to IRC.

---

## Best Practices

### Muting and unmuting a channel

By default, channel muting is turned off for all channels. To mute or unmute a channel, select the channel name at the top of the center pane to access the channel menu, then choose **Mute Channel**.

Once a channel is muted:
* Email, desktop, and push notifications are disabled.
* A mute icon displays next to the channel name.
* The channel name appears at reduced opacity in the channel sidebar.

### Favoriting a channel

To mark a channel as a favorite, open the channel and select the star icon next to the channel name. This adds the channel to the **Favorites** list at the top of the left sidebar.

### Suppressing join notifications

If your feed is swamped with join notifications, click the gear icon in the upper-right corner, select **Advanced**, and turn **Enable Join/Leave messages** off.

### Permissions and User Types

| Role | Description |
|---|---|
| **Member** | Default role. Basic permissions. |
| **Channel Admin** | Assigned to the channel creator. Can manage members and assign/remove Channel Admin role. |
