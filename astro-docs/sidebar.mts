import type { StarlightUserConfig } from '@astrojs/starlight/types';
import { getPluginItems } from './src/plugins/utils/plugin-mappings';

// NOTE: manually build the sidebar instead of autogenerating w/ folder structure
// while we test different iterations. once we settle on the structure we'll move files and add redirects
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
        link: 'features/generate-code',
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
      // frameworks/technology 1 pagers of most popular technologies?, more indepth guides should stay in the advanced section
      // TODO: move in the angular compat matris into this file and add a redirect
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
      {
        // combine with the reference/nodejs-typescript-compatibility docs
        link: 'reference/releases',
        label: 'Release Schedule',
      },
      {
        // combine with the reference/nodejs-typescript-compatibility docs
        link: 'reference/nodejs-typescript-compatibility',
        label: 'Node.JS and TypeScript Compatibility',
      },
    ],
  },
  {
    label: 'Advanced Nx',
    collapsed: true,
    items: [
      {
        label: 'Filter Affected Projects',
        link: 'features/ci-features/affected',
      },
      {
        label: 'Enforce Module Boundaries',
        // TODO: move this feature page to an intro page of the module boundary guides
        // link: 'features/enforce-module-boundaries',
        link: 'guides/enforce-module-boundaries',
      },
      // TODO: we need a outputs docs I feel or having a inputs & outputs combo doc since outputs are pretty simple
      {
        label: 'Target Inputs',
        link: 'reference/inputs',
      },
      {
        label: 'Buildable and Publishable Libraries',
        link: 'concepts/buildable-and-publishable-libraries',
      },
      {
        label: 'Update Strategies',
        link: 'guides/tips-n-tricks/advanced-update',
      },
      {
        label: 'Nx Cloud Source Control Integration',
        link: 'guides/nx-cloud/source-control-integration',
      },
      {
        label: 'Nx Agents',
        collapsed: true,
        items: [
          {
            label: 'Assignment Rules',
            link: 'reference/nx-cloud/assignment-rules',
          },
          {
            label: 'Launch Templates',
            link: 'reference/nx-cloud/launch-templates',
          },
          {
            label: 'Custom Steps',
            link: 'reference/nx-cloud/custom-steps',
          },
          {
            label: 'Custom Images',
            link: 'reference/nx-cloud/custom-steps',
          },
        ],
      },
      {
        label: 'Nx Release',
        collapsed: true,
        autogenerate: { directory: 'guides/Nx Release', collapsed: true },
      },
      {
        label: 'Nx Enterprise',
        collapsed: true,
        autogenerate: { directory: 'enterprise', collapsed: true },
        // TODO: Move conformance & owners information to here
      },
      {
        // more detailed guides about adopting nx seperate from the getting started quickstarts
        label: 'Adopting Nx',
        autogenerate: { directory: 'guides/Adopting Nx', collapsed: true },
      },
    ],
  },
  {
    label: 'Extending Nx',
    collapsed: true,
    autogenerate: { directory: 'extending-nx', collapsed: true },
  },
  {
    label: 'References',
    collapsed: true,
    items: [
      {
        label: 'Nx CLI Commands',
        link: 'reference/nx-commands',
      },
      {
        label: 'Nx Cloud CLI Commands',
        link: 'reference/nx-cloud-cli',
      },
      {
        label: 'nx.json',
        link: 'reference/nx-json',
      },
      {
        label: 'Project Configuration',
        link: 'reference/project-configuration',
      },
      {
        label: 'Nx Console Settings',
        link: 'reference/nx-console-settings',
      },
      {
        label: 'Nx MCP',
        link: 'reference/nx-mcp',
      },
      {
        label: 'Environment Variables',
        link: 'reference/environment-variables',
      },
      {
        label: 'Glossary',
        link: 'reference/glossary',
      },
      { label: 'Deprecations', link: 'reference/deprecations' },
      { label: 'Remote Cache Plugins', link: 'reference/remote-cache-plugins' },
    ],
    // autogenerate: { directory: 'reference', collapsed: true },
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
