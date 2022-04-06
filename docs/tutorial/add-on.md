---
sidebar_position: 2
---

# Add-on

The Asterisk add-on is a PBX server that will handle the SIP devices and calls. It is made for the card and comes preconfigured.

## Add the Repository

First install the add-on repository.

- Go to the **Add-on Store**.
- Click on the three dots, and click on **Repositories**.
- Add the url: `https://github.com/TECH7Fox/asterisk-hass-addons`

Now the add-on should show up under **Asterisk Add-on**.

## Installation

Go to the Asterisk add-on, and click install. This can take around 1-3 minutes.

When the add-on is installed, we will need to configure it.

For this tutorial, we will set `auto_generate` on.
Set a secure password for the AMI and generated extensions. We will need these later for the card and integration.

```yaml title="add-on configuration"
ami_password: my-secret-password    # Set a secure password
auto_add_secret: my-secret-password # Set a secure password
video_support: false                # Leave of for now
auto_add: true                      # Generate a PJSIP extension for every person entity
generate_ssl_cert: false            # Enable this if you don't use something like duckdns
certfile: fullchain.pem
keyfile: privkey.pem
log_level: info

# These settings are optional
mailbox: false
mailbox_port: 12345
mailbox_extension: '100'
mailbox_password: my-secure-password
mailbox_google_api_key: my-google-stt-key
```

## Start the add-on

Now we can start the add-on. After 1-3 minutes you can see the config files for Asterisk.

:::tip

You can see the generated extensions in `/config/asterisk/pjsip_default.conf`.

:::