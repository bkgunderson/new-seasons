class Song {
    constructor(title, id, ccli) {
        this.songID = id;
        this.title = title;
        this.ccliNumber = ccli;
    }
}

Song.prototype = {
    constructor: Song,
    authors: []
}

class Event {
    constructor(id, date) {
        this.eventID = id;
        this.dateOccurance = new Date(date); 
    }
}

Event.prototype = {
    constructor: Event,
    sections: []
}

class Section {
    constructor(id, title) {
        this.sectionID = id;
        this.title = title;
    }
}

Section.prototype = {
    constructor: Section,
    songs: []
}


// iterate through an event's list of song IDs and add the song titles to a list to output
function songListFromSection(section) {
    let sectionlist = section.songs;
    let listSongTitles = [];
    for (n in sectionlist) {
        if (sectionlist[n].title) {listSongTitles.push(sectionlist[n].title);};    
    }
    return listSongTitles;
}
