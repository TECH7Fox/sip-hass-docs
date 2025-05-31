---
sidebar_position: 4
title: Integration
tags:
    - component
    - Asterisk
---

Here is everything you should know to help development with the integration.

## About

The Asterisk integration is a custom component that connect's to the **AMI** (Asterisk Manager Interface) to get the status of the server and SIP endpoints and makes sensors for it.

The integration also has the `send_action` service, which you can use to send any action to the AMI.

## How to Test

Run pytest to see that no current features break, or make a MR to use the CI on Github.

To test practially copy the `asterisk` folder into your `custom_components` folder and restart your HA. It should popup when adding the integration.
