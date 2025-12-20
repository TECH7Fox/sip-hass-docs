---
sidebar_position: 1
---

# SIP Core & Cards

SIP Core brings real-time audio and video calling to your Home Assistant instance through a native integration. The system is made up of several parts that work together to provide a flexible and customizable SIP experience in your smart home.

## How It Works

- **SIP Core Integration** is the main engine that handles SIP registration, call management, and device integration. It's a native Home Assistant integration that connects to your PBX (like the Asterisk add-on) using a secure WebSocket connection.
- **Configuration** is managed through the Home Assistant UI (Settings → Devices & Services). You can configure multiple users, ICE settings, video support, and more.
- **Ingress** is used by default with the Asterisk add-on, so you don't need to open extra ports or set up SSL on your PBX. If you use your own PBX, you can set a custom WebSocket URL in the integration settings.
- **Cards** are UI components you add to your dashboards. The Contacts Card and Call Card let you make and receive calls, see status, and interact with other devices.
- **Popups** show call controls and video during a call. You can use the default popup or create your own for a custom experience.
- **Custom Development**: It's easy to create your own cards and popups. SIP Core exposes an API for developers, and you can override the default popup or add new cards. See the [developer documentation](../developers/card/introduction.md) for guides and examples.

## Installation (via HACS)

[![HACS Repository](https://img.shields.io/badge/HACS_Repository-%2341BDF5.svg?style=for-the-badge&logo=homeassistant&logoColor=white)](https://my.home-assistant.io/redirect/hacs_repository/?owner=TECH7Fox&repository=sipcore-hass-integration&category=integration)

You can install SIP Core using [HACS](https://hacs.xyz/):

1. Go to **HACS** in Home Assistant.
2. Click on **Integrations**.
3. Click on the three dots in the upper right corner and select **Custom repositories**.
4. Add the repository URL:  
   ```
   https://github.com/TECH7Fox/sipcore-hass-integration
   ```
   and set the category to **Integration**.
5. Click **Add** and check if the repository appears.
6. You should now see **SIP Core**. Click **INSTALL**.
7. Restart Home Assistant.
8. Go to **Settings → Devices & Services → Integrations** and click **Add Integration**.
9. Search for **SIP Core** and follow the configuration prompts.
10. Add the SIP Card(s) to your dashboard from the UI.

:::tip Quick Install
Click the HACS badge above to directly add the SIP Core repository to HACS!
:::

For detailed setup instructions, see the [tutorial](../tutorial/introduction.md).  

---

For all configuration options, see the [settings](./settings.md).  
For more technical information and development guides, see the [developer docs](../developers/card/introduction.md).
