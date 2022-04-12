import {langHandler} from "./indigLangSounds.js";
import {InitOjibwemowin} from "./ojibwemowin.js";

export function BuildLangs(){
    
    const LH = new langHandler;
    
    const ojibwemowin = LH.AddLang("ojibwemowin","ojibwe");
    
    InitOjibwemowin(ojibwemowin);
    
    return LH;
}