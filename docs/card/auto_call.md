---
sidebar_position: 3
title: Auto Call
---

The card has a autocall feature, that will call a extension right after it loads and registers. You can combine this with **actionable notifications** from **Home Assistant** and <a href="../add-on/parking">parking</a> to create a one-click setup to accept incoming calls.

## Usage

Add `?call=<number>` to your **URL**.

Example: 
```
https://my-ha.duckdns.org/phone-lovelace?call=555
```
This will call `555` when the card registers. In the add-on, `555` is preconfigured to pickup a parked call.  
