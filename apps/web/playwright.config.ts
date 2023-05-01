import type { PlaywrightTestConfig } from "@playwright/test";

export default {
	webServer: {
		command: "pnpm run build && pnpm run preview",
		port: 4173,
	},
	testDir: "tests",
	testMatch: /.*(test|spec)\.(js|ts|mjs)/,
} satisfies PlaywrightTestConfig;
