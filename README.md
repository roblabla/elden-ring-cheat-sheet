# Go to https://github.com/Roundtable-Hold/tracker for a good tracker. This repo just contains my own personal unsupported mess of a cheat sheet.

# Dark Souls 3 Cheat Sheet

To view the cheat sheet [click here](http://roblabla.github.io/elden-ring-cheat-sheet/).

This checklist was created by adopting the source code from the [Dark Souls 3 Cheat Sheet](https://github.com/zkjellberg/dark-souls-3-cheat-sheet/) created by [Zachary Kjellberg](https://github.com/ZKJellberg) and the [Dark Souls 2 Cheat Sheet](https://github.com/smcnabb/dark-souls-2-cheat-sheet/tree/gh-pages) created by [Stephen McNabb](https://github.com/smcnabb).

## Contribution Guide

If you are interested in contributing to this guide, I welcome Pull Requests.

For some background on how the guide code is written, here is a sample item on the checklist:

```
<li data-id="playthrough_13_20" class="f_gem f_misc">Continue left until you can enter a room with a Large Soul of a Nameless Soldier and a Raw Gem</li>
```

The **data-id** is a unique ID used to store the user's progress. For example, ***playthrough_13_20*** is the 20th task in zone 13. New data-ids must be used in ascending order, but you can place the new entries anywhere within a zone.

The **class="f_gem f_misc"** field is used for the filtering system. This task provides the user with a gem and a consumable, so we use **f_gem** and **f_misc**. The full list of filter classes is:

| Class   | Description |
|---      |--- |
| f_boss  | Boss fights |
| f_miss  | Content that can be permanently missed |
| f_npc   | NPC side quests |
| f_seed  | Golden Seed |
| f_tear  | Sacred Tear |
| f_tome  | Sorcery Scrolls, and Incantation Prayerbook |
| f_tear  | Effect for Physik flask |
| f_wash  | Ash of War |
| f_sash  | Spirit Ashes |
| f_gest  | Gestures |
| f_sorc  | Sorceries |
| f_inca  | Incantations |
| f_tali  | Talismans |
| f_weap  | Weapons, Spell Tools, and Shields |
| f_arm   | Armor Sets or individual pieces |
| f_stone | Smithing Stones |
| f_misc  | *any other items* |

If none of these filter classes match, use **class="f_none"**.

In addition to the filter classes, there is a second type of classes used to control the visibility of entries based on which playthrough the user is on:

| Class  | Description |
|---     |--- |
| h_ng+  | items hidden on NG+ and beyond, e.g., Ashen Estus Flask |
| s_ng+  | items shown on NG+ and beyond, e.g., +1 rings |
| s_ng++ | items shown on NG++ and beyond, e.g., +2 rings |
