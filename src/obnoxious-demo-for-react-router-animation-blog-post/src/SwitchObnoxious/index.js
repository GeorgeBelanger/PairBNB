import React from "react";
import classNames from "classnames";
import { Switch } from "react-router-dom";
import { animateSwitch } from "../utils";
import "./styles.css";

class ObnoxiousZoomIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = { zoom: false };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ zoom: true }), 100);
    this._animationCallback = this.props.animationCallback;

    if (this.node) {
      this.node.addEventListener("transitionend", this.onTransitionEnd);
    }
  }

  componentWillUnmount() {
    if (this.node) {
      this.node.removeEventListener("transitionend", this.onTransitionEnd);
    }
  }

  onTransitionEnd = e => {
    // the element transitions the `transform` property. Any other transitions
    // that occur on the element we can just ignore.
    if (e.propertyName !== "transform") return;

    const callback = this._animationCallback;
    delete this._animationCallback;

    if (callback) setTimeout(callback, 0);
  };

  render() {
    return (
      <div
        ref={node => (this.node = node)}
        className={classNames("zoomInit", {
          zoom: this.state.zoom
        })}
      >
        {this.props.children}
      </div>
    );
  }
}

class ObnoxiousIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curChild: props.children,
      curUniqId: props.uniqId,
      prevChild: null,
      prevUniqId: null,
      animationCallback: null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const prevUniqId = prevProps.uniqKey || prevProps.children.type;
    const uniqId = this.props.uniqKey || this.props.children.type;

    if (prevUniqId !== uniqId) {
      this.setState({
        curChild: this.props.children,
        curUniqId: uniqId,
        prevChild: prevProps.children,
        prevUniqId,
        animationCallback: this.swapChildren
      });
    }
  }

  swapChildren = () => {
    this.setState({
      prevChild: null,
      prevUniqId: null,
      animationCallback: null
    });
  };

  render() {
    return (
      <div className="zoom-container">
        {this.state.prevChild || this.state.curChild}

        {this.state.prevChild && (
          <ObnoxiousZoomIn animationCallback={this.state.animationCallback}>
            {this.state.curChild}
          </ObnoxiousZoomIn>
        )}
      </div>
    );
  }
}

const SwitchObnoxious = animateSwitch(Switch, ObnoxiousIn);

export default SwitchObnoxious;
