import type { StarlightUserConfig } from '@astrojs/starlight/types';
import { getPluginItems } from './src/plugins/utils/plugin-mappings';

export const sidebar: StarlightUserConfig['sidebar'] = [
  {
    label: 'Getting Started',
    collapsed: false,
    items: [
      { label: 'What is Nx?', link: 'getting-started/intro' },
      { label: 'Quickstart', link: 'quickstart' },
      {
        label: 'Add to New Project',
        link: 'getting-started/start-new-project',
      },
      {
        label: 'Add to Existing Project',
        link: 'getting-started/start-with-existing-project',
      },
      {
        link: 'getting-started/editor-setup',
        label: 'Editor Setup',
      },
      {
        label: 'AI Integrations',
        link: 'getting-started/ai-setup',
      },
      {
        label: 'Tutorials',
        autogenerate: {
          directory: 'getting-started/Tutorials',
          collapsed: true,
        },
      },
    ],
  },
  {
    label: 'Nx Essentials',
    collapsed: false,
    items: [
      {
        link: 'concepts/mental-model',
        label: 'Mental Model',
      },
      {
        label: 'How Cache Works',
        link: 'concepts/how-caching-works',
      },
      {
        link: 'features/explore-graph',
        label: 'Explore Your Workspace',
      },
      {
        link: 'features/run-tasks',
        label: 'Running Tasks',
      },
      {
        link: 'features/code-generation',
        label: 'Code Generation',
      },
      {
        link: 'features/automate-updating-dependencies',
        label: 'Updating Dependencies',
      },
      {
        link: 'getting-started/nx-cloud',
        label: 'Setup CI',
      },
      {
        label: 'AI Powered Development',
        link: 'features/enhance-ai',
      },
      // frameworks/technology 1 pagers, more indepth guides should stay in the advanced section
      {
        link: 'technologies/angular/introduction',
        label: 'Angular',
      },
      {
        link: 'technologies/react/introduction',
        label: 'React',
      },
      {
        link: 'technologies/typescript/introduction',
        label: 'TypeScript',
      },
      {
        link: 'technologies/java/introduction',
        label: 'Java',
      },
    ],
  },
  {
    label: 'Advanced Nx',
    collapsed: true,
    items: [
      {
        label: 'Run Only Affected',
        link: 'features/ci-features/affected',
      },
      {
        label: 'Manage Releases',
        link: 'features/manage-releases',
      },
      {
        label: 'Enforce Module Boundaries',
        link: 'features/enforce-module-boundaries',
      },
      {
        label: 'Add Nx to Monorepo',
        link: 'guides/adopting-nx/adding-to-monorepo',
      },
    ],
  },
  {
    label: 'Extending Nx',
    collapsed: true,
    autogenerate: { directory: 'extending-nx', collapsed: true },
  },
  {
    label: 'Reference',
    collapsed: true,
    autogenerate: { directory: 'reference', collapsed: true },
  },
  {
    label: 'Troubleshooting',
    collapsed: true,
    autogenerate: { directory: 'troubleshooting', collapsed: true },
  },
];

// const technologies = {
//   label: 'Technologies',
//   collapsed: false,
//   // manually type the tech routes due to complexity of order and structure
//   items: [
//     {
//       label: 'TypeScript',
//       collapsed: true,
//       items: getPluginItems('js'),
//     },
//     {
//       label: 'Angular',
//       collapsed: true,
//       items: [
//         ...getPluginItems('angular'),
//         {
//           label: 'Angular Rspack',
//           collapsed: true,
//           items: getPluginItems('angular-rspack', 'angular'),
//         },
//         {
//           label: 'Angular Rsbuild',
//           collapsed: true,
//           items: getPluginItems('angular-rsbuild', 'angular'),
//         },
//       ],
//     },
//     {
//       label: 'React',
//       collapsed: true,
//       items: [
//         ...getPluginItems('react'),
//         {
//           label: 'Next',
//           collapsed: true,
//           items: getPluginItems('next', 'react'),
//         },
//         {
//           label: 'Remix',
//           collapsed: true,
//           items: getPluginItems('remix', 'react'),
//         },
//         {
//           label: 'React Native',
//           collapsed: true,
//           items: getPluginItems('react-native', 'react'),
//         },
//         {
//           label: 'Expo',
//           collapsed: true,
//           items: getPluginItems('expo', 'react'),
//         },
//       ],
//     },
//     {
//       label: 'Vue',
//       collapsed: true,
//       items: [
//         ...getPluginItems('vue'),
//         {
//           label: 'Nuxt',
//           collapsed: true,
//           items: getPluginItems('nuxt', 'vue'),
//         },
//       ],
//     },
//     {
//       label: 'Node.js',
//       collapsed: true,
//       items: [
//         ...getPluginItems('node'),
//         {
//           label: 'Express',
//           collapsed: true,
//           items: getPluginItems('express', 'node'),
//         },
//         {
//           label: 'Nest',
//           collapsed: true,
//           items: getPluginItems('nest', 'node'),
//         },
//       ],
//     },
//     {
//       label: 'Java',
//       collapsed: true,
//       items: [
//         {
//           label: 'Introduction',
//           link: 'technologies/java/introduction',
//         },
//         {
//           label: 'Gradle',
//           collapsed: true,
//           items: getPluginItems('gradle', 'java'),
//         },
//         {
//           label: 'Maven',
//           collapsed: true,
//           items: getPluginItems('maven', 'java'),
//         },
//       ],
//     },
//     {
//       label: '.NET',
//       collapsed: true,
//       items: getPluginItems('dotnet'),
//     },
//     {
//       label: 'Module Federation',
//       collapsed: true,
//       items: getPluginItems('module-federation'),
//     },
//     {
//       label: 'ESLint',
//       collapsed: true,
//       items: [
//         ...getPluginItems('eslint'),
//         {
//           label: 'ESLint Plugin',
//           collapsed: true,
//           items: getPluginItems('eslint-plugin', 'eslint'),
//         },
//       ],
//     },
//     {
//       label: 'Build Tools',
//       collapsed: true,
//       items: [
//         {
//           label: 'Webpack',
//           collapsed: true,
//           items: getPluginItems('webpack', 'build-tools'),
//         },
//         {
//           label: 'Vite',
//           collapsed: true,
//           items: getPluginItems('vite', 'build-tools'),
//         },
//         {
//           label: 'Rollup',
//           collapsed: true,
//           items: getPluginItems('rollup', 'build-tools'),
//         },
//         {
//           label: 'ESBuild',
//           collapsed: true,
//           items: getPluginItems('esbuild', 'build-tools'),
//         },
//         {
//           label: 'Rspack',
//           collapsed: true,
//           items: getPluginItems('rspack', 'build-tools'),
//         },
//         {
//           label: 'Rsbuild',
//           collapsed: true,
//           items: getPluginItems('rsbuild', 'build-tools'),
//         },
//         {
//           label: 'Docker',
//           collapsed: true,
//           items: getPluginItems('docker', 'build-tools'),
//         },
//       ],
//     },
//     {
//       label: 'Test Tools',
//       collapsed: true,
//       items: [
//         {
//           label: 'Cypress',
//           collapsed: true,
//           items: getPluginItems('cypress', 'test-tools'),
//         },
//         {
//           label: 'Vitest',
//           collapsed: true,
//           items: getPluginItems('vitest', 'test-tools'),
//         },
//         {
//           label: 'Jest',
//           collapsed: true,
//           items: getPluginItems('jest', 'test-tools'),
//         },
//         {
//           label: 'Playwright',
//           collapsed: true,
//           items: getPluginItems('playwright', 'test-tools'),
//         },
//         {
//           label: 'Storybook',
//           collapsed: true,
//           items: getPluginItems('storybook', 'test-tools'),
//         },
//         {
//           label: 'Detox',
//           collapsed: true,
//           items: getPluginItems('detox', 'test-tools'),
//         },
//       ],
//     },
//   ],
// };
