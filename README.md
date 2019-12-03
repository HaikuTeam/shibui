# shibui 渋い
Shibui is the design language powering the [Haiku for Teams](https://haikuforteams.com) brand. This project was created with and is powered by [Diez](https://diez.org).

## What's in the box

The `design-language` directory contains a Diez design language project.

The `example-codebases` directory contains example projects connected to your Diez project. Note that the example apps are only present for demonstration purposes, and can be safely removed.

```
.
├── design-language
|   └── src
|       ├── index.ts
|       └── DesignLanguage.ts
└── example-codebases
    ├── android
    ├── ios
    └── web
```

## Quickstart

To quickly experience how it works, simply run `yarn demo` from `design-language`. This command will use Diez to compile a JavaScript SDK for your design language and link it to the example web project located in `codebases/web`, then start the example web project in your browser.
