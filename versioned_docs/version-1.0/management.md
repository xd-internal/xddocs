---
id: management
title: Management
sidebar_position: 4
---

# Management

The stack installs a helper script at `~/xplurdata/manage.sh` for day-to-day operations.

## Commands

```bash
~/xplurdata/manage.sh status       # container status
~/xplurdata/manage.sh logs         # follow app logs
~/xplurdata/manage.sh logs otel-collector
~/xplurdata/manage.sh logs doris-fe
~/xplurdata/manage.sh logs doris-be
~/xplurdata/manage.sh update       # pull latest images
~/xplurdata/manage.sh restart      # restart all containers
~/xplurdata/manage.sh stop         # stop all containers (preserves data)
~/xplurdata/manage.sh uninstall    # remove everything
```

| Command | What it does |
|---|---|
| `status` | Show the status of all containers |
| `logs [service]` | Follow logs (app by default, or a named service) |
| `update` | Pull the latest images |
| `restart` | Restart all containers |
| `stop` | Stop all containers — **data is preserved** |
| `uninstall` | Remove everything |

:::caution
`uninstall` removes all containers. Combined with a volume wipe it deletes your stored
telemetry — see [Troubleshooting → Full reset](./troubleshooting#full-reset-wipes-all-data).
:::
