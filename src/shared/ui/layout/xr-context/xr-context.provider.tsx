import { ReactNode, useEffect, useState } from 'react';
import { XrContext } from './xr-context';

export function XrContextProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(false);

  useEffect(() => {
    navigator.xr?.isSessionSupported('immersive-ar').then((stat) => setState(stat));
  }, []);

  return <XrContext.Provider value={state}>{children}</XrContext.Provider>;
}
