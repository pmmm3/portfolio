import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://pmmmm3.github.io",
	base: "/",
	integrations: [tailwind()],
	i18n: {
		locales: ["en", "es"],
		defaultLocale: "es",
		routing: {
			prefixDefaultLocale: true,
		},
	},
});
