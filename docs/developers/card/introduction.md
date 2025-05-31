---
sidebar_position: 1
---

# Introduction

The SIP Core component is designed as a modular call management system for third party cards and developers to use.

:::info
This documentation is for the latest version of [sip-hass-card](https://github.com/TECH7Fox/sip-hass-card).
:::

## Architecture

SIP Core is directly loaded in the Home Assistant frontend. This allows it to work on every page, and not just the dashboard.
It provides an API for cards and other elements to interact with SIP calls, manage call states, and handle user interactions.

:::warning
The Home Assistant ingress is only available when using
the Asterisk add-on. If you are using a standalone Asterisk server,
you will need to set up your own port forwarding, SSL, etc.
:::

```mermaid
flowchart TD
    A[SIP Core] -->|API| B[Contacts Card]
    A -->|API| C[Popup]
    A -->|API| E[Call Card]
    D[sip-config.json] -->|Configuration| A
    F[Asterisk PBX] <--> |"Websocket (ingress)"| A
    F <--> |"WebRTC"| A
```

The SIP Core instance is also mounted on the `window` object, allowing easy access from custom cards and components without needing to import it directly.
You can access it using `window.sipCore` in your JavaScript code.

## SIP Core API Documentation

For detailed information on the SIP Core API with all available methods, properties and enums, please refer to the [SIP Core API documentation](api).

## Getting Started

To get started with developing your own SIP card, you can follow the [SIP Card Development Guide](guides/standalone.md). This guide will walk you through the process of creating a custom SIP card, including setting up your development environment, creating the card, and integrating it with SIP Core.

There is also a guide for creating a popup and overriding the default one, which can be found in the [Popup Development Guide](guides/popup.md).
