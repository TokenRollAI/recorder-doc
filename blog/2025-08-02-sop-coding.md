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