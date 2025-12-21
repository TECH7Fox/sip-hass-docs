---
sidebar_position: 2
---

# Asterisk Add-on

<div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "5em", marginBottom: "0em"}}>
  <img src={require('@site/static/img/asterisk_icon.png').default} className="sipcore-logo" alt="SIP Core Logo" height="120"/>
  <div style={{flex: 1}}>
    The Asterisk add-on is a PBX server that will handle the SIP devices and calls. It is made for the card and comes preconfigured.
  </div>
</div>

## Add the Repository

First install the add-on repository.

- Go to the **Add-on Store**. Settings > Add-ons > Add-on Store.
- Click on the three dots in the upper right corner and select **Repositories**.
- Enter the url: [`https://github.com/TECH7Fox/asterisk-hass-addons`](https://github.com/TECH7Fox/asterisk-hass-addons) and click **Add**.

Now the add-on should show up under **Asterisk Add-on**.

## Installation

Go to the Asterisk add-on, and click install. This can take around 1-3 minutes.

When the add-on is installed, we will need to configure it.

For this tutorial, we will set `auto_generate` on.
Set a secure password for the AMI and generated extensions. We will need these later for the card and integration.

```yaml title="add-on configuration"
ami_password: my-secret-password    # Set a secure password
auto_add_secret: my-secret-password # Set a secure password
video_support: false                # Highly experimental, leave this off for this tutorial
auto_add: true                      # Generate a preconfigured PJSIP extension for every person entity
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

:::warning

The add-on uses ingress to tunnel the WebSocket connection to the card without the need for SSL or port forwarding.
The `OPEN WEB UI` button will show a empty page, which is expected.

:::

## Understanding the Configuration

If you want to change Asterisk's settings, it's important to know how the add-on handles the configuration files.
Please read the [add-on documentation](../add-on/asterisk-settings.md) for more information.
:::tip

You can check the generated extensions in `/addon_configs/3e533915_asterisk/asterisk/default/pjsip_default.conf`.

:::
