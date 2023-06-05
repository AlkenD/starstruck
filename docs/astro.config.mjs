import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = 'https://starlight.astro.build/';

export default defineConfig({
  site,
  integrations: [
    starlight({
      title: 'Starlight',
      logo: {
        light: '/src/assets/logo-light.svg',
        dark: '/src/assets/logo-dark.svg',
        replacesTitle: true,
      },
      editLink: {
        baseUrl: 'https://github.com/withastro/starlight/edit/main/docs/',
      },
      social: {
        github: 'https://github.com/withastro/starlight',
        discord: 'https://astro.build/chat',
      },
      head: [
        {
          tag: 'script',
          attrs: {
            src: 'https://cdn.usefathom.com/script.js',
            'data-site': 'EZBHTSIG',
            defer: true,
          },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: site + 'og.jpg' },
        },
        {
          tag: 'meta',
          attrs: { property: 'twitter:image', content: site + 'og.jpg' },
        },
      ],
      customCss: process.env.NO_GRADIENTS ? [] : ['/src/assets/landing.css'],
      locales: {
        root: { label: 'English', lang: 'en' },
        de: { label: 'Deutsch', lang: 'de' },
        es: { label: 'Español', lang: 'es' },
        ja: { label: '日本語', lang: 'ja' },
        "fr-FR": { label: 'Français', lang: 'fr-FR' },
      },
      sidebar: [
        {
          label: 'Start Here',
          translations: {
            de: 'Beginne hier',
            es: 'Comienza aqui',
            ja: 'ここからはじめる',
            "fr-FR": 'Commencez ici',
          },
          items: [
            {
              label: 'Getting Started',
              link: 'getting-started',
              translations: { es: "Empezando", ja: '入門', "fr-FR": 'Mise en route' },
            },
            {
              label: 'Environmental Impact',
              link: 'environmental-impact',
              translations: { es: "Documentación ecológica", ja: '環境への負荷', "fr-FR": 'Impact environnemental' },
            },
          ],
        },
        {
          label: 'Guides',
          translations: { de: 'Anleitungen', es: 'Guías', ja: 'ガイド', "fr-FR": 'Guides' },
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Reference',
          translations: {
            de: 'Referenz',
            es: 'Referencias',
            ja: 'リファレンス',
            "fr-FR": 'Référence',
          },
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
