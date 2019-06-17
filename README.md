# AngularLibraryToWebComponentsDemo

This is an Angular workspace that contains:

-   Two sample libraries with three Angular components
-   Angular demo application with one component showing the three Angular components exchanging data
-   The same native page with Web Components compiled from Angular components
-   Project "elements" with compilation from Angular to Web components

---

## Commands

-   `ng serve` — start an Angular demo app with Angular components
-   `npm run build:elements` — build single JS file Web Components from Angular components

---

## Key points

-   [angular.json](angular.json) contains configuration of application for Angular Elements compilation
-   [package.json](package.json) contains:

    -   `document-register-element@v1.8.1`
    -   `@angular/elements` added using `ng add @angular/elements --project=elements` command
    -   `@angular-builders/custom-webpack` added using `ng add @angular-builders/custom-webpack --project=elements` command
    -   `build:elements` script

-   ['elements' project](projects/elements) contains several scripts for easy building proccess
-   [ElementModule](projects/elements/src/abstract/element.module.ts) — abstract class implementing the whole Angular Element adding process
-   [native-demo page](native-demo/index.html) — an example with three bundled Web Components exchanging data
