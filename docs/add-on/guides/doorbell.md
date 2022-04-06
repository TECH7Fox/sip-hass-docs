---
sidebar_position: 1
title: Doorbell
tags:
    - Dialplan
    - SIP Device
    - Video
---

If you have a SIP doorbell, you can connect it to the add-on.

## Requirements

For this guide you will need the following:

- Working Add-on
- Doorbell or other SIP device

## Create PJSIP contact

First, create a extension for your device in `pjsip_custom.conf`.

```editorconfig title="pjsip_custom.conf"
[8000]
type = endpoint
context = default
direct_media_method=invite
dtmf_mode=info
callerid="Doorbell" <8000>
force_rport=no
aors= 8000
auth = auth8000

[8000]
type = aor
max_contacts = 1

[auth8000]
type=auth
auth_type=userpass
password=mypassword         ; Set your password here
username=8000
```

Restart the add-on, and check the logs if the doorbell registers.

## Dialplan

Now we need to choose and configure a dialplan to send the call to the right place. This could be complicated depending on if you have a 24/7 registered extension.

The dialplan is set in `extensions.conf`.

### Parking

With parking, the doorbell parks itself and wait for the other to retrieve the call.
The add-on includes a parking extension by default, so you only need to point to it.

Simply use it by calling `777` to park, and `888` to pickup a parked call.

You can find more info about parking <a href="../parking/">here</a>.