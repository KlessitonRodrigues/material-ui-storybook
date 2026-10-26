# @apps/daisy-ui-storybook

Executable drop-in component library built on **Material UI (MUI)**, documented and previewed with [Storybook](https://storybook.js.org/), and deployed as a static site to **S3 + CloudFront** via AWS CDK.

> This repository is used as a [git submodule](https://github.com/KlessitonRodrigues/daisy-ui-components) mounted at `apps/daisy-ui-storybook`.

## Add Submodule

```
git submodule add git@github.com:KlessitonRodrigues/daisy-ui-components.git apps/daisy-ui-storybook
git submodule update --init --recursive
```

## Getting Started

```bash
# Install dependencies (yarn is the package manager)
yarn install --frozen-lockfile

# Run Storybook dev server on port 6006
yarn dev

# Build Storybook static export into storybook-static/
yarn build
```

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

## Testing

Story tests run with Vitest + `@storybook/addon-vitest`, executing in headless Chromium via Playwright against the stories themselves:

```bash
npx vitest
```

## Deployment

Infrastructure lives in the separate `aws/` package (AWS CDK v2):

- `aws/awsDeploy.ts` — `WebsiteStack`: private S3 bucket (CORS GET/HEAD) + CloudFront distribution with OAI and an inline URL-rewrite function serving `storybook-static/`.
- CI/CD via GitHub Actions (`.github/workflows/deploy.yml`): on push to `main` — Node 24, yarn install/build, CDK deploy (`us-east-1`).

## Project Structure

```
material-ui-storybook/
├── AGENTS.md                        # Agent instructions
├── README.md                        # This file
├── package.json                     # Package: @apps/daisy-ui-storybook (entry: src/index.tsx)
├── tsconfig.json                    # TypeScript config (strict, bundler resolution, react-jsx)
├── vitest.config.ts                 # Vitest config with Storybook test plugin (Playwright/Chromium)
│                                    #   + resolve aliases to ESM shims (aria-query, lz-string, pretty-format)
├── .storybook/                      # Storybook configuration
│   ├── main.ts                      # Component stories config (nextjs-vite, addons a11y/docs/vitest)
│   └── preview.tsx                  # Preview: ThemeProvider + CssBaseline (MUI theme), autodocs, controls matchers
├── .github/
│   └── workflows/
│       └── deploy.yml               # CI/CD → build storybook and deploy CDK on push to main
└── aws/                             # Separate CDK package for deployment
    └── awsDeploy.ts                 # WebsiteStack: S3 bucket + CloudFront (OAI, URL rewrite function)

src/
├── index.tsx                        # Public entry point → re-exports ALL components + utils
├── global.css                       # Tailwind utilities + design token CSS variables (--color-*)
├── theme/
│   └── theme.ts                     # MUI theme (createTheme): palette/typography/shape mapped to design tokens
├── shims/                           # ESM interop shims for CJS-only deps
├── components/
│   ├── common/                      # Reusable primitives (~40 components, common.* prefix) built on MUI
│   ├── charts/                      # Recharts wrappers (chart.* prefix)
│   ├── authetication/               # Sign-in screens
│   ├── cards/                       # Currency card
│   ├── navbars/                     # Top + fixed navbars
│   ├── settings/                    # Loading / language / theme settings
│   ├── showcase/                    # Composite demo sections (showcase.* prefix)
│   └── users/                       # User initials avatar
├── stories/                         # Storybook stories (~28, one per component)
└── utils/                           # Pure helper functions (no React)
    ├── utils.colors.ts              # Color palettes (hex maps)
    ├── utils.date.ts                # Date helpers
    ├── utils.html.ts                # HTML helpers
    └── utils.string.ts              # String helpers
```

## Technologies

| Category            | Technology                                                           | Notes                                                                                                                        |
| ------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| UI runtime          | React `19.x` + React DOM                                             | Function components with inline props interfaces                                                                             |
| Routing/utilities   | Next.js `16.x`                                                       | Uses `next/link` and `next/navigation`; framework for Storybook via `@storybook/nextjs-vite` + Vite                          |
| Language            | TypeScript `7.x`                                                     | Strict mode, bundler module resolution, `react-jsx`                                                                          |
| Component framework | **Material UI `9.x`** (`@mui/material`)                              | Primary source of primitives (Button, TextField, Card, Table, Dialog, etc.)                                                  |
| CSS engine          | MUI system + Emotion (`@emotion/react`, `@emotion/styled`)           | Styling via the `sx` prop and theme in `src/theme/theme.ts`                                                                  |
| Utility classes     | Tailwind CSS `v4` (via `@tailwindcss/postcss`)                       | Static utility classes + `--color-*` design tokens in `src/global.css`                                                       |
| Charts              | `recharts 3.x`                                                       | Wrappers in `src/components/charts/`                                                                                         |
| Icons               | `react-icons` (Pi set)                                               | Registry in `common.icon.map.tsx`; `@mui/icons-material` also available                                                      |
| Toasts              | `react-toastify 11.x`                                                | Wrapped in `common.toastify.tsx`                                                                                             |
| Storybook           | `storybook 10.x` + `@storybook/nextjs-vite`                          | Addons: a11y, docs (`autodocs` enabled), Vitest addon                                                                        |
| Unit/testing        | Vitest + `@storybook/addon-vitest` + Playwright (Chromium, headless) | Tests run against stories directly                                                                                           |
| Formatting          | Prettier `3.x` + `@trivago/prettier-plugin-sort-imports`             | 100 char width, singleQuote, specific import order                                                                           |
| Package manager     | Yarn                                                                 | `resolutions` pins `aria-query`/`lz-string` for ESM interop                                                                  |
| Deploy (infra)      | AWS CDK v2 (`aws-cdk-lib`, `constructs`)                             | S3 bucket (private, CORS GET/HEAD) + CloudFront distribution with OAI and inline rewrite Function serving `storybook-static` |
| CI/CD               | GitHub Actions (`.github/workflows/deploy.yml`)                      | On push to `main`: Node 24, yarn install/build, CDK deploy (`us-east-1`)                                                     |

## Conventions

- Component files use `kebab-case`-ish dotted names (`common.button.tsx`); exported components are `PascalCase` (`Button`).
- Every component exposes its props interface in the same file (`<Name>Props` / `I<Name>`) and is re-exported from `src/index.tsx` — add new components there.
- New components require a matching `*.stories.tsx` in `src/stories/` (story names mirror the component).
- Build components from MUI primitives and style them with the `sx` prop; do not reintroduce `twMerge`/`toCss` class-merging or daisyUI classes.
- Design tokens live as `--color-*` CSS variables in `src/global.css` and as the MUI theme in `src/theme/theme.ts` — reference them via `var(--...)` inside `sx` so light/dark flips keep working.
- Layout primitives (`Row`/`Column`) accept the legacy `flexX`/`flexY`/`gap`/`responsive` props, which map to MUI `Box` `sx` flex styles.
- Tailwind utility classes are still available for static layout classNames in screens (auth/showcase/navbars).

## License

See the parent repository for licensing information.
