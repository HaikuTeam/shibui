# Shibui 渋い
Shibui is the design language driving [Haiku's](https://haikuforteams.com) apps & websites.  Browse the design language in our up-to-the-moment [docs](https://haikuforteams.com/shibui).

![image](https://user-images.githubusercontent.com/2100885/70292363-ebfb4b00-1792-11ea-937d-42475c44742f.png)

The Shibui codebase is a collection of design files, code, scripts, compilers, and documentation — created to help the Haiku team deliver better UIs faster.

Changes made to Shibui via this repo will propagate across Haiku websites native apps.

*This project is powered by the open source project [Diez][diez-site].  Diez enables this whole project to be maintained in a single TypeScript codebase.  Diez is built & maintained by the Haiku team and the Diez community.*

## Why a design language?

Shibui helps our team in these ways:

 - **Consistency** - integrating with any codebase means more visually consistent UIs
 - **Efficiency** - make changes once and propagate everywhere
 - **Creativity** - design & dev teams explore new frontiers instead of pushing pixels

## Where are your UI components?

We don't yet have any open-source UI component libraries.

We started our design system "language-first," but UI components are coming soon.


# Getting started

## Developers

Developers can consume this package via pre-built SDKs for each platform or by cloning and compiling this source with [Diez][diez-site].

### Pre-built SDKs

**Web**

First, install Shibui as a dependency:

```
$ yarn add @haiku/shibui
```

Then consume the design language via JavaScript/TypeScript or CSS/SCSS:

JavaScript/Typescript:

```js
import {Diez, DesignLanguage} from '@haiku/shibui';

new Diez(DesignLanguage).attach((tokens) => {
  // ...
});
```

CSS/SCSS:

```scss
@import '@haiku/shibui/styles.scss';

h1 {
  @include shibui-typography-heading1();
}
```

**iOS**

Coming soon, in the meantime you can [compile from the source](#compiling-from-the-source).

**Android**

Coming soon, in the meantime you can [compile from the source](#compiling-from-the-source).

### Compiling from the source

First, clone and set-up the repo:

```shell
$ git clone git@github.com:HaikuTeam/shibui.git
$ cd shibui
$ yarn install
```

Then, compile the design language to your desired SDK:

```shell
$ yarn diez compile -t [web|ios|android]
```

Look for the SDK files in `build/diez-haiku-shibui-[web|ios|android]`, and consume accordingly depending on your target platform.

If you need more info, check out the [Diez guides][diez-guides].

## Designers

![image](https://user-images.githubusercontent.com/1357566/70190512-f80bdd80-16aa-11ea-84d6-0bc1ae452f85.png)

`/designs/shibui.sketch` is the living source of truth for many of Shibui's design tokens.

Simply open `/designs/shibui.sketch` in Sketch and make some changes.  Once saved, you can run `yarn diez exact` from the terminal and the changes will propagate to the design language in TypeScript.

Feel free to fork this repo and explore.  You can easily create your own theme or brand on this chassis — or feel free to make contributions back to our own design language!  Your changes may ship to prod.

[diez-site]: https://diez.org
[diez-guides]: https://diez.org/getting-started/
