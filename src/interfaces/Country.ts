export interface Country { 
    name:         Name;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    cioc:         string;
    independent:  boolean;
    status:       string;
    unMember:     boolean;
    currencies:   Currencies;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    string;
    languages:    Languages;
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders:      string[];
    area:         number;
    demonyms:     { [key: string]: Demonyms };
    flag:         string;
    maps:         Maps;
    population:   number;
    gini:         Gini;
    fifa:         string;
    car:          Car;
    timezones:    string[];
    continents:   string[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  string;
    capitalInfo:  CapitalInfo;
}    

interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

interface NativeName {
    isl: Isl;
}

interface Isl {
    official: string;
    common:   string;
}

interface Currencies {
    ISK: Isk;
}

interface Isk {
    name:   string;
    symbol: string;
}

interface Idd {
    root:     string;
    suffixes: string[];
}

interface Languages {
    isl: string;
}

interface Translation {
    official: string;
    common:   string;
}

interface Demonyms {
    f: string;
    m: string;
}

interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

interface Gini {
    "2017": number;
}

interface Car {
    signs: string[];
    side:  string;
}

interface CoatOfArms {
    png: string;
    svg: string;
}

interface CapitalInfo {
    latlng: number[];
}