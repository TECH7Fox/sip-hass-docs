
# Ingress

When using the Asterisk add-on, SIP Core can use it's ingress feature to connect to Asterisk
without needing to port forward or setup SSL in Asterisk itself.

## Technical Setup

When SIP Core detects the `text.asterisk_addon_ingress_entry` entity,
(which is created by the Asterisk add-on on startup),
it will use it's value (for example `/api/hassio_ingress/1234567890abcdef`)
to create a ingress session using the Home Assistant API.

```ts
const resp: { session: string } = await this.hass.callWS({
    type: "supervisor/api",
    endpoint: "/ingress/session",
    method: "post",
});
```

This session is then stored in a cookie which Home Assistant's
frontend uses when making requests to the assembled URL.
The final URL will look like this:

```ts
template: {WS_PROTOCOL}://{HA_HOST}{INGRESS_ENTRY}/ws
wss://homeassistant.local/api/hassio_ingress/1234567890abcdef/ws
```

> This method is borrowed from **lovelylain**'s
> [ha-addon-iframe-card](https://github.com/lovelylain/ha-addon-iframe-card/blob/main/src/hassio-ingress.ts),\
> and implemented by **mrk-its** in [PR 131](https://github.com/TECH7Fox/sip-hass-card/pull/131).

For more information on how the Asterisk add-on sets up ingress, see the [Add-on documentation](../add-on/ingress.md).
