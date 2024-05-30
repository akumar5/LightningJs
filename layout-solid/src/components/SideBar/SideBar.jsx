import { Column } from "@lightningjs/solid-ui";
import { For } from "@lightningjs/solid";
import { createSignal } from "solid-js";

import { default as SideItem } from "./SideItem";

const background = {
  width: 150,
  height: 1080,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 20,
  zIndex: 99,
};

export default function SideBar(props) {
  const [icons, setIcons] = createSignal([
    { name: "search", path: "/tv/1/2" },
    { name: "home", path: "/" },
    { name: "list", path: "/buttons" },
    { name: "movie", path: "/" },
    { name: "sport", path: "/" },
  ]);

  function onFocus() {
    this.children.selected.setFocus();
  }

  return (
    <Column {...props} style={background} onFocus={onFocus}>
      <For each={icons()}>
        {(icon, id) => <SideItem path={icon.path} name={icon.name} key={id} />}
      </For>
    </Column>
  );
}
