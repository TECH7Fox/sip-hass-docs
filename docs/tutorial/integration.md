---
sidebar_position: 4
---

# Asterisk Integration (optional)

:::info

The integration is optional, and is not required for the card or add-on.  
If you don't want to use it, you can skip this section for now.

:::

With the integration you can build automations with your SIP devices as triggers. And call services like `hangup` and `originate`.

## Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="install-method">
  <TabItem value="hacs" label="HACS" default>

:::info Quick Install
You can also click the badge to directly add the Asterisk integration to HACS!

[![HACS Repository](https://img.shields.io/badge/HACS_Repository-%2341BDF5.svg?style=for-the-badge&logo=homeassistant&logoColor=white)](https://my.home-assistant.io/redirect/hacs_repository/?owner=TECH7Fox&repository=asterisk-hass-integration&category=integration)
:::

    <ol>
      <li>Go to <b>HACS</b></li>
      <li>Click on the 3 points in the upper right corner and click on <code>Custom repositories</code></li>
      <li>Paste <code>https://github.com/TECH7Fox/Asterisk-integration/</code> into <code>Add custom repository URL</code> and by category choose <b>Integration</b></li>
      <li>Click on add and check if the repository is there.</li>
      <li>You should now see Asterisk integration. Click <b>INSTALL</b>.</li>
      <li>Restart Home Assistant.</li>
      <li>Go to integrations and find <b>Asterisk</b>.</li>
      <li>Fill in the fields and click <b>add</b>.</li>
      <li>Check if the card loads succesfully.</li>
    </ol>
  </TabItem>
  <TabItem value="manual" label="Manual">
    Download the latest version, set it in <code>/custom_components/</code> and add it to resources.
  </TabItem>
</Tabs>

## Configuration

When restarted, you can configure the integration.

```yaml title="Integration options"
host: localhost
port: 5038
username: admin
password: my-password # The password you set in the add-on configuration
```

After a couple seconds, click on `devices` and you should see the server, and the **PJSIP** and **SIP devices**.

That's it! Now you got sensors and services you can use for automations.
