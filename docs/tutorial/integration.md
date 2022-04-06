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
    Add the repo, and install it.
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