import { useEffect } from "react";
import { useStore } from "./store";

function TestComponent({ selector, effect }) {
  const items = useStore(selector);

  useEffect(() => effect(items), [items]);
  return null;
}


