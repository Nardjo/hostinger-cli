/** Auto-generated from Hostinger OpenAPI — resource `reach` */
import { Command } from "commander";
import { client } from "../lib/client.js";
import { output } from "../lib/output.js";
import { handleError } from "../lib/errors.js";

type Opts = Record<string, any>;

export const reachResource = new Command("reach")
  .description("Hostinger reach API");

// POST /api/reach/v1/contacts — reach_createANewContactV1
reachResource
  .command("create-anew-contact")
  .description("Create a new contact")
  .option("--email <value>", "email")
  .option("--name <value>", "name")
  .option("--surname <value>", "surname")
  .option("--phone <value>", "Phone number in E.164 format (leading \"+\" then 7-15 digits)")
  .option("--note <value>", "note")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/reach/v1/contacts";
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.email !== undefined) body["email"] = opts.email;
      if (opts.name !== undefined) body["name"] = opts.name;
      if (opts.surname !== undefined) body["surname"] = opts.surname;
      if (opts.phone !== undefined) body["phone"] = opts.phone;
      if (opts.note !== undefined) body["note"] = opts.note;
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

// POST /api/reach/v1/segmentation/segments — reach_createANewContactSegmentV1
reachResource
  .command("create-anew-contact-segment")
  .description("Create a new contact segment")
  .option("--name <value>", "name")
  .option("--logic <value>", "logic")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/reach/v1/segmentation/segments";
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.name !== undefined) body["name"] = opts.name;
      if (opts.logic !== undefined) body["logic"] = opts.logic;
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

// POST /api/reach/v1/profiles/{profileUuid}/contacts — reach_createNewContactsV1
reachResource
  .command("create-new-contacts")
  .description("Create new contacts")
  .argument("<profileUuid>", "profileUuid")
  .option("--email <value>", "email")
  .option("--name <value>", "name")
  .option("--surname <value>", "surname")
  .option("--phone <value>", "Phone number in E.164 format (leading \"+\" then 7-15 digits)")
  .option("--note <value>", "note")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (profileUuid: string, opts: Opts) => {
    try {
      let path = "/api/reach/v1/profiles/{profileUuid}/contacts";
      path = path.replace("{profileUuid}", encodeURIComponent(profileUuid));
      const params: Record<string, string> = {};
      const body: Record<string, unknown> = {};
      if (opts.email !== undefined) body["email"] = opts.email;
      if (opts.name !== undefined) body["name"] = opts.name;
      if (opts.surname !== undefined) body["surname"] = opts.surname;
      if (opts.phone !== undefined) body["phone"] = opts.phone;
      if (opts.note !== undefined) body["note"] = opts.note;
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

// DELETE /api/reach/v1/contacts/{uuid} — reach_deleteAContactV1
reachResource
  .command("delete-acontact")
  .description("Delete a contact")
  .argument("<uuid>", "uuid")
  .option("--json-body <json>", "Raw JSON body (merged over flags)")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (uuid: string, opts: Opts) => {
    try {
      let path = "/api/reach/v1/contacts/{uuid}";
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

// GET /api/reach/v1/profiles/{profileUuid}/domains/dns-status — reach_getProfileDomainDNSStatusV1
reachResource
  .command("get-profile-domain-dnsstatus")
  .description("Get profile domain DNS status")
  .argument("<profileUuid>", "profileUuid")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (profileUuid: string, opts: Opts) => {
    try {
      let path = "/api/reach/v1/profiles/{profileUuid}/domains/dns-status";
      path = path.replace("{profileUuid}", encodeURIComponent(profileUuid));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/reach/v1/segmentation/segments/{segmentUuid} — reach_getSegmentDetailsV1
reachResource
  .command("get-segment-details")
  .description("Get segment details")
  .argument("<segmentUuid>", "segmentUuid")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (segmentUuid: string, opts: Opts) => {
    try {
      let path = "/api/reach/v1/segmentation/segments/{segmentUuid}";
      path = path.replace("{segmentUuid}", encodeURIComponent(segmentUuid));
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/reach/v1/contacts/groups — reach_listContactGroupsV1
reachResource
  .command("list-contact-groups")
  .description("List contact groups")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/reach/v1/contacts/groups";
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/reach/v1/contacts — reach_listContactsV1
reachResource
  .command("list-contacts")
  .description("List contacts")
  .option("--group-uuid <value>", "Filter contacts by group UUID")
  .option("--subscription-status <value>", "Filter contacts by subscription status")
  .option("--page <value>", "Page number")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/reach/v1/contacts";
      const params: Record<string, string> = {};
      if (opts.groupUuid !== undefined && opts.groupUuid !== false) params["group_uuid"] = String(opts.groupUuid);
      if (opts.subscriptionStatus !== undefined && opts.subscriptionStatus !== false) params["subscription_status"] = String(opts.subscriptionStatus);
      if (opts.page !== undefined && opts.page !== false) params["page"] = String(opts.page);
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/reach/v1/profiles/{profileUuid}/segmentation/segments/{segmentUuid}/contacts — reach_listProfileSegmentContactsV1
reachResource
  .command("list-profile-segment-contacts")
  .description("List profile segment contacts")
  .argument("<profileUuid>", "profileUuid")
  .argument("<segmentUuid>", "segmentUuid")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (profileUuid: string, segmentUuid: string, opts: Opts) => {
    try {
      let path = "/api/reach/v1/profiles/{profileUuid}/segmentation/segments/{segmentUuid}/contacts";
      path = path.replace("{profileUuid}", encodeURIComponent(profileUuid));
      path = path.replace("{segmentUuid}", encodeURIComponent(segmentUuid));
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

// GET /api/reach/v1/profiles — reach_listProfilesV1
reachResource
  .command("list-profiles")
  .description("List Profiles")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/reach/v1/profiles";
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

// GET /api/reach/v1/segmentation/segments/{segmentUuid}/contacts — reach_listSegmentContactsV1
reachResource
  .command("list-segment-contacts")
  .description("List segment contacts")
  .argument("<segmentUuid>", "segmentUuid")
  .option("--page <value>", "Page number")
  .option("--per-page <value>", "Number of items per page")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (segmentUuid: string, opts: Opts) => {
    try {
      let path = "/api/reach/v1/segmentation/segments/{segmentUuid}/contacts";
      path = path.replace("{segmentUuid}", encodeURIComponent(segmentUuid));
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

// GET /api/reach/v1/segmentation/segments — reach_listSegmentsV1
reachResource
  .command("list-segments")
  .description("List segments")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--fields <cols>", "Comma-separated columns to display")
  .action(async (opts: Opts) => {
    try {
      let path = "/api/reach/v1/segmentation/segments";
      const params: Record<string, string> = {};
      const data = await client.get(path, params);
      const fields = opts.fields?.split(",").map((s: string) => s.trim()).filter(Boolean);
      output(data, { json: opts.json, format: opts.format, fields });
    } catch (err) {
      handleError(err, opts.json);
    }
  });
