---
sidebar_position: 2
title: Originate Service
tags:
    - Originate Service
---

The originate service allows you to create calls to a specified **SIP** extension.

You can set the dialplan extension, application, variables and more.

## Settings

<details>

<summary>Configuration Example</summary>

```yaml title="Service options"
service: asterisk.originate
data:
  channel: PJSIP/100        # device to call
  context: default          # Context in the dialplan
  exten: '101'              # Extension in the context
  priority: '1'             # Priority
  caller_id: Home Assistant # CallerID of the call
  timeout: 60               # Time until giving up
```

</details>

### Option: `channel`
Channel name to call.

### Option: `extension`
Extension to use (requires Context and Priority)

### Option: `context`
Context to use (requires Extension and Priority)

### Option `priority`
Priority to use (requires Extension and Context)

### Option `timeout`
How long to wait for call to be answered (in seconds)

### Option `application`
Application to execute

### Option `data`
Data to use (requires Application)

### Option `caller_id`
CallerID to be set on the outgoing channel

### Option `early_media`
Set to true to force call bridge on early media

### Option `account`
Account code

### Option `variables`
Channel variables