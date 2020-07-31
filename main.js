class Song {
    constructor(id, title, ccli, author, tem, note) {
        this.songID = id;           // type: number | purpose: ID from original song list, starts with 1, 6 digits long
        this.title = title;         // type: string | purpose: human readable name of song, needs a max length
        this.ccliID = ccli;         // type: number | purpose: foreign key (?) for CCLI database
        this.authors = author;      // type: array  | purpose: list of paired array (for now)
        this.tempo = tem;           // type: number | purpose: beats per minute, max length 3
        this.notes = note;          // type: string | purpose: notes on this song record, max length 500
    }
}

class EventNS {
    constructor(id, date, section) {
        this.eventID = id;                  // type: number | purpose: ID to identify this event, starts with 7, 10 digits long
        this.dateStart = new Date(date);    // type: date object | purpose: identify start date/time of this event
        this.sections = section;            // type: array | purpose: list of numbers which correspond with sectionIDs
    }
}

class SectionType {
    constructor(id, title, sections) {
        this.sectionTypeID = id;        // type: number | purpose: ID to identify this section type, starts with 1, 4 digits long
        this.title = title;             // type: string | purpose: human readable name of section type, needs a max length
        this.sections = sections;       // an array of numbers which correspond with sectionIDs
    }
}

class Section {
    constructor(id, songs, sectiontype) {
        this.sectionID = id;                            // type: number | ID to identify this section
        this.songs = songs;                             // type: array  | list of numbers corresponding to songIDs
        this.sectionType = sectiontype;                 // type: number | corresponds with a sectionTypeID
        this.title = getSectionTypeTitle(sectiontype);  // type: string | calculated title based off of section type
    }
}

let listOfSongObjects = [];             // an array of objects which are instances of Song
let listOfSectionObjects = [];          // an array of objects which are instances of Section
let listOfSectionTypeObjects = [];      // an array of objects which are instances of SectionType
let listOfEventsNSObjects = [];         // an array of objects which are instances of EventNS

function getSectionTypeTitle(a) {
    for (l in listOfSectionTypeObjects) {
        if (listOfSectionTypeObjects[l].sectionTypeID === a) {
            return listOfSectionTypeObjects[l].title;
        }
    }
    return null;
}