---
title: "BrickPi Robot"
description: "A LEGO BrickPi robot trained on sensor data to complete repeatable tasks autonomously."
date: 2023-04-02
techStack:
  - Python
  - LEGO BrickPi
  - Thonny
repoLink: ""
mediaType: image
mediaSrc: "/project-media/brickpi_project_thumbnail.png"
---

## From LEGO bricks to autonomy

BrickPi lets LEGO MINDSTORMS sensors and motors interface with a Raspberry Pi. I used that bridge to build a robot that can navigate a simple warehouse course and react to obstacles in real time.

## Architecture

1. **Sensing**: ultrasonic, touch, and color sensors feed into the Pi every 50 ms.
2. **Modeling**: a lightweight Python model classifies sensor windows into maneuvers (turn, slow, stop).
3. **Control**: PWM motor drivers translate maneuvers into motion with smoothing to limit jerk.

## Lessons learned

- Sensor fusion on limited hardware is a fun challenge—debouncing noisy signals was key.
- Logging every run unlocked faster iteration; we stored raw traces and labels for replay in Thonny.
- Kids loved testing it, which was the best usability check imaginable.
