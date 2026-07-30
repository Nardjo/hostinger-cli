#!/usr/bin/env bun
import { Command } from "commander";
import { globalFlags } from "./lib/config.js";
import { authCommand } from "./commands/auth.js";
import { agency_hostingResource } from "./resources/agency-hosting.js";
import { billingResource } from "./resources/billing.js";
import { dnsResource } from "./resources/dns.js";
import { domainsResource } from "./resources/domains.js";
import { ecommerceResource } from "./resources/ecommerce.js";
import { horizonsResource } from "./resources/horizons.js";
import { hostingResource } from "./resources/hosting.js";
import { mailResource } from "./resources/mail.js";
import { reachResource } from "./resources/reach.js";
import { v2Resource } from "./resources/v2.js";
import { vpsResource } from "./resources/vps.js";

const program = new Command();

program
  .name("hostinger-cli")
  .description("Agent-ready CLI for the Hostinger API (VPS, DNS, domains, hosting, mail, billing, …)")
  .version("0.1.0")
  .option("--json", "Output as JSON", false)
  .option("--format <fmt>", "Output format: text, json, csv, yaml", "text")
  .option("--verbose", "Enable debug logging", false)
  .option("--no-color", "Disable colored output")
  .option("--no-header", "Omit table/csv headers (for piping)")
  .hook("preAction", (_thisCmd, actionCmd) => {
    const root = actionCmd.optsWithGlobals();
    globalFlags.json = root.json ?? false;
    globalFlags.format = root.format ?? "text";
    globalFlags.verbose = root.verbose ?? false;
    globalFlags.noColor = root.color === false;
    globalFlags.noHeader = root.header === false;
  });

program.addCommand(authCommand);
program.addCommand(agency_hostingResource);
program.addCommand(billingResource);
program.addCommand(dnsResource);
program.addCommand(domainsResource);
program.addCommand(ecommerceResource);
program.addCommand(horizonsResource);
program.addCommand(hostingResource);
program.addCommand(mailResource);
program.addCommand(reachResource);
program.addCommand(v2Resource);
program.addCommand(vpsResource);

program.parse();
