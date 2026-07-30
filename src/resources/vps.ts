/** Auto-generated from Hostinger OpenAPI — resource `vps` */
import { Command } from "commander";
import { client } from "../lib/client.js";
import { output } from "../lib/output.js";
import { handleError } from "../lib/errors.js";

type Opts = Record<string, any>;

export const vpsResource = new Command("vps")
  .description("Hostinger vps API");

// POST /api/vps/v1/firewall/{firewallId}/activate/{virtualMachineId} — VPS_activateFirewallV1
vpsResource
  .command("activate-firewall")
  .description("Activate firewall")
  .argument("<firewallId>", "firewallId")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (firewallId: string, virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/firewall/{firewallId}/activate/{virtualMachineId}";
      path = path.replace("{firewallId}", encodeURIComponent(firewallId));
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
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

// POST /api/vps/v1/public-keys/attach/{virtualMachineId} — VPS_attachPublicKeyV1
vpsResource
  .command("attach-public-key")
  .description("Attach public key")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/public-keys/attach/{virtualMachineId}";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
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

// POST /api/vps/v1/firewall/{firewallId}/rules — VPS_createFirewallRuleV1
vpsResource
  .command("create-firewall-rule")
  .description("Create firewall rule")
  .argument("<firewallId>", "firewallId")
  .option("--protocol <value>", "protocol")
  .option("--port <value>", "Port or port range, ex: 1024:2048")
  .option("--source <value>", "source")
  .option("--source-detail <value>", "IP range, CIDR, single IP or `any`")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (firewallId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/firewall/{firewallId}/rules";
      path = path.replace("{firewallId}", encodeURIComponent(firewallId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.protocol !== undefined) body["protocol"] = opts.protocol;
      if (opts.port !== undefined) body["port"] = opts.port;
      if (opts.source !== undefined) body["source"] = opts.source;
      if (opts.sourceDetail !== undefined) body["source_detail"] = opts.sourceDetail;
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

// POST /api/vps/v1/firewall — VPS_createNewFirewallV1
vpsResource
  .command("create-new-firewall")
  .description("Create new firewall")
  .option("--name <value>", "name")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/vps/v1/firewall";
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

// POST /api/vps/v1/virtual-machines/{virtualMachineId}/docker — VPS_createNewProjectV1
vpsResource
  .command("create-new-project")
  .description("Create new project")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--project-name <value>", "Docker Compose project name using alphanumeric characters, dashes, and underscores only")
  .option("--content <value>", "URL pointing to docker-compose.yaml file, Github repository or raw YAML content of the compose file")
  .option("--environment <value>", "Project environment variables")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/docker";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.projectName !== undefined) body["project_name"] = opts.projectName;
      if (opts.content !== undefined) body["content"] = opts.content;
      if (opts.environment !== undefined) body["environment"] = opts.environment;
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

// POST /api/vps/v1/post-install-scripts — VPS_createPostInstallScriptV1
vpsResource
  .command("create-post-install-script")
  .description("Create post-install script")
  .option("--name <value>", "Name of the script")
  .option("--content <value>", "Content of the script")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/vps/v1/post-install-scripts";
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.name !== undefined) body["name"] = opts.name;
      if (opts.content !== undefined) body["content"] = opts.content;
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

// POST /api/vps/v1/virtual-machines/{virtualMachineId}/ptr/{ipAddressId} — VPS_createPTRRecordV1
vpsResource
  .command("create-ptrrecord")
  .description("Create PTR record")
  .argument("<virtualMachineId>", "virtualMachineId")
  .argument("<ipAddressId>", "ipAddressId")
  .option("--domain <value>", "Pointer record domain")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, ipAddressId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/ptr/{ipAddressId}";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      path = path.replace("{ipAddressId}", encodeURIComponent(ipAddressId));
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

// POST /api/vps/v1/public-keys — VPS_createPublicKeyV1
vpsResource
  .command("create-public-key")
  .description("Create public key")
  .option("--name <value>", "name")
  .option("--key <value>", "key")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/vps/v1/public-keys";
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.name !== undefined) body["name"] = opts.name;
      if (opts.key !== undefined) body["key"] = opts.key;
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

// POST /api/vps/v1/virtual-machines/{virtualMachineId}/snapshot — VPS_createSnapshotV1
vpsResource
  .command("create-snapshot")
  .description("Create snapshot")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/snapshot";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
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

// POST /api/vps/v1/firewall/{firewallId}/deactivate/{virtualMachineId} — VPS_deactivateFirewallV1
vpsResource
  .command("deactivate-firewall")
  .description("Deactivate firewall")
  .argument("<firewallId>", "firewallId")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (firewallId: string, virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/firewall/{firewallId}/deactivate/{virtualMachineId}";
      path = path.replace("{firewallId}", encodeURIComponent(firewallId));
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
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

// DELETE /api/vps/v1/firewall/{firewallId} — VPS_deleteFirewallV1
vpsResource
  .command("delete-firewall")
  .description("Delete firewall")
  .argument("<firewallId>", "firewallId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (firewallId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/firewall/{firewallId}";
      path = path.replace("{firewallId}", encodeURIComponent(firewallId));
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

// DELETE /api/vps/v1/firewall/{firewallId}/rules/{ruleId} — VPS_deleteFirewallRuleV1
vpsResource
  .command("delete-firewall-rule")
  .description("Delete firewall rule")
  .argument("<firewallId>", "firewallId")
  .argument("<ruleId>", "ruleId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (firewallId: string, ruleId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/firewall/{firewallId}/rules/{ruleId}";
      path = path.replace("{firewallId}", encodeURIComponent(firewallId));
      path = path.replace("{ruleId}", encodeURIComponent(ruleId));
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

// DELETE /api/vps/v1/post-install-scripts/{postInstallScriptId} — VPS_deletePostInstallScriptV1
vpsResource
  .command("delete-post-install-script")
  .description("Delete post-install script")
  .argument("<postInstallScriptId>", "postInstallScriptId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (postInstallScriptId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/post-install-scripts/{postInstallScriptId}";
      path = path.replace("{postInstallScriptId}", encodeURIComponent(postInstallScriptId));
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

// DELETE /api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/down — VPS_deleteProjectV1
vpsResource
  .command("delete-project")
  .description("Delete project")
  .argument("<virtualMachineId>", "virtualMachineId")
  .argument("<projectName>", "projectName")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, projectName: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/down";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      path = path.replace("{projectName}", encodeURIComponent(projectName));
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

// DELETE /api/vps/v1/virtual-machines/{virtualMachineId}/ptr/{ipAddressId} — VPS_deletePTRRecordV1
vpsResource
  .command("delete-ptrrecord")
  .description("Delete PTR record")
  .argument("<virtualMachineId>", "virtualMachineId")
  .argument("<ipAddressId>", "ipAddressId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, ipAddressId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/ptr/{ipAddressId}";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      path = path.replace("{ipAddressId}", encodeURIComponent(ipAddressId));
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

// DELETE /api/vps/v1/public-keys/{publicKeyId} — VPS_deletePublicKeyV1
vpsResource
  .command("delete-public-key")
  .description("Delete public key")
  .argument("<publicKeyId>", "publicKeyId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (publicKeyId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/public-keys/{publicKeyId}";
      path = path.replace("{publicKeyId}", encodeURIComponent(publicKeyId));
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

// DELETE /api/vps/v1/virtual-machines/{virtualMachineId}/snapshot — VPS_deleteSnapshotV1
vpsResource
  .command("delete-snapshot")
  .description("Delete snapshot")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/snapshot";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
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

// GET /api/vps/v1/virtual-machines/{virtualMachineId}/actions/{actionId} — VPS_getActionDetailsV1
vpsResource
  .command("get-action-details")
  .description("Get action details")
  .argument("<virtualMachineId>", "virtualMachineId")
  .argument("<actionId>", "actionId")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, actionId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/actions/{actionId}";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      path = path.replace("{actionId}", encodeURIComponent(actionId));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/vps/v1/virtual-machines/{virtualMachineId}/actions — VPS_getActionsV1
vpsResource
  .command("get-actions")
  .description("Get actions")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--page <value>", "Page number")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/actions";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      const params: Record<string, string> = {};
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/vps/v1/virtual-machines/{virtualMachineId}/public-keys — VPS_getAttachedPublicKeysV1
vpsResource
  .command("get-attached-public-keys")
  .description("Get attached public keys")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--page <value>", "Page number")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/public-keys";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      const params: Record<string, string> = {};
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/vps/v1/virtual-machines/{virtualMachineId}/backups — VPS_getBackupsV1
vpsResource
  .command("get-backups")
  .description("Get backups")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--page <value>", "Page number")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/backups";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      const params: Record<string, string> = {};
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/vps/v1/data-centers — VPS_getDataCenterListV1
vpsResource
  .command("get-data-center-list")
  .description("Get data center list")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/vps/v1/data-centers";
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/vps/v1/firewall/{firewallId} — VPS_getFirewallDetailsV1
vpsResource
  .command("get-firewall-details")
  .description("Get firewall details")
  .argument("<firewallId>", "firewallId")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (firewallId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/firewall/{firewallId}";
      path = path.replace("{firewallId}", encodeURIComponent(firewallId));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/vps/v1/firewall — VPS_getFirewallListV1
vpsResource
  .command("get-firewall-list")
  .description("Get firewall list")
  .option("--page <value>", "Page number")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/vps/v1/firewall";
      const params: Record<string, string> = {};
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/vps/v1/virtual-machines/{virtualMachineId}/metrics — VPS_getMetricsV1
vpsResource
  .command("get-metrics")
  .description("Get metrics")
  .argument("<virtualMachineId>", "virtualMachineId")
  .requiredOption("--date-from <value>", "date_from")
  .requiredOption("--date-to <value>", "date_to")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/metrics";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      const params: Record<string, string> = {};
      if (opts.dateFrom !== undefined && opts.dateFrom !== false) params["date_from"] = String(opts.dateFrom);
      if (opts.dateTo !== undefined && opts.dateTo !== false) params["date_to"] = String(opts.dateTo);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/vps/v1/post-install-scripts/{postInstallScriptId} — VPS_getPostInstallScriptV1
vpsResource
  .command("get-post-install-script")
  .description("Get post-install script")
  .argument("<postInstallScriptId>", "postInstallScriptId")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (postInstallScriptId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/post-install-scripts/{postInstallScriptId}";
      path = path.replace("{postInstallScriptId}", encodeURIComponent(postInstallScriptId));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/vps/v1/post-install-scripts — VPS_getPostInstallScriptsV1
vpsResource
  .command("get-post-install-scripts")
  .description("Get post-install scripts")
  .option("--page <value>", "Page number")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/vps/v1/post-install-scripts";
      const params: Record<string, string> = {};
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/containers — VPS_getProjectContainersV1
vpsResource
  .command("get-project-containers")
  .description("Get project containers")
  .argument("<virtualMachineId>", "virtualMachineId")
  .argument("<projectName>", "projectName")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, projectName: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/containers";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      path = path.replace("{projectName}", encodeURIComponent(projectName));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName} — VPS_getProjectContentsV1
vpsResource
  .command("get-project-contents")
  .description("Get project contents")
  .argument("<virtualMachineId>", "virtualMachineId")
  .argument("<projectName>", "projectName")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, projectName: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      path = path.replace("{projectName}", encodeURIComponent(projectName));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/vps/v1/virtual-machines/{virtualMachineId}/docker — VPS_getProjectListV1
vpsResource
  .command("get-project-list")
  .description("Get project list")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/docker";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/logs — VPS_getProjectLogsV1
vpsResource
  .command("get-project-logs")
  .description("Get project logs")
  .argument("<virtualMachineId>", "virtualMachineId")
  .argument("<projectName>", "projectName")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, projectName: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/logs";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      path = path.replace("{projectName}", encodeURIComponent(projectName));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/vps/v1/public-keys — VPS_getPublicKeysV1
vpsResource
  .command("get-public-keys")
  .description("Get public keys")
  .option("--page <value>", "Page number")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/vps/v1/public-keys";
      const params: Record<string, string> = {};
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/vps/v1/virtual-machines/{virtualMachineId}/monarx — VPS_getScanMetricsV1
vpsResource
  .command("get-scan-metrics")
  .description("Get scan metrics")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/monarx";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/vps/v1/virtual-machines/{virtualMachineId}/snapshot — VPS_getSnapshotV1
vpsResource
  .command("get-snapshot")
  .description("Get snapshot")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/snapshot";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/vps/v1/templates/{templateId} — VPS_getTemplateDetailsV1
vpsResource
  .command("get-template-details")
  .description("Get template details")
  .argument("<templateId>", "templateId")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (templateId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/templates/{templateId}";
      path = path.replace("{templateId}", encodeURIComponent(templateId));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/vps/v1/templates — VPS_getTemplatesV1
vpsResource
  .command("get-templates")
  .description("Get templates")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/vps/v1/templates";
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/vps/v1/virtual-machines/{virtualMachineId} — VPS_getVirtualMachineDetailsV1
vpsResource
  .command("get-virtual-machine-details")
  .description("Get virtual machine details")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/vps/v1/virtual-machines — VPS_getVirtualMachinesV1
vpsResource
  .command("get-virtual-machines")
  .description("Get virtual machines")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines";
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// POST /api/vps/v1/virtual-machines/{virtualMachineId}/monarx — VPS_installMonarxV1
vpsResource
  .command("install-monarx")
  .description("Install Monarx")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/monarx";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
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

// POST /api/vps/v1/virtual-machines — VPS_purchaseNewVirtualMachineV1
vpsResource
  .command("purchase-new-virtual-machine")
  .description("Purchase new virtual machine")
  .option("--item-id <value>", "Catalog price item ID")
  .option("--payment-method-id <value>", "Payment method ID, default will be used if not provided")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines";
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
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

// POST /api/vps/v1/virtual-machines/{virtualMachineId}/recreate — VPS_recreateVirtualMachineV1
vpsResource
  .command("recreate-virtual-machine")
  .description("Recreate virtual machine")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--template-id <value>", "Template ID")
  .option("--password <value>", "Root password for the virtual machine. If not provided, random password will be generated. Password will not be shown in")
  .option("--panel-password <value>", "Panel password for the panel-based OS template. If not provided, random password will be generated. If OS does not suppo")
  .option("--post-install-script-id <value>", "Post-install script to execute after virtual machine was recreated")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/recreate";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.templateId !== undefined) body["template_id"] = Number(opts.templateId);
      if (opts.password !== undefined) body["password"] = opts.password;
      if (opts.panelPassword !== undefined) body["panel_password"] = opts.panelPassword;
      if (opts.postInstallScriptId !== undefined) body["post_install_script_id"] = Number(opts.postInstallScriptId);
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

// DELETE /api/vps/v1/virtual-machines/{virtualMachineId}/hostname — VPS_resetHostnameV1
vpsResource
  .command("reset-hostname")
  .description("Reset hostname")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/hostname";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
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

// POST /api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/restart — VPS_restartProjectV1
vpsResource
  .command("restart-project")
  .description("Restart project")
  .argument("<virtualMachineId>", "virtualMachineId")
  .argument("<projectName>", "projectName")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, projectName: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/restart";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      path = path.replace("{projectName}", encodeURIComponent(projectName));
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

// POST /api/vps/v1/virtual-machines/{virtualMachineId}/restart — VPS_restartVirtualMachineV1
vpsResource
  .command("restart-virtual-machine")
  .description("Restart virtual machine")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/restart";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
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

// POST /api/vps/v1/virtual-machines/{virtualMachineId}/backups/{backupId}/restore — VPS_restoreBackupV1
vpsResource
  .command("restore-backup")
  .description("Restore backup")
  .argument("<virtualMachineId>", "virtualMachineId")
  .argument("<backupId>", "backupId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, backupId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/backups/{backupId}/restore";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      path = path.replace("{backupId}", encodeURIComponent(backupId));
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

// POST /api/vps/v1/virtual-machines/{virtualMachineId}/snapshot/restore — VPS_restoreSnapshotV1
vpsResource
  .command("restore-snapshot")
  .description("Restore snapshot")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/snapshot/restore";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
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

// PUT /api/vps/v1/virtual-machines/{virtualMachineId}/hostname — VPS_setHostnameV1
vpsResource
  .command("set-hostname")
  .description("Set hostname")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--hostname <value>", "hostname")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/hostname";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.hostname !== undefined) body["hostname"] = opts.hostname;
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

// PUT /api/vps/v1/virtual-machines/{virtualMachineId}/nameservers — VPS_setNameserversV1
vpsResource
  .command("set-nameservers")
  .description("Set nameservers")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--ns1 <value>", "ns1")
  .option("--ns2 <value>", "ns2")
  .option("--ns3 <value>", "ns3")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/nameservers";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.ns1 !== undefined) body["ns1"] = opts.ns1;
      if (opts.ns2 !== undefined) body["ns2"] = opts.ns2;
      if (opts.ns3 !== undefined) body["ns3"] = opts.ns3;
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

// PUT /api/vps/v1/virtual-machines/{virtualMachineId}/panel-password — VPS_setPanelPasswordV1
vpsResource
  .command("set-panel-password")
  .description("Set panel password")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--password <value>", "Panel password for the virtual machine")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/panel-password";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.password !== undefined) body["password"] = opts.password;
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

// PUT /api/vps/v1/virtual-machines/{virtualMachineId}/root-password — VPS_setRootPasswordV1
vpsResource
  .command("set-root-password")
  .description("Set root password")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--password <value>", "Root password for the virtual machine")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/root-password";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.password !== undefined) body["password"] = opts.password;
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

// POST /api/vps/v1/virtual-machines/{virtualMachineId}/setup — VPS_setupPurchasedVirtualMachineV1
vpsResource
  .command("setup-purchased-virtual-machine")
  .description("Setup purchased virtual machine")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--template-id <value>", "Template ID")
  .option("--data-center-id <value>", "Data center ID")
  .option("--post-install-script-id <value>", "Post-install script ID")
  .option("--password <value>", "Password for the virtual machine. If not provided, random password will be generated. Password will not be shown in the ")
  .option("--hostname <value>", "Override default hostname of the virtual machine")
  .option("--install-monarx", "Install Monarx malware scanner (if supported)")
  .option("--enable-backups", "Enable weekly backup schedule")
  .option("--ns1 <value>", "Name server 1")
  .option("--ns2 <value>", "Name server 2")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/setup";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.templateId !== undefined) body["template_id"] = Number(opts.templateId);
      if (opts.dataCenterId !== undefined) body["data_center_id"] = Number(opts.dataCenterId);
      if (opts.postInstallScriptId !== undefined) body["post_install_script_id"] = Number(opts.postInstallScriptId);
      if (opts.password !== undefined) body["password"] = opts.password;
      if (opts.hostname !== undefined) body["hostname"] = opts.hostname;
      if (opts.installMonarx !== undefined) body["install_monarx"] = Boolean(opts.installMonarx);
      if (opts.enableBackups !== undefined) body["enable_backups"] = Boolean(opts.enableBackups);
      if (opts.ns1 !== undefined) body["ns1"] = opts.ns1;
      if (opts.ns2 !== undefined) body["ns2"] = opts.ns2;
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

// POST /api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/start — VPS_startProjectV1
vpsResource
  .command("start-project")
  .description("Start project")
  .argument("<virtualMachineId>", "virtualMachineId")
  .argument("<projectName>", "projectName")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, projectName: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/start";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      path = path.replace("{projectName}", encodeURIComponent(projectName));
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

// POST /api/vps/v1/virtual-machines/{virtualMachineId}/recovery — VPS_startRecoveryModeV1
vpsResource
  .command("start-recovery-mode")
  .description("Start recovery mode")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--root-password <value>", "Temporary root password for recovery mode")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/recovery";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.rootPassword !== undefined) body["root_password"] = opts.rootPassword;
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

// POST /api/vps/v1/virtual-machines/{virtualMachineId}/start — VPS_startVirtualMachineV1
vpsResource
  .command("start-virtual-machine")
  .description("Start virtual machine")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/start";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
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

// POST /api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/stop — VPS_stopProjectV1
vpsResource
  .command("stop-project")
  .description("Stop project")
  .argument("<virtualMachineId>", "virtualMachineId")
  .argument("<projectName>", "projectName")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, projectName: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/stop";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      path = path.replace("{projectName}", encodeURIComponent(projectName));
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

// DELETE /api/vps/v1/virtual-machines/{virtualMachineId}/recovery — VPS_stopRecoveryModeV1
vpsResource
  .command("stop-recovery-mode")
  .description("Stop recovery mode")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/recovery";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
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

// POST /api/vps/v1/virtual-machines/{virtualMachineId}/stop — VPS_stopVirtualMachineV1
vpsResource
  .command("stop-virtual-machine")
  .description("Stop virtual machine")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/stop";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
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

// POST /api/vps/v1/firewall/{firewallId}/sync/{virtualMachineId} — VPS_syncFirewallV1
vpsResource
  .command("sync-firewall")
  .description("Sync firewall")
  .argument("<firewallId>", "firewallId")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (firewallId: string, virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/firewall/{firewallId}/sync/{virtualMachineId}";
      path = path.replace("{firewallId}", encodeURIComponent(firewallId));
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
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

// DELETE /api/vps/v1/virtual-machines/{virtualMachineId}/monarx — VPS_uninstallMonarxV1
vpsResource
  .command("uninstall-monarx")
  .description("Uninstall Monarx")
  .argument("<virtualMachineId>", "virtualMachineId")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/monarx";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
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

// PUT /api/vps/v1/firewall/{firewallId}/rules/{ruleId} — VPS_updateFirewallRuleV1
vpsResource
  .command("update-firewall-rule")
  .description("Update firewall rule")
  .argument("<firewallId>", "firewallId")
  .argument("<ruleId>", "ruleId")
  .option("--protocol <value>", "protocol")
  .option("--port <value>", "Port or port range, ex: 1024:2048")
  .option("--source <value>", "source")
  .option("--source-detail <value>", "IP range, CIDR, single IP or `any`")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (firewallId: string, ruleId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/firewall/{firewallId}/rules/{ruleId}";
      path = path.replace("{firewallId}", encodeURIComponent(firewallId));
      path = path.replace("{ruleId}", encodeURIComponent(ruleId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.protocol !== undefined) body["protocol"] = opts.protocol;
      if (opts.port !== undefined) body["port"] = opts.port;
      if (opts.source !== undefined) body["source"] = opts.source;
      if (opts.sourceDetail !== undefined) body["source_detail"] = opts.sourceDetail;
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

// PUT /api/vps/v1/post-install-scripts/{postInstallScriptId} — VPS_updatePostInstallScriptV1
vpsResource
  .command("update-post-install-script")
  .description("Update post-install script")
  .argument("<postInstallScriptId>", "postInstallScriptId")
  .option("--name <value>", "Name of the script")
  .option("--content <value>", "Content of the script")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (postInstallScriptId: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/post-install-scripts/{postInstallScriptId}";
      path = path.replace("{postInstallScriptId}", encodeURIComponent(postInstallScriptId));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.name !== undefined) body["name"] = opts.name;
      if (opts.content !== undefined) body["content"] = opts.content;
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

// POST /api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/update — VPS_updateProjectV1
vpsResource
  .command("update-project")
  .description("Update project")
  .argument("<virtualMachineId>", "virtualMachineId")
  .argument("<projectName>", "projectName")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (virtualMachineId: string, projectName: string, opts: Opts) => {
    try {
      let path = "/api/vps/v1/virtual-machines/{virtualMachineId}/docker/{projectName}/update";
      path = path.replace("{virtualMachineId}", encodeURIComponent(virtualMachineId));
      path = path.replace("{projectName}", encodeURIComponent(projectName));
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
