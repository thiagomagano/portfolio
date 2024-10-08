import { join } from 'path';
import type { Config } from 'tailwindcss';

import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config}*/
const config: Config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],

	theme: {
		extend: {}
	},

	plugins: [
		skeleton({
			themes: {
				preset: [{ name: 'wintry', enhancements: true }]
			}
		})
	]
};

module.exports = config;
