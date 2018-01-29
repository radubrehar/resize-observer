# resize-observer

**ResizeObserver** component for **React**.

## Purpose

Get notifications when an in the page changes its size.

The change in size can have any source - layout changes, DOM changes, browser resize - etc. The source is not important.

The [`ResizeObserver`](https://developers.google.com/web/updates/2016/10/resizeobserver) API is a performant way of getting updates on size changes.

> ## Warning! Only works in browsers that natively support `ResizeObserver` - which, in January 2018 is just Chrome >= 64

## Install

```sh
$ npm install @rb/resize-observer --save

# or

$ yarn add @rb/resize-observer
```

## Usage

This component can be nested inside any parent component, and will notify when the node of the parent component changes its size.

```jsx
import React from 'react';
import { render } from 'react-dom';

import ResizeObserver from '@rb/resize-observer';

const App = () => {
  return (
    <div style={{ width: '50vw', border: '1px solid red' }}>
      This element has width: 50vw, so resize the browser window to get
      notifications in the console
      <ResizeObserver
        onResize={({ width, height }) => {
          console.log({ width, height });
        }}
      />
    </div>
  );
};

render(<App />, document.getElementById('root'));
```

## Props

* `onResize: (contentRect)` - you can specify an `onResize` function prop, which will be called with the `contentRect` passed by the native `ResizeObserver` API. You can destructure this to `{width, height}`
  ## License

#### `MIT`
