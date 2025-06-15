---
sidebar_position: 1
---

# Asterisk Add-on

<div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1em", marginBottom: "1em"}}>
  <div style={{flex: 1}}>
    The <b>Asterisk Add-on</b> is a lightweight PBX server designed to work out-of-the-box with the SIP HASS Card and Home Assistant. It comes preconfigured for secure WebRTC calling and can automatically generate SIP extensions for your Home Assistant users.
  </div>
  <img src={require('@site/static/img/asterisk_logo.png').default} className="asterisk-logo" alt="Asterisk Icon" height="100"/>
</div>

This add-on handles all SIP device registration, call routing, and media handling. It also includes additional features like Google Text-to-Speech.


## Goal

The add-on aims to make setting up a SIP PBX for Home Assistant as easy and fast as possible, with minimal manual configuration.


## Features

- ⚡ **Preconfigured** for SIP HASS Card and Home Assistant
- 👤 **Automatic generation** of PJSIP extensions for each person entity
- 🔒 **Secure WebSocket (WSS)** support via Home Assistant **Ingress** (no port forwarding needed)
- 🗣️ **Built-in Google TTS** module
- 🛡️ Option to use your own SSL certificates or generate self-signed ones when not using Ingress
- 🛠️ Fully configurable via the add-on settings and config files


## Installation

1. Go to the **Add-on Store** in Home Assistant
2. Click on the three dots in the upper right and select **Repositories**
3. Add the repository URL:
   ```
   https://github.com/TECH7Fox/asterisk-hass-addons
   ```
4. The add-on should now appear as **Asterisk Add-on**. Click **Install**
5. Configure the add-on as needed (see the [tutorial](../tutorial/add-on.md) for recommended settings)
6. Start the add-on


> For more details, see the [tutorial](../tutorial/add-on.md).


## More Information

- ⚙️ For all configuration options, see the [settings](./settings.md).
- 👩‍💻 For technical details, see the [developer documentation](../developers/add-on/introduction.md).