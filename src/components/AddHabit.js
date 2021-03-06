import React, { PureComponent } from "react";
import styles from "./AddHabit.module.scss";
import HoldableActionButton from "./HoldableActionButton";
import { ReactComponent as Plus } from "../assets/icons/Plus.svg";

class AddHabit extends PureComponent {
  static defaultProps = {
    name: "Add Habit",
    size: 100,
    onComplete: function() {}
  };

  iconStyles() {
    const scale = 0.5;
    const size = scale * this.props.size;

    return {
      width: size,
      height: size
    };
  }

  render() {
    const { name, size } = this.props;

    return (
      <div className={styles.AddHabit}>
        <HoldableActionButton
          resetOnComplete
          onComplete={this.props.onComplete}
          titleSlot={<div className={styles.title}>{name}</div>}
          incompleteSlot={
            <Plus className={styles.checkmark} style={this.iconStyles()} />
          }
          markedSlot={
            <Plus className={styles.checkmark} style={this.iconStyles()} />
          }
          completeSlot={
            <Plus className={styles.checkmark} style={this.iconStyles()} />
          }
          size={size}
        />
      </div>
    );
  }
}

export default AddHabit;
