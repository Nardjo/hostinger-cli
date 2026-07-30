/** Auto-generated from Hostinger OpenAPI — resource `agency-hosting` */
import { Command } from "commander";
import { client } from "../lib/client.js";
import { output } from "../lib/output.js";
import { handleError } from "../lib/errors.js";

type Opts = Record<string, any>;

export const agency_hostingResource = new Command("agency-hosting")
  .description("Hostinger agency-hosting API");

// POST /api/agency-hosting/v1/websites/{website_uid}/build-assets — agency-hosting_buildAgencyPlanWebsiteNodeJSAssetsV1
agency_hostingResource
  .command("build-agency-plan-website-node-jsassets")
  .description("Build Agency Plan website NodeJS assets")
  .argument("<website_uid>", "website_uid")
  .option("--archive-path <value>", "Directory, relative to the website document root, where the uploaded site archive currently lives. Most commonly this is")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (website_uid: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/websites/{website_uid}/build-assets";
      path = path.replace("{website_uid}", encodeURIComponent(website_uid));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.archivePath !== undefined) body["archive_path"] = opts.archivePath;
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

// PUT /api/agency-hosting/v1/websites/{website_uid}/domains/{from_domain} — agency-hosting_changeAgencyPlanWebsiteDomainV1
agency_hostingResource
  .command("change-agency-plan-website-domain")
  .description("Change Agency Plan website domain")
  .argument("<website_uid>", "website_uid")
  .argument("<from_domain>", "from_domain")
  .option("--domain <value>", "New domain to assign to the website. Set to null to revert to the temporary domain.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (website_uid: string, from_domain: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/websites/{website_uid}/domains/{from_domain}";
      path = path.replace("{website_uid}", encodeURIComponent(website_uid));
      path = path.replace("{from_domain}", encodeURIComponent(from_domain));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.domain !== undefined) body["domain"] = opts.domain;
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

// PATCH /api/agency-hosting/v1/websites/{website_uid}/wordpress/settings/version — agency-hosting_changeAgencyPlanWebsiteWordPressCoreVersionV1
agency_hostingResource
  .command("change-agency-plan-website-word-press-core-version")
  .description("Change Agency Plan website WordPress core version")
  .argument("<website_uid>", "website_uid")
  .option("--version <value>", "Target WordPress core version to install. Must be one of the available versions.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (website_uid: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/websites/{website_uid}/wordpress/settings/version";
      path = path.replace("{website_uid}", encodeURIComponent(website_uid));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.version !== undefined) body["version"] = opts.version;
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

// DELETE /api/agency-hosting/v1/websites/{website_uid}/cache — agency-hosting_clearAgencyPlanWebsiteCacheV1
agency_hostingResource
  .command("clear-agency-plan-website-cache")
  .description("Clear Agency Plan website cache")
  .argument("<website_uid>", "website_uid")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (website_uid: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/websites/{website_uid}/cache";
      path = path.replace("{website_uid}", encodeURIComponent(website_uid));
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

// POST /api/agency-hosting/v1/websites/{website_uid}/cron-jobs — agency-hosting_createAgencyPlanWebsiteCronJobV1
agency_hostingResource
  .command("create-agency-plan-website-cron-job")
  .description("Create Agency Plan website cron job")
  .argument("<website_uid>", "website_uid")
  .option("--time <value>", "Cron schedule expression (standard 5-field crontab syntax).")
  .option("--command <value>", "Command to run on the schedule. Must not contain pipe (|) or redirection (<, >) characters.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (website_uid: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/websites/{website_uid}/cron-jobs";
      path = path.replace("{website_uid}", encodeURIComponent(website_uid));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.time !== undefined) body["time"] = opts.time;
      if (opts.command !== undefined) body["command"] = opts.command;
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

// POST /api/agency-hosting/v1/websites/{website_uid}/databases — agency-hosting_createAgencyPlanWebsiteDatabaseV1
agency_hostingResource
  .command("create-agency-plan-website-database")
  .description("Create Agency Plan website database")
  .argument("<website_uid>", "website_uid")
  .option("--database-name <value>", "Database name to create (alphanumeric characters).")
  .option("--database-user <value>", "Database username to create alongside the database (alphanumeric characters).")
  .option("--password <value>", "Password for the database user (requires mixed case, letters, and numbers).")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (website_uid: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/websites/{website_uid}/databases";
      path = path.replace("{website_uid}", encodeURIComponent(website_uid));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.databaseName !== undefined) body["database_name"] = opts.databaseName;
      if (opts.databaseUser !== undefined) body["database_user"] = opts.databaseUser;
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

// POST /api/agency-hosting/v1/websites/{website_uid}/databases/{database_name}/users — agency-hosting_createAgencyPlanWebsiteDatabaseUserV1
agency_hostingResource
  .command("create-agency-plan-website-database-user")
  .description("Create Agency Plan website database user")
  .argument("<website_uid>", "website_uid")
  .argument("<database_name>", "database_name")
  .option("--database-user <value>", "Database username to create (alphanumeric and underscores).")
  .option("--password <value>", "Password for the database user (requires mixed case, letters, and numbers).")
  .option("--host <value>", "Host the user connects from (IPv4, IPv6, % wildcard, or localhost). Defaults to localhost.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (website_uid: string, database_name: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/websites/{website_uid}/databases/{database_name}/users";
      path = path.replace("{website_uid}", encodeURIComponent(website_uid));
      path = path.replace("{database_name}", encodeURIComponent(database_name));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.databaseUser !== undefined) body["database_user"] = opts.databaseUser;
      if (opts.password !== undefined) body["password"] = opts.password;
      if (opts.host !== undefined) body["host"] = opts.host;
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

// DELETE /api/agency-hosting/v1/websites/{website_uid} — agency-hosting_deleteAgencyPlanWebsiteV1
agency_hostingResource
  .command("delete-agency-plan-website")
  .description("Delete Agency Plan website")
  .argument("<website_uid>", "website_uid")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (website_uid: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/websites/{website_uid}";
      path = path.replace("{website_uid}", encodeURIComponent(website_uid));
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

// DELETE /api/agency-hosting/v1/websites/{website_uid}/cron-jobs/{uuid} — agency-hosting_deleteAgencyPlanWebsiteCronJobV1
agency_hostingResource
  .command("delete-agency-plan-website-cron-job")
  .description("Delete Agency Plan website cron job")
  .argument("<website_uid>", "website_uid")
  .argument("<uuid>", "uuid")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (website_uid: string, uuid: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/websites/{website_uid}/cron-jobs/{uuid}";
      path = path.replace("{website_uid}", encodeURIComponent(website_uid));
      path = path.replace("{uuid}", encodeURIComponent(uuid));
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

// DELETE /api/agency-hosting/v1/websites/{website_uid}/databases/{database_name} — agency-hosting_deleteAgencyPlanWebsiteDatabaseV1
agency_hostingResource
  .command("delete-agency-plan-website-database")
  .description("Delete Agency Plan website database")
  .argument("<website_uid>", "website_uid")
  .argument("<database_name>", "database_name")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (website_uid: string, database_name: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/websites/{website_uid}/databases/{database_name}";
      path = path.replace("{website_uid}", encodeURIComponent(website_uid));
      path = path.replace("{database_name}", encodeURIComponent(database_name));
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

// DELETE /api/agency-hosting/v1/websites/{website_uid}/databases/{database_name}/users/{database_user_name} — agency-hosting_deleteAgencyPlanWebsiteDatabaseUserV1
agency_hostingResource
  .command("delete-agency-plan-website-database-user")
  .description("Delete Agency Plan website database user")
  .argument("<website_uid>", "website_uid")
  .argument("<database_name>", "database_name")
  .argument("<database_user_name>", "database_user_name")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (website_uid: string, database_name: string, database_user_name: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/websites/{website_uid}/databases/{database_name}/users/{database_user_name}";
      path = path.replace("{website_uid}", encodeURIComponent(website_uid));
      path = path.replace("{database_name}", encodeURIComponent(database_name));
      path = path.replace("{database_user_name}", encodeURIComponent(database_user_name));
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

// GET /api/agency-hosting/v1/websites/{website_uid} — agency-hosting_getAgencyPlanWebsiteDetailsV1
agency_hostingResource
  .command("get-agency-plan-website-details")
  .description("Get Agency Plan website details")
  .argument("<website_uid>", "website_uid")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (website_uid: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/websites/{website_uid}";
      path = path.replace("{website_uid}", encodeURIComponent(website_uid));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/agency-hosting/v1/orders/{order_id}/websites/setups/{setup_uuid} — agency-hosting_getAgencyPlanWebsiteSetupStatusV1
agency_hostingResource
  .command("get-agency-plan-website-setup-status")
  .description("Get Agency Plan website setup status")
  .argument("<order_id>", "order_id")
  .argument("<setup_uuid>", "setup_uuid")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (order_id: string, setup_uuid: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/orders/{order_id}/websites/setups/{setup_uuid}";
      path = path.replace("{order_id}", encodeURIComponent(order_id));
      path = path.replace("{setup_uuid}", encodeURIComponent(setup_uuid));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/agency-hosting/v1/websites/{website_uid}/wordpress/settings — agency-hosting_getAgencyPlanWebsiteWordPressSettingsV1
agency_hostingResource
  .command("get-agency-plan-website-word-press-settings")
  .description("Get Agency Plan website WordPress settings")
  .argument("<website_uid>", "website_uid")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (website_uid: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/websites/{website_uid}/wordpress/settings";
      path = path.replace("{website_uid}", encodeURIComponent(website_uid));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// POST /api/agency-hosting/v1/websites/{website_uid}/files/import-archive — agency-hosting_importAgencyPlanWebsiteFromArchiveV1
agency_hostingResource
  .command("import-agency-plan-website-from-archive")
  .description("Import Agency Plan website from archive")
  .argument("<website_uid>", "website_uid")
  .option("--archive-name <value>", "Archive filename (e.g., archive.zip). The file must already be uploaded to the website's .h5g/ directory.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (website_uid: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/websites/{website_uid}/files/import-archive";
      path = path.replace("{website_uid}", encodeURIComponent(website_uid));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.archiveName !== undefined) body["archive_name"] = opts.archiveName;
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

// POST /api/agency-hosting/v1/websites/{website_uid}/domains — agency-hosting_linkDomainToAgencyPlanWebsiteV1
agency_hostingResource
  .command("link-domain-to-agency-plan-website")
  .description("Link domain to Agency Plan website")
  .argument("<website_uid>", "website_uid")
  .option("--domain <value>", "Fully qualified domain name to link to the website")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (website_uid: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/websites/{website_uid}/domains";
      path = path.replace("{website_uid}", encodeURIComponent(website_uid));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.domain !== undefined) body["domain"] = opts.domain;
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

// GET /api/agency-hosting/v1/domains — agency-hosting_listAgencyPlanDomainsV1
agency_hostingResource
  .command("list-agency-plan-domains")
  .description("List Agency Plan domains")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--website-uuids <value>", "Filter by website UIDs")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/domains";
      const params: Record<string, string> = {};
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      if (opts.perPage !== undefined && opts.perPage !== false) params["per_page"] = String(opts.perPage);
      if (opts.websiteUuids !== undefined && opts.websiteUuids !== false) params["website_uuids"] = String(opts.websiteUuids);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/agency-hosting/v1/orders — agency-hosting_listAgencyPlanOrdersV1
agency_hostingResource
  .command("list-agency-plan-orders")
  .description("List Agency Plan orders")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/orders";
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

// GET /api/agency-hosting/v1/websites/{website_uid}/cron-jobs — agency-hosting_listAgencyPlanWebsiteCronJobsV1
agency_hostingResource
  .command("list-agency-plan-website-cron-jobs")
  .description("List Agency Plan website cron jobs")
  .argument("<website_uid>", "website_uid")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (website_uid: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/websites/{website_uid}/cron-jobs";
      path = path.replace("{website_uid}", encodeURIComponent(website_uid));
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

// GET /api/agency-hosting/v1/websites/{website_uid}/databases — agency-hosting_listAgencyPlanWebsiteDatabasesV1
agency_hostingResource
  .command("list-agency-plan-website-databases")
  .description("List Agency Plan website databases")
  .argument("<website_uid>", "website_uid")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (website_uid: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/websites/{website_uid}/databases";
      path = path.replace("{website_uid}", encodeURIComponent(website_uid));
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

// GET /api/agency-hosting/v1/orders/{order_id}/datacenters — agency-hosting_listAvailableDatacentersForAnAgencyPlanOrderV1
agency_hostingResource
  .command("list-available-datacenters-for-an-agency-plan-order")
  .description("List available datacenters for an Agency Plan order")
  .argument("<order_id>", "order_id")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (order_id: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/orders/{order_id}/datacenters";
      path = path.replace("{order_id}", encodeURIComponent(order_id));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/agency-hosting/v1/websites/{website_uid}/wordpress/settings/versions — agency-hosting_listAvailableWordPressVersionsForAnAgencyPlanWebsiteV1
agency_hostingResource
  .command("list-available-word-press-versions-for-an-agency-plan-website")
  .description("List available WordPress versions for an Agency Plan website")
  .argument("<website_uid>", "website_uid")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (website_uid: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/websites/{website_uid}/wordpress/settings/versions";
      path = path.replace("{website_uid}", encodeURIComponent(website_uid));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/agency-hosting/v1/websites/{website_uid}/processes — agency-hosting_listRunningAgencyPlanWebsiteProcessesV1
agency_hostingResource
  .command("list-running-agency-plan-website-processes")
  .description("List running Agency Plan website processes")
  .argument("<website_uid>", "website_uid")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (website_uid: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/websites/{website_uid}/processes";
      path = path.replace("{website_uid}", encodeURIComponent(website_uid));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// POST /api/agency-hosting/v1/orders/{order_id}/websites/setups — agency-hosting_provisionANewAgencyPlanWebsiteV1
agency_hostingResource
  .command("provision-anew-agency-plan-website")
  .description("Provision a new Agency Plan website")
  .argument("<order_id>", "order_id")
  .option("--datacenter-code <value>", "Datacenter code where the website should be provisioned. Available codes depend on live capacity and are not a fixed set")
  .option("--flavor <value>", "Setup flavor: a specific WordPress version in the format `wp-<major>.<minor>` or `wp-<major>.<minor>.<patch>` (e.g. `wp-")
  .option("--domain <value>", "Primary domain to attach to the website. Omit or set to null to get a free auto-generated *.hostingersite.com subdomain ")
  .option("--type <value>", "Website type")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (order_id: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/orders/{order_id}/websites/setups";
      path = path.replace("{order_id}", encodeURIComponent(order_id));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.datacenterCode !== undefined) body["datacenter_code"] = opts.datacenterCode;
      if (opts.flavor !== undefined) body["flavor"] = opts.flavor;
      if (opts.domain !== undefined) body["domain"] = opts.domain;
      if (opts.type !== undefined) body["type"] = opts.type;
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

// DELETE /api/agency-hosting/v1/websites/{website_uid}/domains/{domain} — agency-hosting_unlinkDomainFromAgencyPlanWebsiteV1
agency_hostingResource
  .command("unlink-domain-from-agency-plan-website")
  .description("Unlink domain from Agency Plan website")
  .argument("<website_uid>", "website_uid")
  .argument("<domain>", "domain")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (website_uid: string, domain: string, opts: Opts) => {
    try {
      let path = "/api/agency-hosting/v1/websites/{website_uid}/domains/{domain}";
      path = path.replace("{website_uid}", encodeURIComponent(website_uid));
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
