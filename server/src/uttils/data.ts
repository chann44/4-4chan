interface cat {
  id: string;
  name: string;
}

interface board {
  id: string;
  name: string;
  catagoryId: string;
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
    name: "Other",
  },
];

export let boardNames: string[] = [""];

export const getBoards = (boardNames: string[], catId: string): board[] => {
  return boardNames.map((boardName: string, index: number) => {
    return {
      id: index.toString(),
      name: boardName,
      catagoryId: catId,
    };
  });
};
