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