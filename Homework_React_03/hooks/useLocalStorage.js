import { useState } from "react";

export function useLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  return useState(key);
}
