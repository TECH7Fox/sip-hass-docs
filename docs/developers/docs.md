---
sidebar_position: 5
title: Docs
tags:
    - Developers
    - Docs
---

Want to contribute to the central **HASS-SIP docs**?

Here is everything you should know if you want to create or change pages here.

## About

The **HASS-SIP docs** website is build using **Docusaurus**, which is a easy to use framework to create a nice-looking website from some markdown files. It can also build the website static, so we can deploy it to **github pages** which is free!

## How to Build

There are 2 ways to work on the docs. We recommend to create a local build to test everything.

### Online

If you only want to make small changes and don't need to test, you can do that directly on Github.

### Local build

If you want to test your work, you can build locally.

- Clone the repository
- Install packages
```bash
npm install
```

- Start docusaurus
```bash
npm start
```

This opens the page, and everytime you save a file it automaticly reloads the page too.

## Styling

The pages are simple markdown files. But if you want to do something fancy, you can also use react.
See the <a href="https://docusaurus.io/docs/markdown-features">docusaurus guides</a> for more info.

For Asterisk `.conf` codeblocks, please use the `editorconfig` language for the code styling. Example:

```editorconfig
``editorconfig title="pjsip_custom.conf"
[context] ; comment
key=value
``
```

If you have some steps that are different for the add-on then a custom PBX like FreePBX, you can add tabs so people don't get confused.
```html title="page.mdx"
<Tabs groupId="pbx">
  <TabItem value="addon" label="Add-on" default>
    For the add-on, simply turn on <code>video_support</code> and restart.
  </TabItem>
  <TabItem value="custom" label="Custom PBX">
    If you have a custom PBX, add <code>video_support=on</code> to your <b>SIP</b> endpoint. If you have something like <b>FreePBX</b>, turn on the <b>video support</b> option.
  </TabItem>
</Tabs>
```
More about tabs info <a href="https://docusaurus.io/docs/markdown-features/tabs">here</a>.