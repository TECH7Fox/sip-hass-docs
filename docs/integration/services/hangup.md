---
sidebar_position: 1
title: Hangup Service
tags:
    - Hangup Service
---

The hangup service allows you to hangup a specified channel.

## Settings

<details>

<summary>Configuration Example</summary>

```yaml title="Service options"
service: asterisk.hangup
data:
  channel: PJSIP/100        # channel to hangup
```

</details>

### Option: `channel`
The excact channel name to be hangup