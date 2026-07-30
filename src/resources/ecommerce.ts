/** Auto-generated from Hostinger OpenAPI — resource `ecommerce` */
import { Command } from "commander";
import { client } from "../lib/client.js";
import { output } from "../lib/output.js";
import { handleError } from "../lib/errors.js";

type Opts = Record<string, any>;

export const ecommerceResource = new Command("ecommerce")
  .description("Hostinger ecommerce API");

// POST /api/ecommerce/v1/stores/{store_id}/sales-channels — ecommerce_createCustomSalesChannelV1
ecommerceResource
  .command("create-custom-sales-channel")
  .description("Create custom sales channel")
  .argument("<store_id>", "store_id")
  .option("--type <value>", "Sales channel type. Only \"custom\" channels can be created via the API.")
  .option("--name <value>", "Merchant-facing custom name shown in the sales channels list.")
  .option("--url <value>", "Optional public address where the custom sales channel lives.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (store_id: string, opts: Opts) => {
    try {
      let path = "/api/ecommerce/v1/stores/{store_id}/sales-channels";
      path = path.replace("{store_id}", encodeURIComponent(store_id));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.type !== undefined) body["type"] = opts.type;
      if (opts.name !== undefined) body["name"] = opts.name;
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

// POST /api/ecommerce/v1/stores/{store_id}/products/digital — ecommerce_createDigitalProductV1
ecommerceResource
  .command("create-digital-product")
  .description("Create digital product")
  .argument("<store_id>", "store_id")
  .option("--name <value>", "The product name.")
  .option("--price <value>", "Price in the smallest currency unit (e.g. cents). Must be positive.")
  .option("--description <value>", "The product description.")
  .option("--currency <value>", "ISO 4217 currency code. Defaults to the store's default currency when omitted.")
  .option("--download-url <value>", "Optional external download link delivered to the customer after purchase.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (store_id: string, opts: Opts) => {
    try {
      let path = "/api/ecommerce/v1/stores/{store_id}/products/digital";
      path = path.replace("{store_id}", encodeURIComponent(store_id));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.name !== undefined) body["name"] = opts.name;
      if (opts.price !== undefined) body["price"] = Number(opts.price);
      if (opts.description !== undefined) body["description"] = opts.description;
      if (opts.currency !== undefined) body["currency"] = opts.currency;
      if (opts.downloadUrl !== undefined) body["download_url"] = opts.downloadUrl;
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

// POST /api/ecommerce/v1/stores/{store_id}/products/physical — ecommerce_createPhysicalProductV1
ecommerceResource
  .command("create-physical-product")
  .description("Create physical product")
  .argument("<store_id>", "store_id")
  .option("--name <value>", "The product name.")
  .option("--price <value>", "Price in the smallest currency unit (e.g. cents). Must be positive.")
  .option("--description <value>", "The product description.")
  .option("--currency <value>", "ISO 4217 currency code. Defaults to the store's default currency when omitted.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (store_id: string, opts: Opts) => {
    try {
      let path = "/api/ecommerce/v1/stores/{store_id}/products/physical";
      path = path.replace("{store_id}", encodeURIComponent(store_id));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.name !== undefined) body["name"] = opts.name;
      if (opts.price !== undefined) body["price"] = Number(opts.price);
      if (opts.description !== undefined) body["description"] = opts.description;
      if (opts.currency !== undefined) body["currency"] = opts.currency;
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

// POST /api/ecommerce/v1/stores — ecommerce_createStoreV1
ecommerceResource
  .command("create-store")
  .description("Create store")
  .option("--name <value>", "name")
  .option("--country-code <value>", "ISO 3166-1 alpha-2 country code.")
  .option("--company-email <value>", "company_email")
  .option("--company-name <value>", "company_name")
  .option("--language <value>", "ISO 639-1 language code.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/ecommerce/v1/stores";
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.name !== undefined) body["name"] = opts.name;
      if (opts.countryCode !== undefined) body["country_code"] = opts.countryCode;
      if (opts.companyEmail !== undefined) body["company_email"] = opts.companyEmail;
      if (opts.companyName !== undefined) body["company_name"] = opts.companyName;
      if (opts.language !== undefined) body["language"] = opts.language;
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

// DELETE /api/ecommerce/v1/stores/{store_id} — ecommerce_deleteStoreV1
ecommerceResource
  .command("delete-store")
  .description("Delete store")
  .argument("<store_id>", "store_id")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (store_id: string, opts: Opts) => {
    try {
      let path = "/api/ecommerce/v1/stores/{store_id}";
      path = path.replace("{store_id}", encodeURIComponent(store_id));
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

// POST /api/ecommerce/v1/stores/{store_id}/payment-methods/manual — ecommerce_enableManualPaymentMethodV1
ecommerceResource
  .command("enable-manual-payment-method")
  .description("Enable manual payment method")
  .argument("<store_id>", "store_id")
  .option("--title <value>", "Optional display name shown to customers at checkout.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (store_id: string, opts: Opts) => {
    try {
      let path = "/api/ecommerce/v1/stores/{store_id}/payment-methods/manual";
      path = path.replace("{store_id}", encodeURIComponent(store_id));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.title !== undefined) body["title"] = opts.title;
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

// GET /api/ecommerce/v1/miscellaneous/custom-storefront-instructions — ecommerce_getCustomStorefrontSetupInstructionsV1
ecommerceResource
  .command("get-custom-storefront-setup-instructions")
  .description("Get custom storefront setup instructions")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/ecommerce/v1/miscellaneous/custom-storefront-instructions";
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/ecommerce/v1/stores/{store_id}/metadata — ecommerce_getStoreMetadataV1
ecommerceResource
  .command("get-store-metadata")
  .description("Get store metadata")
  .argument("<store_id>", "store_id")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (store_id: string, opts: Opts) => {
    try {
      let path = "/api/ecommerce/v1/stores/{store_id}/metadata";
      path = path.replace("{store_id}", encodeURIComponent(store_id));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/ecommerce/v1/stores — ecommerce_getStoresV1
ecommerceResource
  .command("get-stores")
  .description("Get stores")
  .option("--page <value>", "Page number")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/ecommerce/v1/stores";
      const params: Record<string, string> = {};
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/ecommerce/v1/stores/{store_id}/sales-channels — ecommerce_listSalesChannelsV1
ecommerceResource
  .command("list-sales-channels")
  .description("List sales channels")
  .argument("<store_id>", "store_id")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (store_id: string, opts: Opts) => {
    try {
      let path = "/api/ecommerce/v1/stores/{store_id}/sales-channels";
      path = path.replace("{store_id}", encodeURIComponent(store_id));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// POST /api/ecommerce/v1/stores/{store_id}/shipping — ecommerce_setStoreShippingV1
ecommerceResource
  .command("set-store-shipping")
  .description("Set store shipping")
  .argument("<store_id>", "store_id")
  .option("--price <value>", "Flat shipping rate in the smallest currency unit (e.g. cents). Use 0 for free shipping.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (store_id: string, opts: Opts) => {
    try {
      let path = "/api/ecommerce/v1/stores/{store_id}/shipping";
      path = path.replace("{store_id}", encodeURIComponent(store_id));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.price !== undefined) body["price"] = Number(opts.price);
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

// PATCH /api/ecommerce/v1/stores/{store_id}/sales-channels/{sales_channel_id} — ecommerce_updateSalesChannelV1
ecommerceResource
  .command("update-sales-channel")
  .description("Update sales channel")
  .argument("<store_id>", "store_id")
  .argument("<sales_channel_id>", "sales_channel_id")
  .option("--name <value>", "Merchant-facing custom name shown in the sales channels list. Pass null to clear it.")
  .option("--url <value>", "Public address where the custom sales channel lives. Pass null to clear it.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (store_id: string, sales_channel_id: string, opts: Opts) => {
    try {
      let path = "/api/ecommerce/v1/stores/{store_id}/sales-channels/{sales_channel_id}";
      path = path.replace("{store_id}", encodeURIComponent(store_id));
      path = path.replace("{sales_channel_id}", encodeURIComponent(sales_channel_id));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.name !== undefined) body["name"] = opts.name;
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
