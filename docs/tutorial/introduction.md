---
sidebar_position: 1
---

# Tutorial

In this tutorial we will setup the add-on, SIP Core integration and Asterisk integration and connect everything together.

## What you'll need

For the entire SIP-HASS system you'll need:

- Latest Home Assistant:
  - For the add-on you need **Home Assistant Supervisor**. Otherwise use your own Asterisk PBX.
    - The add-on can also be installed directly on docker. See the [developer documentation](../developers/add-on/docker.md) for more information.
- HTTPS enabled:
  - Simplest way is to use the official DuckDNS add-on.
- HACS installed:
  - Follow the [HACS installation guide](https://www.hacs.xyz/docs/use/#getting-started-with-hacs) if you don't have it yet.
