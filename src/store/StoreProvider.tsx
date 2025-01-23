import { ReactNode, useMemo } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";

export default function StoreProvider({
  children,
}: {
  children: ReactNode;
}) {
  const store = useMemo<AppStore>(() => makeStore(), []); // Initialize the store only once

  return <Provider store={store}>{children}</Provider>;
}
