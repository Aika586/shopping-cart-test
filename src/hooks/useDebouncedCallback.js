import { useCallback } from "react";
import { debounce} from "lodash";
import { useLatest } from "./useLatest";

export const useDebouncedCallback = (callback, delay, opts) => {
  const callbackRef = useLatest(callback);

  return useCallback(
    debounce((...args) => callbackRef.current(...args), delay, opts),
    [callbackRef]
  );
};
