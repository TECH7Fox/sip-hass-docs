---
sidebar_position: 3
title: Card
tags:
    - Frontend
    - SIP
    - Card
---

Hey, want to help development with the card? Awesome!

This page contains everything you need to develop for the SIP card. Thank you for your help!

## About

The SIP card connect's to a PBX using the **JSSIP** library. The card is build using typescript.

## How to Build

You can build the card locally in order to test it in a Home Assistant setup.

- Clone the repository
- Install packages
```bash
npm install
```
- Build the card
```bash
npm run build
```

After a couple seconds, you can find the file in the `dist` folder.

- Copy to Home Assistant
- Add to resources

That's it! Now you can try it out.

:::caution

 Make sure to refresh your cache! This doesn't always work like expected.

:::
