---
sidebar_position: 1
title: Doorbell
tags:
    - Dialplan
    - SIP Device
    - Video
---

If you have a SIP doorbell, you can connect it to the add-on.

## Requirements

For this guide you will need the following:

- Working Add-on
- Doorbell or other SIP device

## Create PJSIP contact

First, create a extension for your device in `pjsip_custom.conf`.

```editorconfig title="pjsip_custom.conf"
[8000] ; comment
WIP
```

Restart the add-on, and check the logs if the doorbell registers.

## Dialplan

Now we need to decide which kind of dialplan to make. There are many options, based on your situation, but these are the most common ones for doorbells:

- Normal dial
- Conference
- Parking
- Push