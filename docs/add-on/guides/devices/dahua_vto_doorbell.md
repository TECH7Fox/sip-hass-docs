---
sidebar_position: 1
title: Dahua VTO Doorbell
tags:
    - Doorbell
---

Here is how to configure the **Dahua VTO Doorbell** for the add-on.

But first, create a extension and dialplan for your doorbell.

:::tip

Check the <a href="../doorbell">Doorbell Guide</a> on how to create a extension and dialplan for your doorbell.

:::

## Network Settings

![network settings](/img/dahua_vto_doorbell/network_settings.png)

1.  **Disabled**
2.  **DSS Express/DSS Pro**
3.  Your HA IP
4.  `5060`
5.  The username you configured in the extension (`pjsip_custom.conf`)
6.  The password you configured in the extension (`pjsip_custom.conf`)
7.  I think it does not matter but I left the default VDP
8.  You can leave it empty, it does not matter
9.  You can leave it empty, it does not matter
10. You can leave it empty, it does not matter
11. You can leave it empty, it does not matter
12. You can leave it empty, it does not matter
13. You can leave it empty, it does not matter
14. **Disabled**

## Local Settings

![local settings](/img/dahua_vto_doorbell/local_settings.png)

1. The number which the doorbell will call.
2. The number of the doorbell. Make sure you created an extension for it in `/config/asterisk/pjsip_custom.conf`.