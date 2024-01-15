import {useContext} from "react";
import {AppDataContext} from "./AppDataContext";

export const useAppContext = () => useContext(AppDataContext);