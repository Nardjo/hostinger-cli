---
name: hostinger-cli
description: "Manage Hostinger via CLI — vps, dns, domains, hosting, mail, billing, ecommerce, reach, agency-hosting. Use when the user mentions Hostinger, VPS power/restart, DNS records, domains portfolio, hPanel API, hosting websites, or Hostinger mail/billing."
category: devtools
---

# hostinger-cli

Agent-ready CLI for the Hostinger REST API (OpenAPI). Binary: `hostinger-cli`.

## When To Use This Skill

Use the hostinger-cli skill when you need to:

- List, inspect, start/stop/restart Hostinger VPS instances
- Manage VPS firewall, snapshots, backups, docker projects, or SSH public keys
- Read or update DNS zone records and snapshots
- List domains, WHOIS, or forwarding rules
- Inspect hosting websites, databases, PHP/Node, cron, cache, WordPress installs
- Manage Hostinger mailboxes / forwarders
- Check billing catalog, subscriptions, or payment methods
- Automate Hostinger ops with stable `--json` output

## Capabilities

- **VPS ops**: list VMs, details, start/stop/restart, root/panel password, hostname, recreate, recovery mode, metrics
- **VPS security/data**: firewall CRUD + activate/sync, snapshots, backups restore, public keys, post-install scripts
- **VPS docker manager**: projects list/create/start/stop/restart/logs/containers
- **DNS**: get/update/validate/reset records, snapshots restore
- **Domains / hosting / mail / billing / ecommerce / reach / agency-hosting**
- **Auth**: token file at `~/.config/tokens/hostinger-cli.txt`
- **Automation**: always prefer `--json` for agent parsing

## Setup

```bash
npx api2cli install Nardjo/hostinger-cli
# or local
npx api2cli bundle hostinger && npx api2cli link hostinger
hostinger-cli auth set "$HOSTINGER_API_TOKEN"
hostinger-cli auth test
```

Token sources (never print values):

- Runtime: `~/.config/tokens/hostinger-cli.txt`
- Optional env backup: `/opt/data/secrets/hostinger.env` with `HOSTINGER_API_TOKEN=...`

## Working Rules

1. Always pass `--json` for agent-driven calls.
2. Discover flags with `hostinger-cli <resource> <action> --help` — do not guess body shapes.
3. Prefer read-only commands first (`get-*`, `list`-style).
4. Destructive power actions (`stop`, `recreate`, `delete-*`, `restore-*`) require explicit user confirmation.
5. Complex bodies: use `--json-body '<json>'` merged over simple flags.
6. Path params are positional arguments (e.g. `<virtualMachineId>`, `<domain>`).

## Common Commands

### Auth

```bash
hostinger-cli auth set "<token>"
hostinger-cli auth test
hostinger-cli auth show
```

### VPS

```bash
hostinger-cli vps get-virtual-machines --json
hostinger-cli vps get-virtual-machine-details <virtualMachineId> --json
hostinger-cli vps restart-virtual-machine <virtualMachineId> --json
hostinger-cli vps start-virtual-machine <virtualMachineId> --json
hostinger-cli vps stop-virtual-machine <virtualMachineId> --json
hostinger-cli vps get-firewall-list --json
hostinger-cli vps get-backups <virtualMachineId> --json
hostinger-cli vps get-snapshot <virtualMachineId> --json
hostinger-cli vps get-templates --json
hostinger-cli vps get-metrics <virtualMachineId> --json
```

### DNS

```bash
hostinger-cli dns get-dnsrecords <domain> --json
hostinger-cli dns update-dnsrecords <domain> --json-body '[...]' --json
hostinger-cli dns get-dnssnapshot-list <domain> --json
```

### Domains

```bash
hostinger-cli domains --help
hostinger-cli domains get-domain-list --json
```

### Hosting / Mail / Billing

```bash
hostinger-cli hosting --help
hostinger-cli mail --help
hostinger-cli billing --help
```

## Resources

| Resource | Purpose |
|---|---|
| `vps` | Virtual machines and VPS-adjacent APIs (~62 actions) |
| `dns` | DNS zones and snapshots |
| `domains` | Domain portfolio / WHOIS / forwarding |
| `hosting` | Shared/cloud hosting, WP, DB, PHP, Node, cron |
| `mail` | Mailboxes, forwarders, aliases, webhooks |
| `billing` | Catalog, subscriptions, payments |
| `ecommerce` | Stores and channels |
| `reach` | Email marketing contacts/segments |
| `agency-hosting` | Agency reseller hosting |
| `horizons` | Horizons |
| `auth` | Token management |

## Output Format

Success JSON envelope:

```json
{ "ok": true, "data": {}, "meta": {} }
```

Exit codes: `0` ok, `1` API error, `2` usage error.

## Safety

- Never log or display the raw API token.
- Confirm before stop/recreate/delete/restore on production VPS.
- Base URL: `https://developers.hostinger.com`
