const encryption={

    encode:(text)=>{
        let vowelEquivalences={
            "a":"ai",
            "i":"imes",
            "e":"enter",
            "o":"ober",
            "u":"ufat"
        }
        return text.replace(/[aieou]/g,(vowel)=>vowelEquivalences[vowel])
    },
    decode:(text)=>{
        let inverseVowelEquivalences={
            "ai":"a",
            "imes":"i",
            "enter":"e",
            "ober":"o",
            "ufat":"u"
        }
        return text.replace(/ai|imes|enter|ober|ufat/g, (equivalence)=>inverseVowelEquivalences[equivalence]);
    }
}
 export default encryption;
