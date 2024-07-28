export interface Movie{
    title: String,
    duration: number,
    coverPhoto: string,
    description: string,
    dateRelease: string;
    id: number,
}
const movie: Movie[] = [
    {
        title: "Zootopia 4",
        duration: 102,
        coverPhoto : "https://lumiere-a.akamaihd.net/v1/images/movie_poster_zootopia_866a1bf2.jpeg?region=0%2C0%2C300%2C450",
        description: "Zootopia (titled Zootropolis or Zoomania in various regions)[b] is a 2016 American animated buddy cop action comedy film[6][7] produced by Walt Disney Animation Studios and released by Walt Disney Pictures. It was directed by Byron Howard and Rich Moore, co-directed by Jared Bush (in his feature directorial debut), and produced by Clark Spencer, from a screenplay written by Bush and Phil Johnston, and a story by Howard, Moore, Bush, Johnston, Jim Reardon, Josie Trinidad, and Jennifer Lee",
        dateRelease: "30/10/2024",
        id: 0,
    },

    {
        title: "Zootopia 2",
        duration: 102,
        coverPhoto : "https://lumiere-a.akamaihd.net/v1/images/movie_poster_zootopia_866a1bf2.jpeg?region=0%2C0%2C300%2C450",
        description: "Zootopia 2 is an upcoming American 3D computer-animated adventure-comedy film produced by Walt Disney Animation Studios and distributed by Walt Disney Pictures. The film is a sequel to the 2016 film Zootopia. It will be the 64th animated feature in the Disney Animated Canon, and is scheduled to be released on November 26, 2025.",
        dateRelease: "30/10/2024",
        id: 1,
    },
    {
        title: "Miraculous Ladybug and Cat Noir",
        duration: 100,
        coverPhoto : "https://lumiere-a.akamaihd.net/v1/images/movie_poster_zootopia_866a1bf2.jpeg?region=0%2C0%2C300%2C450",
        description: "Miraculous: Tales of Ladybug & Cat Noir (French: Miraculous, les aventures de Ladybug et Chat Noir; commonly abbreviated as Miraculous Ladybug or simply Miraculous)[9][10][11][12][2] is a French animated magical girl superhero[13] television series created by Thomas Astruc and developed by Jeremy Zag. The series is produced by the French company Miraculous Corp. (a joint venture of Mediawan and ZAG, Inc.),[14] and co-produced with Japanese studio Toei Animation's European division, and several international companies.",
        dateRelease: "30/10/2024",
        id: 2,
    },
    {
        title: "Boss Baby, Back in Buisness",
        duration: 102,
        coverPhoto : "https://lumiere-a.akamaihd.net/v1/images/movie_poster_zootopia_866a1bf2.jpeg?region=0%2C0%2C300%2C450",
        description: "The Boss Baby: Back in Business is an American animated comedy television series produced by DreamWorks Animation Television. The show, based on the 2017 film The Boss Baby, loosely based on the 2010 picture book of the same name written by Marla Frazee. The series premiered on Netflix on April 6, 2018. JP Karliak voices The Boss Baby, replacing Alec Baldwin, while Pierce Gagnon replaces Miles Bakshi as Timothy Leslie Templeton; with the exception of Eric Bell Jr. reprised his role from the film, as The Triplets.",
        dateRelease: "30/10/2024",
        id: 3,
    },

    {
        title: "Zootopia",
        duration: 102,
        coverPhoto : "https://lumiere-a.akamaihd.net/v1/images/movie_poster_zootopia_866a1bf2.jpeg?region=0%2C0%2C300%2C450",
        description: "In a world inhabited by anthropomorphic animals, Judy Hopps, a rabbit from rural Bunnyburrow, fulfills her childhood dream of becoming the first rabbit police officer in the city of Zootopia. On her first day at the Zootopia Police Department (ZPD), she is given parking duty by Chief Bogo, and is hustled by two con artist foxes, Nick Wilde and Finnick, during her shift. The next day, she abandons her post to arrest small-time crook Duke Weaselton for stealing a bag of crocus bulbs. Later, while Bogo is reprimanding Judy, Mrs. Otterton visits his office, pleading for her husband Emmitt, one of 14 missing predators, to be found. Without first seeking approval, Judy volunteers, and Bogo attempts to fire her for insubordination. The city's assistant mayor, ewe Dawn Bellwether, praises Judy for taking the assignment. Bogo begrudgingly acquiesces, but demands Judy to resign if she fails to solve the case within 48 hours.",
        dateRelease: "30/10/2024",
        id: 4,
    },
    {
        title: "Miraculous World: Shanghai, Lady Dragon",
        duration: 54,
        coverPhoto : "https://lumiere-a.akamaihd.net/v1/images/movie_poster_zootopia_866a1bf2.jpeg?region=0%2C0%2C300%2C450",
        description: "Miraculous World: Shanghai  The Legend of Ladydragon is a 54-minute special TV movie of Miraculous: Tales of Ladybug & Cat Noir.[7][8] As based on the writing and release order, Miraculous Shanghai is the second movie in the Miraculous World series. Its world premiere was on April 4, 2021 on TFOU in France.",
        dateRelease: "30/10/2024",
        id: 5,
    },
        {
        title: "Miraculous New York",
        duration: 102,
        coverPhoto : "https://lumiere-a.akamaihd.net/v1/images/movie_poster_zootopia_866a1bf2.jpeg?region=0%2C0%2C300%2C450",
        description: "Miraculous World: New York United Heroez[5] (or simply Miraculous New York) is a 60-minute special TV movie of Miraculous: Tales of Ladybug & Cat Noir.[6] As based on the writing and release order, Miraculous New York is the first movie in the Miraculous World series.[7] Its world premiere was on September 25, 2020 (at 8:00 p.m ET/PT) on Disney Channel USA.[1]",
        dateRelease: "30/10/2024",
        id: 6,
    },
]

export const getMovies = () => movie;

export const getMovie = (id: number) => movie.find(m => m.id === id);
