import { FC } from "react";

export interface Props {
    view: string;
    setView: (a:string) => void
};

export type IViewComponent= FC<Props>;




