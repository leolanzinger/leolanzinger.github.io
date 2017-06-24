---
layout: work
title:  "leapmotion music controller"
fulltitle: "Prototyping of a Leap Motion based music controller"
date:   2016-11-11 18:00:00 +0100
category: works
tag: ux
sets:
  - name: ux
  - name: processing
---

For my bachelor thesis in Computer Science I built and run usability testing on a music controller based on the [Leap Motion][leapmotion]. The aim of the project was to build a controller for Ableton Live that could help live performers in controlling various parameters of their DAW.

The first phase of the project included interviews with musicians that actively use Ableton Live in their live performances, to highlight possible musical tasks that could be implemented in the Leap Motion-based controller. This preliminary interview highlighted four tasks that were suited for a haptic-free and gesture based interaction such as the one with the Leap Motion:
* Samples launching
* Audio channel selection
* Volume control
* Effect parameter control

Based on the nature of each tasks, two interaction prototypes were implemented and tested: one based on one-hand gesture interactions and one based on two-hand gesture interactions. The prototypes were developed with [Processing][processing] and relied on OSC commands to control the DAW.

![prototypes](/images/leapmotion/prototypes.png)
*Two prototypes were developed and tested*

The user testing encompassed two phases:
1. a quantitative test to evaluate purely the quality of the gesture recognition algorithms and the ergonomics of the prototypes. 26 non-musician participants were employed for this user test.
2. a qualitative test to evaluate the usability of the prototypes with musicians in a real use case. Three musicians were called in a rehearsal room and asked to perform the tasks as they would do in a normal live concert setting.

![study](/images/leapmotion/wolf.gif)
*A qualitative user study*

The bachelor thesis described the results of the two user tests and discusses future improvements of the controller.

The **quantitative tests** results showed that user were faster when interacting with one hand, however more precision was reached when interacting with two hands. Volume parameter control though did not report significant differences between the two prototypes.

The **qualitative tests** results highlighted an interesting pattern: gestures which required continuous control (such as changing the volume or a continuous parameter of an instrument) had a better perceived usability than gestures which required a triggering input (such as playing one sample or selecting one track). The result showed that haptic feedback may influence the usability of a tool on the basis of the task nature.

[leapmotion]: http://www.leapmotion.com
[processing]: http://www.processing.org
