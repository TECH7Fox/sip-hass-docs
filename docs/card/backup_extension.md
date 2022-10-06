---
sidebar_position: 4
title: Backup Extension
---

When the card didn't find a configured extension for the current person, the card will check if there is a backup extension set to use that.
This can be useful for situations where there isn't a person for the dashboard, like mounted tablets. You will need to create a extra wss extension for it.

## Usage

```yaml title="Card options"
...
backup_name: Tablet
backup_extension: '200'
backup_secret: 1234
...
```