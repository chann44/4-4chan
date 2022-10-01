interface cat {
  id: string;
  name: string;
}

interface board {
  name: string;
  catagoryId: string;
}

interface data {
  catagoryId: string;
  boards: string[];
}

export const cats: cat[] = [
  {
    id: "1",
    name: "Japanese Culture",
  },
  {
    id: "2",
    name: "Video Games",
  },
  {
    id: "3",
    name: "web3",
  },
  {
    id: "4",
    name: "Intrests",
  },
  {
    id: "5",
    name: "Creative",
  },
  {
    id: "6",
    name: "computer scince",
  },
  {
    id: "7",
    name: "Other",
  },
];

const Data: data[] = [
  {
    catagoryId: "1",
    boards: [
      "Anime & Manga",
      "Anime/Cute",
      "Anime/Wallpapers",
      "Mecha",
      "Cosplay & EGL",
      "Cute/Male",
      "Flash",
      "Transportation",
      "Otaku Culture",
      "Virtual YouTubers",
    ],
  },
  {
    catagoryId: "2",
    boards: [
      "Video Games",
      "Video Game Generals",
      "Video Games/Multiplayer",
      "Video Games/Mobile",
      "Pokémon",
      "Retro Games",
      "Video Games/RPG",
      "Video Games/Strategy",
    ],
  },
  {
    catagoryId: "3",
    boards: [
      "blockchain",
      "Daaps",
      "Defi",
      "GameFi",
      "Daos",
      "NFTs",
      "Etherium",
      "Solana",
      "consensus",
    ],
  },
  {
    catagoryId: "4",
    boards: [
      "Comics & Cartoons",
      "Technology",
      "Television & Film",
      "Weapons",
      "Auto",
      "Animals & Nature",
      "Traditional Games",
      "Sports",
      "Extreme Sports",
      "Professional Wrestling",
      "Science & Math",
      "History & Humanities",
      "International",
      "Outdoors",
      "Toys",
    ],
  },
  {
    catagoryId: "5",
    boards: [
      "Oekaki",
      "Papercraft & Origami",
      "Photography",
      "Food & Cooking",
      "Artwork/Critique",
      "Wallpapers/General",
      "Literature",
      "Music",
      "Fashion",
      "Graphic Design",
      "Do-It-Yourself",
      "Worksafe GIF",
      "Quests",
    ],
  },
  {
    catagoryId: "6",
    boards: [
      "Business & Finance",
      "Travel",
      "Fitness",
      "Paranormal",
      "Advice",
      "LGBT",
      "Pony",
      "Current News",
      "Worksafe Requests",
      "Very Important Posts",
    ],
  },
  {
    catagoryId: "7",
    boards: [
      "Programing",
      "Algorithms",
      "Frontend Development",
      "Backend Development",
      "Database",
      "Frameworks",
      "lang dev",
      "Rust",
    ],
  },
];

export const getBoardData = (): board[] => {
  let boards: board[] = [];
  for (let boardData of Data) {
    boardData.boards.map((name: string) => {
      boards.push({
        catagoryId: boardData.catagoryId,
        name: name,
      });
    });
  }
  return boards;
};
