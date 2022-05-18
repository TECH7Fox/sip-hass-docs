---
sidebar_position: 3
title: Parking
tags:
    - Asterisk
    - Dialplan
---

The add-on includes parking extensions. With this you can park a call, and pickup later.

This is very usefull for **doorbells**, so you have time to load the card and register.

## Usage

Simply use it by calling `444` to park, and `555` to pickup a parked call.

## Customize

The parking space is configured in `res_parking.conf`.
```editorconfig title="res_parking.conf"
[default]
parkext => 700
parkpos => 701-703
context => parkedcalls
parkingtime => 60
comebacktoorigin = no
comebackcontext = parkedcallstimeout
parkedmusicclass = default
```

[Here](https://wiki.asterisk.org/wiki/display/AST/Asterisk+16+Configuration_res_parking) are all the options for parking.

And the default dialplan includes:

```editorconfig title="extensions.conf"
; this extension parks the call.
exten => 444,1,Park(,s)

; this extension get's the first parked call. 701 is the parking position.
exten => 555,1,ParkedCall(default,701)
```