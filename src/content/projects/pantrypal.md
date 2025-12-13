---
title: "PantryPal"
description: "A Java-based grocery management platform keeping store operations, customers, and employees in sync."
date: 2022-11-20
techStack:
  - Java
  - Gradle
  - Cucumber
  - Umple
repoLink: "https://github.com/Gui-Oba/PantryPal"
mediaType: image
mediaSrc: 
---

## The challenge

Mid-sized grocers juggle inventory, vendor deliveries, and customer loyalty programs with spreadsheets. PantryPal brings everything into a single application so managers can see the status of their store at a glance.

## Feature set

- Real-time inventory dashboard with low-stock alerts.
- Employee task assignments with progress tracking.
- Customer-facing portal for personalized deals and pickup coordination.
- Scenario testing for demand spikes driven by promotions.

## Technical notes

PantryPal is written in Java with a domain model generated from Umple. We used Cucumber to keep acceptance criteria executable and Gradle to orchestrate builds and tests. The modular design made it easy to add REST endpoints for future integrations.
