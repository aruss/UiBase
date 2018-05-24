# UiBase

A toolkit for building data driven dashboard like applications.

Status: In development

![alt text](./docs/screen1.png "Logo Title Text 1")


## Getting started

This repository contains two projects the `vue-uibase` package and the `dashboard`, the `dashboard` is a example application that utilizes all the features of `vue-uibase`. 

Run following commands to install all the dependencies and link the `dashboard` to `vue-uibase` package.

```bash
cd ./vue-uibase
npm install
npm link
cd ../dashboard
npm install 
npm link vue-uibase
```

Run following to start the dev server, after server is started the application will be available at `http://localhost:8080`

```bash
npm start
```

## Components

- Grid
- Form
- Panel
- Sidebar
- Topbar

## Events

- `sidebartoggle` Toggles the sidebars open/close state

### Broadcasting events

  from HTML
```
  <button v-on:click.stop="$broadcast('someevent', { foo: 'bar' })">
    <i class="dripicons-plus"></i>
  </button>
```
  or inside of a component
```
  this.$broadcast('someevent', { foo: 'bar' })
```
