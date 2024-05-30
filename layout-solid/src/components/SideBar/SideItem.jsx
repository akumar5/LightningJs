import { View } from "@lightningjs/solid";
import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";

export default function SideItem(props) {
  let navigate = useNavigate();

  const basePath = `/assets/icons/${props.name}.png`;
  const highlightPath = `/assets/icons/${props.name}-h.png`;

  const [src, setSrc] = createSignal(basePath);

  return (
    <View
      src={src()}
      width={64}
      height={64}
      x={40}
      onFocus={() => setSrc(highlightPath)}
      onBlur={() => setSrc(basePath)}
      onEnter={() => navigate(props.path)}
    />
  );
}
