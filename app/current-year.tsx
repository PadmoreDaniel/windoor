"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Server render uses the build year; the browser always shows the real current year.
export default function CurrentYear({ fallback }: { fallback: number }) {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => fallback,
  );
  return <>{year}</>;
}
