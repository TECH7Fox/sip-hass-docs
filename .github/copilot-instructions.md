# SIP-HASS Documentation Website

SIP-HASS is a comprehensive documentation website built with Docusaurus 2 that provides guides for integrating SIP (Session Initiation Protocol) devices with Home Assistant. The website covers the SIP card, Asterisk add-on, and Home Assistant integration components.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Initial Setup & Dependencies
- Initialize git submodules (REQUIRED):
  ```bash
  git submodule init && git submodule update
  ```
- Install main repository dependencies:
  ```bash
  npm ci
  ```
- Install sip-hass-card submodule dependencies (REQUIRED for builds):
  ```bash
  cd sip-hass-card && npm ci && cd ..
  ```

### Building & Development
- Development server (with hot reload):
  ```bash
  npm start
  ```
  - Takes 20-25 seconds to compile. NEVER CANCEL. Set timeout to 60+ seconds.
  - Runs at http://localhost:3000/sip-hass-docs/
  - Automatically reloads when files change

- Production build:
  ```bash
  npm run build
  ```
  - Takes 60-65 seconds to complete. NEVER CANCEL. Set timeout to 120+ seconds.
  - Generates static files in `build/` directory
  - TypeDoc automatically generates API documentation from sip-hass-card submodule

- Serve production build locally:
  ```bash
  npm run serve
  ```
  - Serves built site at http://localhost:3000/sip-hass-docs/
  - Use this to test production builds before deployment

### Other Commands
- Clear Docusaurus cache:
  ```bash
  npm run clear
  ```
- Deploy to GitHub Pages (handled by CI):
  ```bash
  npm run deploy
  ```

## Validation

### Required Build Testing
- ALWAYS run the complete build process after making content changes:
  1. `npm run build` - Wait for completion (60-65 seconds)
  2. `npm run serve` - Test the built site
  3. Navigate to key pages to verify content renders correctly

### Manual Validation Scenarios
After making changes to documentation content, ALWAYS verify:
- **Homepage functionality**: Main navigation, hero section, and component cards display correctly
- **Navigation**: Check that new pages appear in correct sidebar sections (Tutorial, Add-on, Cards, Integration, Developers, Showcase)
- **Links**: Verify internal and external links work correctly  
- **Code blocks**: Ensure syntax highlighting works for configuration examples (yaml, json, bash, editorconfig)
- **Mermaid diagrams**: Confirm any flowcharts or diagrams render properly
- **Search functionality**: Test that new content is discoverable via search
- **Mobile responsiveness**: Check key pages display correctly on mobile viewports
- **Footer links**: Verify community and developer links in footer work correctly

### End-to-End Testing
When validating the complete workflow:
1. Start development server: `npm start`
2. Navigate to http://localhost:3000/sip-hass-docs/ in browser
3. Verify homepage loads with SIP-HASS branding and three main component cards
4. Test navigation between Tutorial, Add-on, Cards, Integration, Developers, and Showcase sections
5. Confirm search functionality works by searching for common terms
6. Test a few internal links to ensure proper routing

### API Documentation Validation
When sip-hass-card submodule is updated:
- Verify TypeDoc generates updated API docs in `docs/developers/card/api/`
- Check that API reference links in documentation still work
- Confirm TypeScript interfaces and classes are properly documented

## Common Tasks

### Adding New Documentation
- Create markdown files in appropriate `docs/` subdirectory:
  - `docs/tutorial/` - Getting started guides
  - `docs/add-on/` - Asterisk add-on documentation  
  - `docs/card/` - SIP card configuration and usage
  - `docs/integration/` - Home Assistant integration guides
  - `docs/developers/` - Development and API documentation
  - `docs/showcase/` - Examples and use cases

### Working with Special Content
- **Code blocks**: Use language identifiers for syntax highlighting (yaml, json, bash, javascript, etc.)
- **Asterisk configuration**: Use `editorconfig` language for .conf file syntax highlighting
- **Tabbed content**: Use `<Tabs>` and `<TabItem>` components for add-on vs custom PBX instructions
- **Mermaid diagrams**: Supported for flowcharts and architecture diagrams
- **GitHub code references**: Use `github-codeblock` theme for linking to source code

### Repository Structure Reference
```
docs/
├── add-on/          # Asterisk add-on documentation
├── card/            # SIP card documentation  
├── developers/      # Development guides and API docs
├── integration/     # Home Assistant integration
├── showcase/        # Examples and use cases
└── tutorial/        # Getting started guides

src/
├── components/      # Custom React components
├── css/            # Custom styling
└── pages/          # Custom pages

static/
├── img/            # Images and assets
└── .nojekyll       # GitHub Pages configuration

sip-hass-card/      # Git submodule for TypeScript API generation
```

### Configuration Files
- `docusaurus.config.js` - Main site configuration, plugins, and navigation
- `sidebars.js` - Sidebar navigation structure for each documentation section
- `.nvmrc` - Node.js version specification (v18.20.4)
- `package.json` - Dependencies and npm scripts

## CI/CD & Deployment

### GitHub Actions Workflows
- **`deploy.yml`**: Automatically deploys to GitHub Pages on main branch pushes
- **`test-deploy.yml`**: Tests builds on pull requests  
- **`update-submodules.yml`**: Updates git submodules

### Deployment Process
- Site deploys automatically to GitHub Pages at: https://tech7fox.github.io/sip-hass-docs/
- Uses Node.js 18.x for builds
- Requires successful `npm run build` completion
- Handles both main repo and submodule dependencies

### Version Requirements
- **Node.js**: v18.20.4 (specified in .nvmrc)
- **npm**: Latest stable (v10.8.2+ tested)
- **Docusaurus**: v3.8.0

## Troubleshooting

### Common Issues
- **Submodule not initialized**: Run `git submodule init && git submodule update`
- **TypeDoc generation fails**: Ensure sip-hass-card dependencies are installed with `cd sip-hass-card && npm ci`
- **Build warnings about webpack cache**: These are performance warnings, not errors - builds will complete successfully
- **Missing blog directory warning**: Expected behavior - this site doesn't use the blog feature

### Build Performance
- Initial builds may take longer due to TypeDoc API generation
- Subsequent builds use caching for improved performance
- Development server provides hot reloading for fast iteration

### Dependencies
- Some npm audit vulnerabilities are present but non-critical (22 vulnerabilities: 3 low, 19 moderate)
- Use `npm ci` for reproducible builds rather than `npm install`
- All required dependencies are locked in package-lock.json
- Installation includes expected deprecation warnings for rimraf, inflight, and glob packages