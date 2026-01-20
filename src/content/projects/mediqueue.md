---
title: "Mediqueue"
description: "Reimagining the emergency department waiting experience with real-time queue transparency."
date: 2025-01-16
techStack:
  - React
  - TypeScript
  - Python
  - Figma
repoLink: "https://github.com/Gui-Oba/mediqueue"
mediaType: image
mediaSrc:
---

## Why we built it

Emergency departments are high-stress environments even before you see a clinician. Patients have limited insight into how long they will wait or what will happen next. Mediqueue uses a gentle interface and triage-aware queue modeling to keep people informed without overwhelming staff.

## What it does

- Pulls triage + registration data from the hospital information system.
- Projects personalized wait windows with clear disclaimers on uncertainty.
- Updates family members via SMS so they can take breaks without missing their turn.
- Provides staff with a dashboard to manually tweak statuses when circumstances change.

## Implementation highlights

We focused on ergonomics—interfaces were co-designed with nurses and volunteers. React + TypeScript powers the client while Python handles queue analytics + notifications.

## Future roadmap

We're piloting with a local clinic to validate the SMS flow at a smaller scale and exploring integrations with translation services.
