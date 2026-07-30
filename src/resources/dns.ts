/** Auto-generated from Hostinger OpenAPI — resource `dns` */
import { Command } from "commander";
import { client } from "../lib/client.js";
import { output } from "../lib/output.js";
import { handleError } from "../lib/errors.js";

type Opts = Record<string, any>;

export const dnsResource = new Command("dns")
  .description("Hostinger dns API");

// DELETE /api/dns/v1/zones/{domain} — DNS_deleteDNSRecordsV1
dnsResource
  .command("delete-dnsrecords")
  .description("Delete DNS records")
  .argument("<domain>", "domain")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, opts: Opts) => {
    try {
      let path = "/api/dns/v1/zones/{domain}";
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.jsonBody) {
        const raw = typeof opts.jsonBody === "string" ? JSON.parse(opts.jsonBody) : opts.jsonBody;
        Object.assign(body, raw);
      }
      const q = new URLSearchParams(params).toString();
      const full = q ? `${path}?${q}` : path;
      const data = Object.keys(body).length
        ? await client.delete(full, body)
        : await client.delete(full);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/dns/v1/zones/{domain} — DNS_getDNSRecordsV1
dnsResource
  .command("get-dnsrecords")
  .description("Get DNS records")
  .argument("<domain>", "domain")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, opts: Opts) => {
    try {
      let path = "/api/dns/v1/zones/{domain}";
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/dns/v1/snapshots/{domain}/{snapshotId} — DNS_getDNSSnapshotV1
dnsResource
  .command("get-dnssnapshot")
  .description("Get DNS snapshot")
  .argument("<domain>", "domain")
  .argument("<snapshotId>", "snapshotId")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, snapshotId: string, opts: Opts) => {
    try {
      let path = "/api/dns/v1/snapshots/{domain}/{snapshotId}";
      path = path.replace("{domain}", encodeURIComponent(domain));
      path = path.replace("{snapshotId}", encodeURIComponent(snapshotId));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/dns/v1/snapshots/{domain} — DNS_getDNSSnapshotListV1
dnsResource
  .command("get-dnssnapshot-list")
  .description("Get DNS snapshot list")
  .argument("<domain>", "domain")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, opts: Opts) => {
    try {
      let path = "/api/dns/v1/snapshots/{domain}";
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// POST /api/dns/v1/zones/{domain}/reset — DNS_resetDNSRecordsV1
dnsResource
  .command("reset-dnsrecords")
  .description("Reset DNS records")
  .argument("<domain>", "domain")
  .option("--sync", "Determines if operation should be run synchronously")
  .option("--reset-email-records", "Determines if email records should be reset")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, opts: Opts) => {
    try {
      let path = "/api/dns/v1/zones/{domain}/reset";
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.sync !== undefined) body["sync"] = Boolean(opts.sync);
      if (opts.resetEmailRecords !== undefined) body["reset_email_records"] = Boolean(opts.resetEmailRecords);
      if (opts.jsonBody) {
        const raw = typeof opts.jsonBody === "string" ? JSON.parse(opts.jsonBody) : opts.jsonBody;
        Object.assign(body, raw);
      }
      const data = await client.post(path + (Object.keys(params).length ? `?${new URLSearchParams(params)}` : ""), Object.keys(body).length ? body : undefined);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// POST /api/dns/v1/snapshots/{domain}/{snapshotId}/restore — DNS_restoreDNSSnapshotV1
dnsResource
  .command("restore-dnssnapshot")
  .description("Restore DNS snapshot")
  .argument("<domain>", "domain")
  .argument("<snapshotId>", "snapshotId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, snapshotId: string, opts: Opts) => {
    try {
      let path = "/api/dns/v1/snapshots/{domain}/{snapshotId}/restore";
      path = path.replace("{domain}", encodeURIComponent(domain));
      path = path.replace("{snapshotId}", encodeURIComponent(snapshotId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.jsonBody) {
        const raw = typeof opts.jsonBody === "string" ? JSON.parse(opts.jsonBody) : opts.jsonBody;
        Object.assign(body, raw);
      }
      const data = await client.post(path + (Object.keys(params).length ? `?${new URLSearchParams(params)}` : ""), Object.keys(body).length ? body : undefined);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// PUT /api/dns/v1/zones/{domain} — DNS_updateDNSRecordsV1
dnsResource
  .command("update-dnsrecords")
  .description("Update DNS records")
  .argument("<domain>", "domain")
  .option("--overwrite", "If `true`, resource records (RRs) matching name and type will be deleted and new RRs will be created, otherwise resource")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, opts: Opts) => {
    try {
      let path = "/api/dns/v1/zones/{domain}";
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.overwrite !== undefined) body["overwrite"] = Boolean(opts.overwrite);
      if (opts.jsonBody) {
        const raw = typeof opts.jsonBody === "string" ? JSON.parse(opts.jsonBody) : opts.jsonBody;
        Object.assign(body, raw);
      }
      const data = await client.put(path + (Object.keys(params).length ? `?${new URLSearchParams(params)}` : ""), Object.keys(body).length ? body : undefined);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// POST /api/dns/v1/zones/{domain}/validate — DNS_validateDNSRecordsV1
dnsResource
  .command("validate-dnsrecords")
  .description("Validate DNS records")
  .argument("<domain>", "domain")
  .option("--overwrite", "If `true`, resource records (RRs) matching name and type will be deleted and new RRs will be created, otherwise resource")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, opts: Opts) => {
    try {
      let path = "/api/dns/v1/zones/{domain}/validate";
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.overwrite !== undefined) body["overwrite"] = Boolean(opts.overwrite);
      if (opts.jsonBody) {
        const raw = typeof opts.jsonBody === "string" ? JSON.parse(opts.jsonBody) : opts.jsonBody;
        Object.assign(body, raw);
      }
      const data = await client.post(path + (Object.keys(params).length ? `?${new URLSearchParams(params)}` : ""), Object.keys(body).length ? body : undefined);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });
