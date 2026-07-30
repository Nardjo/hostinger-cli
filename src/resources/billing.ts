/** Auto-generated from Hostinger OpenAPI — resource `billing` */
import { Command } from "commander";
import { client } from "../lib/client.js";
import { output } from "../lib/output.js";
import { handleError } from "../lib/errors.js";

type Opts = Record<string, any>;

export const billingResource = new Command("billing")
  .description("Hostinger billing API");

// POST /api/billing/v1/orders — billing_createPurchaseOrderV1
billingResource
  .command("create-purchase-order")
  .description("Create purchase order")
  .option("--payment-method-id <value>", "Payment method ID, default will be used if not provided")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/billing/v1/orders";
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.paymentMethodId !== undefined) body["payment_method_id"] = Number(opts.paymentMethodId);
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

// DELETE /api/billing/v1/payment-methods/{paymentMethodId} — billing_deletePaymentMethodV1
billingResource
  .command("delete-payment-method")
  .description("Delete payment method")
  .argument("<paymentMethodId>", "paymentMethodId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (paymentMethodId: string, opts: Opts) => {
    try {
      let path = "/api/billing/v1/payment-methods/{paymentMethodId}";
      path = path.replace("{paymentMethodId}", encodeURIComponent(paymentMethodId));
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

// DELETE /api/billing/v1/subscriptions/{subscriptionId}/auto-renewal/disable — billing_disableAutoRenewalV1
billingResource
  .command("disable-auto-renewal")
  .description("Disable auto-renewal")
  .argument("<subscriptionId>", "subscriptionId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (subscriptionId: string, opts: Opts) => {
    try {
      let path = "/api/billing/v1/subscriptions/{subscriptionId}/auto-renewal/disable";
      path = path.replace("{subscriptionId}", encodeURIComponent(subscriptionId));
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

// PATCH /api/billing/v1/subscriptions/{subscriptionId}/auto-renewal/enable — billing_enableAutoRenewalV1
billingResource
  .command("enable-auto-renewal")
  .description("Enable auto-renewal")
  .argument("<subscriptionId>", "subscriptionId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (subscriptionId: string, opts: Opts) => {
    try {
      let path = "/api/billing/v1/subscriptions/{subscriptionId}/auto-renewal/enable";
      path = path.replace("{subscriptionId}", encodeURIComponent(subscriptionId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
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

// GET /api/billing/v1/catalog — billing_getCatalogItemListV1
billingResource
  .command("get-catalog-item-list")
  .description("Get catalog item list")
  .option("--category <value>", "Filter catalog items by category")
  .option("--name <value>", "Filter catalog items by name. Use `*` for wildcard search, e.g. `.COM*` to find .com domain")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/billing/v1/catalog";
      const params: Record<string, string> = {};
      if (opts.category !== undefined && opts.category !== false) params["category"] = String(opts.category);
      if (opts.name !== undefined && opts.name !== false) params["name"] = String(opts.name);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/billing/v1/payment-methods — billing_getPaymentMethodListV1
billingResource
  .command("get-payment-method-list")
  .description("Get payment method list")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/billing/v1/payment-methods";
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/billing/v1/subscriptions — billing_getSubscriptionListV1
billingResource
  .command("get-subscription-list")
  .description("Get subscription list")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/billing/v1/subscriptions";
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// POST /api/billing/v1/subscriptions/{subscriptionId}/renew — billing_renewSubscriptionV1
billingResource
  .command("renew-subscription")
  .description("Renew subscription")
  .argument("<subscriptionId>", "subscriptionId")
  .option("--payment-method-id <value>", "Payment method ID, default will be used if not provided")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (subscriptionId: string, opts: Opts) => {
    try {
      let path = "/api/billing/v1/subscriptions/{subscriptionId}/renew";
      path = path.replace("{subscriptionId}", encodeURIComponent(subscriptionId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.paymentMethodId !== undefined) body["payment_method_id"] = Number(opts.paymentMethodId);
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

// POST /api/billing/v1/payment-methods/{paymentMethodId} — billing_setDefaultPaymentMethodV1
billingResource
  .command("set-default-payment-method")
  .description("Set default payment method")
  .argument("<paymentMethodId>", "paymentMethodId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (paymentMethodId: string, opts: Opts) => {
    try {
      let path = "/api/billing/v1/payment-methods/{paymentMethodId}";
      path = path.replace("{paymentMethodId}", encodeURIComponent(paymentMethodId));
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
