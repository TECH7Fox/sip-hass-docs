---
sidebar_position: 1
tags:
    - Asterisk
    - PBX
    - Add-on
---

# Introduction

Here is everything you need to setup developing for the add-on.

## Architecture

The Asterisk add-on is a docker container for Home Assistant that set's up a Asterisk server and configures it to use with the card.

It does some extra things besides just running Asterisk.

- Ingress setup
- Preconfigured WebRTC endpoints
- Preconfigured AMI user
- Preinstalled modules like google tts
- And more...

```mermaid
flowchart TD
    A[Asterisk Add-on] <-->|"Websocket (ingress)"| B[SIP Core]
    A <-->|WebRTC| B
    A <-->|AMI| C[Asterisk Integration]
    A -->|API| D[Home Assistant]
```

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

## Running locally with Docker

The repository contains a `docker-compose.yml` file that can be used to locally build and run a standalone version of the add-on.

- Copy the example `json` configuration file and set your own values:
  ```bash
   cp asterisk/config.json.example asterisk/config.json
  ```
- Build a Docker image:
  ```bash
  docker-compose build asterisk
  ```
- Run the built image:
  ```bash
  docker-compose up asterisk
  ```
- If you want to easily edit and test the scripts without having to rebuild the whole image, you can mount the local files from the project directory in the container. 
See the `volumes:` section for examples.