---
sidebar_position: 2
title: Doorbell
tags:
    - Dialplan
    - SIP Device
    - Video
    - Doorbell
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

### Dial

If you do have a device which is always registered to accept incoming calls, you can use the normal **Dial** function.

The add-on already has a default dialplan extension that calls the extension your trying to reach.

```editorconfig title="extensions.conf"
exten => _X!,1,Dial(${PJSIP_DIAL_CONTACTS(${EXTEN})})
```

You can also dial to multiple devices, and it will connect to the first one to pickup.

More info about dial <a href="https://wiki.asterisk.org/wiki/display/AST/Asterisk+13+Application_Dial">here</a>.

:::caution

This only works if the device your calling is registered.

:::

### Parking

With parking, the doorbell parks itself and wait for the other to retrieve the call.
The add-on includes a parking extension by default, so you only need to point to it.

Simply use it by calling `777` to park, and `888` to pickup a parked call.

You can find more info about parking <a href="../parking/">here</a>.

### Conference

By using a conference the doorbell also waits for someone else to join the conference room. For this you also need to configure a conference room and users in `confbridge.conf`.

:::tip

This option allows calling with **multiple devices**. So more then one person can answer the doorbell. 

:::

```editorconfig title="confbridge.conf"
[admin_user]
type=user
marked=yes
admin=yes
music_on_hold_when_empty=yes
quiet=yes

[default_user]
type=user
wait_marked=yes
end_marked=yes
music_on_hold_when_empty=yes
quiet=yes

[myconferenceroom]
type=bridge
max_members=10
```

Then call the room with the correct user from the dialplan.

```editorconfig title="extensions.conf"
; for the doorbell
exten => 777,1,Progress()
exten => 777,2,Wait(1)
exten => 777,3,ConfBridge(1,myconferenceroom,default_user)

; for the other user
exten => 888,1,Progress()
exten => 888,2,Wait(1)
exten => 888,3,ConfBridge(1,myconferenceroom,admin_user)
```

Look <a href="https://wiki.asterisk.org/wiki/display/AST/ConfBridge+Configuration">here</a> for all the conference settings.

### Redial

You can also try to redial until someone registers and picks up.

:::caution

This option is not ideal as it could give a lot of missed calls.

:::

`wait.wav` is the waiting music.
`4` is the seconds between each try.
`10` is the amount of tries.

```editorconfig title="extensions.conf"
exten => 777,1,Progress()
exten => 777,n,RetryDial(wait.wav,4,10,PJSIP/100) 
```