/** Auto-generated from Hostinger OpenAPI — resource `mail` */
import { Command } from "commander";
import { client } from "../lib/client.js";
import { output } from "../lib/output.js";
import { handleError } from "../lib/errors.js";

type Opts = Record<string, any>;

export const mailResource = new Command("mail")
  .description("Hostinger mail API");

// PATCH /api/mail/v1/mailboxes/{mailboxId}/password — mail_changeMailboxPasswordV1
mailResource
  .command("change-mailbox-password")
  .description("Change mailbox password")
  .argument("<mailboxId>", "mailboxId")
  .option("--password <value>", "New mailbox password. Minimum 8 characters with uppercase, lowercase, number and special character; must not be a common")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (mailboxId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/mailboxes/{mailboxId}/password";
      path = path.replace("{mailboxId}", encodeURIComponent(mailboxId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.password !== undefined) body["password"] = opts.password;
      if (opts.jsonBody) {
        const raw = typeof opts.jsonBody === "string" ? JSON.parse(opts.jsonBody) : opts.jsonBody;
        Object.assign(body, raw);
      }
      const data = await client.patch(path + (Object.keys(params).length ? `?${new URLSearchParams(params)}` : ""), Object.keys(body).length ? body : undefined);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// POST /api/mail/v1/mailboxes/{mailboxId}/aliases — mail_createAliasV1
mailResource
  .command("create-alias")
  .description("Create alias")
  .argument("<mailboxId>", "mailboxId")
  .option("--local-part <value>", "Local part of the alias address (the part before the @). The domain is taken from the mailbox. Case-insensitive and stor")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (mailboxId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/mailboxes/{mailboxId}/aliases";
      path = path.replace("{mailboxId}", encodeURIComponent(mailboxId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.localPart !== undefined) body["local_part"] = opts.localPart;
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

// POST /api/mail/v1/orders/{orderId}/api-tokens — mail_createAPITokenV1
mailResource
  .command("create-apitoken")
  .description("Create API token")
  .argument("<orderId>", "orderId")
  .option("--name <value>", "Human-readable label for this token")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (orderId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/orders/{orderId}/api-tokens";
      path = path.replace("{orderId}", encodeURIComponent(orderId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.name !== undefined) body["name"] = opts.name;
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

// POST /api/mail/v1/mailboxes/{mailboxId}/autoreplies — mail_createAutoreplyV1
mailResource
  .command("create-autoreply")
  .description("Create autoreply")
  .argument("<mailboxId>", "mailboxId")
  .option("--subject <value>", "Subject of the automatic reply")
  .option("--body <value>", "Body of the automatic reply")
  .option("--display-name <value>", "Sender display name used for the reply")
  .option("--starts-at <value>", "When the autoreply becomes active. Defaults to now.")
  .option("--ends-at <value>", "When the autoreply stops. Omit for an indefinite autoreply.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (mailboxId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/mailboxes/{mailboxId}/autoreplies";
      path = path.replace("{mailboxId}", encodeURIComponent(mailboxId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.subject !== undefined) body["subject"] = opts.subject;
      if (opts.body !== undefined) body["body"] = opts.body;
      if (opts.displayName !== undefined) body["display_name"] = opts.displayName;
      if (opts.startsAt !== undefined) body["starts_at"] = opts.startsAt;
      if (opts.endsAt !== undefined) body["ends_at"] = opts.endsAt;
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

// POST /api/mail/v1/mailboxes/{mailboxId}/catchalls — mail_createCatchAllV1
mailResource
  .command("create-catch-all")
  .description("Create catch-all")
  .argument("<mailboxId>", "mailboxId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (mailboxId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/mailboxes/{mailboxId}/catchalls";
      path = path.replace("{mailboxId}", encodeURIComponent(mailboxId));
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

// POST /api/mail/v1/mailboxes/{mailboxId}/forwarders — mail_createForwarderV1
mailResource
  .command("create-forwarder")
  .description("Create forwarder")
  .argument("<mailboxId>", "mailboxId")
  .option("--destination <value>", "Email address the messages will be forwarded to")
  .option("--is-keep-copy-enabled", "Whether to keep a copy of forwarded messages in the mailbox. Defaults to false.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (mailboxId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/mailboxes/{mailboxId}/forwarders";
      path = path.replace("{mailboxId}", encodeURIComponent(mailboxId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.destination !== undefined) body["destination"] = opts.destination;
      if (opts.isKeepCopyEnabled !== undefined) body["is_keep_copy_enabled"] = Boolean(opts.isKeepCopyEnabled);
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

// POST /api/mail/v1/orders/{orderId}/mailboxes — mail_createMailboxV1
mailResource
  .command("create-mailbox")
  .description("Create mailbox")
  .argument("<orderId>", "orderId")
  .option("--local-part <value>", "Local part of the mailbox address (the part before the @). The domain is taken from the order. Must start and end with a")
  .option("--password <value>", "Mailbox password. Minimum 8 characters with uppercase, lowercase, number and special character.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (orderId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/orders/{orderId}/mailboxes";
      path = path.replace("{orderId}", encodeURIComponent(orderId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.localPart !== undefined) body["local_part"] = opts.localPart;
      if (opts.password !== undefined) body["password"] = opts.password;
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

// POST /api/mail/v1/mailboxes/{mailboxId}/webhooks — mail_createWebhookV1
mailResource
  .command("create-webhook")
  .description("Create webhook")
  .argument("<mailboxId>", "mailboxId")
  .option("--name <value>", "Human-readable name for this webhook")
  .option("--description <value>", "Optional description of the webhook's purpose")
  .option("--status <value>", "Initial status of the webhook")
  .option("--url <value>", "Publicly reachable URL that receives the webhook POST requests")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (mailboxId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/mailboxes/{mailboxId}/webhooks";
      path = path.replace("{mailboxId}", encodeURIComponent(mailboxId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.name !== undefined) body["name"] = opts.name;
      if (opts.description !== undefined) body["description"] = opts.description;
      if (opts.status !== undefined) body["status"] = opts.status;
      if (opts.url !== undefined) body["url"] = opts.url;
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

// DELETE /api/mail/v1/aliases/{aliasId} — mail_deleteAliasV1
mailResource
  .command("delete-alias")
  .description("Delete alias")
  .argument("<aliasId>", "aliasId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (aliasId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/aliases/{aliasId}";
      path = path.replace("{aliasId}", encodeURIComponent(aliasId));
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

// DELETE /api/mail/v1/autoreplies/{autoreplyId} — mail_deleteAutoreplyV1
mailResource
  .command("delete-autoreply")
  .description("Delete autoreply")
  .argument("<autoreplyId>", "autoreplyId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (autoreplyId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/autoreplies/{autoreplyId}";
      path = path.replace("{autoreplyId}", encodeURIComponent(autoreplyId));
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

// DELETE /api/mail/v1/catchalls/{catchallId} — mail_deleteCatchAllV1
mailResource
  .command("delete-catch-all")
  .description("Delete catch-all")
  .argument("<catchallId>", "catchallId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (catchallId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/catchalls/{catchallId}";
      path = path.replace("{catchallId}", encodeURIComponent(catchallId));
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

// DELETE /api/mail/v1/forwarders/{forwarderId} — mail_deleteForwarderV1
mailResource
  .command("delete-forwarder")
  .description("Delete forwarder")
  .argument("<forwarderId>", "forwarderId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (forwarderId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/forwarders/{forwarderId}";
      path = path.replace("{forwarderId}", encodeURIComponent(forwarderId));
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

// DELETE /api/mail/v1/mailboxes/{mailboxId} — mail_deleteMailboxV1
mailResource
  .command("delete-mailbox")
  .description("Delete mailbox")
  .argument("<mailboxId>", "mailboxId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (mailboxId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/mailboxes/{mailboxId}";
      path = path.replace("{mailboxId}", encodeURIComponent(mailboxId));
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

// DELETE /api/mail/v1/webhooks/{webhookId} — mail_deleteWebhookV1
mailResource
  .command("delete-webhook")
  .description("Delete webhook")
  .argument("<webhookId>", "webhookId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (webhookId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/webhooks/{webhookId}";
      path = path.replace("{webhookId}", encodeURIComponent(webhookId));
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

// GET /api/mail/v1/orders/{orderId}/plan — mail_getOrderPlanV1
mailResource
  .command("get-order-plan")
  .description("Get order plan")
  .argument("<orderId>", "orderId")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (orderId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/orders/{orderId}/plan";
      path = path.replace("{orderId}", encodeURIComponent(orderId));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/mail/v1/webhooks/{webhookId} — mail_getWebhookV1
mailResource
  .command("get-webhook")
  .description("Get webhook")
  .argument("<webhookId>", "webhookId")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (webhookId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/webhooks/{webhookId}";
      path = path.replace("{webhookId}", encodeURIComponent(webhookId));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/mail/v1/orders/{orderId}/logs/access — mail_listAccessLogsV1
mailResource
  .command("list-access-logs")
  .description("List access logs")
  .argument("<orderId>", "orderId")
  .option("--account <value>", "Filter log entries by a specific email account")
  .option("--date <value>", "Exact date filter (YYYY-MM-DD). Takes precedence over `from_date`/`to_date` when both are given.")
  .option("--from-date <value>", "Date range start (RFC 3339)")
  .option("--to-date <value>", "Date range end (RFC 3339)")
  .option("--status <value>", "Filter log entries by status")
  .option("--protocol <value>", "Filter access log entries by protocol")
  .option("--has-deletions", "Filter access log entries by whether the session had deletions")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (orderId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/orders/{orderId}/logs/access";
      path = path.replace("{orderId}", encodeURIComponent(orderId));
      const params: Record<string, string> = {};
      if (opts.account !== undefined && opts.account !== false) params["account"] = String(opts.account);
      if (opts.date !== undefined && opts.date !== false) params["date"] = String(opts.date);
      if (opts.fromDate !== undefined && opts.fromDate !== false) params["from_date"] = String(opts.fromDate);
      if (opts.toDate !== undefined && opts.toDate !== false) params["to_date"] = String(opts.toDate);
      if (opts.status !== undefined && opts.status !== false) params["status"] = String(opts.status);
      if (opts.protocol !== undefined && opts.protocol !== false) params["protocol"] = String(opts.protocol);
      if (opts.hasDeletions !== undefined && opts.hasDeletions !== false) params["has_deletions"] = String(opts.hasDeletions);
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      if (opts.perPage !== undefined && opts.perPage !== false) params["per_page"] = String(opts.perPage);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/mail/v1/orders/{orderId}/logs/action — mail_listActionLogsV1
mailResource
  .command("list-action-logs")
  .description("List action logs")
  .argument("<orderId>", "orderId")
  .option("--account <value>", "Filter log entries by a specific email account")
  .option("--date <value>", "Exact date filter (YYYY-MM-DD). Takes precedence over `from_date`/`to_date` when both are given.")
  .option("--from-date <value>", "Date range start (RFC 3339)")
  .option("--to-date <value>", "Date range end (RFC 3339)")
  .option("--status <value>", "Filter log entries by status")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (orderId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/orders/{orderId}/logs/action";
      path = path.replace("{orderId}", encodeURIComponent(orderId));
      const params: Record<string, string> = {};
      if (opts.account !== undefined && opts.account !== false) params["account"] = String(opts.account);
      if (opts.date !== undefined && opts.date !== false) params["date"] = String(opts.date);
      if (opts.fromDate !== undefined && opts.fromDate !== false) params["from_date"] = String(opts.fromDate);
      if (opts.toDate !== undefined && opts.toDate !== false) params["to_date"] = String(opts.toDate);
      if (opts.status !== undefined && opts.status !== false) params["status"] = String(opts.status);
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      if (opts.perPage !== undefined && opts.perPage !== false) params["per_page"] = String(opts.perPage);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/mail/v1/orders/{orderId}/aliases — mail_listAliasesV1
mailResource
  .command("list-aliases")
  .description("List aliases")
  .argument("<orderId>", "orderId")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (orderId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/orders/{orderId}/aliases";
      path = path.replace("{orderId}", encodeURIComponent(orderId));
      const params: Record<string, string> = {};
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      if (opts.perPage !== undefined && opts.perPage !== false) params["per_page"] = String(opts.perPage);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/mail/v1/api-tokens — mail_listAPITokensV1
mailResource
  .command("list-apitokens")
  .description("List API tokens")
  .option("--order-id <value>", "Filter tokens by order resource ID. Single value or comma-separated list.")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/mail/v1/api-tokens";
      const params: Record<string, string> = {};
      if (opts.orderId !== undefined && opts.orderId !== false) params["order_id"] = String(opts.orderId);
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      if (opts.perPage !== undefined && opts.perPage !== false) params["per_page"] = String(opts.perPage);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/mail/v1/orders/{orderId}/autoreplies — mail_listAutorepliesV1
mailResource
  .command("list-autoreplies")
  .description("List autoreplies")
  .argument("<orderId>", "orderId")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (orderId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/orders/{orderId}/autoreplies";
      path = path.replace("{orderId}", encodeURIComponent(orderId));
      const params: Record<string, string> = {};
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      if (opts.perPage !== undefined && opts.perPage !== false) params["per_page"] = String(opts.perPage);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/mail/v1/orders/{orderId}/catchalls — mail_listCatchAllsV1
mailResource
  .command("list-catch-alls")
  .description("List catch-alls")
  .argument("<orderId>", "orderId")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (orderId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/orders/{orderId}/catchalls";
      path = path.replace("{orderId}", encodeURIComponent(orderId));
      const params: Record<string, string> = {};
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      if (opts.perPage !== undefined && opts.perPage !== false) params["per_page"] = String(opts.perPage);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/mail/v1/orders/{orderId}/forwarders — mail_listForwardersV1
mailResource
  .command("list-forwarders")
  .description("List forwarders")
  .argument("<orderId>", "orderId")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (orderId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/orders/{orderId}/forwarders";
      path = path.replace("{orderId}", encodeURIComponent(orderId));
      const params: Record<string, string> = {};
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      if (opts.perPage !== undefined && opts.perPage !== false) params["per_page"] = String(opts.perPage);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/mail/v1/orders/{orderId}/logs/inbound — mail_listInboundLogsV1
mailResource
  .command("list-inbound-logs")
  .description("List inbound logs")
  .argument("<orderId>", "orderId")
  .option("--account <value>", "Filter log entries by a specific email account")
  .option("--date <value>", "Exact date filter (YYYY-MM-DD). Takes precedence over `from_date`/`to_date` when both are given.")
  .option("--from-date <value>", "Date range start (RFC 3339)")
  .option("--to-date <value>", "Date range end (RFC 3339)")
  .option("--status <value>", "Filter log entries by status")
  .option("--sender <value>", "Filter log entries by sender. Accepts a full email address or a domain.")
  .option("--recipient <value>", "Filter log entries by recipient. Accepts a full email address or a domain.")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (orderId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/orders/{orderId}/logs/inbound";
      path = path.replace("{orderId}", encodeURIComponent(orderId));
      const params: Record<string, string> = {};
      if (opts.account !== undefined && opts.account !== false) params["account"] = String(opts.account);
      if (opts.date !== undefined && opts.date !== false) params["date"] = String(opts.date);
      if (opts.fromDate !== undefined && opts.fromDate !== false) params["from_date"] = String(opts.fromDate);
      if (opts.toDate !== undefined && opts.toDate !== false) params["to_date"] = String(opts.toDate);
      if (opts.status !== undefined && opts.status !== false) params["status"] = String(opts.status);
      if (opts.sender !== undefined && opts.sender !== false) params["sender"] = String(opts.sender);
      if (opts.recipient !== undefined && opts.recipient !== false) params["recipient"] = String(opts.recipient);
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      if (opts.perPage !== undefined && opts.perPage !== false) params["per_page"] = String(opts.perPage);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/mail/v1/orders/{orderId}/logs/mailbox-actions — mail_listMailboxActionLogsV1
mailResource
  .command("list-mailbox-action-logs")
  .description("List mailbox action logs")
  .argument("<orderId>", "orderId")
  .requiredOption("--email <value>", "Mailbox email address. Must belong to the order's domain.")
  .option("--date <value>", "Exact date filter (YYYY-MM-DD). Takes precedence over `from_date`/`to_date` when both are given.")
  .option("--from-date <value>", "Date range start (RFC 3339)")
  .option("--to-date <value>", "Date range end (RFC 3339)")
  .option("--event <value>", "Filter mailbox action log entries by event type")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (orderId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/orders/{orderId}/logs/mailbox-actions";
      path = path.replace("{orderId}", encodeURIComponent(orderId));
      const params: Record<string, string> = {};
      if (opts.email !== undefined && opts.email !== false) params["email"] = String(opts.email);
      if (opts.date !== undefined && opts.date !== false) params["date"] = String(opts.date);
      if (opts.fromDate !== undefined && opts.fromDate !== false) params["from_date"] = String(opts.fromDate);
      if (opts.toDate !== undefined && opts.toDate !== false) params["to_date"] = String(opts.toDate);
      if (opts.event !== undefined && opts.event !== false) params["event"] = String(opts.event);
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      if (opts.perPage !== undefined && opts.perPage !== false) params["per_page"] = String(opts.perPage);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/mail/v1/orders/{orderId}/mailboxes — mail_listMailboxesV1
mailResource
  .command("list-mailboxes")
  .description("List mailboxes")
  .argument("<orderId>", "orderId")
  .option("--search <value>", "Filter mailboxes whose email address contains the given string")
  .option("--sort <value>", "Sort mailboxes by field. Prefix with `-` for descending order.")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (orderId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/orders/{orderId}/mailboxes";
      path = path.replace("{orderId}", encodeURIComponent(orderId));
      const params: Record<string, string> = {};
      if (opts.search !== undefined && opts.search !== false) params["search"] = String(opts.search);
      if (opts.sort !== undefined && opts.sort !== false) params["sort"] = String(opts.sort);
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      if (opts.perPage !== undefined && opts.perPage !== false) params["per_page"] = String(opts.perPage);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/mail/v1/orders — mail_listOrdersV1
mailResource
  .command("list-orders")
  .description("List orders")
  .option("--domain <value>", "Filter orders by domain name (exact match)")
  .option("--status <value>", "Filter orders by status")
  .option("--is-trial", "Filter orders by trial state")
  .option("--sort <value>", "Sort orders by field. Prefix with `-` for descending order.")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/mail/v1/orders";
      const params: Record<string, string> = {};
      if (opts.domain !== undefined && opts.domain !== false) params["domain"] = String(opts.domain);
      if (opts.status !== undefined && opts.status !== false) params["status"] = String(opts.status);
      if (opts.isTrial !== undefined && opts.isTrial !== false) params["is_trial"] = String(opts.isTrial);
      if (opts.sort !== undefined && opts.sort !== false) params["sort"] = String(opts.sort);
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      if (opts.perPage !== undefined && opts.perPage !== false) params["per_page"] = String(opts.perPage);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/mail/v1/orders/{orderId}/logs/outbound — mail_listOutboundLogsV1
mailResource
  .command("list-outbound-logs")
  .description("List outbound logs")
  .argument("<orderId>", "orderId")
  .option("--account <value>", "Filter log entries by a specific email account")
  .option("--date <value>", "Exact date filter (YYYY-MM-DD). Takes precedence over `from_date`/`to_date` when both are given.")
  .option("--from-date <value>", "Date range start (RFC 3339)")
  .option("--to-date <value>", "Date range end (RFC 3339)")
  .option("--status <value>", "Filter log entries by status")
  .option("--sender <value>", "Filter log entries by sender. Accepts a full email address or a domain.")
  .option("--recipient <value>", "Filter log entries by recipient. Accepts a full email address or a domain.")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (orderId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/orders/{orderId}/logs/outbound";
      path = path.replace("{orderId}", encodeURIComponent(orderId));
      const params: Record<string, string> = {};
      if (opts.account !== undefined && opts.account !== false) params["account"] = String(opts.account);
      if (opts.date !== undefined && opts.date !== false) params["date"] = String(opts.date);
      if (opts.fromDate !== undefined && opts.fromDate !== false) params["from_date"] = String(opts.fromDate);
      if (opts.toDate !== undefined && opts.toDate !== false) params["to_date"] = String(opts.toDate);
      if (opts.status !== undefined && opts.status !== false) params["status"] = String(opts.status);
      if (opts.sender !== undefined && opts.sender !== false) params["sender"] = String(opts.sender);
      if (opts.recipient !== undefined && opts.recipient !== false) params["recipient"] = String(opts.recipient);
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      if (opts.perPage !== undefined && opts.perPage !== false) params["per_page"] = String(opts.perPage);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/mail/v1/orders/{orderId}/webhooks/delivery-logs — mail_listWebhookDeliveryLogsV1
mailResource
  .command("list-webhook-delivery-logs")
  .description("List webhook delivery logs")
  .argument("<orderId>", "orderId")
  .option("--mailbox-id <value>", "Filter by the mailbox resource ID the webhooks are attached to")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (orderId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/orders/{orderId}/webhooks/delivery-logs";
      path = path.replace("{orderId}", encodeURIComponent(orderId));
      const params: Record<string, string> = {};
      if (opts.mailboxId !== undefined && opts.mailboxId !== false) params["mailbox_id"] = String(opts.mailboxId);
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      if (opts.perPage !== undefined && opts.perPage !== false) params["per_page"] = String(opts.perPage);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/mail/v1/orders/{orderId}/webhooks — mail_listWebhooksV1
mailResource
  .command("list-webhooks")
  .description("List webhooks")
  .argument("<orderId>", "orderId")
  .option("--mailbox-id <value>", "Filter by the mailbox resource ID the webhooks are attached to")
  .option("--status <value>", "Filter webhooks by status")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (orderId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/orders/{orderId}/webhooks";
      path = path.replace("{orderId}", encodeURIComponent(orderId));
      const params: Record<string, string> = {};
      if (opts.mailboxId !== undefined && opts.mailboxId !== false) params["mailbox_id"] = String(opts.mailboxId);
      if (opts.status !== undefined && opts.status !== false) params["status"] = String(opts.status);
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      if (opts.perPage !== undefined && opts.perPage !== false) params["per_page"] = String(opts.perPage);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// POST /api/mail/v1/webhooks/{webhookId}/regenerate-secret — mail_regenerateWebhookSecretV1
mailResource
  .command("regenerate-webhook-secret")
  .description("Regenerate webhook secret")
  .argument("<webhookId>", "webhookId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (webhookId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/webhooks/{webhookId}/regenerate-secret";
      path = path.replace("{webhookId}", encodeURIComponent(webhookId));
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

// POST /api/mail/v1/catchalls/{catchallId}/confirmation/resend — mail_resendCatchAllConfirmationV1
mailResource
  .command("resend-catch-all-confirmation")
  .description("Resend catch-all confirmation")
  .argument("<catchallId>", "catchallId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (catchallId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/catchalls/{catchallId}/confirmation/resend";
      path = path.replace("{catchallId}", encodeURIComponent(catchallId));
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

// POST /api/mail/v1/forwarders/{forwarderId}/confirmation/resend — mail_resendForwarderConfirmationV1
mailResource
  .command("resend-forwarder-confirmation")
  .description("Resend forwarder confirmation")
  .argument("<forwarderId>", "forwarderId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (forwarderId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/forwarders/{forwarderId}/confirmation/resend";
      path = path.replace("{forwarderId}", encodeURIComponent(forwarderId));
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

// DELETE /api/mail/v1/api-tokens/{tokenId} — mail_revokeAPITokenV1
mailResource
  .command("revoke-apitoken")
  .description("Revoke API token")
  .argument("<tokenId>", "tokenId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (tokenId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/api-tokens/{tokenId}";
      path = path.replace("{tokenId}", encodeURIComponent(tokenId));
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

// POST /api/mail/v1/webhooks/{webhookId}/test — mail_testWebhookV1
mailResource
  .command("test-webhook")
  .description("Test webhook")
  .argument("<webhookId>", "webhookId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (webhookId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/webhooks/{webhookId}/test";
      path = path.replace("{webhookId}", encodeURIComponent(webhookId));
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

// PUT /api/mail/v1/autoreplies/{autoreplyId} — mail_updateAutoreplyV1
mailResource
  .command("update-autoreply")
  .description("Update autoreply")
  .argument("<autoreplyId>", "autoreplyId")
  .option("--subject <value>", "Subject of the automatic reply")
  .option("--body <value>", "Body of the automatic reply")
  .option("--display-name <value>", "Sender display name used for the reply")
  .option("--starts-at <value>", "When the autoreply becomes active. Defaults to now.")
  .option("--ends-at <value>", "When the autoreply stops. Omit for an indefinite autoreply.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (autoreplyId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/autoreplies/{autoreplyId}";
      path = path.replace("{autoreplyId}", encodeURIComponent(autoreplyId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.subject !== undefined) body["subject"] = opts.subject;
      if (opts.body !== undefined) body["body"] = opts.body;
      if (opts.displayName !== undefined) body["display_name"] = opts.displayName;
      if (opts.startsAt !== undefined) body["starts_at"] = opts.startsAt;
      if (opts.endsAt !== undefined) body["ends_at"] = opts.endsAt;
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

// PATCH /api/mail/v1/forwarders/{forwarderId}/keep-copy — mail_updateForwarderKeepCopySettingV1
mailResource
  .command("update-forwarder-keep-copy-setting")
  .description("Update forwarder keep-copy setting")
  .argument("<forwarderId>", "forwarderId")
  .option("--is-keep-copy-enabled", "Whether to keep a copy of forwarded messages in the mailbox")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (forwarderId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/forwarders/{forwarderId}/keep-copy";
      path = path.replace("{forwarderId}", encodeURIComponent(forwarderId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.isKeepCopyEnabled !== undefined) body["is_keep_copy_enabled"] = Boolean(opts.isKeepCopyEnabled);
      if (opts.jsonBody) {
        const raw = typeof opts.jsonBody === "string" ? JSON.parse(opts.jsonBody) : opts.jsonBody;
        Object.assign(body, raw);
      }
      const data = await client.patch(path + (Object.keys(params).length ? `?${new URLSearchParams(params)}` : ""), Object.keys(body).length ? body : undefined);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// PATCH /api/mail/v1/webhooks/{webhookId} — mail_updateWebhookV1
mailResource
  .command("update-webhook")
  .description("Update webhook")
  .argument("<webhookId>", "webhookId")
  .option("--name <value>", "New human-readable name for the webhook")
  .option("--description <value>", "New description, or null to clear it")
  .option("--status <value>", "New status for the webhook")
  .option("--url <value>", "New URL to deliver events to")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (webhookId: string, opts: Opts) => {
    try {
      let path = "/api/mail/v1/webhooks/{webhookId}";
      path = path.replace("{webhookId}", encodeURIComponent(webhookId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.name !== undefined) body["name"] = opts.name;
      if (opts.description !== undefined) body["description"] = opts.description;
      if (opts.status !== undefined) body["status"] = opts.status;
      if (opts.url !== undefined) body["url"] = opts.url;
      if (opts.jsonBody) {
        const raw = typeof opts.jsonBody === "string" ? JSON.parse(opts.jsonBody) : opts.jsonBody;
        Object.assign(body, raw);
      }
      const data = await client.patch(path + (Object.keys(params).length ? `?${new URLSearchParams(params)}` : ""), Object.keys(body).length ? body : undefined);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });
