import {ArtigioParser} from "artigio-cms-parser";
import {ArtigioHelpers} from "../../aritgio/ArtigioHelpers";
import {useState} from "react";
import {AppDataContext} from "./AppDataContext";

export const AppDataContextProvider = ({children}) => {

    const hilightJson = ArtigioHelpers.getHilightConfig();
    console.log(hilightJson);

    const artigio = new ArtigioParser({
        dataJson: ArtigioHelpers.getArtigioData(),
        keyPrefix: "rad-st4-fizyka-lotu-",
        assetsPath: ArtigioHelpers.getRootPath()
    });

    const [artigioData] = useState(artigio);
    const [currentLang, setCurrentLang] = useState(artigio.getDefaultLanguage().tag);

    const changeLang = (langTag) => {
        const modelHasLang = artigioData.getLanguageList()?.find((lang) => lang.tag === langTag);
        if(modelHasLang) {
            setCurrentLang(modelHasLang.tag)
        }
    }

    return (
        <AppDataContext.Provider value={{
            screens: {
                screensaver: artigioData.getAllLangScreenData("screensaver", true)[currentLang],
                selectedPage: artigioData.getAllLangScreenData("selection-screen", true)[currentLang],
                quiz: artigioData.getAllLangScreenData("quiz",true)[currentLang],
                knowledge: artigioData.getAllLangScreenData("knowledge",true)[currentLang],
                
            },
            changeLanguage: changeLang
        }}>
            {children}
        </AppDataContext.Provider>
    )
}