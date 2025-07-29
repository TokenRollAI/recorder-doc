# Recorder Documentation

This repository contains the source code for the official documentation of the [Recorder](https://github.com/TokenRollAI/recorder) project.

The documentation website is built with [Docusaurus](https://docusaurus.io/).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (version 18.0 or above)
- [pnpm](https://pnpm.io/installation)

### Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/TokenRollAI/recorder-doc.git
    cd recorder-doc
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Start the development server:**
    ```bash
    pnpm start
    ```
    This will open the documentation website in your browser at `http://localhost:3000`. Most changes will be reflected live without needing to restart the server.

## Building the Website

To generate a static build of the website, run:

```bash
pnpm build
```

The static files will be placed in the `build` directory.

## Contributing

We welcome contributions to improve the documentation. Please feel free to open issues or submit pull requests.