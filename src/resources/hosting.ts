/** Auto-generated from Hostinger OpenAPI — resource `hosting` */
import { Command } from "commander";
import { client } from "../lib/client.js";
import { output } from "../lib/output.js";
import { handleError } from "../lib/errors.js";

type Opts = Record<string, any>;

export const hostingResource = new Command("hosting")
  .description("Hostinger hosting API");

// POST /api/hosting/v1/accounts/{username}/wordpress/{software}/plugins/activate — hosting_activateWordPressPluginV1
hostingResource
  .command("activate-word-press-plugin")
  .description("Activate WordPress plugin")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--plugin <value>", "Slug of the installed plugin to activate.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/plugins/activate";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.plugin !== undefined) body["plugin"] = opts.plugin;
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

// POST /api/hosting/v1/accounts/{username}/wordpress/{software}/themes/activate — hosting_activateWordPressThemeV1
hostingResource
  .command("activate-word-press-theme")
  .description("Activate WordPress theme")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--theme <value>", "Slug of the installed theme to activate.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/themes/activate";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.theme !== undefined) body["theme"] = opts.theme;
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

// PATCH /api/hosting/v1/accounts/{username}/databases/{name}/change-password — hosting_changeDatabasePasswordV1
hostingResource
  .command("change-database-password")
  .description("Change database password")
  .argument("<username>", "username")
  .argument("<name>", "name")
  .option("--password <value>", "New database user password.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, name: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/databases/{name}/change-password";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{name}", encodeURIComponent(name));
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

// GET /api/hosting/v1/wordpress/plugins/is-woocommerce-installed — hosting_checkIfWooCommerceIsInstalledV1
hostingResource
  .command("check-if-woo-commerce-is-installed")
  .description("Check if WooCommerce is installed")
  .option("--domain <value>", "Filter by domain name (exact match)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/hosting/v1/wordpress/plugins/is-woocommerce-installed";
      const params: Record<string, string> = {};
      if (opts.domain !== undefined && opts.domain !== false) params["domain"] = String(opts.domain);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// POST /api/hosting/v1/accounts/{username}/wordpress/installations/check-is-valid — hosting_checkIfWordPressInstallationsAreValidV1
hostingResource
  .command("check-if-word-press-installations-are-valid")
  .description("Check if WordPress installations are valid")
  .argument("<username>", "username")
  .option("--force", "Force fresh validation without cache. Preferable for troubleshooting purposes.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/installations/check-is-valid";
      path = path.replace("{username}", encodeURIComponent(username));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.force !== undefined) body["force"] = Boolean(opts.force);
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

// DELETE /api/hosting/v1/accounts/{username}/websites/{domain}/cache/clear — hosting_clearWebsiteCacheV1
hostingResource
  .command("clear-website-cache")
  .description("Clear website cache")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .option("--directory <value>", "Directory of the website installation to clear, relative to the website root. Defaults to the websit")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/cache/clear";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      if (opts.directory !== undefined && opts.directory !== false) params["directory"] = String(opts.directory);
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

// POST /api/hosting/v1/accounts/{username}/cron-jobs — hosting_createAccountCronJobV1
hostingResource
  .command("create-account-cron-job")
  .description("Create account cron job")
  .argument("<username>", "username")
  .option("--time <value>", "Cron schedule expression (for example \"0 2 * * *\" runs daily at 02:00).")
  .option("--command <value>", "Command to execute on the schedule.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/cron-jobs";
      path = path.replace("{username}", encodeURIComponent(username));
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

// POST /api/hosting/v1/accounts/{username}/databases — hosting_createAccountDatabaseV1
hostingResource
  .command("create-account-database")
  .description("Create account database")
  .argument("<username>", "username")
  .option("--name <value>", "Database name. If the account username prefix is omitted, it is added automatically.")
  .option("--user <value>", "Database user. If the account username prefix is omitted, it is added automatically.")
  .option("--password <value>", "Database user password.")
  .option("--website-domain <value>", "Website domain assigned to the database.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/databases";
      path = path.replace("{username}", encodeURIComponent(username));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.name !== undefined) body["name"] = opts.name;
      if (opts.user !== undefined) body["user"] = opts.user;
      if (opts.password !== undefined) body["password"] = opts.password;
      if (opts.websiteDomain !== undefined) body["website_domain"] = opts.websiteDomain;
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

// POST /api/hosting/v1/accounts/{username}/databases/{name}/remote-connections — hosting_createDatabaseRemoteConnectionV1
hostingResource
  .command("create-database-remote-connection")
  .description("Create database remote connection")
  .argument("<username>", "username")
  .argument("<name>", "name")
  .option("--ip <value>", "Remote host to allow: an IPv4/IPv6 address, or \"%\" for any host.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, name: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/databases/{name}/remote-connections";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{name}", encodeURIComponent(name));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.ip !== undefined) body["ip"] = opts.ip;
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

// POST /api/hosting/v1/accounts/{username}/wordpress/{software}/login/links — hosting_createLoginLinksV1
hostingResource
  .command("create-login-links")
  .description("Create login links")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/login/links";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
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

// POST /api/hosting/v1/accounts/{username}/websites/{domain}/nodejs/builds/from-archive — hosting_createNodeJSBuildFromArchiveV1
hostingResource
  .command("create-node-jsbuild-from-archive")
  .description("Create NodeJS build from archive")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .option("--archive <value>", "Project archive file (.zip, .tar.gz, or .tgz), maximum 50MB")
  .option("--node-version <value>", "Node.js version override (auto-detected from package.json if omitted)")
  .option("--app-type <value>", "Node.js application type override")
  .option("--root-directory <value>", "Application root directory override (where package.json is located) relative to public_html")
  .option("--output-directory <value>", "Build output directory override relative to the root directory")
  .option("--build-script <value>", "Build script override")
  .option("--entry-file <value>", "Main entry point file override")
  .option("--package-manager <value>", "Package manager override")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/nodejs/builds/from-archive";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.archive !== undefined) body["archive"] = opts.archive;
      if (opts.nodeVersion !== undefined) body["node_version"] = Number(opts.nodeVersion);
      if (opts.appType !== undefined) body["app_type"] = opts.appType;
      if (opts.rootDirectory !== undefined) body["root_directory"] = opts.rootDirectory;
      if (opts.outputDirectory !== undefined) body["output_directory"] = opts.outputDirectory;
      if (opts.buildScript !== undefined) body["build_script"] = opts.buildScript;
      if (opts.entryFile !== undefined) body["entry_file"] = opts.entryFile;
      if (opts.packageManager !== undefined) body["package_manager"] = opts.packageManager;
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

// POST /api/hosting/v1/websites — hosting_createWebsiteV1
hostingResource
  .command("create-website")
  .description("Create website")
  .option("--domain <value>", "Domain name for the website. Cannot start with \"www.\"")
  .option("--order-id <value>", "ID of the associated order")
  .option("--datacenter-code <value>", "Datacenter code. This parameter is required when creating the first website on a new hosting plan.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/hosting/v1/websites";
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.domain !== undefined) body["domain"] = opts.domain;
      if (opts.orderId !== undefined) body["order_id"] = Number(opts.orderId);
      if (opts.datacenterCode !== undefined) body["datacenter_code"] = opts.datacenterCode;
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

// POST /api/hosting/v1/accounts/{username}/websites/{domain}/parked-domains — hosting_createWebsiteParkedDomainV1
hostingResource
  .command("create-website-parked-domain")
  .description("Create website parked domain")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .option("--parked-domain <value>", "Domain name or IP address to park on the selected website")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/parked-domains";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.parkedDomain !== undefined) body["parked_domain"] = opts.parkedDomain;
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

// POST /api/hosting/v1/accounts/{username}/websites/{domain}/subdomains — hosting_createWebsiteSubdomainV1
hostingResource
  .command("create-website-subdomain")
  .description("Create website subdomain")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .option("--subdomain <value>", "Subdomain prefix to create under the selected website")
  .option("--directory <value>", "Directory name for the subdomain relative to the website root")
  .option("--is-using-public-directory", "Use the website public directory as the subdomain root directory")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/subdomains";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.subdomain !== undefined) body["subdomain"] = opts.subdomain;
      if (opts.directory !== undefined) body["directory"] = opts.directory;
      if (opts.isUsingPublicDirectory !== undefined) body["is_using_public_directory"] = Boolean(opts.isUsingPublicDirectory);
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

// POST /api/hosting/v1/accounts/{username}/wordpress/{software}/plugins/deactivate — hosting_deactivateWordPressPluginV1
hostingResource
  .command("deactivate-word-press-plugin")
  .description("Deactivate WordPress plugin")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--plugin <value>", "Slug of the installed plugin to deactivate.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/plugins/deactivate";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.plugin !== undefined) body["plugin"] = opts.plugin;
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

// DELETE /api/hosting/v1/accounts/{username}/cron-jobs/{uid} — hosting_deleteAccountCronJobV1
hostingResource
  .command("delete-account-cron-job")
  .description("Delete account cron job")
  .argument("<username>", "username")
  .argument("<uid>", "uid")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, uid: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/cron-jobs/{uid}";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{uid}", encodeURIComponent(uid));
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

// DELETE /api/hosting/v1/accounts/{username}/databases/{name} — hosting_deleteAccountDatabaseV1
hostingResource
  .command("delete-account-database")
  .description("Delete account database")
  .argument("<username>", "username")
  .argument("<name>", "name")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, name: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/databases/{name}";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{name}", encodeURIComponent(name));
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

// DELETE /api/hosting/v1/accounts/{username}/databases/{name}/remote-connections — hosting_deleteDatabaseRemoteConnectionV1
hostingResource
  .command("delete-database-remote-connection")
  .description("Delete database remote connection")
  .argument("<username>", "username")
  .argument("<name>", "name")
  .requiredOption("--ip <value>", "Remote host to revoke: the IPv4/IPv6 address, or \"%\", exactly as returned by the list remote connect")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, name: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/databases/{name}/remote-connections";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{name}", encodeURIComponent(name));
      const params: Record<string, string> = {};
      if (opts.ip !== undefined && opts.ip !== false) params["ip"] = String(opts.ip);
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

// DELETE /api/hosting/v1/websites/{domain} — hosting_deleteWebsiteV1
hostingResource
  .command("delete-website")
  .description("Delete website")
  .argument("<domain>", "domain")
  .option("--confirm", "Must be boolean true to confirm the permanent deletion of the website.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (domain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/websites/{domain}";
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.confirm !== undefined) body["confirm"] = Boolean(opts.confirm);
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

// DELETE /api/hosting/v1/accounts/{username}/websites/{domain}/parked-domains/{parkedDomain} — hosting_deleteWebsiteParkedDomainV1
hostingResource
  .command("delete-website-parked-domain")
  .description("Delete website parked domain")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .argument("<parkedDomain>", "parkedDomain")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, parkedDomain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/parked-domains/{parkedDomain}";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
      path = path.replace("{parkedDomain}", encodeURIComponent(parkedDomain));
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

// DELETE /api/hosting/v1/accounts/{username}/websites/{domain}/subdomains/{subdomain} — hosting_deleteWebsiteSubdomainV1
hostingResource
  .command("delete-website-subdomain")
  .description("Delete website subdomain")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .argument("<subdomain>", "subdomain")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, subdomain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/subdomains/{subdomain}";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
      path = path.replace("{subdomain}", encodeURIComponent(subdomain));
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

// DELETE /api/hosting/v1/accounts/{username}/wordpress/{software} — hosting_deleteWordPressInstallationV1
hostingResource
  .command("delete-word-press-installation")
  .description("Delete WordPress installation")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--delete-files", "Delete installation files from disk.")
  .option("--delete-database", "Delete the installation database.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.deleteFiles !== undefined) body["delete_files"] = Boolean(opts.deleteFiles);
      if (opts.deleteDatabase !== undefined) body["delete_database"] = Boolean(opts.deleteDatabase);
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

// POST /api/hosting/v1/accounts/{username}/wordpress/installations/detect — hosting_detectWordPressInstallationsV1
hostingResource
  .command("detect-word-press-installations")
  .description("Detect WordPress installations")
  .argument("<username>", "username")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/installations/detect";
      path = path.replace("{username}", encodeURIComponent(username));
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

// POST /api/hosting/v1/domains/free-subdomains — hosting_generateAFreeSubdomainV1
hostingResource
  .command("generate-afree-subdomain")
  .description("Generate a free subdomain")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/hosting/v1/domains/free-subdomains";
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

// GET /api/hosting/v1/accounts/{username}/cron-jobs/{uid}/output — hosting_getCronJobOutputV1
hostingResource
  .command("get-cron-job-output")
  .description("Get cron job output")
  .argument("<username>", "username")
  .argument("<uid>", "uid")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, uid: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/cron-jobs/{uid}/output";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{uid}", encodeURIComponent(uid));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/accounts/{username}/wordpress/{software}/jwt-token — hosting_getInstallationJWTTokenV1
hostingResource
  .command("get-installation-jwttoken")
  .description("Get installation JWT token")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/jwt-token";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/accounts/{username}/websites/{domain}/nodejs/builds/{uuid}/logs — hosting_getNodeJSBuildLogsV1
hostingResource
  .command("get-node-jsbuild-logs")
  .description("Get NodeJS build logs")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .argument("<uuid>", "uuid")
  .option("--from-line <value>", "Line from which to start retrieving logs")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, uuid: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/nodejs/builds/{uuid}/logs";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
      path = path.replace("{uuid}", encodeURIComponent(uuid));
      const params: Record<string, string> = {};
      if (opts.fromLine !== undefined && opts.fromLine !== false) params["from_line"] = String(opts.fromLine);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/accounts/{username}/databases/{name}/phpmyadmin-link — hosting_getPhpMyAdminLinkV1
hostingResource
  .command("get-php-my-admin-link")
  .description("Get phpMyAdmin link")
  .argument("<username>", "username")
  .argument("<name>", "name")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, name: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/databases/{name}/phpmyadmin-link";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{name}", encodeURIComponent(name));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/accounts/{username}/websites/{domain}/php/details — hosting_getPHPDetailsV1
hostingResource
  .command("get-phpdetails")
  .description("Get PHP details")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/php/details";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/accounts/{username}/websites/{domain}/php/php-info — hosting_getPHPInfoV1
hostingResource
  .command("get-phpinfo")
  .description("Get PHP info")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/php/php-info";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// POST /api/hosting/v1/accounts/{username}/wordpress/installations — hosting_installWordPressV1
hostingResource
  .command("install-word-press")
  .description("Install WordPress")
  .argument("<username>", "username")
  .option("--domain <value>", "Domain of the existing website where WordPress will be installed")
  .option("--site-title <value>", "Title of the WordPress site")
  .option("--language <value>", "WordPress locale. Defaults to en_US when omitted.")
  .option("--directory <value>", "Relative directory to install WordPress into. Defaults to the website root when omitted.")
  .option("--overwrite", "When false (default), does not replace an existing installation. If WordPress is already installed on the domain/path, t")
  .option("--auto-updates <value>", "WordPress core auto-update policy")
  .option("--version <value>", "WordPress core version to install. If omitted, the latest core version compatible with the account vhost PHP version is ")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/installations";
      path = path.replace("{username}", encodeURIComponent(username));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.domain !== undefined) body["domain"] = opts.domain;
      if (opts.siteTitle !== undefined) body["site_title"] = opts.siteTitle;
      if (opts.language !== undefined) body["language"] = opts.language;
      if (opts.directory !== undefined) body["directory"] = opts.directory;
      if (opts.overwrite !== undefined) body["overwrite"] = Boolean(opts.overwrite);
      if (opts.autoUpdates !== undefined) body["auto_updates"] = opts.autoUpdates;
      if (opts.version !== undefined) body["version"] = opts.version;
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

// POST /api/hosting/v1/accounts/{username}/wordpress/{software}/plugins/install — hosting_installWordPressPluginsV1
hostingResource
  .command("install-word-press-plugins")
  .description("Install WordPress plugins")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/plugins/install";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
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

// POST /api/hosting/v1/accounts/{username}/wordpress/{software}/themes/install — hosting_installWordPressThemeV1
hostingResource
  .command("install-word-press-theme")
  .description("Install WordPress theme")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--theme <value>", "Slug of the theme to install. Hostinger theme slugs (hostinger-blog, hostinger-affiliate-theme, hostinger-ai-theme) trig")
  .option("--palette <value>", "Palette identifier. Only applied when the theme is a Hostinger theme; the default is used when omitted.")
  .option("--layout <value>", "Layout identifier. Only applied when the theme is a Hostinger theme; the default is used when omitted.")
  .option("--font <value>", "Font identifier. Only applied when the theme is a Hostinger theme; the default is used when omitted.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/themes/install";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.theme !== undefined) body["theme"] = opts.theme;
      if (opts.palette !== undefined) body["palette"] = opts.palette;
      if (opts.layout !== undefined) body["layout"] = opts.layout;
      if (opts.font !== undefined) body["font"] = opts.font;
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

// GET /api/hosting/v1/accounts/{username}/cron-jobs — hosting_listAccountCronJobsV1
hostingResource
  .command("list-account-cron-jobs")
  .description("List account cron jobs")
  .argument("<username>", "username")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/cron-jobs";
      path = path.replace("{username}", encodeURIComponent(username));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/accounts/{username}/databases — hosting_listAccountDatabasesV1
hostingResource
  .command("list-account-databases")
  .description("List account databases")
  .argument("<username>", "username")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--domain <value>", "Filter by domain name (exact match)")
  .option("--is-assigned", "When used with domain, return only databases assigned to that domain.")
  .option("--search <value>", "Search databases by name, user, or creation date.")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/databases";
      path = path.replace("{username}", encodeURIComponent(username));
      const params: Record<string, string> = {};
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      if (opts.perPage !== undefined && opts.perPage !== false) params["per_page"] = String(opts.perPage);
      if (opts.domain !== undefined && opts.domain !== false) params["domain"] = String(opts.domain);
      if (opts.isAssigned !== undefined && opts.isAssigned !== false) params["is_assigned"] = String(opts.isAssigned);
      if (opts.search !== undefined && opts.search !== false) params["search"] = String(opts.search);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/datacenters — hosting_listAvailableDatacentersV1
hostingResource
  .command("list-available-datacenters")
  .description("List available datacenters")
  .requiredOption("--order-id <value>", "Order ID")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/hosting/v1/datacenters";
      const params: Record<string, string> = {};
      if (opts.orderId !== undefined && opts.orderId !== false) params["order_id"] = String(opts.orderId);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/accounts/{username}/wordpress/{software}/updates — hosting_listAvailableWordPressCoreUpdatesV1
hostingResource
  .command("list-available-word-press-core-updates")
  .description("List available WordPress core updates")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/updates";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/accounts/{username}/wordpress/{software}/plugins/available — hosting_listAvailableWordPressPluginsV1
hostingResource
  .command("list-available-word-press-plugins")
  .description("List available WordPress plugins")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/plugins/available";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/accounts/{username}/databases/remote-connections — hosting_listDatabaseRemoteConnectionsV1
hostingResource
  .command("list-database-remote-connections")
  .description("List database remote connections")
  .argument("<username>", "username")
  .option("--domain <value>", "Filter remote connections by the domain the database is assigned to. Rules for databases not assigne")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/databases/remote-connections";
      path = path.replace("{username}", encodeURIComponent(username));
      const params: Record<string, string> = {};
      if (opts.domain !== undefined && opts.domain !== false) params["domain"] = String(opts.domain);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/accounts/{username}/wordpress/{software}/plugins — hosting_listInstalledWordPressPluginsV1
hostingResource
  .command("list-installed-word-press-plugins")
  .description("List installed WordPress plugins")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--category <value>", "Filter installed plugins by category.")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/plugins";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
      const params: Record<string, string> = {};
      if (opts.category !== undefined && opts.category !== false) params["category"] = String(opts.category);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/accounts/{username}/wordpress/{software}/themes — hosting_listInstalledWordPressThemesV1
hostingResource
  .command("list-installed-word-press-themes")
  .description("List installed WordPress themes")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/themes";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/accounts/{username}/websites/{domain}/nodejs/builds — hosting_listNodeJSBuildsV1
hostingResource
  .command("list-node-jsbuilds")
  .description("List NodeJS builds")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--states <value>", "Build states to filter by")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/nodejs/builds";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      if (opts.perPage !== undefined && opts.perPage !== false) params["per_page"] = String(opts.perPage);
      if (opts.states !== undefined && opts.states !== false) params["states"] = String(opts.states);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/accounts/{username}/websites/{domain}/nodejs/vulnerabilities — hosting_listNode.jsVulnerabilitiesV1
hostingResource
  .command("list-node.js-vulnerabilities")
  .description("List Node.js vulnerabilities")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .option("--severities <value>", "Severities to filter by")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/nodejs/vulnerabilities";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      if (opts.severities !== undefined && opts.severities !== false) params["severities"] = String(opts.severities);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/orders — hosting_listOrdersV1
hostingResource
  .command("list-orders")
  .description("List orders")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--statuses <value>", "Filter by order statuses")
  .option("--order-ids <value>", "Filter by specific order IDs")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/hosting/v1/orders";
      const params: Record<string, string> = {};
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      if (opts.perPage !== undefined && opts.perPage !== false) params["per_page"] = String(opts.perPage);
      if (opts.statuses !== undefined && opts.statuses !== false) params["statuses"] = String(opts.statuses);
      if (opts.orderIds !== undefined && opts.orderIds !== false) params["order_ids"] = String(opts.orderIds);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/wordpress/plugins/suggested — hosting_listSuggestedWordPressPluginsV1
hostingResource
  .command("list-suggested-word-press-plugins")
  .description("List suggested WordPress plugins")
  .option("--order-id <value>", "Optionally scope suggestions to a specific order.")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/hosting/v1/wordpress/plugins/suggested";
      const params: Record<string, string> = {};
      if (opts.orderId !== undefined && opts.orderId !== false) params["order_id"] = String(opts.orderId);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/accounts/{username}/websites/{domain}/parked-domains — hosting_listWebsiteParkedDomainsV1
hostingResource
  .command("list-website-parked-domains")
  .description("List website parked domains")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/parked-domains";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/accounts/{username}/websites/{domain}/subdomains — hosting_listWebsiteSubdomainsV1
hostingResource
  .command("list-website-subdomains")
  .description("List website subdomains")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/subdomains";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/websites — hosting_listWebsitesV1
hostingResource
  .command("list-websites")
  .description("List websites")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--username <value>", "Filter by specific username")
  .option("--order-id <value>", "Order ID")
  .option("--is-enabled", "Filter by enabled status")
  .option("--domain <value>", "Filter by domain name (exact match)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/hosting/v1/websites";
      const params: Record<string, string> = {};
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      if (opts.perPage !== undefined && opts.perPage !== false) params["per_page"] = String(opts.perPage);
      if (opts.username !== undefined && opts.username !== false) params["username"] = String(opts.username);
      if (opts.orderId !== undefined && opts.orderId !== false) params["order_id"] = String(opts.orderId);
      if (opts.isEnabled !== undefined && opts.isEnabled !== false) params["is_enabled"] = String(opts.isEnabled);
      if (opts.domain !== undefined && opts.domain !== false) params["domain"] = String(opts.domain);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/wordpress/installations — hosting_listWordPressInstallationsV1
hostingResource
  .command("list-word-press-installations")
  .description("List WordPress installations")
  .option("--username <value>", "Filter by specific username")
  .option("--domain <value>", "Filter by domain name (exact match)")
  .option("--ownership <value>", "Filter by ownership type. Defaults to \"owned\". Use \"all\" to include both owned and managed installat")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/hosting/v1/wordpress/installations";
      const params: Record<string, string> = {};
      if (opts.username !== undefined && opts.username !== false) params["username"] = String(opts.username);
      if (opts.domain !== undefined && opts.domain !== false) params["domain"] = String(opts.domain);
      if (opts.ownership !== undefined && opts.ownership !== false) params["ownership"] = String(opts.ownership);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/wordpress/themes — hosting_listWordPressThemesV1
hostingResource
  .command("list-word-press-themes")
  .description("List WordPress themes")
  .option("--order-id <value>", "Optionally scope themes to a specific order.")
  .option("--search <value>", "Search term to match against theme names.")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/hosting/v1/wordpress/themes";
      const params: Record<string, string> = {};
      if (opts.orderId !== undefined && opts.orderId !== false) params["order_id"] = String(opts.orderId);
      if (opts.search !== undefined && opts.search !== false) params["search"] = String(opts.search);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// POST /api/hosting/v1/accounts/{username}/websites/{domain}/nodejs/vulnerabilities/patch — hosting_patchNode.jsVulnerabilitiesV1
hostingResource
  .command("patch-node.js-vulnerabilities")
  .description("Patch Node.js vulnerabilities")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/nodejs/vulnerabilities/patch";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
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

// POST /api/hosting/v1/accounts/{username}/wordpress/{software}/litespeed-cache/purge — hosting_purgeLiteSpeedCacheV1
hostingResource
  .command("purge-lite-speed-cache")
  .description("Purge LiteSpeed Cache")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/litespeed-cache/purge";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
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

// PATCH /api/hosting/v1/accounts/{username}/databases/{name}/repair — hosting_repairDatabaseV1
hostingResource
  .command("repair-database")
  .description("Repair database")
  .argument("<username>", "username")
  .argument("<name>", "name")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, name: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/databases/{name}/repair";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{name}", encodeURIComponent(name));
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

// PATCH /api/hosting/v1/accounts/{username}/websites/{domain}/php/extensions/reset — hosting_resetPHPExtensionsV1
hostingResource
  .command("reset-phpextensions")
  .description("Reset PHP extensions")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/php/extensions/reset";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
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

// POST /api/hosting/v1/accounts/{username}/websites/{domain}/nodejs/server/restart — hosting_restartNode.jsApplicationV1
hostingResource
  .command("restart-node.js-application")
  .description("Restart Node.js application")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/nodejs/server/restart";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
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

// GET /api/hosting/v1/wordpress/plugins — hosting_searchWordPressPluginsV1
hostingResource
  .command("search-word-press-plugins")
  .description("Search WordPress plugins")
  .requiredOption("--search <value>", "Search term to match against plugin names. Minimum 3 characters.")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/hosting/v1/wordpress/plugins";
      const params: Record<string, string> = {};
      if (opts.search !== undefined && opts.search !== false) params["search"] = String(opts.search);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// PATCH /api/hosting/v1/accounts/{username}/wordpress/{software}/hostinger-plugins/ai-option/status — hosting_setAIOptionStatusV1
hostingResource
  .command("set-aioption-status")
  .description("Set AI option status")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--option <value>", "AI option name")
  .option("--enable", "Enable (true) or disable (false) the AI option.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/hostinger-plugins/ai-option/status";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.option !== undefined) body["option"] = opts.option;
      if (opts.enable !== undefined) body["enable"] = Boolean(opts.enable);
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

// GET /api/hosting/v1/accounts/{username}/wordpress/{software}/hostinger-plugins/ai-option/status — hosting_showAIOptionStatusV1
hostingResource
  .command("show-aioption-status")
  .description("Show AI option status")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--option <value>", "Filter the status by a single AI option.")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/hostinger-plugins/ai-option/status";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
      const params: Record<string, string> = {};
      if (opts.option !== undefined && opts.option !== false) params["option"] = String(opts.option);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/accounts/{username}/wordpress/{software}/litespeed-cache/status — hosting_showLiteSpeedCacheStatusV1
hostingResource
  .command("show-lite-speed-cache-status")
  .description("Show LiteSpeed Cache status")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/litespeed-cache/status";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/accounts/{username}/wordpress/{software}/maintenance/status — hosting_showMaintenanceStatusV1
hostingResource
  .command("show-maintenance-status")
  .description("Show maintenance status")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/maintenance/status";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/accounts/{username}/wordpress/{software}/memcached/status — hosting_showMemcachedObjectCacheStatusV1
hostingResource
  .command("show-memcached-object-cache-status")
  .description("Show Memcached object cache status")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/memcached/status";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/hosting/v1/accounts/{username}/wordpress/{software}/version — hosting_showWordPressCoreVersionV1
hostingResource
  .command("show-word-press-core-version")
  .description("Show WordPress core version")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/version";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// PATCH /api/hosting/v1/accounts/{username}/websites/{domain}/cacheless-mode/toggle — hosting_toggleCachelessModeV1
hostingResource
  .command("toggle-cacheless-mode")
  .description("Toggle cacheless mode")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .option("--enabled", "Turn development (cacheless) mode on (true) or off (false) for the website.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/cacheless-mode/toggle";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.enabled !== undefined) body["enabled"] = Boolean(opts.enabled);
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

// PATCH /api/hosting/v1/accounts/{username}/wordpress/{software}/maintenance/toggle — hosting_toggleMaintenanceModeV1
hostingResource
  .command("toggle-maintenance-mode")
  .description("Toggle maintenance mode")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--enabled", "Enable (true) or disable (false) maintenance mode for the WordPress installation.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/maintenance/toggle";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.enabled !== undefined) body["enabled"] = Boolean(opts.enabled);
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

// PATCH /api/hosting/v1/accounts/{username}/wordpress/{software}/memcached/toggle — hosting_toggleMemcachedObjectCacheV1
hostingResource
  .command("toggle-memcached-object-cache")
  .description("Toggle Memcached object cache")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--enabled", "Activate (true) or deactivate (false) the Memcached object cache for the WordPress installation.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/memcached/toggle";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.enabled !== undefined) body["enabled"] = Boolean(opts.enabled);
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

// PATCH /api/hosting/v1/accounts/{username}/websites/{domain}/cache/toggle — hosting_toggleWebsiteCacheV1
hostingResource
  .command("toggle-website-cache")
  .description("Toggle website cache")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .option("--enabled", "Turn server-side caching on (true) or off (false) for the website.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/cache/toggle";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.enabled !== undefined) body["enabled"] = Boolean(opts.enabled);
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

// POST /api/hosting/v1/accounts/{username}/wordpress/{software}/plugins/uninstall — hosting_uninstallWordPressPluginsV1
hostingResource
  .command("uninstall-word-press-plugins")
  .description("Uninstall WordPress plugins")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/plugins/uninstall";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
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

// POST /api/hosting/v1/accounts/{username}/wordpress/{software}/themes/uninstall — hosting_uninstallWordPressThemesV1
hostingResource
  .command("uninstall-word-press-themes")
  .description("Uninstall WordPress themes")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/themes/uninstall";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
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

// POST /api/hosting/v1/accounts/{username}/wordpress/{software}/plugins/hostinger/update — hosting_updateHostingerWordPressPluginV1
hostingResource
  .command("update-hostinger-word-press-plugin")
  .description("Update Hostinger WordPress plugin")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--slug <value>", "Slug of the Hostinger plugin to update to its latest version.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/plugins/hostinger/update";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.slug !== undefined) body["slug"] = opts.slug;
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

// PATCH /api/hosting/v1/accounts/{username}/websites/{domain}/php/extensions — hosting_updatePHPExtensionsV1
hostingResource
  .command("update-phpextensions")
  .description("Update PHP extensions")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/php/extensions";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
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

// PATCH /api/hosting/v1/accounts/{username}/websites/{domain}/php/options — hosting_updatePHPOptionsV1
hostingResource
  .command("update-phpoptions")
  .description("Update PHP options")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/php/options";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
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

// PATCH /api/hosting/v1/accounts/{username}/websites/{domain}/php/version — hosting_updatePHPVersionV1
hostingResource
  .command("update-phpversion")
  .description("Update PHP version")
  .argument("<username>", "username")
  .argument("<domain>", "domain")
  .option("--version <value>", "PHP version to switch the website to.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, domain: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/websites/{domain}/php/version";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{domain}", encodeURIComponent(domain));
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

// POST /api/hosting/v1/accounts/{username}/wordpress/{software}/update — hosting_updateWordPressCoreV1
hostingResource
  .command("update-word-press-core")
  .description("Update WordPress core")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--minor", "Update the minor version only.")
  .option("--version <value>", "Update to a specific WordPress core version.")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/update";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.minor !== undefined) body["minor"] = Boolean(opts.minor);
      if (opts.version !== undefined) body["version"] = opts.version;
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

// POST /api/hosting/v1/accounts/{username}/wordpress/{software}/plugins/update — hosting_updateWordPressPluginsV1
hostingResource
  .command("update-word-press-plugins")
  .description("Update WordPress plugins")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/plugins/update";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
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

// POST /api/hosting/v1/accounts/{username}/wordpress/{software}/themes/update — hosting_updateWordPressThemesV1
hostingResource
  .command("update-word-press-themes")
  .description("Update WordPress themes")
  .argument("<username>", "username")
  .argument("<software>", "software")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (username: string, software: string, opts: Opts) => {
    try {
      let path = "/api/hosting/v1/accounts/{username}/wordpress/{software}/themes/update";
      path = path.replace("{username}", encodeURIComponent(username));
      path = path.replace("{software}", encodeURIComponent(software));
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

// POST /api/hosting/v1/domains/verify-ownership — hosting_verifyDomainOwnershipV1
hostingResource
  .command("verify-domain-ownership")
  .description("Verify domain ownership")
  .option("--domain <value>", "Domain to verify ownership for")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/hosting/v1/domains/verify-ownership";
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
