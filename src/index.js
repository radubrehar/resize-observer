import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';

const RENDER = (
  <div
    style={{ display: 'none' }}
    data-name="@rb/resize-observer-placeholder"
  />
);

class ReactResizeObserver extends React.Component {
  componentDidMount() {
    if (!ResizeObserver) {
      return;
    }
    const node = findDOMNode(this);
    const target = node.parentNode;

    this.target = target;

    const observer = new ResizeObserver(entries => {
      this.props.onObserverResize(entries);

      const first = entries[0];

      if (first) {
        this.props.onResize(first.contentRect, entries);
      }
    });

    observer.observe(target);

    this.observer = observer;
  }

  shouldComponentUpdate() {
    return false; // since we never need to re-render the current resize-observer component
    // as it only attaches a window.ResizeObserver to the parent node
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.unobserve(this.target);
      if (this.observer.disconnect) {
        this.observer.disconnect();
      }
    }

    delete this.target;
  }

  render() {
    return RENDER;
  }
}

const emptyFn = () => {};

ReactResizeObserver.defaultProps = {
  onObserverResize: emptyFn,
  onResize: emptyFn
};
ReactResizeObserver.propTypes = {
  onObserverResize: PropTypes.func,
  onResize: PropTypes.func
};

export default ReactResizeObserver;
