# Wedgwood Design (v2)

Version 2 of Wedgwood Design Limited's website.

[![Netlify Status](https://api.netlify.com/api/v1/badges/41bb6881-64c8-4083-85dc-d08ab4cd93e7/deploy-status)](https://app.netlify.com/sites/wedgwooddesign/deploys)

---

## Getting it setup

Install dependencies:

```sh
npm install
```

Build site:

```sh
npm run build
```

---

## While developing

Watch (while developing):

```sh
npm run watch
```

---

## Versioning *(before deployment)*

Using commands like the following to automatically update / change the `package.json` *version* number...

* `npm version major`
  * eg. __*1*__.0.0
* `npm version minor`
  * eg. 1.__*1*__.0
* `npm version patch`
  * eg. 1.0.__*1*__

```markdown
The `serviceworker.js` file dynamically uses the `package.json` version value as it's version. This makes sure a newer version is installed when updated content is deployed.
```

To make the `git commit` more meaningful, add a *message* to the version `major`, `minor` or `patch`.

**Something like this...**

`npm version patch -m "Upgraded to version %s. Updated the service worker."`

---

## Manual deployment

Deploy to Netlify ("Draft" then "Production"):

```sh
npm run deploy-draft
```

then...

```sh
npm run deploy-production
```

The changes will now deployed to live. The `netlify.toml` file determines the build files location.

---

## Auto deployment

This happens once changes have been merged into the *master* (production) branch.
