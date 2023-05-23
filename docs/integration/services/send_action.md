---
sidebar_position: 2
title: Send Action Service
tags:
    - Send Action Service
---

The `send_action` service can be used to send any AMI action.

## Settings

:::warning

Remember that most AMI actions use milliseconds for timing. So if you're Originate call immediately stops, check the timeout.

:::

<details>

<summary>Originate Example</summary>

```yaml title="Service options"
service: asterisk.send_action
data:
  action: Originate
  parameters:
    channel: PJSIP/100
    context: default
    exten: "101"
    priority: "1"
    caller_id: Home Assistant
    timeout: 60000
```

</details>

<details>

<summary>Hangup Example</summary>

```yaml title="Service options"
service: asterisk.send_action
data:
  action: Hangup
  parameters:
    channel: PJSIP/100
```

</details>

### Option: `Action`
Channel name to call.

### Option: `Parameters`
Used settings for your set action. Look at the Asterisk docs for the settings for the action.
