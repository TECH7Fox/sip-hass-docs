---
sidebar_position: 1
---

# Asterisk Integration

The Asterisk integration connects your Home Assistant instance to your Asterisk PBX, allowing you to monitor and automate SIP devices and calls directly from Home Assistant.

This integration automatically detects your **PJSIP** and **SIP** extensions and creates devices for each, exposing sensors and services you can use in automations. It also provides the `send_action` service, which lets you send commands like `Originate` (start a call) and `Hangup` to Asterisk.

## Goal

The integration is designed to make it easy to automate and monitor your **Asterisk server** using **Home Assistant**.

## Features

- **Automatic detection** of PJSIP and SIP extensions
- Sensors for connected line, device state, and registration status
- DTMF in/out sensors for each device
- Server status device
- **Send Action** service for advanced control (originate, hangup, etc.)
- Works seamlessly with the SIP HASS Card and Asterisk Add-on

## Installation (via HACS)

You can install the Asterisk integration using [HACS](https://hacs.xyz/):

1. Go to **HACS** in Home Assistant.
2. Click on **Integrations**.
3. Click on the three dots in the upper right corner and select **Custom repositories**.
4. Add the repository URL:  
   ```
   https://github.com/TECH7Fox/asterisk-hass-integration
   ```
   and set the category to **Integration**.
5. Click **Add** and check if the repository appears.
6. You should now see **Asterisk integration**. Click **INSTALL**.
7. Restart Home Assistant.
8. Go to **Settings > Devices & Services > Integrations** and click **Add Integration**.
9. Search for **Asterisk** and follow the prompts to configure the integration (host, port, username, password).

For more details, see the [tutorial](../tutorial/integration.md).

---

For all configuration options, see the [settings](./settings.md).  
For technical details, see the [developer documentation](../developers/integration/introduction.md).