import { useEffect, useState } from "react";

export default function useLocalStorage() {
  const [stored, setStored] = useState<boolean>(() => {
    const saved = localStorage.getItem("item");
    return saved !== null ? JSON.parse(saved) : false
  });

  useEffect(() => {
    localStorage.setItem("item",JSON.stringify(stored))
  }, [stored]);

  return{stored, setStored}
}
