import db from "./index"

const books = [
  {
    title: "Giants: The Global Power Elite",
    desc: "Who holds the purse strings to the majority of the world's wealth? There is a new global elite at the controls of our economic future, and here former Project Censored director and media monitoring sociologist Peter Phillips unveils for the general reader just who these players are. The book includes such power players as Mark Zuckerberg, Bill Gates, Jeff Bezos, Jamie Dimon, and Warren Buffett.",
    rating: 5,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51mK2WDVjUL._SX342_BO1,204,203,200_.jpg",
  },
  {
    title: "Maestro: Greenspan's Fed and the American Boom",
    desc: "In eight Tuesdays each year, Federal Reserve chairman Alan Greenspan convenes a small committee to set the short-term interest rate that can move through the American and world economies like an electric jolt. As much as any, the committee's actions determine the economic well-being of every American. ",
    rating: 4,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51KloNwiiLL._SX322_BO1,204,203,200_.jpg",
  },
]

const users = [
  {
    email: "gui@gui.com",
    hashedPassword:
      "JGFyZ29uMmlkJHY9MTkkbT02NTUzNix0PTIscD0xJHNhMWJvc1VyT1ZTVVJhYUNFR091SmckUUlNMTFmU1BCcktQVlVmeUJNODdOcHorc3BXKzFoWWtFMlNTVndjWWRoMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
  },
  {
    email: "elaine@elaine.com",
    hashedPassword:
      "JGFyZ29uMmlkJHY9MTkkbT02NTUzNix0PTIscD0xJHNhMWJvc1VyT1ZTVVJhYUNFR091SmckUUlNMTFmU1BCcktQVlVmeUJNODdOcHorc3BXKzFoWWtFMlNTVndjWWRoMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
  },
]

const userBooks = [
  {
    bookId: 1,
    userId: 1,
  },
  {
    bookId: 1,
    userId: 2,
  },
  {
    bookId: 2,
    userId: 2,
  },
]

const seed = async () => {
  await db.user.createMany({ data: users })
  await db.book.createMany({ data: books })
  await db.userBook.createMany({ data: userBooks })
}

export default seed
