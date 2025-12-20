---
sidebar_position: 1
tags:
    - developers
---

# Developer Documentation

The developers section is for people who want to
- work on the add-on, integration or SIP Core.
- create custom cards or popups for SIP Core.
- simply want to learn more about how the SIP-HASS projects works.

For information on how to install, configure and use the SIP-HASS projects,
please see the user documentations.

## Wide Architecture

This section explains the entire architecture of all SIP-HASS components and how they work together.

This includes:
- SIP Core Integration
- SIP Cards (Contacts, Call, Popup, third-party)
- Asterisk Integration
- Asterisk (Add-on)

```mermaid
flowchart TD
    subgraph ha-frontend [HA Frontend]
        A[SIP Core] -->|API| B[Contacts Card]
        A -->|API| C[Popup]
        A -->|API| E[Call Card]
    end

    subgraph supervisor [Supervisor / External]
        G["Asterisk (Add-on)"] --> |"API"| H[Supervisor]
        G <--> |"Websocket (ingress)"| A
        G <--> |"WebRTC"| A
    end

    subgraph ha-backend [HA Backend]
        I[Asterisk Integration] <--> |AMI| G
        S[SIP Core Integration] <--> |Configuration| A
        S <--> |Ingress URL| A
    end
```

## Asterisk (Add-on)

Asterisk is the PBX that handles the actual calls, SIP endpoints, etc.
Other PBXes will not work, since Asterisk is currently the only PBX
that supports WebRTC translation that I know of.

I did try to make a FreePBX add-on, since it it pretty much just
a manager and web interface for Asterisk, but they add so much
overhead and complexity that not only is impossible to maintain
for a container, but also has multiple bugs that make it unusable
for this project.

See the [Asterisk Add-on](/docs/developers/add-on/introduction) section for more information.

## SIP Core Integration

SIP Core is the main component that handles all call management
and communication to Asterisk. It provides an API for cards and other elements to use.

The integration part supports it by managing the configuration and providing a endpoint for it,
and by providing a endpoint to get the ingress URL from the supervisor.

See the [SIP Core](/docs/developers/card/introduction) section for more information.

## Asterisk Integration

The Asterisk integration is a custom component that connects to the Asterisk Manager Interface (AMI) and provides sensors and services for managing calls and endpoints.

This integration is optional and not required to use the SIP Core or cards, but it provides additional functionality and integration with Home Assistant.

See the [Asterisk Integration](/docs/developers/integration.md) section for more information.
