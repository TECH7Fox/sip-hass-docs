---
sidebar_position: 4
title: Troubleshooting
tags:
    - Troubleshooting
    - Add-on
    - Asterisk
---

## Accessing Asterisk CLI

You can access the Asterisk CLI to debug.

Install the **enhanced SSH & Web terminal addon** from the **Add-on Store**. Disable **protection mode** to be able to access the docker host from the command line.

Then run:

```bash
docker exec -it addon_b35499aa_asterisk asterisk -rvvvvddd
```

##  Missing Required header(s) (PJSIP_EMISSINGHDR)

The request got messed up and returns a `400: Bad Request` error.

This could be because your endpoint config is invalid.

:::caution

Make sure you have no special characters in the config!
These are not allowed.

:::

If you're sure your endpoint config is correct and succesfully loaded, check for any firewall or networking issues if it is working correctly locally.

:::tip

You can use wireshark tot trace the packages and find the problem in your network.

:::
