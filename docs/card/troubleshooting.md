---
sidebar_position: 4
title: Troubleshooting
tags:
    - Troubleshooting
    - Card
---

Here are the most common errors for the card.

### Cannot read properties... `extension`
This is because it couldn't find any extension with the same person as the one logged in.

Make sure you have a extension with the person you are logged in as.

### Error 9006
Your certificate is not accepted. Check if SSL is working by going to `https://<ASTERISK-IP>:8089/ws`. It should say `Upgrade Required`.

### Requested device not found
The browser can't find your microphone or camera if you enabled video. Make sure that the microphone and camera are set in your browser settings.

### Requested device not available in secure envirement
Either the browser can't find your microphone or camera, or you haven't setup SSL properly.

### Cannot reach properties of undefined (reading 'foreach')
The card tries to loop trough a array that doesn't exist. If you don't use a option like `custom`, `dtmfs` or `buttons` make sure you still configure it.

Example for buttons: `buttons: []`
