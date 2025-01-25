import fs from "node:fs";
import { type ZodStringDef, z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

const dependsOnSchema = z.union([
  z.array(z.string()),
  z.record(
    z.string(),
    z.object({
      condition: z.enum(["service_healthy", "service_started", "service_completed_successfully"]),
    }),
  ),
]);

const ulimitsSchema = z.object({
  nproc: z.number().or(z.object({ soft: z.number(), hard: z.number() })),
  nofile: z.number().or(z.object({ soft: z.number(), hard: z.number() })),
});

const deploySchema = z.object({
  resources: z.object({
    limits: z
      .object({
        cpus: z.string().optional(),
        memory: z.string().optional(),
        pids: z.number().optional(),
      })
      .optional(),
    reservations: z
      .object({
        cpus: z.string().optional(),
        memory: z.string().optional(),
        devices: z
          .object({
            capabilities: z.array(z.string()),
            driver: z.string().optional(),
            count: z.enum(["all"]).or(z.number()).optional(),
            deviceIds: z.array(z.string()).optional(),
          })
          .array(),
      })
      .optional(),
  }),
});

const serviceSchema = z.object({
  image: z.string(),
  name: z.string(),
  internalPort: z.number().optional(),
  isMain: z.boolean().optional(),
  networkMode: z.string().optional(),
  extraHosts: z.array(z.string()).optional(),
  ulimits: ulimitsSchema.optional(),
  addPorts: z
    .array(
      z.object({
        containerPort: z.number(),
        hostPort: z.number(),
        udp: z.boolean().optional(),
        tcp: z.boolean().optional(),
        interface: z.string().optional(),
      }),
    )
    .optional(),
  command: z.string().optional().or(z.array(z.string()).optional()),
  volumes: z
    .array(
      z.object({
        hostPath: z.string(),
        containerPath: z.string(),
        readOnly: z.boolean().optional(),
      }),
    )
    .optional(),
  environment: z.record(z.union([z.string(), z.number()])).optional(),
  healthCheck: z
    .object({
      test: z.string(),
      interval: z.string().optional(),
      timeout: z.string().optional(),
      retries: z.number().optional(),
      startInterval: z.string().optional(),
      startPeriod: z.string().optional(),
    })
    .optional(),
  dependsOn: dependsOnSchema.optional(),
  capAdd: z.array(z.string()).optional(),
  deploy: deploySchema.optional(),
  hostname: z.string().optional(),
  devices: z.array(z.string()).optional(),
  entrypoint: z.string().or(z.array(z.string())).optional(),
  pid: z.string().optional(),
  privileged: z.boolean().optional(),
  tty: z.boolean().optional(),
  user: z.string().optional(),
  workingDir: z.string().optional(),
  shmSize: z.string().optional(),
  capDrop: z.array(z.string()).optional(),
  logging: z
    .object({
      driver: z.string(),
      options: z.record(z.string()),
    })
    .optional(),
  readOnly: z.boolean().optional(),
  securityOpt: z.array(z.string()).optional(),
  stopSignal: z.string().optional(),
  stopGracePeriod: z.string().optional(),
  stdinOpen: z.boolean().optional(),
});

const dynamicComposeSchema = z.object({
  services: serviceSchema.array(),
  $schema: z.string(),
});

type AppUrn = `${string}:${string}` & {
  readonly __type: "urn";
  split: (separator: ":") => [string, string];
};

const ARCHITECTURES = ["arm64", "amd64"] as const;

const APP_CATEGORIES = [
  "network",
  "media",
  "development",
  "automation",
  "social",
  "utilities",
  "photography",
  "security",
  "featured",
  "books",
  "data",
  "music",
  "finance",
  "gaming",
  "ai",
] as const;

const FIELD_TYPES = ["text", "password", "email", "number", "fqdn", "ip", "fqdnip", "url", "random", "boolean"] as const;

const RANDOM_ENCODINGS = ["hex", "base64"] as const;

const formFieldSchema = z.object({
  type: z.enum(FIELD_TYPES),
  label: z.string(),
  placeholder: z.string().optional(),
  max: z.number().optional(),
  min: z.number().optional(),
  hint: z.string().optional(),
  options: z.object({ label: z.string(), value: z.string() }).array().optional(),
  required: z.boolean().optional().default(false),
  default: z.union([z.boolean(), z.string(), z.number()]).optional(),
  regex: z.string().optional(),
  pattern_error: z.string().optional(),
  env_variable: z.string(),
  encoding: z.enum(RANDOM_ENCODINGS).optional(),
});

const appInfoSchema = z.object({
  id: z.string().refine((v) => v.split(":").length === 1),
  urn: z
    .string()
    .refine((v) => v.split(":").length === 2)
    .optional() as unknown as z.ZodType<AppUrn, ZodStringDef>,
  available: z.boolean(),
  deprecated: z.boolean().optional().default(false),
  port: z.number().min(1).max(65535).optional(),
  name: z.string(),
  description: z.string().optional().default(""),
  version: z.string().optional().default("latest"),
  tipi_version: z.number(),
  short_desc: z.string(),
  author: z.string(),
  source: z.string(),
  website: z.string().optional(),
  force_expose: z.boolean().optional().default(false),
  generate_vapid_keys: z.boolean().optional().default(false),
  categories: z.enum(APP_CATEGORIES).array().default([]),
  url_suffix: z.string().optional(),
  form_fields: z.array(formFieldSchema).optional().default([]),
  https: z.boolean().optional().default(false),
  exposable: z.boolean().optional().default(false),
  no_gui: z.boolean().optional().default(false),
  supported_architectures: z.enum(ARCHITECTURES).array().optional(),
  uid: z.number().optional(),
  gid: z.number().optional(),
  dynamic_config: z.boolean().optional().default(false),
  min_tipi_version: z.string().optional(),
  created_at: z
    .number()
    .int()
    .min(0)
    .refine((v) => v < Date.now())
    .optional()
    .default(0),
  updated_at: z
    .number()
    .int()
    .min(0)
    .refine((v) => v < Date.now())
    .optional()
    .default(0),
  $schema: z.string(),
});

const dynamicComposeJsonSchema = zodToJsonSchema(dynamicComposeSchema);
const appInfoJsonSchema = zodToJsonSchema(appInfoSchema);

fs.writeFileSync("apps/app-info-schema.json", JSON.stringify(appInfoJsonSchema, null, 2));
fs.writeFileSync("apps/dynamic-compose-schema.json", JSON.stringify(dynamicComposeJsonSchema, null, 2));
