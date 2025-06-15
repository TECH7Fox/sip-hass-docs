---
sidebar_position: 1
---

# Asterisk Add-on

The **Asterisk Add-on** is a lightweight PBX server designed to work out-of-the-box with the SIP HASS Card and Home Assistant. It comes preconfigured for secure WebRTC calling and can automatically generate SIP extensions for your Home Assistant users.

This add-on handles all SIP device registration, call routing, and media handling. It also supports mailbox integration, Google Text-to-Speech, and speech recognition.

## Goal

The add-on aims to make setting up a SIP PBX for Home Assistant as easy and fast as possible, with minimal manual configuration.

## Features

- Preconfigured for SIP HASS Card and Home Assistant
- Automatic generation of PJSIP extensions for each person entity
- Secure WebSocket (WSS) support via Home Assistant Ingress (no port forwarding needed)
- Mailbox (voicemail) integration
- Built-in Google TTS and speech recognition
- Option to use your own SSL certificates or generate self-signed ones
- Fully configurable via the add-on settings

## Installation

1. Go to the **Add-on Store** in Home Assistant.
2. Click on the three dots in the upper right and select **Repositories**.
3. Add the repository URL:  
   ```
   https://github.com/TECH7Fox/asterisk-hass-addons
   ```
4. The add-on should now appear as **Asterisk Add-on**. Click **Install**.
5. Configure the add-on as needed (see the [tutorial](../tutorial/add-on.md) for recommended settings).
6. Start the add-on.

For more details, see the [tutorial](../tutorial/add-on.md).

---

For all configuration options, see the [settings](./settings.md).  
For technical details, see the [developer documentation](../developers/add-on/introduction.md).