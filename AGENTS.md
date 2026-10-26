# AGENTS.md

Executable drop-in component library (`@apps/daisy-ui-storybook`) built on **Material UI (MUI)**, documented and previewed with Storybook, deployed as a static site to S3 + CloudFront via AWS CDK.

This repository is used as a [git submodule](git@github.com:KlessitonRodrigues/daisy-ui-components.git) mounted at `apps/daisy-ui-storybook`.

## Commands

| Command                          | Description                                            |
| -------------------------------- | ------------------------------------------------------ |
| `yarn install --frozen-lockfile` | Install dependencies (yarn is the package manager)     |
| `yarn dev`                       | Run Storybook dev server on port `6006`                |
| `yarn build`                     | Build Storybook static export into `storybook-static/` |
| `npx vitest` (storybook project) | Run story tests in headless Chromium via Playwright    |
| `npx prettier --write .`         | Format code (see `.prettierrc`)                        |
| `yarn cdk-synt` (in `aws/`)      | Synthesize the CDK stack                               |
| `yarn cdk-deploy` (in `aws/`)    | Deploy S3 + CloudFront stack                           |

## Project Structure

```
material-ui-storybook/
├── AGENTS.md                        # This file
├── README.md                        # Submodule setup instructions
├── package.json                     # Package: @apps/daisy-ui-storybook (entry: src/index.tsx)
├── yarn.lock                        # Yarn lockfile (includes `resolutions` pinning aria-query/lz-string)
├── tsconfig.json                    # TypeScript config (strict, bundler resolution, react-jsx)
├── vitest.config.ts                 # Vitest config with Storybook test plugin (Playwright/Chromium)
│                                    #   + resolve aliases to ESM shims (aria-query, lz-string, pretty-format)
├── vitest.shims.d.ts                # Type shims for vite/client
├── postcss.config.mjs               # PostCSS with @tailwindcss/postcss plugin
├── .prettierrc                      # Prettier: printWidth 100, singleQuote, import sort plugin
├── .gitignore
├── .storybook/                      # Storybook configuration
│   ├── main.ts                      # Component stories config (nextjs-vite, addons a11y/docs/vitest)
│   └── preview.tsx                  # Preview: ThemeProvider + CssBaseline (MUI theme), autodocs, controls matchers
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
├── global.css                       # Tailwind utilities + design token CSS variables (--color-*)
├── theme/
│   └── theme.ts                     # MUI theme (createTheme): palette/typography/shape mapped to design tokens
├── shims/                           # ESM interop shims for CJS-only deps (aria-query, lz-string, pretty-format)
├── components/
│   ├── common/                      # Reusable primitives (~40 components, common.* prefix) built on MUI
│   │   ├── common.container.flex.tsx        # Row/Column → MUI Box with sx flex layout
│   │   ├── common.container.if.tsx          # Conditional container
│   │   ├── common.container.page.tsx        # Page/FullPage/Content containers (Box)
│   │   ├── common.container.section.tsx     # Section container (Box)
│   │   ├── common.container.forms.tsx       # Box component="form"
│   │   ├── common.container.chart.tsx       # Chart wrapper container (Box)
│   │   ├── common.container.innerHTML.tsx   # Raw HTML container
│   │   ├── common.text.tsx                  # Typography wrapper (tag/color/size/opacity mapping)
│   │   ├── common.title.Icon.tsx            # Title with icon
│   │   ├── common.button.tsx                # MUI Button (daisy-like props: color/size/variant/mode → MUI props)
│   │   ├── common.button.icon.tsx           # Icon button (Button + Icons)
│   │   ├── common.input.tsx                 # TextField (label, error, before/after adornments)
│   │   ├── common.input.area.tsx            # TextField multiline
│   │   ├── common.input.mask.tsx            # Masked input (wraps InputField)
│   │   ├── common.input.currency.tsx        # Currency input (wraps InputField)
│   │   ├── common.input.radio.tsx           # MUI RadioGroup of Radio
│   │   ├── common.input.select.tsx          # TextField select
│   │   ├── common.menu.tsx                  # MUI List/ListItemButton + Next Link
│   │   ├── common.menu.description.tsx      # List with label + description
│   │   ├── common.responsive.menu.tsx       # Responsive menu (Box + breakpoint sx)
│   │   ├── common.responsive.buttons.tsx    # Responsive buttons (Box + breakpoint sx)
│   │   ├── common.card.tsx                  # Card (Box with design tokens)
│   │   ├── common.paper.tsx                 # MUI Paper
│   │   ├── common.table.tsx                # MUI Table (columns + render slots)
│   │   ├── common.tab.nav.tsx              # MUI Tabs/MuiTab
│   │   ├── common.breadcumbs.tsx            # MUI Breadcrumbs
│   │   ├── common.pagination.tsx            # Custom pagination (Buttons + Icons)
│   │   ├── common.alert.tsx                 # MUI Alert (severity="info")
│   │   ├── common.modal.tsx                 # MUI Dialog (ConfirmModal)
│   │   ├── common.notification.tsx          # Notification list (composed from primitives)
│   │   ├── common.toastify.tsx              # Toasts (react-toastify)
│   │   ├── common.badge.tsx                 # MUI Badge
│   │   ├── common.switch.tsx                # MUI Switch via FormControlLabel
│   │   ├── common.step.tsx                  # MUI Stepper
│   │   ├── common.step.bar.tsx              # Segmented progress bar (Box)
│   │   ├── common.icon.tsx                  # Icon wrapper
│   │   ├── common.icon.map.tsx              # Icon map registry (react-icons Pi set)
│   │   ├── common.carousel.tsx              # Vertical scroll-snap carousel (Box)
│   │   ├── common.carousel.horizontal.tsx   # Horizontal carousel (Box)
│   │   ├── common.display.data.tsx          # Data display (Row/Column + Text)
│   │   ├── common.swap.elements.tsx         # Element swap (Box, rotate/flip/scale)
│   │   ├── common.skeleton.square.tsx       # MUI Skeleton
│   │   ├── common.load.screen.tsx           # Loading screen (Box + MUI CircularProgress)
│   │   └── ImageBox.tsx                     # Image box (Box + img)
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
│       └── user.avatar.tsx          # User initials avatar
├── stories/                         # Storybook stories (~28, *.stories.tsx; one per component)
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
    ├── utils.colors.ts              # Color palettes (material/atlassian/ant/tailwind hex maps)
    ├── utils.date.ts                # Date helpers
    ├── utils.html.ts                # HTML helpers
    └── utils.string.ts              # String helpers (toCss/toBooleanStr retained for legacy use)
```

## Technologies

| Category            | Technology                                                           | Notes                                                                                                                        |
| ------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| UI runtime          | React `19.x` + React DOM                                             | Function components with inline props interfaces                                                                             |
| Routing/utilities   | Next.js `16.x`                                                       | Uses `next/link` and `next/navigation`; framework for Storybook via `@storybook/nextjs-vite` + Vite                          |
| Language            | TypeScript `7.x`                                                     | Strict mode, bundler module resolution, `react-jsx`                                                                          |
| Component framework | **Material UI `9.x`** (`@mui/material`)                              | Primary source of primitives (Button, TextField, Card, Table, Dialog, etc.)                                                  |
| CSS engine          | MUI system + Emotion (`@emotion/react`, `@emotion/styled`)           | Styling via the `sx` prop and theme in `src/theme/theme.ts`                                                                  |
| Utility classes     | Tailwind CSS `v4` (via `@tailwindcss/postcss`)                       | Used for static utility classes and `--color-*` design tokens in `src/global.css` (daisyUI removed)                          |
| Charts              | `recharts 3.x`                                                       | Wrappers in `src/components/charts/`                                                                                         |
| Icons               | `react-icons` (Pi set)                                               | Registry in `common.icon.map.tsx`; `@mui/icons-material` also available                                                      |
| Toasts              | `react-toastify 11.x`                                                | Wrapped in `common.toastify.tsx`                                                                                             |
| Storybook           | `storybook 10.x` + `@storybook/nextjs-vite`                          | Addons: a11y, docs (`autodocs` enabled), Vitest addon                                                                        |
| Unit/testing        | Vitest + `@storybook/addon-vitest` + Playwright (Chromium, headless) | Tests run against stories directly                                                                                           |
| Formatting          | Prettier `3.x` + `@trivago/prettier-plugin-sort-imports`             | 100 char width, singleQuote, specific import order                                                                           |
| Package manager     | Yarn                                                                 | `yarn.lock` at root and in `aws/`; `resolutions` pins `aria-query`/`lz-string` for ESM interop                               |
| Build               | Vite/Rolldown (bundled via Storybook framework)                      | —                                                                                                                            |
| Deploy (infra)      | AWS CDK v2 (`aws-cdk-lib`, `constructs`)                             | S3 bucket (private, CORS GET/HEAD) + CloudFront distribution with OAI and inline rewrite Function serving `storybook-static` |
| CI/CD               | GitHub Actions (`.github/workflows/deploy.yml`)                      | On push to `main`: Node 24, yarn install/build, CDK deploy (`us-east-1`)                                                     |

## Conventions

- Component files are `kebab-case`-ish dotted names (`common.button.tsx`); exported components are `PascalCase` (`Button`).
- Every component exposes its props interface in the same file (`<Name>Props` / `I<Name>`) and is re-exported from `src/index.tsx` — add new components there.
- New components require a matching `*.stories.tsx` in `src/stories/` (story names mirror the component).
- Build components from MUI primitives and style them with the `sx` prop; do not reintroduce `twMerge`/`toCss` class-merging or daisyUI classes.
- Design tokens live as `--color-*` CSS variables in `src/global.css` and as the MUI theme in `src/theme/theme.ts` — reference them via `var(--...)` inside `sx` so light/dark flips keep working.
- Layout primitives (`Row`/`Column`) accept the legacy `flexX`/`flexY`/`gap`/`responsive` props, which map to MUI `Box` `sx` flex styles.
- Tailwind utility classes are still available for static layout classNames in screens (auth/showcase/navbars).
- Folder name typo `authetication/` is pre-existing; keep imports consistent with it.
