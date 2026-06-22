---
id: architecture
title: Architecture
sidebar_position: 3
---

# Architecture

XplurData runs as four Docker containers working together: the OpenTelemetry
Collector ingests telemetry over OTLP/HTTP, Apache Doris (Frontend + Backend) stores and
indexes it, and the Application serves the web UI for search and exploration.

![XplurData architecture](/img/architecture.png)

## Databases

| Database | Tables | Purpose |
|---|---|---|
| `otel_db` | `otel_logs`, `otel_traces`, `otel_metrics` | Live telemetry from the OTel Collector |
| `demo_otel_db` | `otel_logs` | Pre-seeded demo data (10,000 records) |

## The four containers

| Container | Role |
|---|---|
| **OTel Collector** | Receives logs via OTLP/HTTP on port `4318` and forwards them to Doris |
| **Doris Frontend (FE)** | Query coordination, metadata, SQL endpoint |
| **Doris Backend (BE)** | Columnar storage and query execution |
| **Application** | Web UI (port `80`) for full-text search, filtering, and real-time querying |
