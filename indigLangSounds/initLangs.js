import {InitOjibwemowin} from "./ojibwemowin.js";
import {InitCherokee} from "./cherokee.js";

export function InitLangs(langHandler){
    
    const ojibwemowin = langHandler.AddLang("ojibwemowin","ojibwe");
    
    InitOjibwemowin(ojibwemowin);
    
    const cherokee = langHandler.AddLang("cherokee","cherokee");
    
    InitCherokee(cherokee);
}