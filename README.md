# album-site

## Design

[Adobe XD Link](https://xd.adobe.com/view/0e787db3-6af5-470d-8e4a-934b20734087-5b2b/)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Editing content

Everything the site displays lives in `src/content/` as YAML:

| File               | What it controls                                             |
| ------------------ | ------------------------------------------------------------ |
| `releases/*.yml`   | One file per album or single: title, cover, streaming links  |
| `soundpacks/*.yml` | One file per soundpack: summary, devices, demos, author note |
| `latest.yml`       | The embed in the "Latest" section                            |
| `about.yml`        | The About photo and text                                     |
| `social-links.yml` | The icons in the header                                      |

Images go in `src/assets/images/` and are referenced as `/images/<file name>`. Summary, note, and About text are Markdown.

You can edit these files directly, or with [Pages CMS](https://pagescms.org) using the forms defined in `.pages.yml`. Every commit to `main` runs the content checks (`src/content/*.test.js`) and then deploys, so a malformed file stops the deploy instead of breaking the site.
