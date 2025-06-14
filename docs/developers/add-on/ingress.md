---
tags:
    - Add-on
---

# Ingress

The Asterisk add-on uses the Home Assistant Ingress feature to tunnel the Websocket connection to Asterisk through the existing Home Assistant connection.
This allows SIP Core to communicate with Asterisk without needing to port forward or setup SSL in Asterisk itself.

## Technical Setup

On the add-on startup, it will grab it's own ingress entry
and post it to the `text.asterisk_addon_ingress_entry` entity
trough the supervisor API.

> From: [asterisk-hass-addons/asterisk/rootfs/etc/init.d/register_ingress.sh:12](https://github.com/TECH7Fox/asterisk-hass-addons/blob/c7c5fb12bddc52156bde4254675dc41c21964c29/asterisk/rootfs/etc/cont-init.d/register-ingress-entry.sh#L12)

```bash
INGRESS_ENTRY=$(api_call -X GET http://supervisor/addons/self/info | jq -r .data.ingress_entry)
bashio::log.info ingress_entry: $INGRESS_ENTRY
api_call -X POST http://supervisor/core/api/states/text.asterisk_addon_ingress_entry -d '{"state": "'${INGRESS_ENTRY}'"}'
```

> This feature is implemented by **mrk-its** in [PR 371](https://github.com/TECH7Fox/asterisk-hass-addons/pull/371).

This entity is detected and used by SIP Core to setup a ingress
session to connect to Asterisk.
If no entity is found, it will use the ` custom_wss_url` option
from the `sip-config.json` file.

For more information on how SIP Core uses ingress, see the [SIP Core documentation](../card/ingress.md).
