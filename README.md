---
home: true
title: Cratebox - State Management Library
description: Reactive State Management Library for no particular UI Library
meta:
  - name: keywords
  - content: state, management, javascript, es6, react, redux, mobx, mobx-state-tree
  - name: description
  - content: Reactive State Management Library for no particular UI Library
actionText: Get Started →
actionLink: /cratebox
features:
- title: Simple
  details: With minimalism in mind, the exposed API will give you everything that you need without any headaches.
- title: Typed
  details: Built with types in mind you will be able to type your store to create a rock-solid model with type-safe checks.
- title: Opinionated
  details: You won't have to worry about how to structure and deal with complicated stuff.
footer: MIT Licensed | Copyright © 2018 Alex Casillas
---

## Quickstart

```js
import { cratebox, types } from 'cratebox';

const crate = cratebox();

crate.describeStore({
  identifier: 'user',
  model: {
    name: types.string,
    lastName: types.string
  }
});
```
