---
sidebar_position: 3
title: DNS Rewrite
tags:
    - SSL
---

By pointing the domain to the local IP in your DNS, the certificate matches. This means when you are on your local network and you go to your external HA address, it is redirected to your internal IP.

## Adguard
Some routers have a option to do this, but if your's can't, you can use the **Adguard add-on**.

Go to rewrite and configure a DNS rewrite like shown below. Basically your domain rewrites to your internal HA ip address for every port.

![Adguard](/img/adguard.png)