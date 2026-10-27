# Astra Flow staging rollback

## Soft rollback (containers only)

Stop the overlay stack without deleting named volumes:

```bash
export FLOW_PROXY_PORT=18080   # same port used at start
docker compose -f docker-compose.yml -f deploy/astra-flow-staging/docker-compose.astra-flow.yml down
```

Restart the previous known-good compose revision (or the base `docker-compose.yml` alone) when ready.

## Image pin rollback

If a newer image tag was pulled and misbehaves, pin services back to the last known tag in `.env` / compose (example: `3.3.1`), then:

```bash
docker compose -f docker-compose.yml -f deploy/astra-flow-staging/docker-compose.astra-flow.yml pull
docker compose -f docker-compose.yml -f deploy/astra-flow-staging/docker-compose.astra-flow.yml up -d
```

## Hard reset (destroys staging data)

Only on staging. Removes containers **and** Astra Flow named volumes (Postgres + object storage):

```bash
export FLOW_PROXY_PORT=18080
docker compose -f docker-compose.yml -f deploy/astra-flow-staging/docker-compose.astra-flow.yml down -v
docker volume rm astra_flow_postgres_data astra_flow_seaweedfs_data 2>/dev/null || true
```

Recreate with `up -d` afterward; the database will re-run init scripts.

## Proxy port conflicts

If bind fails on `127.0.0.1:${FLOW_PROXY_PORT}`, choose another free port and re-export `FLOW_PROXY_PORT` before `up -d`.
