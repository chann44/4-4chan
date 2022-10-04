import { useCallback, useEffect, useState } from "react";

export function useAsync(func: Function, dependencies: Array<any> = []) {
  const { execute, ...state } = useAsyncInternal(func, dependencies, true);

  useEffect(() => {
    execute();
  }, [execute]);

  return state;
}

export function useAsyncFn(func: Function, dependencies: Array<any> = []) {
  return useAsyncInternal(func, dependencies, false);
}

function useAsyncInternal(
  func: Function,
  dependencies: Array<any>,
  initialLoading = false
) {
  const [loading, setLoading] = useState(initialLoading);
  const [error, setError] = useState();
  const [value, setValue] = useState<any>();

  const execute = useCallback((...params: any) => {
    setLoading(true);
    return func(...params)
      .then((data: any) => {
        setValue(data);
        setError(undefined);
        setLoading(false);
        return data;
      })
      .catch((error: any) => {
        setError(error);
        setValue(undefined);
        return Promise.reject(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, dependencies);

  return { loading, error, value, execute };
}
