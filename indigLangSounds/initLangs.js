import {InitOjibwemowin} from "./ojibwemowin.js";

export function InitLangs(langHandler){
    
    const ojibwemowin = langHandler.AddLang("ojibwemowin","ojibwe");
    
    InitOjibwemowin(ojibwemowin);
}