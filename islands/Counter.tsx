import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

// flex-grow-1はTwindv0.16で変換されるがTwindv1で変換されないので
// growに書き直している。
// For Tailwindv3
// https://tailwindcss.com/docs/flex-grow
export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div class="flex gap-2 w-full">
      <p
        class={(() => {
          const m = count % 2 == 0;

          return `grow text-xl ${
            m ? "text-lime-600 font-bold" : "text-orange-600"
          }`;
        })()}
      >
        {count}
      </p>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
}
