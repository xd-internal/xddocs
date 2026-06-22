---
id: intro
title: Introduction
sidebar_position: 1
slug: /
---

# XplurData

**Self-hosted observability stack — ingest, store and explore your data at scale.**

> One command. Full observability stack. No cloud required.

## What is XplurData?

XplurData is a self-hosted, Docker-based observability platform built for teams who want
full control over their telemetry data — no vendor lock-in, no per-seat pricing, no data
leaving your infrastructure.

| Stage | What it does |
|---|---|
| **Ingest** | Receive logs from any service via OpenTelemetry (OTLP/HTTP) |
| **Store** | Apache Doris — a high-performance analytical database built for logs at scale |
| **Explore** | Web UI with full-text search, filtering, and real-time querying |
| **Deploy** | 4 Docker containers, one install command, runs anywhere |

## Databases

Two databases ship with the stack:

| Database | Tables | Purpose |
|---|---|---|
| `otel_db` | `otel_logs`, `otel_traces`, `otel_metrics` | Live telemetry from the OTel Collector |
| `demo_otel_db` | `otel_logs` | Pre-seeded demo data (10,000 records) |

## Next steps

- [Install the stack](./installation) in one command
- [Send logs](./sending-logs) from your application
- [Explore the demo data](./demo-data) seeded on first boot

---

## Community

| Channel  | Link                                                              |
| -------- | ----------------------------------------------------------------- |
| GitHub   | [github.com/xplurdata/oss-stack](https://github.com/xplurdata/oss-stack) |
| LinkedIn | [linkedin.com/company/xplurdata](https://www.linkedin.com/company/xplurdata) |
| Website  | [xplurdata.com](https://xplurdata.com)                            |

## License

This project is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**.

_Built by Xplurdata · Happy Xpluring your data!_
