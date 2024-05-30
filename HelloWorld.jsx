import { Text, View } from "@lightningjs/solid";
import { setActiveElement } from "@lightningjs/solid";
import { createSignal } from "solid-js";

import { default as Toggle } from "../components/Toggle/Toggle";
import { default as color } from "../lib/GlobalState";

const HelloWorld = () => {
  let pageRef, toggleRef;

  const { changeColor } = color;
  const [number, setNumber] = createSignal(0);

  const increment = () => {
    setNumber((prev) => prev + 1);
  };

  const toggleSwitch = () => {
    toggleRef.states.toggle("dark");
    changeColor();
  };

  return (
    <>
      <View
        autofocus
        ref={pageRef}
        onEnter={increment}
        onRight={() => setActiveElement(toggleRef)}
      >
        <Text>Increment: {number()}</Text>
      </View>

      <Toggle
        ref={toggleRef}
        onEnter={toggleSwitch}
        onLeft={() => setActiveElement(pageRef)}
      />
    </>
  );
};

export default HelloWorld;
