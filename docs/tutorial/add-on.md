---
sidebar_position: 2
---

# Add-on

Documents are **groups of pages** connected through:

- a **sidebar**
- **previous/next navigation**
- **versioning**

## Add the Repository

First install the add-on repository.

- Go to add-ons.
- Click on repositories.
- Add a repository and set the url: `https://github.com/TECH7Fox/asterisk-hass-addons`.

Now the add-on should show up under Asterisk. 

## Install the Add-on

Go to the Asterisk add-on, and click install. This can take around 1-3 minutes.

When the add-on is installed, we will need to configure it.

For this tutorial, we will set `auto_generate` on.
Set a secure password for the AMI and generated extensions. We will need these later for the card and integration.

```yaml title="add-on configuration"
auto_generate: true,
ami_password: 'secret',
auto_generated_password: 'secret',

WIP
```

## Start the add-on

Now we can start the add-on. After 1-3 minutes you can see the config files for Asterisk.