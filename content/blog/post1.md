---
title: Building Curricel
date: 2026-09-20
description: getting started building an AI powered learns app based on C# and local inference as the main goal
---


## What is Curricel?
Curricel is a local AI powered student study buddy app built for edge device computation and helping students grasp what they don't understand.

## What is the tech stack?

Curricel is going to run on C# and leverage the llamaSharp library to make the latency between the models inference and the user prompt being sent as near to zero as possible. because llamasharp is built upon c++ and is natively compile in it, the app will leverage this performance to help edge devices like cpu bound laptops and older hardware have as much performance as possible. the app will also leverage sqlite databases to net zero ram usage as the app is running and will use the sqlite-vec extension to add vectorization and RAG to the application for better llm interactions and user expierence. 