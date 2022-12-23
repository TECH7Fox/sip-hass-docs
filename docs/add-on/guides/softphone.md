---
sidebar_position: 4
title: Softphone
tags:
    - Softphone
---

You can use a softphone app to connect to Asterisk from your phone.

Here are some recommended apps:

- <a href="https://play.google.com/store/apps/details?id=org.linphone">Linphone</a>

## PUSH

To improve battery life you can use a **PUSH message** to wake up and register the softphone app if it supports it. You can send **PUSH messages** trough the **Home Assisant companion** app. Here is how to do it.

:::caution

Make sure your asterisk extension in pjsip_custom.conf has `qualify=yes` set, otherwise **Asterisk** thinks the extension is already online.

:::

First **Home Assistant** needs to know when you are getting called. This can be done with the <a href="../../integration/introduction">Asterisk integration</a> or with a **webhook** in the dialplan like this example:

```editorconfig title="extensions.conf"
exten => 8003,1,Set(CURL_RESULT=${SHELL(curl -X POST http://localhost:8123/api/webhook/push_sip)%7D)
exten => 8003,n,Wait(4)
exten => 8003,n,Dial(SIP/8003,30,rt)
```

Then you can make a automation to send the message to the softphone app.

:::tip

You can find the `intent_class_name` with a app called **Shortcut Maker**.

:::

Linphone example:

```yaml title="Automation"
- alias: Send push to activate app
  initial_state: 'on'
  trigger:
    - platform: webhook
      webhook_id: "push_sip" 
  action:
  - service: !secret notify_ha_fabio
    data:
      message: command_activity
      data:
        channel: com.basip.app
        tag: android.intent.action.MAIN
        intent_class_name: org.linphone.CallActivity
        priority: high
        ttl: 0
```
