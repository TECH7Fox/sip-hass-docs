---
sidebar_position: 2
title: Add-on
tags:
    - Asterisk
    - PBX
---

Here is everything you need to setup developing for the add-on. Thank you for your help with this project!

## About

The Asterisk add-on is a docker container for Home Assistant that set's up a Asterisk server and configures it to use with the card.

## How to Test

You can test the add-on on your Home Assistant to make sure it works.

- Comment out the `image` option in `config.yaml`.

```yaml title="config.yaml" {6-6}
name: Asterisk
version: 1.3.2
slug: asterisk
description: PBX server for SIP devices like doorbells and phones
url: https://github.com/TECH7Fox/Asterisk-add-on
#image: "ghcr.io/tech7fox/{arch}-addon-asterisk"
arch:
  - armhf
  - armv7
  - aarch64
  - amd64
  - i386
``` 

- Copy the `Asterisk` folder to `/addons`.
- Reload the repositories and install the add-on.