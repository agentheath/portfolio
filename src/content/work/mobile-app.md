---
title: "Mobile App Governance Framework"
description: "End-to-end governance framework and 6-category compliance checklist for a mobile app platform serving internal product teams across a large organization."
tags: ["Governance", "Framework", "Cross-functional"]
metric: "6"
metricLabel: "review categories"
problem: "A company's internal mobile app platform had grown organically to host dozens of apps built by different teams, resulting in inconsistent quality, design fragmentation, and unclear standards for publishing and maintaining apps. There was no structured review process and no accountability for apps that became unmaintained or degraded in quality."
approach: "Working with Product Managers, Product Designers, UX Researchers, Data Engineers, Software Engineers, and Management, I led development of a Governance Framework that established clear guiding principles, a detailed 6-category compliance checklist, a 5-stage review process for new apps, and continuous monitoring thresholds for existing apps. The framework was designed to feel collaborative and enabling rather than restrictive."
outcome: "The framework gave the platform team a scalable, defensible process for maintaining app quality. Quantitative thresholds (e.g., 30% WAP decline triggers a review) replaced subjective judgement calls, making enforcement consistent and fair."
---

# _Mobile App_ Governance Framework

---

## Overview

### TL;DR

To improve the consistency and quality of the _Mobile App_ user experience, the _Mobile App_ team has established guidelines and requirements for apps published on the platform. They can be summarized in one sentence:

> Apps on the _Mobile App_ platform must be **consistent** in design, **performant**, **high quality**, and **provide delightful, mobile-first experiences** for our users.

The _Mobile App_ team will review all new apps prior to publication to the platform, as well as apps already on the platform. Apps found to be non-compliant will be given detailed feedback and the opportunity to remediate, but the _Mobile App_ team reserves the right to take action against apps that do not meet our requirements, up to and including removal from the _Mobile App_ platform.

### Why Build Your App on the _Mobile App_ Platform?

The _Mobile App_ platform allows you to quickly and reliably create mobile-tailored apps visible and accessible to all _Company_ employees without the overhead of building, maintaining, distributing, and marketing a standalone mobile app. _Mobile App_ provides the following advantages to apps published on the platform:

* Login authentication
* Logging, metrics and dashboards
* Push notifications
* Testing
* UI components
* Build with familiar tools
* Code once, deploy to Android and iOS
* Distribution to all _Company_ mobile devices
* Built-in user base/visibility

---

## _Mobile App_ App Guidelines

We drafted these guidelines to help you build successful apps that provide delightful user experiences. This is a living document; rules may be added or modified at any time.

### Guiding Principles

*Our guiding principle is simple: we want to ensure apps created on Mobile App are **consistent** in design, **performant**, **high quality**, and **provide delightful, mobile-first experiences** for our users. To that end, please consider the following when designing and developing apps for Mobile App:*

* **_Mobile App_ is best-suited for lightweight tools tailored for the mobile experience.** Apps requiring large screen real estate or heavy-duty work like extensive typing or coding are not suitable for _Mobile App_.
* **Consider the value of having a _mobile_ app.** Don't duplicate your web app. Mobile apps should complement desktop apps to enhance overall productivity.
* **Clearly define the unique value of your app.** Apps should serve use-cases not already served by the _Mobile App_ platform.
* **_Mobile App_ is only available to _Company_ FTEs.** _Mobile App_ is not available for visitors, contractors, or 3rd parties.
* **Align your app with _Company_'s mission and values as well as company priorities.**

---

## Detailed Checklist of Requirements

### Performance

- [ ] Is it stable and reliable? Does it crash or give errors? Can users complete common tasks easily and reliably?
- [ ] What is the size of your app package? Apps larger than 10 MB are discouraged unless there is a valid business reason.

### Ownership

- [ ] Does your app have an entry in the Product Catalog which lists at least the following: _Product Owner, Oncall, Engineering Manager,_ and _Description_?
- [ ] Can users quickly get help from either your oncalls, a group, or self-service documentation?
- [ ] Is there documentation specific to this mobile app?

### Design

- [ ] Does your app use our internal design specifications?
- [ ] Does your app support the following critical accessibility features?
    - [ ] Text legibility
    - [ ] Color contrast
    - [ ] Touch targets
    - [ ] Dark mode
- [ ] Is your app properly formatted for mobile screen sizes?
    - [ ] No excessive horizontal scrolling
    - [ ] Common/primary actions should be in the thumb zone
    - [ ] Apps should have a clear primary action per screen
- [ ] Does your app have clear user navigation and task completion flows?
- [ ] Does your app have clear feedback mechanisms that keep users informed as they interact with the app?
- [ ] Does your app provide a readily-accessible description?
- [ ] Can the user complete tasks in your app using a screen reader?
- [ ] Does your app support both iOS and Android?

### Legal

- [ ] If your app uses 3rd-party libraries, have you verified that you have a current license for those libraries?

### Privacy

- [ ] Has your app undergone a privacy review?

### Feed Cards

*Feed cards allow apps to show dynamic and relevant content on the Mobile App home screen. Feed cards are not appropriate or necessary for all apps.*

- [ ] Does the feed card surface meaningful, relevant, and timely information to users?
- [ ] Does the feed card have small digestible chunks of information that the user can understand and/or take action upon?
- [ ] Has your feed card design been approved by the _Mobile App_ Product Designer?
- [ ] Has the Mobile App team reviewed the ranking and display time of your feed card?
- [ ] Does your feed card load data quickly? Feed cards that impact the performance of the home page will not be allowed.
- [ ] Can users easily disable or dismiss your feed card when appropriate?
- [ ] Does your feed card comply with our data access guidelines?

---

## Review Process

### For New Apps

#### 1. Intake

To publish an app to the _Mobile App_ platform, start by filling out our App Submission Form. Please do so as early as possible in your development/planning process so the _Mobile App_ team can provide guidance, feedback, and support.

> If your team does not yet have some of the items requested in the form, please submit this form anyway with as much information as you currently have. Additional items can be submitted to the _Mobile App_ team as you go through your app's development process.

#### 2. XFN Review

App submissions will be reviewed by the _Mobile App_ XFN team including but not limited to:

* Product Manager
* Engineering Manager
* Lead Engineer
* Product Designer
* Documentation Engineer
* User Experience Researcher
* Data Engineer

If your app doesn't currently meet all of the requirements, the _Mobile App_ team will provide you with detailed feedback to help bring your app into compliance.

#### 3. Publish to Test Sandbox

Once your app has passed all required reviews it will be published internally for final _User Acceptance Testing_ by the _Mobile App_ team. Upon successful completion, the _Mobile App_ XFN team will give final approval for your app's publication to the platform.

#### 4. App Published to _Mobile App_ Prod

Once all necessary reviews and checklists have been completed, your app will be published to the _Mobile App_ platform. Some apps may have a phased rollout at the discretion of the _Mobile App_ team.

#### 5. Publish Launch Communication

As a final step, publish an awareness launch post in your dedicated group that will be cross-posted to the _Mobile App_ group.

### Triggered Reviews of Existing Apps

Apps on the Mobile App platform are continuously monitored by the Mobile App team. Apps are monitored for usage, stability/performance, bug resolution, active ownership, and user feedback. Apps that fall outside the following thresholds may trigger a review:

* **Declining usage:** A quarter over quarter decrease of Weekly Active People (WAP) by 30% or greater may trigger a review of your app.
* **Excessive errors:** A spike in the 7- or 30-day rolling average of the number of errors in your app may trigger a review.
* **Bug resolution:** Bugs and tasks filed for your app that are not viewed in a timely manner may trigger a review of your app.
* **Negative user feedback:** A significant amount of unresolved user feedback or feedback reflecting a severe impact on the user experience may trigger a review by the Mobile App team.
* **Lack of active ownership:** Apps that do not have an active product owner and oncall may be reviewed and considered for removal from the Mobile App platform.

> The _Mobile App_ team will reach out to your app's listed owner and oncall with the results of our review and a list of needed changes before any further actions are taken.
