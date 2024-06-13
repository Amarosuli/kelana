import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
			   toska: {
				  DEFAULT: '#4DCFC6',
			   },
			   violet: {
				  DEFAULT: '#FF79DC',
			   },
			   ungu: {
				  DEFAULT: '#9D5FA8',
			   },
			   kuning: {
				  DEFAULT: '#4DC255',
			   },
			   hijau: {
				  DEFAULT: '#FFB34D',
			   },
			   biru: {
				  DEFAULT: '#4E9BCA',
			   },
			   memu: {
				  DEFAULT: '#FD5F9D',
			   },
			   abu: {
				  DEFAULT: '#94989F',
			   },
   
			}
		 }
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
