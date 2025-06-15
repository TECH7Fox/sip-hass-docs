---
sidebar_position: 6
---

# First Call

Now that you have everything set up, it's time to test it out and make your first call.

## Make a Call

1. Go to your Home Assitant dashboard with the contacts card added.
2. Make sure that the other device (the one you want to call) is online and registered with the SIP Core.
3. Click on the *CALL* contact you want to call in the **Contacts Card**.
4. If everything is set up correctly, you should hear a ringing sound on the other device.
5. Answer the call on the other device to start the conversation.
6. To end the call, click the *HANG UP* button on the card.

## Troubleshooting

If you encounter any issues, here are some common troubleshooting steps:

- **Check browser logs**: Look at the browser console (<kbd>F12</kbd>) for any errors related to SIP Core or the cards.
- **Check Asterisk logs**: Check the Asterisk logs in the add-on's log section for any errors or warnings.
- **Verify configuration**: Ensure that your `sip-config.json` file is correctly set up with the right usernames, extensions, and passwords.
- **Restart Home Assistant**: Sometimes a simple restart can resolve issues.

If you continue to have problems, please [report an issue](https://github.com/TECH7Fox/sip-hass-card/issues) or ask for help in the [Discord server](https://discordapp.com/invite/qxnDtHbwuD).
