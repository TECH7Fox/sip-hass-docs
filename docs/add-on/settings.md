---
sidebar_position: 2
---

# 🛠️ Settings

Here are the settings of the Asterisk Add-on.

### Option: `ami_password`
Set's the password for the Asterisk Manager Interface, to connect to the [Asterisk integration](https://github.com/TECH7Fox/Asterisk-integration).

### Option: `video_support`
Enables video support for the auto generated extensions.

### Option: `auto_add`
Creates a extension for every [person](https://www.home-assistant.io/integrations/person/) registered in Home Assistant. They will have their number and username auto-generated starting from 100, with the `callerid` set to the person's name.

### Option: `auto_add_secret`
The secret for the auto generated extensions.

### Option: `generate_ssl_cert`
Enables/disables the generation of a self-signed certificate for use with the SSL interfaces (WSS and TLS).

### Option: `certfile`
The certificate file to use for SSL in your `/ssl/` folder, when `generate_ssl_cert` is disabled.

### Option: `keyfile`
The key file to use for SSL in your `/ssl/` folder, when `generate_ssl_cert` is disabled.

### Option: `mailbox_server`
Enables the mailbox server to send voicemails to the Asterisk mailbox integration.

### Option: `mailbox_port`
The port used by the mailbox server.

### Option: `mailbox_password`
The password for the mailbox server.

### Option: `mailbox_extension`
Which extension to get the voicemails from.

### Option: `api_key`
The API Key for speech-to-text.
You can get a key [here](https://cloud.google.com/speech-to-text). Google says it's free, but requires a billing account.

### Option: `log_level`
The log level to configure Asterisk to use. To know more about the existing presets, check [`logger.conf`](https://github.com/TECH7Fox/asterisk-hass-addons/blob/main/asterisk/rootfs/usr/share/tempio/logger.conf.gtpl).
