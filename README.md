# Material UI Storybook (@apps/daisy-ui-storybook)💡

A React + Next.js component library built with Tailwind CSS and DaisyUI, documented and tested via Storybook.

## 🚀 Technologies

### Core
- **React 19**
- **Next.js 16** (Storybook renderer)
- **TypeScript 7**

### Styling
- **Tailwind CSS 4**
- **DaisyUI 5**
- **PostCSS** & **tailwind-merge**

### UI & Utilities
- **react-icons**
- **react-toastify**
- **recharts** (Bar, Line, Pie, Radar, Radial)

### Testing & Storybook
- **Storybook 10**
- **Vitest** & **Playwright**

### Infrastructure
- **AWS CDK** (CloudFront deployment)
- **GitHub Actions** (CI/CD)

## 📁 Project Structure

- `src/components/`: Component definitions
  - `common/`: Shared UI primitives
  - `charts/`, `navbars/`, `settings/`, `showcase/`, `users/`, `authetication/`
- `src/stories/`: Storybook story files
- `src/utils/`: Utility helpers
- `aws/`: CDK infrastructure for deployment

## 🛠️ Development

### Installation
```bash
yarn install
```

### Available Commands

| Command | Description |
| :--- | :--- |
| `yarn dev` | Run Storybook locally (port 6006) |
| `yarn build` | Build static Storybook site |
| `cd aws && yarn cdk-synt` | Synthesize AWS CDK stack |
| `cd aws && yarn cdk-deploy` | Deploy to AWS CloudFront |

## 📏 Conventions

- **Components**: Named as `<category>.<name>.tsx` (e.g., `common.button.tsx`).
- **Stories**: Located in `src/stories/` with `.stories.tsx` suffix.
- **Utilities**: Located in `src/utils/` named as `utils.<name>.ts`.
