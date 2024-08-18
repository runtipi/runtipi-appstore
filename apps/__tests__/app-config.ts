import { z } from "zod";

export const appConfigSchema = z.object({
  services: z.array(
    z.object({
      name: z.string(),
      image: z.string(),
      internalPort: z.number().min(1).max(65535),
      isMain: z.boolean().optional(),
      command: z.string().optional(),
      // eg: /path/to/volume:/path/in/container
      volumes: z.array(
        z.object({
          hostPath: z.string().regex(/^\/.+/),
          containerPath: z.string().regex(/^\/.+/),
        }),
      ),
      environment: z.record(z.string()).optional(),
      healthCheck: z
        .object({
          test: z.string(),
          // eg: 5s, 1m, 1h
          interval: z.string().regex(/^\d+[smh]$/),
          timeout: z.string().regex(/^\d+[smh]$/),
          retries: z.number().min(0),
        })
        .optional(),
    }),
  ),
});

export type AppConfig = z.input<typeof appConfigSchema>;
