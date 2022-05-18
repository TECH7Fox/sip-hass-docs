---
tags:
    - TTS
title: Call if left open
---

This example makes a call when you leave a window or door open, or leave lights on.

For this to work you simply have to create a group with all window and door / lights entities in your house.
Then, add a **TSS** extension to `extensions.conf` (HassIO-Addon) / or `extensions_custom.conf` (FreePBX)

```
[tts]                                          ; The context
exten => 123,1,Answer()                        ; Answer the call
exten => 123,n,agi(googletts.agi,"${TEXT}",en) ; Execute the googletts agi script with the TEXT variable

```

After that, you can make service calls like this:

```yaml service: asterisk.originate
data:
  channel: SIP/8002
  context: tts
  exten: '123'
  priority: '1'
  caller_id: Home Assistant
  timeout: 60
  variables:
    TEXT: "Attention. The following doors or windows are still open:  {{ dict((states|selectattr('entity_id', 'in', state_attr('group.windows_doors', 'entity_id'))|list)|groupby('state'))['on']|map(attribute='name')|list|join('.......... ') }}" 

```

# Full Automation Example

```
- alias: sip - call if lights still on
  trigger:
    platform: state
    entity_id: group.persons
    from: "home"
    to: "not_home"
    for: "00:00:03"
  condition:
    - condition: state
      entity_id: group.windows_doors
      state: "on"
  action:
    - service: asterisk.originate
      data:
        channel: SIP/8002
        context: home-assistant-lights
        exten: '123'
        priority: '1'
        caller_id: Home Assistant (Lights On)
        timeout: 60
        variables:
          TEXT: "Attention. The following lights are still on:  {{ dict((states|selectattr('entity_id', 'in', state_attr('group.lights_house', 'entity_id'))|list)|groupby('state'))['on']|map(attribute='name')|list|join(' ...... ') }}" 

```
