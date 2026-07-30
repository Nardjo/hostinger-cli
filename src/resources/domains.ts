/** Auto-generated from Hostinger OpenAPI — resource `domains` */
import { Command } from "commander";
import { client } from "../lib/client.js";
import { output } from "../lib/output.js";
import { handleError } from "../lib/errors.js";

type Opts = Record<string, any>;

export const domainsResource = new Command("domains")
  .description("Hostinger domains API");

// POST /api/domains/v1/availability — domains_checkDomainAvailabilityV1
domainsResource
  .command("check-domain-availability")
  .description("Check domain availability")
  .option("--domain <value>", "Domain name (without TLD)")
  .option("--with-alternatives", "Should response include alternatives")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/domains/v1/availability";
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.domain !== undefined) body["domain"] = opts.domain;
      if (opts.withAlternatives !== undefined) body["with_alternatives"] = Boolean(opts.withAlternatives);
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

// POST /api/domains/v1/forwarding — domains_createDomainForwardingV1
domainsResource
  .command("create-domain-forwarding")
  .description("Create domain forwarding")
  .option("--domain <value>", "Domain name")
  .option("--redirect-type <value>", "Redirect type")
  .option("--redirect-url <value>", "URL to forward domain to")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/domains/v1/forwarding";
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.domain !== undefined) body["domain"] = opts.domain;
      if (opts.redirectType !== undefined) body["redirect_type"] = opts.redirectType;
      if (opts.redirectUrl !== undefined) body["redirect_url"] = opts.redirectUrl;
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

// POST /api/domains/v1/whois — domains_createWHOISProfileV1
domainsResource
  .command("create-whoisprofile")
  .description("Create WHOIS profile")
  .option("--tld <value>", "TLD of the domain (without leading dot)")
  .option("--country <value>", "ISO 3166 2-letter country code")
  .option("--entity-type <value>", "Legal entity type")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/domains/v1/whois";
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.tld !== undefined) body["tld"] = opts.tld;
      if (opts.country !== undefined) body["country"] = opts.country;
      if (opts.entityType !== undefined) body["entity_type"] = opts.entityType;
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

// DELETE /api/domains/v1/forwarding/{domain} — domains_deleteDomainForwardingV1
domainsResource
  .command("delete-domain-forwarding")
  .description("Delete domain forwarding")
  .argument("<domain>", "domain")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, opts: Opts) => {
    try {
      let path = "/api/domains/v1/forwarding/{domain}";
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

// DELETE /api/domains/v1/whois/{whoisId} — domains_deleteWHOISProfileV1
domainsResource
  .command("delete-whoisprofile")
  .description("Delete WHOIS profile")
  .argument("<whoisId>", "whoisId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (whoisId: string, opts: Opts) => {
    try {
      let path = "/api/domains/v1/whois/{whoisId}";
      path = path.replace("{whoisId}", encodeURIComponent(whoisId));
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

// DELETE /api/domains/v1/portfolio/{domain}/domain-lock — domains_disableDomainLockV1
domainsResource
  .command("disable-domain-lock")
  .description("Disable domain lock")
  .argument("<domain>", "domain")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, opts: Opts) => {
    try {
      let path = "/api/domains/v1/portfolio/{domain}/domain-lock";
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

// DELETE /api/domains/v1/portfolio/{domain}/privacy-protection — domains_disablePrivacyProtectionV1
domainsResource
  .command("disable-privacy-protection")
  .description("Disable privacy protection")
  .argument("<domain>", "domain")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, opts: Opts) => {
    try {
      let path = "/api/domains/v1/portfolio/{domain}/privacy-protection";
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

// PUT /api/domains/v1/portfolio/{domain}/domain-lock — domains_enableDomainLockV1
domainsResource
  .command("enable-domain-lock")
  .description("Enable domain lock")
  .argument("<domain>", "domain")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, opts: Opts) => {
    try {
      let path = "/api/domains/v1/portfolio/{domain}/domain-lock";
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
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

// PUT /api/domains/v1/portfolio/{domain}/privacy-protection — domains_enablePrivacyProtectionV1
domainsResource
  .command("enable-privacy-protection")
  .description("Enable privacy protection")
  .argument("<domain>", "domain")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, opts: Opts) => {
    try {
      let path = "/api/domains/v1/portfolio/{domain}/privacy-protection";
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
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

// GET /api/domains/v1/portfolio/{domain}/auth-code — domains_getDomainAuthorizationCodeV1
domainsResource
  .command("get-domain-authorization-code")
  .description("Get domain authorization code")
  .argument("<domain>", "domain")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, opts: Opts) => {
    try {
      let path = "/api/domains/v1/portfolio/{domain}/auth-code";
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/domains/v1/portfolio/{domain} — domains_getDomainDetailsV1
domainsResource
  .command("get-domain-details")
  .description("Get domain details")
  .argument("<domain>", "domain")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, opts: Opts) => {
    try {
      let path = "/api/domains/v1/portfolio/{domain}";
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/domains/v1/forwarding/{domain} — domains_getDomainForwardingV1
domainsResource
  .command("get-domain-forwarding")
  .description("Get domain forwarding")
  .argument("<domain>", "domain")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, opts: Opts) => {
    try {
      let path = "/api/domains/v1/forwarding/{domain}";
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/domains/v1/portfolio — domains_getDomainListV1
domainsResource
  .command("get-domain-list")
  .description("Get domain list")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/domains/v1/portfolio";
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/domains/v1/portfolio/{domain}/renewal — domains_getDomainRenewalInformationV1
domainsResource
  .command("get-domain-renewal-information")
  .description("Get domain renewal information")
  .argument("<domain>", "domain")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, opts: Opts) => {
    try {
      let path = "/api/domains/v1/portfolio/{domain}/renewal";
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/domains/v1/transfers/{domain} — domains_getTransferV1
domainsResource
  .command("get-transfer")
  .description("Get transfer")
  .argument("<domain>", "domain")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, opts: Opts) => {
    try {
      let path = "/api/domains/v1/transfers/{domain}";
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/domains/v1/transfers — domains_getTransferListV1
domainsResource
  .command("get-transfer-list")
  .description("Get transfer list")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/domains/v1/transfers";
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/domains/v1/whois/{whoisId} — domains_getWHOISProfileV1
domainsResource
  .command("get-whoisprofile")
  .description("Get WHOIS profile")
  .argument("<whoisId>", "whoisId")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (whoisId: string, opts: Opts) => {
    try {
      let path = "/api/domains/v1/whois/{whoisId}";
      path = path.replace("{whoisId}", encodeURIComponent(whoisId));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/domains/v1/whois — domains_getWHOISProfileListV1
domainsResource
  .command("get-whoisprofile-list")
  .description("Get WHOIS profile list")
  .option("--tld <value>", "Filter by TLD (without leading dot)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/domains/v1/whois";
      const params: Record<string, string> = {};
      if (opts.tld !== undefined && opts.tld !== false) params["tld"] = String(opts.tld);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/domains/v1/whois/{whoisId}/usage — domains_getWHOISProfileUsageV1
domainsResource
  .command("get-whoisprofile-usage")
  .description("Get WHOIS profile usage")
  .argument("<whoisId>", "whoisId")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (whoisId: string, opts: Opts) => {
    try {
      let path = "/api/domains/v1/whois/{whoisId}/usage";
      path = path.replace("{whoisId}", encodeURIComponent(whoisId));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// POST /api/domains/v1/portfolio — domains_purchaseNewDomainV1
domainsResource
  .command("purchase-new-domain")
  .description("Purchase new domain")
  .option("--domain <value>", "Domain name")
  .option("--item-id <value>", "Catalog price item ID")
  .option("--payment-method-id <value>", "Payment method ID, default will be used if not provided")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/domains/v1/portfolio";
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.domain !== undefined) body["domain"] = opts.domain;
      if (opts.itemId !== undefined) body["item_id"] = opts.itemId;
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

// PUT /api/domains/v1/forwarding/{domain} — domains_updateDomainForwardingV1
domainsResource
  .command("update-domain-forwarding")
  .description("Update domain forwarding")
  .argument("<domain>", "domain")
  .option("--redirect-type <value>", "Redirect type")
  .option("--redirect-url <value>", "URL to forward domain to")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, opts: Opts) => {
    try {
      let path = "/api/domains/v1/forwarding/{domain}";
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.redirectType !== undefined) body["redirect_type"] = opts.redirectType;
      if (opts.redirectUrl !== undefined) body["redirect_url"] = opts.redirectUrl;
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

// PUT /api/domains/v1/portfolio/{domain}/nameservers — domains_updateDomainNameserversV1
domainsResource
  .command("update-domain-nameservers")
  .description("Update domain nameservers")
  .argument("<domain>", "domain")
  .option("--ns1 <value>", "First name server")
  .option("--ns2 <value>", "Second name server")
  .option("--ns3 <value>", "Third name server")
  .option("--ns4 <value>", "Fourth name server")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, opts: Opts) => {
    try {
      let path = "/api/domains/v1/portfolio/{domain}/nameservers";
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.ns1 !== undefined) body["ns1"] = opts.ns1;
      if (opts.ns2 !== undefined) body["ns2"] = opts.ns2;
      if (opts.ns3 !== undefined) body["ns3"] = opts.ns3;
      if (opts.ns4 !== undefined) body["ns4"] = opts.ns4;
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
