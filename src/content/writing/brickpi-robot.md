---
title: "Building an Autonomous Firefighting Robot: A Journey in Engineering Design"
date: 2025-04-05
description: "How we built a working fire-fighting LEGO robot over the span of 2 months and countless sleepless nights."
---

### Introduction

Our engineering design course challenged my team and I to tackle a problem with real-world stakes: how can robotics assist in firefighting, reducing human risk and improving efficiency? Our solution was the development of an autonomous robot capable of detecting fires, navigating obstacles, and deploying a suppression mechanism within strict performance constraints.

What started as brainstorming on paper evolved into a fully integrated system—complete with iterations, failures, and breakthroughs that shaped our understanding of engineering design.

## System Requirements and Concept Development

From the outset, we were given clear but demanding requirements:

- Fire detection using color recognition (red squares).
- Fire suppression via dropping a sandbag or cube.
- Navigation and obstacle avoidance using ultrasonic sensors.
- Time constraints: extinguish all fires and return to base within three minutes.
- Physical constraints: maneuver through 22 cm-wide doorways.

Early brainstorming produced multiple concepts, but we quickly realized that balancing weight, stability, and precision would be the recurring theme of this project.

## Hardware Evolution
### Version 1.0 – The Learning Curve

Our first chassis design used horizontally mounted motors and a sweeping arm for fire detection and suppression. This setup had major flaws:

- Poor weight distribution caused instability.
- The sweeping arm generated excessive torque and friction, hindering movement.
- Rotations were sloppy and unreliable.

### Version 2.0 – Finding Balance

We reoriented the motors vertically, allowing the BrickPi to sit centrally and improving ground clearance. While handling improved, the lack of proper supports still caused bowing at the axles and imprecision during rotations.

### Version 3.0 – Stability Achieved

In the final design, we added structural supports, re-positioned the wheels, and strengthened the chassis. This improved rigidity, motor alignment, and sensor accuracy, allowing for precise movement and reliable navigation.

Similarly, the fire suppression arm evolved:

- **V1.0**: A non-releasing mechanism based on early misinterpretations of client requirements.

- **V2.0**: A combined sensor-arm system, but it was unstable and imprecise.

- **V2.1–3.0**: A lighter, sturdier arm with optimized weight distribution and smoother dropping action, solving earlier jamming and torque issues.

### Software and Control Logic

At first, our codebase was just a series of test scripts: “move forward,” “rotate 90°,” “check sensor.” As subsystems integrated, the software matured into a main state-machine script supported by helper functions.

Key algorithmic features included:
- Pathfinding with perpendicular ultrasonic sensors, enabling parallel alignment with walls.
- Feedback loops to correct motor discrepancies, ensuring straight-line travel.
- Room scanning algorithm: systematic sweeps across grid squares, detecting and extinguishing fires while avoiding repeated checks.

The software’s evolution reflected our learning: modular design, debugging through isolation, and state-driven logic became second nature.

## Testing and Iteration

Testing was both humbling and transformative.
- Rotation tests revealed instability due to uneven weight distribution.
- Straight-line tests showed motor performance mismatches, which we corrected with ultrasonic feedback.
- Sandbag deployment tests highlighted jamming issues, leading to mechanical redesigns.

Each failure fed directly into redesigns—whether shifting the chassis center of mass, reinforcing joints, or rewriting code to handle edge cases.

## Challenges and How We Overcame Them

1. **Weight Management** – Early imbalance forced us to rethink both the chassis and arm. Iterative design and careful repositioning solved it.

2. **Sensor Reliability** – Erroneous ultrasonic readings were reduced by lowering sensor placement and adding supports.

3. **Mechanical Failures** – Arm jamming and motor bowing were eliminated through sturdier builds and simpler mechanisms.

4. **Software Complexity** – Transitioning from small scripts to a structured, state-based control system required rethinking how we approached automation.

## Lessons Learned

This project taught us that design is never linear. Iteration, failure, and refinement are at the heart of engineering. Some key takeaways:

- The importance of integrating hardware and software early, since changes in one often cascade to the other.
- How feedback from testing—even frustrating failures—is the fastest way to improve.
- The value of team roles and communication, as our project spanned mechanical, electrical, and software integration.

## Conclusion

Our firefighting robot represents more than just a course project—it’s a tangible step into the world of practical, interdisciplinary engineering. By combining sensors, mechanics, and algorithms, we created a robot that autonomously navigates, detects fires, and suppresses them within strict constraints.

The final design wasn’t perfect, but it was a huge leap from our starting point. More importantly, the process sharpened our ability to think critically, adapt to failure, and collaborate across technical domains—skills that extend far beyond this single project.