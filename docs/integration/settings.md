---
sidebar_position: 2
title: Settings
---

Here are all the options for the Asterisk integration.


<details>
<summary>Configuration Example</summary>

```yaml title="Integration options"
host: localhost
port: 5038
username: admin
password: my-password
```

</details>

### Option: `host`
The address it connects to.

### Option: `port`
The port for the **AMI**. Default is `5038`.

### Option: `username`
Username of the AMI user. For the add-on it's always `admin`.

### Option: `password`
Password for the AMI user. For the add-on it's the `ami_password` option.