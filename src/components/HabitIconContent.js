import React, { PureComponent } from "react";
import styles from "./HabitIconContent.module.scss";
import { ReactComponent as Checkmark } from "../assets/icons/Checkmark.svg";

export default class HabitIconContent extends PureComponent {
  static defaultProps = {
    status: "incomplete", // 'incomplete', 'marked' (checkmark, intermediate), 'complete' (final)
    name: "",
    size: 100
  };

  classes() {
    return `${styles.item} ${this.props.status !== "incomplete" &&
      styles["item--complete"]}`;
  }

  itemStyles() {
    return {
      width: this.props.size,
      height: this.props.size
    };
  }

  iconStyles() {
    const scale = 0.5;
    const size = scale * this.props.size;

    return {
      width: size,
      height: size
    };
  }

  textStyles() {
    const scale = 0.5;
    const size = scale * this.props.size;

    return {
      fontSize: size
    };
  }

  abbreviation() {
    return this.props.name && this.props.name[0]
      ? this.props.name[0].toUpperCase()
      : "";
  }

  getContent() {
    switch (this.props.status) {
      case "marked":
        return (
          <Checkmark className={styles.checkmark} style={this.iconStyles()} />
        );
      // case 'complete':
      //   return
      default:
        return (
          <div className={styles.label} style={this.textStyles()}>
            {this.abbreviation()}
          </div>
        );
    }
  }

  render() {
    return (
      <div className={this.classes()} style={this.itemStyles()}>
        {this.getContent()}
      </div>
    );
  }
}
