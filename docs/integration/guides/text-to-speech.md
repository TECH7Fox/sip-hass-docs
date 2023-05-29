---
sidebar_position: 1
title: Text-to-Speech
tags:
    - TTS
    - Google
    - Send Action Service
---

In this guide, I will show you how to setup a service call that can call a SIP endpoint, say something and hangup.

## Requirements

For this guide you will need the following:

- Googletts
    - Preinstalled in the add-on
    - If your not using the add-on, you can install it <a href="https://zaf.github.io/asterisk-googletts">here</a>.
- Asterisk integration installed

## Dialplan

First, let's make a dialplan extension.

```editorconfig title="extensions.conf"
[speech]                                              ; The context
exten => 123,1,Answer()                               ; Answer the call
exten => 123,n,agi(googletts.agi,"${TEXT}","${LANG}") ; Execute the googletts agi script with the TEXT and LANG variables
```

## Service

```yaml title="Service"
service: asterisk.send_action
data:
  action: Originate
  parameters:
    channel: PJSIP/100                          # The device it will call
    context: speech                             # The context we created in the dialplan
    exten: 123                                  # The extension inside that context
    priority: 1                                 # Priority of the call
    callerid: 'Home Assistant'                 # The callerID it calls as
    timeout: 60000                              # Time until giving up in ms
    variable: "TEXT='Hello world!',LANG=en"     # Variables that you can use in the dialplan
```
