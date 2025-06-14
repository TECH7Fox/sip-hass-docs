---
sidebar_position: 2
title: Settings
---

Here are all the options for the card.

:::danger

The configuration file is currently located at the public `www` folder,
which is **not secure and can be accessed by anyone.** So while we are working on a more secure solution,
we recommend **not to use shared passwords.** And not to use the card if you have port forwarded the
WSS port instead of using the Ingress feature until we have found a secure location for the configuration file.

:::

<details>
<summary>Example configuration</summary>

```yaml title="Complete SIP Core Configuration"

```

</details>

:::caution

If your new options doesn't seem to be working, make sure to fully reload your browser with `ctrl + shift + R`.

:::

## SIP Core Options

| Property | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| <a id="auto_answer"></a> `auto_answer` | `boolean` | Whether to automatically answer incoming calls | `false` |
| <a id="backup_user"></a> `backup_user` | [`SIP User`](#sip-user-options) | If no SIP user is configured for the currently logged in user, this SIP user will be used | - |
| <a id="custom_wss_url"></a> `custom_wss_url` | `string` | Custom WebSocket URL to use when ingress is not setup | `wss://sip.example.com/ws` |
| <a id="ice_config"></a> `ice_config` | [`ICEConfig`](ICEConfig.md) | - | - |
| <a id="pbx_server"></a> `pbx_server` | `string` | The Asterisk server address. Set this when you don't use the add-on. Will use the Home Assistant hostname by default | `192.168.0.10` |
| <a id="popup_config"></a> `popup_config` | [`Popup Options`](#popup-options) or `Custom Options` | Configuration for your popup | - |
| <a id="popup_override_component"></a> `popup_override_component` | `null` \| `string` | Set this to override the default popup component | `my-custom-popup` |
| <a id="sip_video"></a> `sip_video` | `boolean` | **`Experimental`** Whether to use video in SIP calls | `false` |
| <a id="users"></a> `users` | Array of [`SIP User`](#sip-user-options)'s | A array of SIP users. SIP Core will use the one with your HA username | - |

### ICE Configuration Options

| Property | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| <a id="icecandidatepoolsize"></a> `iceCandidatePoolSize` | `number` | Number of ICE candidates to gather before signaling. Usually `0` or `1`. | `0` |
| <a id="icegatheringtimeout"></a> `iceGatheringTimeout` | `number` | Timeout in milliseconds for ICE gathering before continuing. | `1000` |
| <a id="iceservers"></a> `iceServers` | `RTCIceServer`[] | List of STUN/TURN servers for NAT traversal. | `[{"urls": ["stun:stun.l.google.com:19302"]}]` |
| <a id="icetransportpolicy"></a> `iceTransportPolicy` | `RTCIceTransportPolicy` | Which ICE candidates to use: `"all"` (default) or `"relay"` (TURN only). | `"all"` |
| <a id="rtcpmuxpolicy"></a> `rtcpMuxPolicy` | `"require"` | Require RTP/RTCP multiplexing. Should always be `"require"`. | `"require"` |

```json title="ICE Configuration Example"
"ice_config": {
    "iceGatheringTimeout": 1000,
    "iceCandidatePoolSize": 0,
    "iceTransportPolicy": "all",
    "iceServers": [
        {
            "urls": ["stun:stun.l.google.com:19302"]
        }
    ],
    "rtcpMuxPolicy": "require"
}
```

For more information, see the [MDN Web Docs on RTCConfiguration](https://developer.mozilla.org/en-US/docs/Web/API/RTCConfiguration).

### SIP User Options

| Property | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| <a id="display_name"></a> `display_name` | `string` | The display name of the user | `Jordy` |
| <a id="extension"></a> `extension` | `string` | The SIP extension of the user. Will use the HA username if not set | `100` |
| <a id="ha_username"></a> `ha_username` | `string` | The Home Assistant username of the user | `jordy` |
| <a id="password"></a> `password` | `string` | The SIP password of the user | `mypassword` |

```json title="SIP User Example"
{
    "display_name": "Jordy",
    "extension": "100",
    "ha_username": "jordy",
    "password": "mypassword"
}
```

## Popup Options

:::info

This is for the official included popup only.

:::

| Property      | Type                                   | Description                                                                 | Example |
| ------------- | -------------------------------------- | --------------------------------------------------------------------------- | ------- |
| `buttons`     | [`Button`][] array                     | Array of custom buttons to show in the popup (service calls or DTMF).       | See below |
| `extensions`  | `{ [key: string]: Extension }`         | Map of extension objects, keyed by extension number.                        | See below |
| `large`       | `boolean`                              | Show the popup in large (fullscreen) mode.                                  | `true` |
| `auto_open`   | `boolean`                              | Automatically open the popup on incoming/outgoing calls.                    | `true` |

### Button

| Property | Type         | Description                                  | Example           |
|----------|--------------|----------------------------------------------|-------------------|
| `label`  | `string`     | Button label                                 | `"Open Door"`     |
| `icon`   | `string`     | Material Design Icon name                    | `"mdi:door"`      |
| `type`   | `ButtonType` | Type of button (`SERVICE_CALL` or `DTMF`)    | `SERVICE_CALL`    |
| `data`   | `any`        | Data for the button (service call or DTMF)   | `{ domain: "switch", service: "toggle", entity_id: "switch.door" }` or `"1"` |

### Extension

| Property        | Type      | Description                        | Example         |
|-----------------|-----------|------------------------------------|-----------------|
| `name`          | `string`  | Display name for the extension     | `"Front Door"`  |
| `extension`     | `string`  | Extension number                   | `"100"`         |
| `camera_entity` | `string`  | Camera entity for video preview    | `"camera.door"` |

```json title="Popup Options Example"
"popup_config": {
  "buttons": [
    {
      "label": "Open Door",
      "icon": "mdi:door",
      "type": "SERVICE_CALL",
      "data": { "domain": "switch", "service": "toggle", "entity_id": "switch.door" }
    },
    {
      "label": "Send DTMF 1",
      "icon": "mdi:dialpad",
      "type": "DTMF",
      "data": "1"
    }
  ],
  "extensions": {
    "100": {
      "name": "Front Door",
      "extension": "100",
      "camera_entity": "camera.door"
    },
    "101": {
      "name": "Back Door",
      "extension": "101",
      "camera_entity": null
    }
  },
  "large": true,
  "auto_open": true
}
```

:::caution

The default camera entities have a delay. You can use [go2rtc](https://www.home-assistant.io/integrations/go2rtc/) to get a low-latency video feed.

:::
