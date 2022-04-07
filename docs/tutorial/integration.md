---
sidebar_position: 4
---

# Integration

:::info

The integration is optional, and is not required for the card or add-on.

:::

With the integration you can build automations with your SIP devices as triggers. And call services like `hangup` and `originate`.

## Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="install-method">
  <TabItem value="hacs" label="HACS" default>
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
port: 8089
username: admin
password: my-password # The password you set in the add-on configuration
```

After a couple seconds, click on `devices` and you should see the server, and one or more **PJSIP devices**.

That's it! Now you got sensors and services you can use for automations.