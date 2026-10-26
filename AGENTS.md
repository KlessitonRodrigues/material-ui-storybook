# AGENTS.md

Executable drop-in component library (`daisy-ui-storybook` / `@apps/daisy-ui-storybook`) documented and previewed with Storybook, deployed as a static site to S3 + CloudFront via AWS CDK.

This repository is used as a [git submodule](git@github.com:KlessitonRodrigues/daisy-ui-components.git) mounted at `apps/daisy-ui-storybook`.

## Commands

| Command | Description |
| --- | --- |
| `yarn install --frozen-lockfile` | Install dependencies (yarn is the package manager) |
| `yarn dev` | Run Storybook dev server on port `6006` |
| `yarn build` | Build Storybook static export into `storybook-static/` |
| `npx vitest` (storybook project) | Run story tests in headless Chromium via Playwright |
| `npx prettier --write .` | Format code (see `.prettierrc`) |
| `yarn cdk-synt` (in `aws/`) | Synthesize the CDK stack |
| `yarn cdk-deploy` (in `aws/`) | Deploy S3 + CloudFront stack |

## Project Structure

```
material-ui-storybook/
├── AGENTS.md                        # This file
├── README.md                        # Submodule setup instructions
├── package.json                     # Package: @apps/daisy-ui-storybook (entry: src/index.tsx)
├── yarn.lock                        # Yarn lockfile
├── tsconfig.json                    # TypeScript config (strict, bundler resolution, react-jsx)
├── vitest.config.ts                 # Vitest config with Storybook test plugin (Playwright/Chromium)
├── vitest.shims.d.ts                # Type shims for vite/client
├── postcss.config.mjs               # PostCSS with @tailwindcss/postcss plugin
├── .prettierrc                      # Prettier: printWidth 100, singleQuote, import sort plugin
├── .gitignore
├── .storybook/                      # Storybook configuration
│   ├── main.ts                      # Component stories config (nextjs-vite, addons a11y/docs/vitest)
│   └── preview.tsx                  # Preview with autodocs tag and controls matchers
├── .github/
│   └── workflows/
│       └── deploy.yml               # CI/CD → build storybook and deploy CDK on push to main
├── .turbo/                          # Turborepo cache (generated)
└── aws/                             # Separate CDK package for deployment
    ├── package.json                 # aws-cdk v2, aws-cdk-lib, constructs, ts-node
    ├── tsconfig.json                # CDK TypeScript config
    ├── cdk.json                     # CDK app entry (awsDeploy.ts)
    └── awsDeploy.ts                 # WebsiteStack: S3 bucket + CloudFront (OAI, URL rewrite function)

src/
├── index.tsx                        # Public entry point → re-exports ALL components + utils
├── global.css                       # Tailwind/daisyUI global styles
├── components/
│   ├── common/                      # Reusable primitives (~55 components, common.* prefix)
│   │   ├── common.container.flex.tsx        # Flex layout container
│   │   ├── common.container.if.tsx          # Conditional container
│   │   ├── common.container.page.tsx        # Page-level container
│   │   ├── common.container.section.tsx     # Section container
│   │   ├── common.container.forms.tsx       # Forms container
│   │   ├── common.container.chart.tsx       # Chart wrapper container
│   │   ├── common.container.innerHTML.tsx   # Raw HTML container
│   │   ├── common.text.tsx                  # Typography
│   │   ├── common.title.Icon.tsx            # Title with icon
│   │   ├── common.button.tsx                # Button (daisyUI variants/colors/sizes/modes)
│   │   ├── common.button.icon.tsx           # Icon button
│   │   ├── common.input.tsx                 # Text input
│   │   ├── common.input.area.tsx            # Textarea
│   │   ├── common.input.mask.tsx            # Masked input
│   │   ├── common.input.currency.tsx        # Currency input
│   │   ├── common.input.radio.tsx           # Radio group
│   │   ├── common.input.select.tsx          # Select
│   │   ├── common.menu.tsx                  # Menu
│   │   ├── common.menu.description.tsx      # Menu with description
│   │   ├── common.responsive.menu.tsx       # Responsive menu
│   │   ├── common.responsive.buttons.tsx    # Responsive buttons
│   │   ├── common.card.tsx                  # Card
│   │   ├── common.paper.tsx                 # Paper/surface
│   │   ├── common.table.tsx                 # Table
│   │   ├── common.tab.nav.tsx               # Tab navigation
│   │   ├── common.breadcumbs.tsx            # Breadcrumbs
│   │   ├── common.pagination.tsx            # Pagination
│   │   ├── common.alert.tsx                 # Alert
│   │   ├── common.modal.tsx                 # Modal
│   │   ├── common.notification.tsx          # Notification
│   │   ├── common.toastify.tsx              # Toasts (react-toastify)
│   │   ├── common.badge.tsx                 # Badge
│   │   ├── common.switch.tsx                # Switch/toggle
│   │   ├── common.step.tsx                  # Steps
│   │   ├── common.step.bar.tsx              # Step bar
│   │   ├── common.icon.tsx                  # Icon wrapper
│   │   ├── common.icon.map.tsx              # Icon map registry
│   │   ├── common.carousel.tsx              # Carousel
│   │   ├── common.carousel.horizontal.tsx   # Horizontal carousel
│   │   ├── common.display.data.tsx          # Data display
│   │   ├── common.swap.elements.tsx         # Element swapping
│   │   ├── common.skeleton.square.tsx       # Loading skeleton
│   │   ├── common.load.screen.tsx           # Loading screen
│   │   └── ImageBox.tsx                     # Image box
│   ├── charts/                      # Recharts wrappers (chart.* prefix)
│   │   ├── chart.bar.tsx
│   │   ├── chart.line.tsx
│   │   ├── chart.pie.tsx
│   │   ├── chart.radar.tsx
│   │   └── chart.radial.tsx
│   ├── authetication/               # Sign-in screens (note: folder name typo is intentional/existing)
│   │   ├── auth.signin.container.tsx
│   │   ├── auth.signin.container2.tsx
│   │   └── auth.signin.container3.tsx
│   ├── cards/
│   │   └── card.currency.tsx        # Currency card
│   ├── navbars/
│   │   ├── navbar.top.tsx           # Top navbar
│   │   └── navbar.fixed.tsx         # Fixed navbar
│   ├── settings/
│   │   ├── settings.load.tsx        # App loading settings
│   │   ├── settings.lang.tsx        # Language settings
│   │   └── settings.theme.tsx       # Theme settings
│   ├── showcase/                    # Composite demo sections (showcase.* prefix)
│   │   ├── showcase.image.right.header.tsx
│   │   ├── showcase.card.list.images.tsx
│   │   ├── showcase.card.list.tsx
│   │   ├── showcase.horizontal.carousel.tsx
│   │   ├── showcase.card.timeline.tsx
│   │   └── showcase.simple.footer.tsx
│   └── users/
│       └── user.avatar.tsx          # User avatar
├── stories/                         # Storybook stories (~35, *.stories.tsx; one per component)
│   ├── card.stories.tsx
│   ├── card.currency.stories.tsx
│   ├── chart.bar.stories.tsx
│   ├── chart.line.stories.tsx
│   ├── chart.pie.stories.tsx
│   ├── chart.radar.stories.tsx
│   ├── chart.radial.stories.tsx
│   ├── column.stories.tsx
│   ├── row.stories.tsx
│   ├── input.stories.tsx
│   ├── input.area.stories.tsx
│   ├── input.currency.stories.tsx
│   ├── input.select.stories.tsx
│   ├── input.radio.stories.tsx
│   ├── menu.stories.tsx
│   ├── menu.description.stories.tsx
│   ├── modal.confirm.stories.tsx
│   ├── navbar.top.stories.tsx
│   ├── pagination.stories.tsx
│   ├── paper.stories.tsx
│   ├── resposive.button.stories.tsx
│   ├── resposive.menu.stories.tsx
│   ├── skeleton.stories.tsx
│   ├── step.stories.tsx
│   ├── step.bar.stories.tsx
│   ├── switch.stories.tsx
│   ├── text.stories.tsx
│   └── user.avatar.stories.tsx
└── utils/                           # Pure helper functions (no React)
    ├── utils.colors.ts              # Color helpers
    ├── utils.date.ts                # Date helpers
    ├── utils.html.ts                # HTML helpers
    └── utils.string.ts              # String helpers (e.g. toCss conditional class join)
```

## Technologies

| Category | Technology | Notes |
| --- | --- | --- |
| UI runtime | React `19.2.x` + React DOM | Function components with inline props interfaces |
| Routing/utilities | Next.js `16.2.x` | Uses `next/link` and `next/navigation`; framework for Storybook via `@storybook/nextjs-vite` + Vite |
| Language | TypeScript `7.0.2` | Strict mode, bundler module resolution, `react-jsx` |
| Styling | Tailwind CSS `v4` (via `@tailwindcss/postcss`) | Config-less CSS-first setup in `src/global.css` |
| Component styling | daisyUI `5.x` | daisyUI classes (`btn`, `btn-ghost`, etc.) combined conditionally |
| Class merging | `tailwind-merge` | All components merge classes through `twMerge(...)` |
| Conditional classes | Custom `toCss` helper (`src/utils/utils.string.ts`) | Pattern: `toCss(condition, 'class-a', 'fallback')` |
| Charts | `recharts 3.x` | Wrappers in `src/components/charts/` |
| Icons | `react-icons` | See `common.icon.map.tsx` |
| Toasts | `react-toastify 11.x` | Wrapped in `common.toastify.tsx` |
| Storybook | `storybook 10.x` + `@storybook/nextjs-vite` | Addons: a11y, docs (`autodocs` enabled), Vitest addon |
| Unit/testing | Vitest + `@storybook/addon-vitest` + Playwright (Chromium, headless) | Tests run against stories directly |
| Formatting | Prettier `3.x` + `@trivago/prettier-plugin-sort-imports` | 100 char width, single quotes, specific import order |
| Package manager | Yarn | `yarn.lock` at root and in `aws/` |
| Build wildcard | Vite (bundled via Storybook framework) | `- | — |
| Deploy (infra) | AWS CDK v2 (`aws-cdk-lib`, `constructs`) | S3 bucket (private, CORS GET/HEAD) + CloudFront distribution with OAI and inline rewrite Function serving `storybook-static` |
| CI/CD | GitHub Actions (`.github/workflows/deploy.yml`) | On push to `main`: Node 24, yarn install/build, CDK deploy (`us-east-1`) |

## Conventions

- Component files are `kebab-case`-ish dotted names (`common.button.tsx`); exported components are `PascalCase` (`Button`).
- Every component exposes its props interface in the same file (`<Name>Props`) and is re-exported from `src/index.tsx` — add new components there.
- New components require a matching `*.stories.tsx` in `src/stories/` (story names mirror the component).
- Class lists are always composed with `twMerge` + `toCss`, never raw string concatenation.
- Prefer extending daisyUI semantic classes over adding custom CSS.
- Folder name typo `authetication/` is pre-existing; keep imports consistent with it.
