---
slug: just-do-once
title: Just Do Once
authors: [DJJ, Danniel]
tags: [recorder, "zen of ai coding"]
---

> [recorder](https://github.com/TokenRollAI/recorder) + [SPEC-mcp](https://github.com/TokenRollAI/SPEC-mcp) = Perfect SOP!
>
> LLM + SOP = JUST DO ONCE!

Do it once, and leave the rest to the AI.

<!-- truncate -->

Writing code, especially business logic, like adding APIs, new components, or repetitive SQL queries, doesn't help you grow. You're wasting time on things you already know, repeating the work you mastered on day one.

In other words: you're wasting your life.

# DRY & SOP

### DRY

> [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)

DRY (Don't Repeat Yourself) is a fundamental principle of software development abstraction: use an abstract concept or a non-redundant architecture to reduce code repetition.

However, the awkward truth is that some repetition is unavoidable:

1. Adding configuration items
2. Adding multi-language support
3. Adding an API endpoint
4. Adding a database table
5. Adding a service for an external dependency

If you're a frontline developer, you might feel that while the work is similar, creating a highly abstract concept would make the architecture obscure and difficult for colleagues to understand. Your supervisor would likely challenge you during code reviews.

### SOP

> [SOP](https://en.wikipedia.org/wiki/Standard_operating_procedure)


SOP (Standard Operating Procedure) is an interesting concept: always do the same thing in the same way.

SOP is the ultimate abstraction, allowing no deviation from the process. Employees must strictly follow this standard.

This is strict, even anti-human, as every step must be identical to the previous one.

However, this rigidity and anti-human approach is perfectly suited for LLMs.

1. It provides the WHERE, WHAT, and HOW for each operational step.
2. LLMs have a natural ability to generalize. They are not stupid and possess powerful generalization capabilities.
    1. A nearly perfect novice: always gets it right away, always brings pleasant surprises.
    2. A mercurial jerk: always wants to "fix" your "bad" code, always adds unnecessary features.

# Vibe Coding Can't Solve Repetition

Vibe Coding sounds wonderful—just say the word, and the AI generates your application.

But this doesn't come without a cost.

You must provide an adequate, even excessive, amount of context to the LLM to get a satisfactory response.

Often, Vibe Coding is like being an annoying product manager: you have to repeat your requests over and over, sometimes with harsh criticism and rejection. More importantly, many people endlessly vibe on a demo but rarely use it in their actual production work.

Why? Because your instructions aren't clear enough!

Yes, because your instructions are unclear, even chaotic and self-contradictory.

- "Add XX feature."
- "Don't add XX feature."

Are these the most common phrases in your conversations with LLMs?

Let's be honest: in software engineering, is this information sufficient?

What features to add? Are they important? What other features are related? What are the challenges to the code architecture? Which features are most important? What's the schedule? Do we need to add new interfaces? What are the storage requirements? Will there be related extensions in the future?

This is the repetition that Vibe Coding cannot solve. In other words:

1. You can almost never provide this perfect context.
2. The LLM will "drift": implementing unimportant features first while glossing over the important ones.

# LLM + SOP

So, is there a solution to all these problems?

Yes! LLM + SOP can solve them!

Or rather, it can solve the most annoying repetitive parts.

The meaning of DRY can also be: Humans do it once, then let the AI repeat it!

The meaning of SOP is: The one time a human does it becomes the standard to be followed!

Then you'll find that what used to be a painstaking effort to organize context becomes a set of very specific constraints.

1. Which directory to go to? What variable to search for? How to modify it?
2. What command to execute? What is the expected output?
3. How to add code? How to delete code? How to modify code?

The question then becomes: how should this information be provided?

[recorder](https://github.com/TokenRollAI/recorder) + [SPEC-mcp](https://github.com/TokenRollAI/SPEC-mcp) = Human Operation Information + SOP Generator = A nearly perfect SOP!

The original problem with SOP was its rigidity.

But the effect of AI generating SOP + AI executing SOP is: leveraging the LLM's generalization and learning abilities to apply a rigid SOP to other tasks during execution.

### recorder

The role of `recorder` is to log human operational steps: the operation log, including additions, deletions, modifications, and command line executions.

It's almost completely seamless because it doesn't require any output from you.

### SPEC-mcp

It infers the purpose of the operations from the operation log and summarizes the steps to generate a highly readable SOP document.

# LLM Executing SOP

So the question is, how do you get an LLM to execute an SOP?

It's simple. Mainstream AI IDEs support it: `@`

Simply put, as long as you load the SOP content into the context using `@`, you're done.

If you have any special instructions, just say them in the chatbox.

Everything is incredibly smooth. And most importantly: under the constraints of an SOP, you don't even need a high-performance model for programming. Using a sub-flagship model can also achieve excellent results.

Another crucial point: it's not just for writing code. The SOP document itself can be provided to other colleagues as project documentation.

Now, enjoy yourself. Go and set yourself free.
