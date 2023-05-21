---
layout: default
title: Mobile App Detailed Checklist of App Requirements
---

# _Mobile App_ Detailed Checklist of App Requirements

_The Mobile App team has compiled the following checklist of requirements for apps on the Mobile App platform. Compliance with these requirements ensures a consistent, reliable, and delightful experience for our users. Please use this checklist as you prepare to submit your app for publication to the Mobile App platform. The Mobile App team will use this same checklist to evaluate your app’s compliance with our requirements._

---

* toc
{:toc}

---

## Performance



- [ ] Is it stable and reliable? Does it crash or give errors? Can users complete common tasks easily and reliably?
- [ ] What is the size of your app package? Apps larger than 10 MB are discouraged unless there is a valid business reason.
{: style='list-style-type: none'}


## Ownership



- [ ] Does your app have an entry in the Product Catalog (separate from the desktop version) which lists at least the following: _Product Owner, Oncall, Engineering Manager,_ and _Description_?
- [ ] Can users quickly get help from either your oncalls, a group, or self-service documentation?
- [ ] Is there documentation specific to this mobile app? (separate from docs for desktop app) _Note: some very simple apps may be exempted from this requirement._
{: style='list-style-type: none'}

## Design



- [ ] Does your app use our internal design specifications?
- [ ] Does your app support the following critical accessibility features?
    - [ ] Text legibility
    - [ ] Color contrast
    - [ ] Touch targets
    - [ ] Dark mode
    {: style='list-style-type: none'}
- [ ] Is your app properly formatted for mobile screen sizes?
    - [ ] No excessive horizontal scrolling
    - [ ] Common/primary actions should be in the thumb zone
    - [ ] Apps should have a clear primary action per screen
    {: style='list-style-type: none'}
- [ ] Does your app have clear user navigation and task completion flows?
- [ ] Does your app have clear feedback mechanisms that keep users informed as they interact with the app? _Example: When a user makes an edit on a form they should see the edit reflected._
- [ ] Does your app provide a readily-accessible description?
- [ ] Does it adhere to accessibility guidelines?
    - [ ] Can the user complete tasks in your app using a screen reader?
    {: style='list-style-type: none'}
- [ ] Does your app support both iOS and Android?
{: style='list-style-type: none'}

## Legal



- [ ] If your app uses 3rd-party libraries, have you verified that you have a current license for those libraries?
{: style='list-style-type: none'}

## Privacy



- [ ] Has your app undergone a privacy review?
{: style='list-style-type: none'}

## Feed Cards

_Feed cards allow apps to show dynamic and relevant content on the Mobile App home screen. Feed cards are not appropriate or necessary for all apps. We encourage app developers to create new feed cards for important use cases that adhere to the following requirements. We require that new feed cards be reviewed by the Mobile App team prior to implementation._



- [ ] Does the feed card surface meaningful, relevant, and timely information to users?
- [ ] Does the feed card have small digestible chunks of information that the user can understand and/or take action upon?
- [ ] Has your feed card design been approved by the _Mobile App_ Product Designer?
- [ ] Has the Mobile App team reviewed the ranking and display time of your feed card?
- [ ] Does your feed card load data quickly? Feed cards that impact the performance of the home page will not be allowed.
- [ ] Can users easily disable or dismiss your feed card when appropriate?
- [ ] Does your feedcard comply with our data access guidelines? When feedcards are toggled off by the user or don’t need to be visible, they should not be querying data.
{: style='list-style-type: none'}

[back](./)
