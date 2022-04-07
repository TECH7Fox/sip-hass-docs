---
sidebar_position: 2
tags:
    - FreePBX
    - Asterisk
title: FreePBX
---

In this guide I will show you how to setup **FreePBX** for the card.

## Configuration

Once you have your FreePBX installed and running, you need to configure it to work with websocket.

1. Install Certificate Management in Admin modules > search online.
2. Go to certificate management and create a default self-signed certificate. Apply Config.
3. Go to Advanced Settings and make sure you have the following:

```yaml title="Advanced Settings"
Enable Static Content: No
Enable the mini-HTTP Server: Yes
Enable TLS for the mini-HTTP Server: Yes
HTTP Bind Port: 8088
HTTPS Bind Port: 8089
HTTPS TLS Certificate Location: /etc/asterisk/keys/intergration/certificate.pem
HTTPS TLS Private Key Location: /etc/asterisk/keys/intergration/webserver.key

SIP DTMF Signaling: auto
SIP encryption: yes
```

:::caution

If you are not using raspbx the certificate and private key location can be somewhere else. Use ssh to find out where.
If you are using raspbx and its still not working, try switching the locations to:

<ul>
    <li>certificate: <code>/etc/asterisk/keys/default.crt</code></li>
    <li>key: <code>/etc/asterisk/keys/default.key</code></li>
</ul>

:::

3. Go to SIP Settings, under general scroll down to Audio Codecs. I have these in the following order:
```yaml title="Codecs"
ulaw
alaw
speex
gsm
g726
g723
```

Click Submit and then Apply Config.

4. Then under **SIP Legacy Settings** [chan_sip]:
```yaml title="chan_sip Settings"
enable TLS: yes
certificate Manager: default
SSL Method: tlsv1
Don't Verify Server: No

Non-Standard g726: No
Reinvite Behavior: No

Bind Port: 5160
TLS Bind Port: 5161
Enable SRV Lookup: No
Enable TCP: No
Call Events: No
```
Click Submit and then Apply Config.

5. Go to Extensions and create a **chan_sip** extension.

:::caution

There is a bug where **DTLS** wont stay on, so first click on **Change to CHAN_PJSIP Driver**, enable **DTLS**, and then switch back again to chan_sip.

Check if it really is on.

:::

chan_sip extension:

```yaml title="Extension options"
DTMF Signaling: Auto
Trust RPID: Yes
Send RPID: Send P-Asserted_Identity Header
Connection Type: friend
Session Timers: Accept
NAT Mode: Yes - (force_rport,comedia)
Qualify: yes
Transport: All - WSS Primary
Enable AVPF: Yes
Force AVP: Yes
Enable ICE Support: Yes
Enable rtcp Mux: Yes
Enable Encryption: Yes (SRTP only)

Enable DTLS: Yes
Use Certificate: default
DTLS Verify: Fingerprint
DTLS Setup: Act/Pass
DTLS Rekey Interval: 0
```
Click submit and Apply Config

6. restart your server. (dont think this is possible within the FreePBX gui, so just disconnect the power or use ssh.)
7. In your clients browser, go to `https://<ip_adress_of_pbxserver>:8089/ws` to accept the certificate.

And that's it. Now you can try to connect the card. If everything works, you should be able to call to and from the card.

Having problems? Check out <a href="../troubleshooting">Troubleshooting</a>.