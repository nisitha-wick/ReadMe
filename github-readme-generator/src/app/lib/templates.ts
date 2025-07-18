
export const TEMPLATES = {
  minimal: `# {{projectName}}\n\n{{description}}`,
  standard: `# {{projectName}}\n\n## Description\n{{description}}\n\n## Installation\n\`\`\`bash\nnpm install {{projectName}}\n\`\`\`\n\n## Usage\n\n## Contributing\n\n## License`,
  detailed: `# {{projectName}}\n\n![Banner](https://via.placeholder.com/1200x400)\n\n## Features\n- Feature 1\n- Feature 2\n\n## Installation\n\n## Usage\n\n## Examples\n\n## API Reference\n\n## Contributing\n\n## License\n\n## Acknowledgements`
} as const;