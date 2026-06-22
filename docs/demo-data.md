---
id: demo-data
title: Demo Data
sidebar_position: 5
---

# Demo Data

On first boot the stack seeds **10,000 realistic log records** across 5 microservices so you
can explore immediately — no need to wire up an app first.

| Service | Records | Severity mix |
|---|---|---|
| `api-gateway` | ~2,000 | 70% INFO · 15% WARN · 15% ERROR |
| `auth-service` | ~2,000 | 70% INFO · 15% WARN · 15% ERROR |
| `payment-service` | ~2,000 | 70% INFO · 15% WARN · 15% ERROR |
| `notification-service` | ~2,000 | 70% INFO · 15% WARN · 15% ERROR |
| `inventory-service` | ~2,000 | 70% INFO · 15% WARN · 15% ERROR |

The demo records live in the `demo_otel_db.otel_logs` table, separate from your live
`otel_db` data, so you can explore the UI's search and filtering against a realistic dataset
from the moment the stack comes up.
