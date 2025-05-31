

# Custom Popup

This guide will help you create a custom popup that can be used by SIP Core. This popup will interact with the SIP Core instance and provide basic functionality such as answering & ending calls.

:::warning
For this guide we expect you to have **sip-hass-card** already installed, configured and running in your Home Assistant instance. If you haven't done that yet, please refer to the [Installation Guide](../installation.md) to set it up.
:::

## Step 1: Create the Popup
Create a new file named `sip-example-popup.js` in your project directory. This file will contain the code for your standalone popup. Here is a basic example:

<details>
<summary>Example Popup</summary>

This example shows how to create a standalone popup that can be used by SIP Core. It includes basic functionality to interact with the SIP Core instance.

```js
import { LitElement, html, css } from "https://esm.run/lit-html@1";


class ExampleCard extends LitElement {
    sipCore;

    static styles = css`
        ha-card {
            padding: 16px;
            font-family: Arial, sans-serif;
        }

        .status {
            margin-bottom: 16px;
        }

        .buttons {
            display: flex;
            gap: 8px;
        }

        button {
            padding: 8px 16px;
            font-size: 14px;
            cursor: pointer;
        }
    `;

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener("sipcore-update", this.updateHandler);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener("sipcore-update", this.updateHandler);
    }

    updateHandler = () => {
        if (!this.sipCore) {
            this.sipCore = window.sipCore;
        }
        this.requestUpdate();
    };

    setConfig(config) {
        // Validate the config here
    }

    render() {
        if (!this.sipCore) {
            return html`<div>Loading...</div>`;
        }

        return html`
            <ha-card>
                <div class="status">
                    <strong>Call State:</strong> ${this.sipCore.callState}<br />
                    <strong>Call Duration:</strong> ${this.sipCore.callDuration}<br />
                    <strong>Remote Name:</strong> ${this.sipCore.remoteName || "N/A"}<br />
                </div>
                <div class="buttons">
                    <button @click=${() => this.sipCore.answerCall()}>Answer Call</button>
                    <button @click=${() => this.sipCore.endCall()}>End Call</button>
                    <button @click=${() => this.sipCore.startCall("8001")}>Call Extension 8001</button>
                </div>
            </ha-card>
        `;
    }
}

customElements.define("sip-example-card", ExampleCard);
window.customCards = window.customCards || [];
window.customCards.push({
    type: "sip-example-card",
    name: "SIP Example Card",
    preview: true,
    description: "SIP Example Card",
});
```
</details>

## Step 2: Load the Popup in Home Assistant

To import this card into Home Assistant, copy the file to your `config/www` directory of your Home Assistant installation. Then, go to settings > dashboards, click on the three dots in the top right corner, and select "Resources". Click on "Add Resource" and enter the path to your popup file, like `/local/sip-example-popup.js`.
Make sure to set the resource type to "JavaScript Module", and then click "Create".

## Step 3: Configure SIP Core to Use the Popup Element

To use your custom popup, you need to configure SIP Core to recognize it. Open your `sip-config.json` file and set the following configuration:

```json
{
    "popup_override_component": "sip-example-popup",
    "popup_config": {},
    ... rest of your configuration ...
}
```

This tells SIP Core to use your custom popup component instead of the default one.

Now after saving the configuration and reloading with shift+ctrl+r, you should be able to see your custom popup in action when you click on the call button in the toolbar or when a call is received.
If not, make sure to check the browser console (F12) for any errors.

To share your card with others, you can upload it to a Github repository and use [HACS](https://www.hacs.xyz/docs/publish/plugin/) to make it available for others to install and update easily.

And please share your popup in our [Discord server](https://discordapp.com/invite/qxnDtHbwuD) or on the [Home Assistant Forum](https://community.home-assistant.io/). Would love to see your creations!
