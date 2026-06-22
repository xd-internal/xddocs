---
id: installation
title: Installation
sidebar_position: 2
---

# Installation

## System requirements

| Component | Minimum | Recommended |
|---|---|---|
| CPU | 2 cores | 4+ cores |
| RAM | 4 GB | 8 GB |
| Disk | 20 GB | 100 GB |
| Docker | 20.10+ | latest |
| OS | Ubuntu 20.04+ / macOS 12+ | Ubuntu 22.04 |

:::tip Low RAM?
The installer automatically detects available memory and applies reduced JVM settings for
machines with less than 8 GB RAM.
:::

## Prerequisites

| OS | Requirements |
|---|---|
| **Linux** | Nothing — Docker is auto-installed if missing |
| **macOS** | Docker Desktop running |

## Install

Run the one-line installer:

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/xplurdata/oss-stack/main/install.sh)"
```

### What happens during install

```text
  ╔═══════════════════════════════════════════════════════╗
  ║          XplurData Installer v1.0.0                ║
  ╚═══════════════════════════════════════════════════════╝

  ▶  Checking system requirements
  ✓  CPU: 8 cores          ✓  RAM: 16 GB
  ✓  Disk: 120 GB free     ✓  Ports: 80, 4318 available

  ▶  Pulling Docker images
  ✓  All images downloaded

  ▶  Starting containers
  ℹ  This may take up to 10 minutes on first run while Doris initializes.
  ✓  All containers started

  ▶  Waiting for services
  ✓  Doris Frontend         healthy (67s)
  ✓  Doris Backend          healthy (102s)
  ✓  Application            healthy (142s)
  ✓  Login endpoint         ready (198s)
  ✓  OTel Collector         running

  ╔═══════════════════════════════════════════════════════╗
  ║   ✓  Installation Complete!                           ║
  ║      Happy Xpluring your data!                        ║
  ╚═══════════════════════════════════════════════════════╝
```

## Access

After install (~3–5 minutes on first boot):

| Service | URL | Credentials |
|---|---|---|
| Web UI | `http://<your-ip>` | `admin` / `admin` |
| OTLP HTTP | `http://<your-ip>:4318` | — |

:::warning Change the default password
The Web UI ships with `admin` / `admin`. Change it immediately after first login.
:::
