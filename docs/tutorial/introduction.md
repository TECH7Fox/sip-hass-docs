---
sidebar_position: 1
---

# Introduction

In this tutorial we will setup the card, add-on and integration and connect everything together.

## What you'll need

For the entire SIP-HASS system you'll need:

- Latest Home Assistant:
  - For the add-on you need **Home Assistant Supervisor**. Otherwise use your own PBX like FreePBX.
- Person entity for every device you want to call to/with.
  - You can share a person if you never gonna use them both at once, for example your desktop and phone.
  - HA Dashboards / 24-7 tablets also need a person.
  - Make sure you login with that person, and not with a seperate user.