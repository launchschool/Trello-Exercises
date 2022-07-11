import React from "react";
import $ from "jquery";
import debounce from "debounce";

class Popover extends React.Component {
  state = {
    position: {
      top: 0,
      left: 0
    }
  };

  componentDidMount() {
    this.debounceSetLocation = debounce(this.setLocation, 200);

    if (this.props.visible) {
      this.setLocation();
      this.addSizeBindings();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.visible && !this.props.visible) {
      this.removeSizeBindings();
    } else if (!prevProps.visible && this.props.visible) {
      this.setLocation();
      this.addSizeBindings();
    } else if (
      this.props.visible &&
      prevProps.attachedTo !== this.props.attachedTo
    ) {
      this.setLocation();
    }
  }

  componentWillUnmount() {
    this.removeSizeBindings();
  }

  setLocation = () => {
    const $attachedTo = $(this.props.attachedTo);
    const targetLocation = $attachedTo.offset();
    const attachedHeight = $attachedTo.outerHeight();
    const elWidth = $(this.refs.popover).outerWidth(true);
    const elHeight = $(this.refs.popover).outerHeight(true);
    const $header = $(this.refs.popover)
      .find("header")
      .eq(0);
    const $content = $(this.refs.popover)
      .find(".content")
      .eq(0);
    const contentVerticalMargin =
      $content.outerHeight(true) - $content.outerHeight();
    const headerHeight = $header.outerHeight(true);
    const windowWidth = $(window).width();
    const windowHeight = $(window).height();
    const overRightBounds = elWidth + targetLocation.left - windowWidth;
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (!this.props.coverTarget) {
      targetLocation.top += attachedHeight + 3;
    }

    const overBottomBounds =
      targetLocation.top + elHeight - (windowHeight + scrollTop);

    if (overRightBounds > 0) {
      targetLocation.left -= overRightBounds;
      targetLocation.left -= 20;
    }

    if (targetLocation.left < 0) {
      targetLocation.left = 20;
    }

    if (overBottomBounds > 0) {
      targetLocation.top -= overBottomBounds;
      targetLocation.top -= 20;
    }

    if (targetLocation.top < 0) {
      targetLocation.top = 20;
    }

    $content.css({
      maxHeight: Math.max(
        windowHeight - 40 - headerHeight - contentVerticalMargin,
        50
      )
    });

    this.setState({
      position: targetLocation
    });
  };

  addSizeBindings = () => {
    window.addEventListener("resize", this.debounceSetLocation);
  };

  removeSizeBindings = () => {
    window.removeEventListener("resize", this.debounceSetLocation);
    this.debounceSetLocation.clear();
  };

  render() {
    if (this.props.visible) {
      return (
        <div
          ref="popover"
          className={`popover ${this.props.type}`}
          style={{
            top: this.state.position.top,
            left: this.state.position.left
          }}
        >
          {this.props.children}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Popover;
