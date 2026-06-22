---
id: troubleshooting
title: Troubleshooting
sidebar_position: 6
---

# Troubleshooting

<details>
<summary>Install stopped midway — how to clean up and retry</summary>

Stop and remove any partially-created containers, then re-run the installer:

```bash
~/xplurdata/manage.sh stop 2>/dev/null
cd ~/xplurdata && docker compose down
bash -c "$(curl -fsSL https://raw.githubusercontent.com/xplurdata/oss-stack/main/install.sh)"
```

</details>

<details>
<summary>Stack not starting</summary>

Check container status and follow the logs to find the failing service:

```bash
~/xplurdata/manage.sh status
~/xplurdata/manage.sh logs
```

Most first-boot failures are Doris still initialising — give it up to ~10 minutes on the
first run.

</details>

<details>
<summary>Doris FE fails with "insufficient memory"</summary>

Doris needs enough RAM for its JVM heap. On machines with **less than 8 GB** the installer
applies reduced JVM settings automatically — but if you're still short on memory, free some
up or move to a host that meets the [recommended requirements](./installation#system-requirements)
(8 GB RAM).

```bash
~/xplurdata/manage.sh logs doris-fe
```

</details>

<details>
<summary>No data in <code>otel_db.otel_logs</code></summary>

1. Confirm the OTel Collector is running: `~/xplurdata/manage.sh logs otel-collector`
2. Verify your app points at `http://<your-ip>:4318` over **OTLP/HTTP**.
3. Run the [`telemetrygen` test](./sending-logs#quick-test-with-telemetrygen) to isolate
   whether the problem is the pipeline or your app.

Remember the pre-seeded demo data lives in `demo_otel_db.otel_logs`, not `otel_db`.

</details>

<details>
<summary>App not ready after 5 minutes</summary>

First boot can take longer while Doris initialises. Watch the application logs:

```bash
~/xplurdata/manage.sh logs
```

If it's still not ready well past 5 minutes, check the Doris backend:
`~/xplurdata/manage.sh logs doris-be`.

</details>

<details>
<summary>Port 80 or 4318 already in use</summary>

Find and stop whatever is holding the port:

```bash
sudo lsof -i :80
sudo lsof -i :4318
```

Free the port (or reconfigure the conflicting service), then restart:
`~/xplurdata/manage.sh restart`.

</details>

<details>
<summary>macOS: <code>process.lock AccessDeniedException</code></summary>

This is typically a stale lock from an interrupted run on Docker Desktop. Stop the stack,
remove the volume's lock state, and restart:

```bash
~/xplurdata/manage.sh stop
~/xplurdata/manage.sh restart
```

Ensure Docker Desktop is running and has sufficient resources allocated
(Settings → Resources).

</details>

<details>
<summary id="full-reset-wipes-all-data">Full reset (wipes all data)</summary>

:::danger
This permanently deletes all stored telemetry.
:::

```bash
~/xplurdata/manage.sh uninstall
cd ~/xplurdata && docker compose down -v   # -v removes the data volumes
```

Then re-run the installer for a clean start.

</details>
