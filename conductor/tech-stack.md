# Technology Stack

## Core Technologies
### JavaScript and TypeScript
The repository uses JavaScript and TypeScript as its primary programming languages for scripts, validation, and testing.

### Node.js and Bun
Node.js and Bun are used as the primary runtime environments for the project's tooling and development workflows.

## Build, Linting & Formatting
### TypeScript
TypeScript is employed for type checking to ensure code quality across the repository's scripts and configurations.

### Biome
Biome is the designated tool for linting and formatting. It ensures a consistent code style and enforces project standards.

## Testing & Validation
### Testing Frameworks
The project uses both Jest and Bun's built-in test runner to perform comprehensive testing of validation scripts and application configurations.

### Data Validation (AJV & Runtipi Schemas)
AJV is used to validate all application metadata and configurations against standardized JSON schemas (e.g., `dynamic-compose.json`), ensuring that every app in the store meets the required Runtipi OS format.

## App Infrastructure & Management
### Standard Docker Compose (`docker-compose.yml`)
Every app in the `apps/` directory includes a standard Docker Compose file defining its core services and infrastructure.

### Runtipi Dynamic Compose (`docker-compose.json`)
Apps utilize a Runtipi-specific JSON-based configuration (`docker-compose.json`) for dynamic deployment and environment variable management within the Runtipi ecosystem.

### Application Metadata & Configuration
Standardized `config.json` files and `metadata/` directories are used to manage app settings and assets (e.g., logos, descriptions) in a consistent manner.
