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

  componentWillUnmount() {
    delete this.target;
    if (this.observer) {
      this.observer.unobserve(target);
      if (this.observer.disconnect) {
        this.observer.disconnect();
      }
    }
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
