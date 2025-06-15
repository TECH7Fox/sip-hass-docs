---
sidebar_position: 1
---

# SIP Core & Cards

SIP HASS Cards add real-time audio and video calling to your Home Assistant dashboards. The system is made up of several parts that work together to provide a flexible and customizable SIP experience in your smart home.

## How It Works

- **SIP Core** is the main engine that handles SIP registration, call management, and device integration. It runs in the browser and connects to your PBX (like the Asterisk add-on) using a secure WebSocket connection.
- **Ingress** is used by default with the Asterisk add-on, so you don't need to open extra ports or set up SSL on your PBX. If you use your own PBX, you can set a custom WebSocket URL.
- **Settings** are managed in a single configuration file (`sip-config.json`). Here you define users, ICE settings, popups, and more. See [Settings](./settings.md) for all options.
- **Cards** are UI components you add to your dashboards. The default SIP Card lets you make and receive calls, see status, and interact with other devices.
- **Popups** show call controls and video during a call. You can use the default popup or create your own for a custom experience.
- **Custom Development**: It's easy to create your own cards and popups. SIP Core exposes an API for developers, and you can override the default popup or add new cards. See the [developer documentation](../developers/card/introduction.md) for guides and examples.

## Basic Setup

1. **Install the SIP HASS Card** using [HACS](https://hacs.xyz/) (Home Assistant Community Store).
2. **Install the Asterisk add-on** (recommended) if you haven't yet or use your own PBX.
3. **Configure SIP Core** by editing `/config/www/sip-config.json` in Home Assistant.
    - See [settings](./settings.md) for details on configuration options.
4. **Add the card(s)** to your dashboard from the UI.
5. **Customize popups and cards** as needed, or develop your own.

For detailed setup instructions, see the [tutorial](../tutorial/introduction.md).  
For more technical information and development guides, see the [developer docs](../developers/card/introduction.md).
