---
slug: sop-coding
title: SOP Coding
authors: [DJJ]
tags: [recorder, "zen of sop coding"]
---

I don't like Vibe Coding.

<!-- truncate -->

I don't like generating hundreds of lines of code from a single sentence, with useless features and complex logic piled together.

I don't like letting LLMs tarnish my codebase "nakedly", so except for some demo or presentation projects, I use LLMs with caution.

I used to be a fervent supporter of Vibe Coding, but after using it more and more deeply, I feel that what LLMs need is not more information in the context, but more constraints.

Today's LLM is a very smart intern, so smart that it's smarter than you and better at "writing code," but it doesn't understand your business.

So: what you need is not Vibe Coding, but SOP Coding.

I use [recorder](https://github.com/TokenRollAI/recorder) to generate operation records, and then use [SPEC-mcp](https://github.com/TokenRollAI/SPEC-mcp) to generate SOPs.

Provide the project's context, tell it "what to do," and give it good guidance. The rest is about trusting the LLM, trusting that the smartest AI can dance in shackles.

In other words: you can't completely trust AI, but you can trust code written by an AI that has good guidance, clear goals, and strict constraints.

So, I recommend SOP Coding to you. Provide the AI with a very practical guide, let it learn to abstract the key steps, and then you can trust it.

Compared to Vibe Coding, which aims to further liberate AI, I prefer to establish rules and use SOP Coding in serious online projects.



## SOP Example




> This is an example based on go-zero development.



```markdown
# SOP Template: Add a New API Route

## Overview
This SOP (Standard Operating Procedure) is designed to guide developers in adding a new API route to an existing service. The process covers the complete flow from defining the API route, generating initial code, to implementing business logic. This template aims to ensure that the addition of all new routes follows a unified and repeatable best practice.

## Step-by-Step Guide

### Step 1: Define the API Route
*   **Description:** The core of this step is to define the new API route in the `.api` file. This is the basis for the code generation tool to identify and create the corresponding handler and logic files.
*   **Action Details:**
    *   Modify file: `api/web/dsl/[service_name].api`
      \```diff
      // Add the new route definition within the appropriate service block
      +    @handler [HandlerName]Handler
      +    [http_method] /[route_path] ([RequestType]) returns ([ResponseType])
      \```

### Step 2: Generate Code
*   **Description:** Use the `make` command to trigger the code generator. This tool will automatically create or update the handler, logic, and routes files based on the definition in the `.api` file.
*   **Action Details:**
      \```bash
      # Run this command to generate the necessary API files
      make api SERVICE_NAME=[service_name]
      \```

### Step 3: Implement Business Logic
*   **Description:** In this step, you need to implement the specific business logic in the newly generated logic file. The code generator has already created the necessary file and function skeletons for you.
*   **Action Details:**
    *   Modify file: `api/web/internal/logic/[handler_name]_logic.go`
      \```go
      // Fill in the business logic in the generated function
      func (l *[HandlerName]Logic) [HandlerName](req *types.[RequestType]) (resp *types.[ResponseType], err error) {
          // TODO: Implement your business logic here
          return
      }
      \```

## Key Analysis and Summary

### Key File Archetypes
*   **API Definition File (`api/web/dsl/[service_name].api`):** This is the project's "blueprint." All new API routes must be defined here. It is the input for the code generator and determines the structure of the subsequent generated files (like handlers and logic files).
*   **Handler File (`api/web/internal/handler/[handler_name]_handler.go`):** This file is responsible for parsing incoming HTTP requests and passing them to the corresponding logic file for processing. It is usually auto-generated and, in most cases, does not require manual modification.
*   **Logic File (`api/web/internal/logic/[handler_name]_logic.go`):** This is the core file for implementing business logic. All data processing, database interactions, and other core functionalities should be implemented in this file.

### File Relationship Patterns
*   The lifecycle of an API route begins in the `.api` definition file.
*   The `make api` command reads the `.api` file and generates or updates the corresponding handler and logic files.
*   The handler file acts as the entry point for requests, forwarding them to the logic file.
*   The logic file contains the core business logic and returns the result after processing the request.

### Primary and Secondary Changes
*   **Primary Changes (Core Logic):**
    *   Definition of the route in the `.api` file.
    *   Implementation of the business logic in the logic file.
*   **Secondary Changes (Automated Generation):**
    *   Generation of the handler file.
    *   Initial framework of the logic file.
    *   Updating of the routes file.

    Developers should focus their main efforts on the changes to the core logic, while secondary changes can be considered the result of the automated process.
```