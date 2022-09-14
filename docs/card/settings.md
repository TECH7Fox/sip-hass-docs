---
sidebar_position: 2
title: Settings
---

Here are all the options for the card.

:::tip

Most things are configurable from the editor, except for the **ICE settings**.
We recommend using the **card editor** for all other settings.

:::

<details>
<summary>Configuration Example</summary>

```yaml title="Card options"
type: custom:sipjs-card
server: 192.168.0.10
port: '8089'
prefix: ''
video: false
ringtone: /local/asterisk/ringtone.mp3
button_size: '62'
custom:
  - name: Doorbell
    number: '007'
    icon: mdi:doorbell
    camera: 'camera.doorbell'
  - name: Jordy deskphone
    number: '008'
    icon: mdi:deskphone
    camera: ''
dtmfs:
  - name: Door
    signal: '1'
    icon: mdi:door
extensions:
  - person: person.person1
    name: Test person
    extension: '101'
    secret: 1234
    icon: mdi:person
    entity: binary_sensor.myphone
    camera: ''
  - person: person.jordy
    name: Jordy PC
    extension: '100'
    secret: 1234
    icon: mdi:monitor
  - person: person.tablet
    name: Tablet
    extension: '102'
    secret: 1234
    icon: mdi:tablet
state_color: false 
ringbacktone: /local/asterisk/backtone.mp3
auto_answer: false
buttons:
  - name: 'Garage Door'
    icon: mdi:garage
    entity: switch.garagedoor
custom_title: ''
hide_me: true
iceTimeout: 3 # Default is 5 seconds
iceConfig: # Remove if you don't want to use ICE
  iceCandidatePoolSize: 0
  iceTransportPolicy: all
  iceServers:
    - urls:
        - stun:stun.l.google.com:19302
        - stun:stun1.l.google.com:19302
  rtcpMuxPolicy: require
```

</details>

### Option: `server`
The address it connects to.

### Option: `port`
The port for **WSS**.

### Option: `video`
Enables video. Will send the webcam feed and display incoming video.

### Option: `extensions`
The extension objects the card can register as based on the current user.

#### Option: `camera`
Use a camera entity for video.

:::caution

The default camera entities have a delay. You can use [RTSP-to-webRTC](https://www.home-assistant.io/integrations/rtsp_to_webrtc/) to get a low-latency video feed.

:::

### WIP
