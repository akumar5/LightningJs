import { Text, View } from "@lightningjs/solid";
import { createSignal, For } from "solid-js";
import { Column } from "@lightningjs/solid-ui";

import { useParams } from "@solidjs/router";

import { default as ItemRow } from "../components/Row/ItemRow";

let rowData = [
  {
    y: 0,
    data: [
      { title: "A1", description: "A1 description", color: 0xff0000ff },
      { title: "A2", description: "A2 description", color: 0x00ff00ff },
      { title: "A3", description: "A3 description", color: 0x0000ffff },
      { title: "A4", description: "A4 description", color: 0xffff00ff },
      { title: "A5", description: "A5 description", color: 0xff00ffff },
    ],
  },
  {
    y: 280,
    data: [
      { title: "B1", description: "B1 description", color: 0xff0000ff },
      { title: "B2", description: "B2 description", color: 0x00ff00ff },
      { title: "B3", description: "B3 description", color: 0x0000ffff },
      { title: "B4", description: "B4 description", color: 0xffff00ff },
      { title: "B5", description: "B5 description", color: 0xff00ffff },
    ],
  },
  {
    y: 560,
    data: [
      { title: "C1", description: "C1 description", color: 0xff0000ff },
      { title: "C2", description: "C2 description", color: 0x00ff00ff },
      { title: "C3", description: "C3 description", color: 0x0000ffff },
      { title: "C4", description: "C4 description", color: 0xffff00ff },
      { title: "C5", description: "C5 description", color: 0xff00ffff },
    ],
  },
];

function HelloWorld() {
  const [title, setTitle] = createSignal("");
  const params = useParams();

  console.log(params.show);
  console.log(params.episode);

  return (
    <>
      <Text x={190}>{title()}</Text>
      <Column autofocus y={720} x={190}>
        <For each={rowData}>
          {(row, i) => (
            <ItemRow
              rowIndex={i}
              row={row}
              numRows={rowData.length}
              setTitle={setTitle}
              key={i} />
          )}
        </For>
      </Column>
    </>
  );
}

export default HelloWorld;
