import React, {useState, useEffect} from "react";
import classNames from "classnames";
import "./styles.css";

export default function Slider() {
  const [animating, setAnimating] = useState(false)
  const [position, setPosition] = useState(Slider.CENTER)
  const [animatePrepare, setAnimatePrepare] = useState(false)
 

    this.startAnimation = this.startAnimation.bind(this);
    this.postPrepareAnimation = this.postPrepareAnimation.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
  

  useEffect(() => {
    startAnimation(position)
    
  }
componentDidMount() {
    this.startAnimation(this.props.position);
    if (this.node) {
      this.node.addEventListener("transitionend", this.onTransitionEnd);
    }
  }

  componentWillUnmount() {
    if (this.node) {
      this.node.removeEventListener("transitionend", this.onTransitionEnd);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.position !== this.props.position) {
      this.startAnimation(newProps.position, newProps.animationCallback);
    }
  }


  }