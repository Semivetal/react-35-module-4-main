import { useState } from "react";
import styles from "./ColorPicker.module.css";

export default function ColorPicker({ options }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const makeOptionClassName = (index) => {
    return index === activeOptionIdx ? styles.activeOptionIdx : styles.option;
  };

  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <p>Chosen color: {options[activeOptionIdx].label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            aria-label={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveOptionIdx(index)}
          >
            COLOR
          </button>
        ))}
      </div>
    </div>
  );
}

/* export default ColorPicker; */

/* 
state = {
        activeOptionIdx: 0,
    }

    setActiveIdx = index => {
        this.setState({ activeOptionIdx: index });
    };

    makeOptionClassName = index => {
        const optionClasses = ['ColorPicker__option'];
    };

    render() {
        const { activeOptionIdx } = this.state;
        const { options } = this.props;
        const { label } = options[activeOptionIdx];
 */
