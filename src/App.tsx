import { useCombobox } from "downshift";
import { useState } from "react";

const fruits = [
  "Apple",
  "Orange",
  "Pear",
  "Grapes",
  "Grapefruit",
  "Raspberries",
  "Tangerine",
  "Papaya",
  "Pomegranate",
];

export default function App() {
  const [items, setItems] = useState(fruits);
  const {
    isOpen,
    getInputProps,
    getItemProps,
    getMenuProps,
    highlightedIndex,
  } = useCombobox({
    onInputValueChange({ inputValue }) {
      setItems(
        fruits.filter(
          (fruit) =>
            !inputValue ||
            fruit.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    },
    items,
    defaultHighlightedIndex: 0,
  });
  return (
    <>
      <input {...getInputProps()} />
      <ul {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <li key={`${item}${index}`} {...getItemProps({ item, index })}>
              <span>
                {highlightedIndex === index ? "Selected: " : ""}
                {item}
              </span>
            </li>
          ))}
      </ul>
    </>
  );
}
