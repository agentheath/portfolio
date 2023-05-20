---
layout: default
title: Mobile App Governance Framework
---

# _Mobile App_ Governance Framework

---

* toc
{:toc}

---

## Overview

### TL;DR

To improve the consistency and quality of the _Mobile App_ user experience, the _Mobile App_ team has established guidelines and requirements for apps published on the platform. We have created detailed checklists of these requirements organized into several categories, but they can be summarized in one sentence:


> Apps on the _Mobile App_ platform must be **consistent** in design, **performant**, **high quality**, and **provide delightful, mobile-first experiences** for our users.

The _Mobile App_ team will review all new apps prior to publication to the platform, as well as apps already on the platform. Apps found to be non-compliant will be given detailed feedback and the opportunity to remediate, but the _Mobile App_ team reserves the right to take action against apps that do not meet our requirements, up to and including removal from the _Mobile App_ platform.

### Why Build Your App on the _Mobile App_ Platform?

The _Mobile App_ platform allows you to quickly and reliably create mobile-tailored apps visible and accessible to all _Company_ employees without the overhead of building, maintaining, distributing, and marketing a standalone mobile app. _Mobile App_ provides the following services to apps published on the platform:

* Login authentication
* Logging, metrics and dashboards
* Push notifications
* Testing
* UI components
* Build with familiar tools (React Native, Visual Studio, GateKeepers, etc.)
* Code once, deploy to Android and iOS
* Distribution to all _company_ mobile-devices
* Built-in user base/visibility
* Partnerships with XFN teams (Security, XDS, Notifications)


---

## _Mobile App_ App Guidelines

We drafted these guidelines to help you build successful apps that provide delightful user experiences. We hope these guidelines help you sail through the app review process. This is a living document; rules may be added or modified at any time.

### Guiding Principles

_Our guiding principle is simple: we want to ensure apps created on Mobile App are **consistent** in design, **performant**, **high quality**, and **provide delightful, mobile-first experiences** for our users. To that end, please consider the following when designing and developing apps for Mobile App:_

* **_Mobile App_ is best-suited for lightweight tools tailored for the mobile experience.** Apps requiring large screen real estate or heavy-duty work like extensive typing or coding are not suitable for _Mobile App_.
* **Consider the value of having a _mobile_ app.** Don’t duplicate your web app. Mobile apps should compliment desktop apps to enhance overall productivity. Would this app serve your user’s needs just as well as a desktop app? Does it utilize mobile-specific features like push notifications or location services? Will _Company_mates need to access it while away from their desks?
* **Clearly define the unique value of your app.** Apps should serve use-cases not already served by the _Mobile App_ platform. Don’t duplicate the functionality of existing _Mobile App_ apps.
* **_Mobile App_ is only available to _Company_ FTEs.** _Mobile App_ is not available for visitors, contractors, or 3rd parties.
* **Align your app with _Company_’s mission and values as well as company and org priorities.**

### [Detailed Checklist of Requirements for _Mobile App_ Apps](checklist)

We have organized more detailed requirements for _Mobile App_ apps into the following categories: _Performance_, _Ownership_, _Design_, _Legal_, _Privacy_, and _Feed Cards_. Please see the [Detailed Checklist of Requirements for _Mobile App_ Apps](checklist) to assess whether your app meets these requirements. The same standards will be applied by the _Mobile App_ team when reviewing your app for publication to the platform.

## Review Process

### For New Apps

#### **1. Intake**

To publish an app to the _Mobile App_ platform, start by filling out our App Submission Form. Please do so as early as possible in your development/planning process so the _Mobile App_ team can provide guidance, feedback, and support.

> If your team does not yet have some of the items requested in the form (Product Catalog or CodeHub entry, design docs, documentation, etc.) please submit this form anyway with as much information as you currently have. Additional items can be submitted to the _Mobile App_ team as you go through your app's development process.

#### **2. XFN Review**

App submissions will be reviewed by the _Mobile App_ XFN team including but not limited to:



* Product Manager
* Engineering Manager
* Lead Engineer
* Product Designer
* Documentation Engineer
* User Experience Researcher
* Data Engineer

If your app doesn't currently meet all of the requirements, the _Mobile App_ team will provide you with detailed feedback to help bring your app into compliance.


#### **3. Publish to Test Sandbox**


Once your app has passed all required reviews it will be published behind the gatekeeper for final _User Acceptance Testing_ by the _Mobile App_ team. Upon successful completion, the _Mobile App_ XFN team will give final approval for your app’s publication to the platform.


#### **4. App Published to _Mobile App_ Prod**

Once all necessary reviews and checklists have been completed, your app will be published to the _Mobile App_ platform. Some apps may remain behind the gatekeeper for a phased rollout at the discretion of the _Mobile App_ team.

#### **5. Publish Launch Communication**

As a final step, publish an awareness launch post in your dedicated group that will be cross-posted to the _Mobile App_ group. Please use [this template for your launch announcement post](link).

### Triggered Reviews of Existing Apps

_Apps on the Mobile App platform are continuously monitored by the Mobile App team. Apps are monitored for usage, stability/performance, bug resolution, active ownership, and user feedback. Apps that fall outside the following thresholds may trigger a review:_

* **Declining usage:** Is usage of your app increasing, decreasing, or staying level? _A quarter over quarter decrease of Weekly Active People (WAP) by 30% or greater may trigger a review of your app._
* **Excessive errors**: Apps that exhibit excessive errors may be reviewed. _A spike in the 7- or 30-day rolling average of the number of errors in your app may trigger a review._
* **Bug resolution:** Is your app being actively maintained? Are bugs/feedback resolved in a timely manner? _Bugs and tasks filed for your app that are not viewed in a timely manner may trigger a review of your app._
* **Negative user feedback:** The _Mobile App_ team monitors user feedback submitted through the app’s bug reporting function as well as in our _Mobile App_ groups. _A significant amount of unresolved user feedback or feedback reflecting a severe impact on the user experience may trigger a review by the _Mobile App_ team._
* **Lack of active ownership**: Apps on the _Mobile App_ platform are required to have active and responsive product ownership and support. _Apps that do not have an active product owner and oncall specified in the Product Catalog may be reviewed and considered for removal from the _Mobile App_ platform._

> The _Mobile App_ team will reach out to your app’s listed owner and oncall with the results of our review and a list of needed changes before any further actions are taken.



---

## Remediation

Prior to taking any action, the _Mobile App_ team will always reach out to the product owner. We will suggest improvements and collaborate with your team to address any issues identified. If there is no listed product owner, or if no response is received from your team, the _Mobile App_ team may remediate the issue by taking one or more of the actions below.

### 1. Escalation

Before any action is taken, the _Mobile App_ team will reach out to your app’s listed Product Owner and oncall. If no response is received, the _Mobile App_ team will escalate up the reporting chain. If no owner is specified or cannot be located, the _Mobile App_ team reserves the right to take ownership of the app and perform actions as necessary.


### 2. Raise SEV

For issues that significantly affect the _Mobile App_ user experience, the _Mobile App_ team may raise a SEV to draw attention to this issue until it is resolved.


### 3. Place a Warning Banner

If apps have lingering unresolved issues impacting the user experience, the _Mobile App_ team may place a banner at the top of the app warning users that there is an ongoing issue and their ability to use the app effectively may be compromised.


### 4. Reduce Discoverability

Apps that continue to not meet our requirements may be removed from the bottom toolbar and/or App Menu until effective remediation takes place.


### 5. Modify your App’s Code

In extreme cases where a significant portion of _Mobile App_’s users are affected and adequate responses have not been received from the app’s ownership, the _Mobile App_ team reserves the right to make any necessary modifications to your app’s code in order to preserve the integrity of the _Mobile App_ platform.


### 6. Removal from Platform

Apps that don't satisfy the requirements, don't follow coding conventions or fail to comply with any of our other requirements may be removed from the _Mobile App_ platform. If the app has a Product Owner and oncall, the _Mobile App_ team will attempt to reach out first. If it does not, the app can be removed without prior notice.

---

[back](./)
