# hostinger-cli

Agent-ready CLI for the [Hostinger API](https://developers.hostinger.com/). Generated with [api2cli.dev](https://api2cli.dev) from the official OpenAPI spec.

Covers **VPS**, **DNS**, **domains**, **hosting** (incl. WordPress/PHP/Node/DB), **mail**, **billing**, **ecommerce**, **reach**, **agency-hosting**, and **horizons** — with a JSON envelope (`{ ok, data, meta }`), retries, and an AgentSkill for Claude Code / Cursor / Hermes / Codex.

## Install

```bash
npx api2cli install Nardjo/hostinger-cli
```

Clones the repo, builds the CLI, links it to your PATH, and installs the AgentSkill.

### AgentSkill only

```bash
npx skills add Nardjo/hostinger-cli
```

## Auth

1. Create an API token in [hPanel → API](https://hpanel.hostinger.com/) (developer / API tokens).
2. Save it:

```bash
hostinger-cli auth set "YOUR_HOSTINGER_API_TOKEN"
hostinger-cli auth test
```

Token is stored at `~/.config/tokens/hostinger-cli.txt` (mode 600).

## Quickstart

```bash
# List VPS instances
hostinger-cli vps get-virtual-machines --json

# VPS details / power
hostinger-cli vps get-virtual-machine-details <virtualMachineId> --json
hostinger-cli vps restart-virtual-machine <virtualMachineId> --json

# DNS
hostinger-cli dns get-dnsrecords example.com --json

# Domains portfolio
hostinger-cli domains get-domain-list --json

# Billing catalog / subscriptions
hostinger-cli billing --help
```

Complex request bodies: pass flags when available, or merge raw JSON:

```bash
hostinger-cli vps create-new-firewall --name "web" --json
hostinger-cli dns update-dnsrecords example.com --json-body '[{"type":"A","name":"@","content":"1.2.3.4","ttl":300}]' --json
```

## Resources

| Resource | Scope |
|---|---|
| `vps` | Virtual machines, firewall, snapshots, backups, docker projects, SSH keys, templates, metrics |
| `dns` | Zone records, snapshots, validate/reset/restore |
| `domains` | Portfolio, WHOIS, forwarding |
| `hosting` | Websites, databases, PHP/Node, cron, cache, WordPress plugins/themes/installs |
| `mail` | Mailboxes, forwarders, aliases, autoreplies, webhooks, logs |
| `billing` | Catalog, subscriptions, payment methods, orders |
| `ecommerce` | Stores, sales channels |
| `reach` | Contacts, segments (email marketing) |
| `agency-hosting` | Agency orders, websites, domains |
| `horizons` | Horizons endpoints |
| `auth` | set, show, remove, test |

Run `hostinger-cli --help`, `hostinger-cli <resource> --help`, or `hostinger-cli <resource> <action> --help` for full flags.

## Global flags

`--json`, `--format <text|json|csv|yaml>`, `--verbose`, `--no-color`, `--no-header`

Exit codes: `0` success, `1` API error, `2` usage error.

## Base URL

`https://developers.hostinger.com` (official OpenAPI server).

## License

MIT
