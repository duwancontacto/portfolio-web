import "@/styles/globals.css";
import Theme from "@/theme";

import "../languages/i18n";
import {Provider} from "react-redux";
import {store} from "@/store";

import {MyAppProps} from "@/types/_app";
import {ReactNode, useEffect} from "react";
import renderCanvas from "@/components/renderCanvas";

export default function App({Component, pageProps}: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <Provider store={store}>
      <Theme>
        <>
          <canvas
            className="pointer-events-none absolute inset-1 z-0 "
            id="canvas"
          />
          {getLayout(<Component {...pageProps} />)}
        </>
      </Theme>
    </Provider>
  );
}
