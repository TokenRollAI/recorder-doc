---
slug: sop-coding
title: SOP Coding
authors: [DJJ]
tags: [recorder, "zen of sop coding"]
---

我不喜欢Vibe Coding

<!-- truncate -->

我不喜欢一句话说下来生成了几百行代码, 无用的功能和复杂的逻辑堆叠在一起.

我不喜欢让LLM赤裸的玷污我的代码库, 所以除了一些Demo项目, 或者是演示项目, 我都会谨慎的使用LLM

我曾经是狂热的Vibe Coding的支持者, 但是在越来越深入的使用之后, 我觉得LLM需要的不是上下文提供更多的信息, 而是需要上下文提供更多的限制.

现在的LLM是一份非常聪明的实习生, 聪明到比你更聪明, 更懂"写代码", 但是不懂得你的业务.

所以: 你需要的不是Vibe Coding, 而是SOP Coding.

我使用 [recorder](https://github.com/TokenRollAI/recorder)生成操作记录, 然后用[SPEC-mcp](https://github.com/TokenRollAI/SPEC-mcp)生成SOP.

提供项目的上下文, 以及告诉他"做的事情", 以及一个好的指引. 剩下的就是相信LLM, 相信最聪明的AI能够带着镣铐跳舞.

换句话说: 你不能够完全详细AI, 但是你可以相信一个有着良好的指引和清晰目标以及严格束缚的AI编写的代码.

所以, 我向你推荐SOP Coding. 提供给AI一个非常切实可行的指引. 然后让他学习抽象其中的关键步骤, 然后你就可以相信他.

比起Vibe Coding想要更加解放AI的方案, 在严肃的线上项目中, 我会倾向于立下规矩, 使用SOP Coding.