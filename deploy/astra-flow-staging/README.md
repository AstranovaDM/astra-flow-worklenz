# Astra Flow staging compose overlay

Files-only staging package for Astra Flow. **Do not deploy from the agent environment.** Operators apply this overlay on a designated staging host.

## What it does

Extends the repo-root `docker-compose.yml` with:

- Prebuilt service images from the base compose (no rebuild required for a stock stack)
- Per-service `mem_limit` / `cpus` caps
- `restart: unless-stopped` on long-running services
- `json-file` logging with `max-size: 10m` and `max-file: 3`
- Named volumes for Postgres (`astra_flow_postgres_data`) and object storage (`astra_flow_seaweedfs_data`)
- Nginx (proxy) bound to `127.0.0.1:${FLOW_PROXY_PORT:?}` — host and port are TBD by the operator

## Prerequisites

- Docker Compose v2
- A filled `.env` based on `.env.example` (DB password, S3 secret, domain, etc.)
- `FLOW_PROXY_PORT` exported (example: `18080`)

## Start

```bash
cd /path/to/repo
cp .env.example .env   # if needed; edit secrets
export FLOW_PROXY_PORT=18080
docker compose -f docker-compose.yml -f deploy/astra-flow-staging/docker-compose.astra-flow.yml up -d
```

App via proxy: `http://127.0.0.1:${FLOW_PROXY_PORT}/`

## Stop

```bash
docker compose -f docker-compose.yml -f deploy/astra-flow-staging/docker-compose.astra-flow.yml down
```

Volumes are kept by default. See `ROLLBACK.md` for rollback and volume reset.

## Help / support placeholders

Product help links point at https://astraconnect.io placeholders (docs, changelog, community, privacy, terms, support email).
