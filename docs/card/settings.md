---
sidebar_position: 2
---

# ⚙️ SIP Core Settings

Here are all the options for SIP Core. The configuration can be set in the SIP Core integration settings.

:::info Settings Reload
SIP Core checks if the settings changed on each window location change and restarts the SIP connection if needed.
So you can change the settings and just navigate to another page to apply them.
:::

## SIP Core Options

| Property | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| <a id="auto_answer"></a> `auto_answer` | `boolean` | Whether to automatically answer incoming calls | `false` |
| <a id="backup_user"></a> `backup_user` | [`SIP User`](#sip-user-options) | If no SIP user is configured for the currently logged in user, this SIP user will be used | - |
| <a id="custom_wss_url"></a> `custom_wss_url` | `string` | Custom WebSocket URL to use when ingress is not setup | `wss://sip.example.com/ws` |
| <a id="ice_config"></a> `ice_config` | [`ICEConfig`](#ice-configuration-options) | - | - |
| <a id="pbx_server"></a> `pbx_server` | `string` | The Asterisk server address. Set this when you don't use the add-on. Will use the Home Assistant hostname by default | `192.168.0.10` |
| <a id="popup_config"></a> `popup_config` | [`Popup Options`](./cards-popups/call-popup.md#settings) or `Custom Options` | Configuration for your popup | - |
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

For more information, see the [MDN Web Docs on RTCConfiguration](https://developer.mozilla.org/en-US/docs/Web/API/RTCConfiguration).

### SIP User Options

| Property | Type | Description | Example |
| ------ | ------ | ------ | ------ |
| <a id="display_name"></a> `display_name` | `string` | The display name of the user | `Jordy` |
| <a id="extension"></a> `extension` | `string` | The SIP extension of the user. Will use the HA username if not set | `100` |
| <a id="ha_username"></a> `ha_username` | `string` | The Home Assistant username of the user | `jordy` |
| <a id="password"></a> `password` | `string` | The SIP password of the user | `mypassword` |
