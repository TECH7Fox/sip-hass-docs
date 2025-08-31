---
sidebar_position: 5
title: VPN Guide (WireGuard)
tags:
    - VPN
    - WireGuard
    - Network
    - NAT
    - RTP
---

This guide helps you configure the Asterisk add-on to work properly with VoIP calls over a WireGuard VPN connection. Without proper configuration, you may experience one-way audio or dropped calls when connecting remotely.

## Requirements

For this guide you will need the following:

- Working Asterisk Add-on
- WireGuard Add-on installed and configured
- Basic understanding of network configuration
- Administrative access to Home Assistant

:::caution

This configuration involves modifying network settings and iptables rules. Make sure you understand the changes before applying them, and have a backup of your current configuration.

:::

## Asterisk Add-On Configuration

### Transport Configuration

In the `pjsip_custom.conf` file, add the transport configuration:

```editorconfig title="pjsip_custom.conf"
[transport-udp]
type=transport
protocol=udp
bind=0.0.0.0:5060  ; Binds to all IP addresses on port 5060
; --- Network and NAT Configuration ---
; This is the most critical part for your use case.
; Add your local LAN and the VPN subnet here.
; Asterisk will treat any traffic from these networks as internal.
local_net=192.168.1.0/24   ; Your main LAN subnet - CHANGE THIS IF YOU USE A DIFFERENT NETWORK
local_net=172.27.66.0/24   ; The VPN clients virtual addresses subnet - ASSUMING YOU'RE USING THE DEFAULT WIREGUARD ADD-ON SETTINGS
```

:::warning

Make sure to update the `local_net` values to match your actual network configuration:
- Replace `192.168.1.0/24` with your actual LAN subnet
- Verify the VPN subnet matches your WireGuard configuration

:::

### Extension Template Configuration

In the same `pjsip_custom.conf` file, modify the extension template section:

```editorconfig title="pjsip_custom.conf"
[sipjs-ext-endpoint](!)   ; <- This is the template header, it should already exist and you should add the following lines under it
rtp_symmetric=yes
force_rport=yes
rewrite_contact=yes
direct_media=no
```

These settings ensure proper NAT traversal and RTP handling for VPN connections.

## WireGuard Add-On Configuration

Add the following configuration to the "Server" section in the WireGuard add-on config page:

```yaml title="WireGuard Add-on Server Configuration"
post_up: >
  iptables -A FORWARD -i %i -j ACCEPT ;  
  iptables -A FORWARD -o %i -j ACCEPT ;
  iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE ;  
  iptables -t nat -I POSTROUTING 1 -p udp -s 172.30.32.1 -d  172.27.66.0/24 --sport 10000:20000 -j SNAT --to-source <YOUR HOME ASSISTANT IP ADDRESS HERE> ; 
  iptables -t nat -I POSTROUTING 1 -p udp -s 172.27.66.0/24 -d <YOUR HOME ASSISTANT IP ADDRESS HERE> --dport 10000:20000 -j RETURN  
post_down: >
  iptables -D FORWARD -i %i -j ACCEPT ;  
  iptables -D FORWARD -o %i -j ACCEPT ;
  iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE ;  
  iptables -t nat -D POSTROUTING 1 -p udp -s 172.30.32.1 -d  172.27.66.0/24 --sport 10000:20000 -j SNAT --to-source <YOUR HOME ASSISTANT IP ADDRESS HERE> ; 
  iptables -t nat -D POSTROUTING 1 -p udp -s 172.27.66.0/24 -d <YOUR HOME ASSISTANT IP ADDRESS HERE> --dport 10000:20000 -j RETURN  
```

:::warning

**Important Notes:**
1. Replace `<YOUR HOME ASSISTANT IP ADDRESS HERE>` with your actual Home Assistant server IP address in **both** the `post_up` and `post_down` sections
2. After saving this configuration, the UI will wrap the text but that's expected behavior
3. These iptables rules handle RTP traffic routing between VPN clients and the Asterisk server

:::

## Home Assistant Configuration

### Shell Command

Add the following to your `configuration.yaml` file:

```yaml title="configuration.yaml"
shell_command:
  add_vpn_rtp_route: ip route add 172.27.66.0/24 via 172.30.33.3
```

This command adds a static route for VPN traffic to ensure proper routing of RTP packets.

### Startup Automation

Create the following automation in the Home Assistant UI to ensure the route is added after each restart:

```yaml title="Home Assistant Automation"
alias: Add static routes on Home Assistant startup
description: "Add the necessary static route for VOIP calls to work over VPN after a HA restart"
triggers:
  - event: start
    trigger: homeassistant
conditions: []
actions:
  - action: shell_command.add_vpn_rtp_route
    data: {}
mode: single
```

### Restart Home Assistant

After making these changes to `configuration.yaml`, restart Home Assistant to apply the new shell command configuration.

## Troubleshooting

If you continue to experience issues:

1. **Verify network subnets** - Ensure all IP ranges in the configuration match your actual network setup
2. **Check WireGuard logs** - Look for any iptables errors in the WireGuard add-on logs
3. **Test connectivity** - Verify that VPN clients can reach the Home Assistant IP address
4. **Monitor Asterisk logs** - Check for NAT-related warnings or RTP timeout messages

## Summary

After completing this configuration, you should have fully functional audio and video for VoIP calls even when connecting remotely over the WireGuard VPN. The configuration handles the complex NAT traversal and routing requirements that are necessary for real-time media streams.