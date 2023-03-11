function introduction(name){
    let string = `Hi, my name is ${name}.`;
    return string;
    
}

function introductionWithLanguage(name, language){
    let string = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return string;
}

function introductionWithLanguageOptional(name, language="JavaScript"){
    let string = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return string;
}