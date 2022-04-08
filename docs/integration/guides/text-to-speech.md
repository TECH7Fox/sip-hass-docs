---
sidebar_position: 1
title: Text-to-Speech
tags:
    - TTS
    - Google
    - Originate Service
---

In this guide, I will show you how to setup a service call that can call a SIP endpoint, say something and hangup.

## Requirements

For this guide you will need the following:

- Googletts
    - Preinstalled in the add-on
    - If your not using the add-on, you can install it <a href="https://zaf.github.io/asterisk-googletts">here</a>.
- Asterisk integration installed

## Dialplan (FreepBX [`extensions_custom.conf`] / Hassio-Addon [ `extensions.conf`])

First, let's make a dialplan extension.

```editorconfig title="extensions.conf"
[speech]                                       ; The context
exten => 123,1,Answer()                        ; Answer the call
exten => 123,n,agi(googletts.agi,"${TEXT}",en) ; Execute the googletts agi script with the TEXT variable
```

## Service

```yaml title="Service"
service: asterisk.originate
data:
  channel: PJSIP/100            # The device it will call
  context: speech               # The context we created in the dialplan
  exten: '123'                  # The extension inside that context
  priority: '1'                 # Priority of the call
  caller_id: 'Home Assistant'   # The callerID it calls as
  timeout: 60                   # Time until giving up
  variables: TEXT: Hello world! # Variables that you can use in the dialplan
    
```
## Example: Get a call if doors or windows are still open or if lights are still on when you leave the house

For this to work you simply have to create a group with all window and door / lights entities in your house.

Add to `extensions.conf` (HassIO-Addon) / or `extensions_custom.conf` (FreePBX)

```
[home-assistant-lights]                          ; The context
exten => 123,1,Answer()                          ; Answer the call
exten => 123,n,agi(googletts.agi,"${LIGHTS}",en) ; Execute the googletts agi script with the LIGHTS variable

[home-assistant-windows-doors]                       ; The context
exten => 123,1,Answer()                              ; Answer the call
exten => 123,n,agi(googletts.agi,"${WINDOWDOOR}",en) ; Execute the googletts agi script with the WINDOWDOOR variable

```
After you can make service calls like this:

```ỳaml service: asterisk.originate
data:
  channel: SIP/8002
  context: speech
  exten: '123'
  priority: '1'
  caller_id: Home Assistant
  timeout: 60
  variables:
    TEXT: "Attention. The following doors or windows are still open:  {{ dict((states|selectattr('entity_id', 'in', state_attr('group.windows_doors', 'entity_id'))|list)|groupby('state'))['on']|map(attribute='name')|list|join('.......... ') }}" 

```

# Full automation Example:

```

## Lights still turned on

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
          LIGHTS: "Attention. The following lights are still on:  {{ dict((states|selectattr('entity_id', 'in', state_attr('group.lights_house', 'entity_id'))|list)|groupby('state'))['on']|map(attribute='name')|list|join(' ...... ') }}" 

## Open Windows and doors
  
- alias: sip - call if door or window is open
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
        context: home-assistant-windows-doors
        exten: '123'
        priority: '1'
        caller_id: Home Assistant (Windows / Doors open)
        timeout: 60
        variables:
          WINDOWDOOR: "Attention. The following Windows or Doors are still open:  {{ dict((states|selectattr('entity_id', 'in', state_attr('group.windows_doors, 'entity_id'))|list)|groupby('state'))['on']|map(attribute='name')|list|join(' ...... ') }}" 
          
``
