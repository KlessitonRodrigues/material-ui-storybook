# AGENTS.md

This file provides guidance for AI coding agents working in this repository.

## Project Overview

A React + Next.js component library/storybook (`@apps/daisy-ui-storybook`) built with Tailwind CSS and DaisyUI, documented and tested via Storybook. It also includes an `aws/` sub-project (AWS CDK app) used to deploy the built Storybook site to AWS CloudFront.

## Technologies

### Core
- **React** 19
- **Next.js** 16 (used as the Storybook framework renderer, `next-env.d.ts` types)
- **TypeScript** 7

### Styling
- **Tailwind CSS** 4
- **DaisyUI** 5 (Tailwind component library)
- **tailwind-merge**
- **@tailwindcss/postcss** + **PostCSS**

### UI / Component Utilities
- **react-icons** - icon set
- **react-toastify** - toast notifications
- **recharts** - charts (bar, line, pie, radar, radial)
- **react-is**

### Storybook & Testing
- **Storybook** 10 (`@storybook/nextjs-vite` framework)
  - `@storybook/addon-a11y`
  - `@storybook/addon-docs`
  - `@storybook/addon-vitest`
  - `@chromatic-com/storybook`
- **Vitest** (`vitest.config.ts`, `vitest.shims.d.ts`)
  - `@vitest/coverage-v8`
  - `@vitest/browser-playwright`
- **Playwright** - browser automation for Storybook test runner

### Tooling
- **Prettier** (`.prettierrc`) + `@trivago/prettier-plugin-sort-imports`
- **Yarn** - package manager (`yarn.lock`)
- **Turbo** (`.turbo/` cache directory - monorepo task runner)

### Infrastructure / Deployment
- **AWS CDK** (`aws-cdk`, `aws-cdk-lib`, `constructs`) - infrastructure as code
- **ts-node** - run TypeScript CDK scripts
- **GitHub Actions** (`.github/workflows/deploy.yml`) - CI/CD pipeline that builds Storybook and deploys via CDK to AWS CloudFront

## File Structure

```
material-ui-storybook/
├── .github/
│   └── workflows/
│       └── deploy.yml                  # CI/CD: build + deploy to AWS via CDK
├── .storybook/
│   ├── main.ts                         # Storybook config (stories glob, addons, framework)
│   └── preview.tsx                     # Storybook global preview/decorators
├── aws/                                 # AWS CDK deployment sub-project
│   ├── awsDeploy.ts                     # CDK stack definition (CloudFront deploy)
│   ├── cdk.json                         # CDK app config
│   ├── package.json                     # CDK dependencies/scripts
│   ├── tsconfig.json
│   └── yarn.lock
├── src/
│   ├── components/
│   │   ├── authetication/
│   │   │   ├── auth.signin.container.tsx
│   │   │   ├── auth.signin.container2.tsx
│   │   │   └── auth.signin.container3.tsx
│   │   ├── cards/
│   │   │   └── card.currency.tsx
│   │   ├── charts/
│   │   │   ├── chart.bar.tsx
│   │   │   ├── chart.line.tsx
│   │   │   ├── chart.pie.tsx
│   │   │   ├── chart.radar.tsx
│   │   │   └── chart.radial.tsx
│   │   ├── common/                      # Shared/reusable UI primitives
│   │   │   ├── common.alert.tsx
│   │   │   ├── common.badge.tsx
│   │   │   ├── common.breadcumbs.tsx
│   │   │   ├── common.button.icon.tsx
│   │   │   ├── common.button.tsx
│   │   │   ├── common.card.tsx
│   │   │   ├── common.carousel.horizontal.tsx
│   │   │   ├── common.carousel.tsx
│   │   │   ├── common.container.chart.tsx
│   │   │   ├── common.container.flex.tsx
│   │   │   ├── common.container.forms.tsx
│   │   │   ├── common.container.if.tsx
│   │   │   ├── common.container.innerHTML.tsx
│   │   │   ├── common.container.page.tsx
│   │   │   ├── common.container.section.tsx
│   │   │   ├── common.display.data.tsx
│   │   │   ├── common.icon.map.tsx
│   │   │   ├── common.icon.tsx
│   │   │   ├── common.input.area.tsx
│   │   │   ├── common.input.currency.tsx
│   │   │   ├── common.input.mask.tsx
│   │   │   ├── common.input.radio.tsx
│   │   │   ├── common.input.select.tsx
│   │   │   ├── common.input.tsx
│   │   │   ├── common.load.screen.tsx
│   │   │   ├── common.menu.description.tsx
│   │   │   ├── common.menu.tsx
│   │   │   ├── common.modal.tsx
│   │   │   ├── common.notification.tsx
│   │   │   ├── common.pagination.tsx
│   │   │   ├── common.paper.tsx
│   │   │   ├── common.responsive.buttons.tsx
│   │   │   ├── common.responsive.menu.tsx
│   │   │   ├── common.skeleton.square.tsx
│   │   │   ├── common.step.bar.tsx
│   │   │   ├── common.step.tsx
│   │   │   ├── common.swap.elements.tsx
│   │   │   ├── common.switch.tsx
│   │   │   ├── common.table.tsx
│   │   │   ├── common.tab.nav.tsx
│   │   │   ├── common.text.tsx
│   │   │   ├── common.title.Icon.tsx
│   │   │   ├── common.toastify.tsx
│   │   │   └── ImageBox.tsx
│   │   ├── navbars/
│   │   │   ├── navbar.fixed.tsx
│   │   │   └── navbar.top.tsx
│   │   ├── settings/
│   │   │   ├── settings.lang.tsx
│   │   │   ├── settings.load.tsx
│   │   │   └── settings.theme.tsx
│   │   ├── showcase/
│   │   │   ├── showcase.card.list.images.tsx
│   │   │   ├── showcase.card.list.tsx
│   │   │   ├── showcase.card.timeline.tsx
│   │   │   ├── showcase.horizontal.carousel.tsx
│   │   │   ├── showcase.image.right.header.tsx
│   │   │   └── showcase.simple.footer.tsx
│   │   └── users/
│   │       └── user.avatar.tsx
│   ├── stories/                         # Storybook stories (.stories.tsx) for each component
│   │   ├── card.currency.stories.tsx
│   │   ├── card.stories.tsx
│   │   ├── chart.bar.stories.tsx
│   │   ├── chart.line.stories.tsx
│   │   ├── chart.pie.stories.tsx
│   │   ├── chart.radar.stories.tsx
│   │   ├── chart.radial.stories.tsx
│   │   ├── column.stories.tsx
│   │   ├── input.area.stories.tsx
│   │   ├── input.currency.stories.tsx
│   │   ├── input.radio.stories.tsx
│   │   ├── input.select.stories.tsx
│   │   ├── input.stories.tsx
│   │   ├── menu.description.stories.tsx
│   │   ├── menu.stories.tsx
│   │   ├── modal.confirm.stories.tsx
│   │   ├── navbar.top.stories.tsx
│   │   ├── pagination.stories.tsx
│   │   ├── paper.stories.tsx
│   │   ├── resposive.button.stories.tsx
│   │   ├── resposive.menu.stories.tsx
│   │   ├── row.stories.tsx
│   │   ├── skeleton.stories.tsx
│   │   ├── step.bar.stories.tsx
│   │   ├── step.stories.tsx
│   │   ├── switch.stories.tsx
│   │   ├── text.stories.tsx
│   │   └── user.avatar.stories.tsx
│   ├── utils/
│   │   ├── utils.colors.ts
│   │   ├── utils.date.ts
│   │   ├── utils.html.ts
│   │   └── utils.string.ts
│   ├── global.css                       # Tailwind/DaisyUI global styles
│   └── index.tsx                        # Package entry point
├── .gitignore
├── .prettierrc                          # Prettier config (import sorting plugin)
├── package.json                         # Root project dependencies & scripts
├── postcss.config.mjs                   # PostCSS/Tailwind config
├── README.md
├── tsconfig.json                        # TypeScript config
├── vitest.config.ts                     # Vitest config (Storybook test runner)
├── vitest.shims.d.ts
└── yarn.lock
```

## Conventions

- Component files use dot-separated naming: `<category>.<name>.tsx` (e.g. `common.button.tsx`, `chart.bar.tsx`).
- Story files mirror component names with a `.stories.tsx` suffix and live in `src/stories/`, not alongside the components.
- Shared/reusable primitives live under `src/components/common/`.
- Utility helpers live under `src/utils/` with `utils.<name>.ts` naming.

## Commands

- `yarn dev` - Run Storybook locally on port 6006.
- `yarn build` - Build the static Storybook site.
- `cd aws && yarn cdk-synt` - Synthesize the AWS CDK stack.
- `cd aws && yarn cdk-deploy` - Deploy the CDK stack (CloudFront).
