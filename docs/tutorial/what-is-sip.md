---
sidebar_position: 2
---

# What is SIP?

Before diving into the setup, let's understand what SIP is and why it's useful for your Home Assistant setup.

## Session Initiation Protocol (SIP)

**SIP** (Session Initiation Protocol) is a communication protocol used for initiating, maintaining, and terminating real-time communication sessions. These sessions can include:

- **Voice calls** (like traditional phone calls)
- **Video calls** (like video conferencing)
- **Instant messaging** and presence information

Think of SIP as the "language" that devices use to establish and manage calls over IP networks (the internet or your local network).

## Why SIP in Home Assistant?

SIP brings powerful communication capabilities to your smart home:

### 🔔 **Doorbell Integration**
- Connect SIP-enabled doorbells and intercoms
- Receive calls when someone rings your doorbell
- Answer calls directly from your Home Assistant dashboard
- View video feeds from door cameras

### 📞 **Internal Communication**
- Set up an internal "phone system" in your home
- Call between different rooms or devices
- Create a whole-home intercom system

### 🏠 **Smart Home Automation**
- Trigger automations when calls are received or made
- Integrate call states with other smart home devices
- Use voice announcements for notifications

## Key Concepts

### PBX (Private Branch Exchange)
A **PBX** is like a mini phone system for your home or business. It manages all the SIP devices and routes calls between them. In SIP-HASS, we use **Asterisk** as our PBX software.

### WebRTC
**WebRTC** (Web Real-Time Communication) allows voice and video calls directly in your web browser. This is what makes it possible to make calls from your Home Assistant dashboard without installing special software.

### SIP Endpoints
An **endpoint** is any device that can make or receive SIP calls, such as:
- SIP doorbells
- IP phones  
- Software clients (like apps)
- The SIP cards in Home Assistant

## How SIP-HASS Works

```mermaid
flowchart LR
    A[SIP Doorbell] <--> B[Asterisk PBX]
    C[IP Phone] <--> B
    B <--> D[SIP Core]
    D --> E[Home Assistant Dashboard]
    D --> F[Mobile App]
```

1. **SIP devices** (like doorbells) connect to the **Asterisk PBX**
2. The **SIP Core** in Home Assistant communicates with Asterisk
3. You can make and receive calls through **cards** on your dashboard
4. **Automations** can respond to call events

## Real-World Example

Imagine you have a SIP doorbell at your front door:

1. **Someone rings the doorbell** → The doorbell sends a SIP call to Asterisk
2. **Asterisk notifies SIP Core** → Home Assistant knows there's an incoming call
3. **Call popup appears** → You see who's at the door on your dashboard
4. **You answer the call** → You can talk to the visitor and see video (if supported)
5. **Automation triggers** → Maybe turn on porch lights or unlock the door

This all happens using standard SIP protocols, making it compatible with a wide range of devices from different manufacturers.

---

Now that you understand what SIP is and how it fits into your Home Assistant setup, let's move on to installing the components you'll need!