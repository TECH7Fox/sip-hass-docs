---
sidebar_position: 3
---

# SIP Core & Cards

<div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "5em", marginBottom: "0em"}}>
  <div style={{flex: 1}}>
    Now we have a PBX to connect to, we can install SIP Core and the cards.
  </div>
  <img src={require('@site/static/img/sipcore_icon.png').default} className="sipcore-logo" alt="SIP Core Logo" height="120"/>
</div>


:::warning

SIP Core only works over HTTPS. This is required by modern browsers to access your microphone and camera.
You can use something like **DuckDNS** or **Let's Encrypt** to enable HTTPS for your Home Assistant instance.

:::

## Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="install-method">
  <TabItem value="hacs" label="HACS" default>

:::info Quick Install
You can also click the badge to directly add SIP Core to HACS!

[![HACS Repository](https://img.shields.io/badge/HACS_Repository-%2341BDF5.svg?style=for-the-badge&logo=homeassistant&logoColor=white)](https://my.home-assistant.io/redirect/hacs_repository/?owner=TECH7Fox&repository=sipcore-hass-integration&category=integration)
:::

    <ol>
      <li>Go to <b>HACS</b> in Home Assistant</li>
      <li>Click on <b>Integrations</b></li>
      <li>Click on the three dots in the upper right corner and select <b>Custom repositories</b></li>
      <li>
        Add the repository URL:<br/>
        <code>https://github.com/TECH7Fox/sipcore-hass-integration</code><br/>
        and set the category to <b>Integration</b>
      </li>
      <li>Click <b>Add</b> and verify the repository appears</li>
      <li>You should now see <b>SIP Core</b>. Click <b>INSTALL</b></li>
      <li>Restart Home Assistant</li>
      <li>Go to <b>Settings → Devices & Services → Integrations</b> and click <b>Add Integration</b></li>
      <li>Search for <b>SIP Core</b> and follow the configuration prompts</li>
    </ol>
  </TabItem>
  <TabItem value="manual" label="Manual">
    <ol>
      <li>Download the [latest release from GitHub](https://github.com/TECH7Fox/sipcore-hass-integration/releases)</li>
      <li>Extract the <code>sip_core</code> folder to <code>/config/custom_components/</code></li>
      <li>Restart Home Assistant</li>
      <li>Go to <b>Settings → Devices & Services → Integrations</b> and click <b>Add Integration</b></li>
      <li>Search for <b>SIP Core</b> and follow the configuration prompts</li>
    </ol>
  </TabItem>
</Tabs>

## Configure SIP Core

After installing SIP Core as an integration, you can configure it through the Home Assistant UI.

1. Go to **Settings → Devices & Services → Integrations**
2. Find and select the **SIP Core** integration
3. Click on **configure** and enter your settings accordenly 
4. Save your configuration

:::info
You can find the Home Assistant **usernames** in Settings → People → Users.
:::

For all available configuration options, see the [Settings documentation](../card/settings.md).

---

## Add the Card(s)

Now that SIP Core is configured, you can add cards to your dashboard to make and receive calls.

### Contacts Card

The **Contacts Card** shows a list of SIP endpoints (extensions) and lets you call them with a single click.

<div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1em", marginBottom: "0em"}}>
  <div style={{flex: 1}}>
```yaml title="Example: Contacts Card"
type: custom:sip-contacts-card
extensions:
  "102":
    name: Jordy
    status_entity: binary_sensor.100_registered
    override_icon: mdi:account
  "103":
    name: Desk phone
    override_icon: mdi:deskphone
  "8001":
    name: Doorbell
    override_icon: mdi:doorbell-video
  "0612345678":
    name: Test
    override_icon: mdi:dialpad
    edit: true
debug: false
hide_me: false
state_color: true
```
  </div>
  <img src={require('@site/static/img/contacts_card.png').default} className="sipcore-logo" alt="SIP Core Logo" height="280"/>
</div>

See the [Contacts Card documentation](../card/cards-popups/contacts-card.md) for all options and features.

---

### Call Card (Optional)

The **Call Card** provides a full call interface directly in your dashboard, including call controls, video, and custom buttons.

<div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1em", marginBottom: "0em"}}>
  <div style={{flex: 1}}>
```yaml title="Example: Call Card"
type: custom:sip-call-card
extensions:
  "101":
    name: Jordy
  "102":
    name: Desk Phone
    override_icon: mdi:deskphone
  "8001":
    name: Doorbell
    camera_entity: camera.doorbell
buttons:
  - label: Open Door
    icon: mdi:door-open
    type: service_call
    data:
      domain: light
      service: toggle
      entity_id: light.bedroom_lights
  - label: DTMF 1
    icon: mdi:1
    type: dtmf
    data:
      dtmf: "1"
```
  </div>
  <img src={require('@site/static/img/call_card.png').default} className="sipcore-logo" alt="SIP Core Logo" height="230"/>
</div>

See the [Call Card documentation](../card/cards-popups/call-card.md) for all options and features.

---

### 🛠️ Custom Cards

You can also create your own custom cards and popups to fit your needs.  
See the [developer documentation](../developers/card/introduction.md) for guides and examples on building your own SIP Core components.

## SSL

**WSS** (Secure WebSocket) requires **SSL** for security reasons. The add-on sets up Asterisk's part of that, but you may still need to set up your network to work with it.

<Tabs groupId="ssl-method">
  <TabItem value="ingress" label="Ingress (Recommended)" default>
    <b>Ingress</b> is the easiest and most secure way to use SIP Core with the Asterisk add-on.<br/>
    Home Assistant tunnels the WebSocket connection through its own secure connection, so you don't need to set up SSL or port forwarding in Asterisk.

    - No need to open ports or manage certificates.
    - Works out of the box with the add-on and SIP Core.
    - Just use the default settings and let Home Assistant and SIP Core handle the rest.

    :::tip
    If you use the Asterisk add-on, Ingress is enabled by default.  
    For technical details, see the <a href="/docs/developers/add-on/ingress">developer docs</a>.
    :::
  </TabItem>
  <TabItem value="manual" label="Manual">
    You can temporarily accept the certificate manually by going to:<br/>
    <code>https://&lt;YOUR-HA-ADDRESS&gt;:8089/ws</code>, click continue and accept. You should see <b>Upgrade Required</b>.

    Now your browser accepts this certificate, even if the domain doesn't match.

    :::warning
    This is only to temporarily test. This only works for a limited time and doesn't work for other devices.

    <b>This is not a permanent solution!</b>
    :::
  </TabItem>
  <TabItem value="dns" label="DNS Rewrite">
    It's possible to set a <b>DNS rewrite</b> in your router, so your certificate domain points towards your <b>local IP</b>.  
    This way you don't have to port forward anything, but this only works locally.

    - Set up a DNS rewrite so your domain resolves to your Home Assistant's local IP.
    - Your browser will trust the certificate if the domain matches.

    You can find more info <a href="../add-on/guides/dns_rewrite">here</a>.
  </TabItem>
  <TabItem value="portforward" label="Port Forwarding">
    The classic way is to port forward <code>8089</code>.  
    Then you can set the <code>server</code> option to your domain.  
    You may also need to forward the <b>RTP ports</b>, which are by default <code>10000-20000</code>.

    :::caution
    If you do this, make sure you have <b>secure passwords</b> for your extensions! Bots may try to brute-force it.

    If that happens often, you could set <code>8089</code> to another non-standard port.
    :::
  </TabItem>
</Tabs>
