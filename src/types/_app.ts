import {EmotionCache} from "@emotion/cache";
import {AppProps} from "next/app";
import {NextPage} from "next/types";
import {ReactNode} from "react";

type GetLayout = (page: ReactNode) => ReactNode;

type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};

export type MyAppProps<P = {}> = AppProps<P> & {
  emotionCache?: EmotionCache;
  Component: Page<P>;
};
