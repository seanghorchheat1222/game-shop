export const bannerProducts = [
 {
    id: 131,
    title: "GTA 6",
    price: "$69.99",
    img: "/images/gta6cd.png",
    imgs: "/images/bannergta6.png",
    description: "Return to Vice City in Rockstar’s biggest open-world adventure yet. Join Lucia and Jason in a story of crime."
  },
  {
    id: 132,
    title: "Wukong",
    price: "$59.99",
    img: "/images/wukongcd.png",
    imgs: "/images/bannerwukung.png",
    description: "Step into the mythological world of Journey to the West and master the powers of the Monkey King."
  },
  {
    id: 133,
    title: "Avatar",
    price: "$69.99",
    img: "/images/avatarcd.png",
    imgs: "/images/banneravatar.png",
    description: "Explore Pandora in breathtaking detail. Immerse yourself in the lush alien world and take part in the epic conflict between humans and Na'vi."
  }
]

export const discountProducts = [
  {
    id: 111,
    title: "Spider-Man 2",
    price: "$39.99",
    img: "/images/spidermancd.png",
    description:
      "After years of protecting New York from the shadows, Peter Parker has grown into a seasoned hero—balancing responsibility and sacrifice. A new threat emerges in the form of Mister Negative, challenging both the hero and the man behind the mask.",
  },
  {
    id: 112,
    title: "God of War Ragnarök",
    price: "$19.99",
    img: "/images/godofwar.png",
    description:
      "Kratos and Atreus face the impending Ragnarök in a journey through Norse realms. Fight brutal enemies, solve puzzles, and uncover the truths of gods and monsters in this epic action-adventure.",
  },
]


export const carouselProducts = [ {
    id: 101,
    title: "The Witcher 3: Wild Hunt",
    price: "USD 39.99",
    img: "/images/thewitchercarousel.png",
    description:
      "A story-driven open-world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.",
  },
  {
    id: 102,
    title: "Red Dead Redemption 2",
    price: "USD 39.99",
    img: "/images/reddeadcarousel.png",
    description:
      "An epic tale of life in America’s unforgiving heartland. Experience Arthur Morgan’s journey as a member of the Van der Linde gang.",
  },
  {
    id: 103,
    title: "Fortnite",
    price: "USD 19.99",
     img: "/images/fortnitecarousel.png",
    description:
      "Battle Royale, Creative, and more! Build, fight, and survive in this constantly evolving online multiplayer world.",
  },
  {
    id: 104,
    title: "Call of Duty",
    price: "USD 29.99",
    img: "/images/callofdutycarousel.png",
    description:
      "Fast-paced, action-packed shooter with intense multiplayer combat and cinematic campaigns.",
  },
];




export const collectionProducts = [
  {
    id: 1,
    title: "Call of Duty: Black Ops III",
    price: "$29.99",
    img: "/images/callofdutycollection.png",
    description: "Step into the future of warfare where cutting-edge technology and cybernetic soldiers redefine battle. In a world torn by global conflict, you and your squad must face relentless enemies across intense campaigns and multiplayer arenas."
  },
  {
    id: 2,
    title: "Minecraft",
    price: "$19.99",
    img: "/images/minecrafecollection.png",
    description: "A world limited only by your imagination. Build, survive, and explore infinite landscapes filled with adventure. Whether you’re mining deep underground, crafting tools, or creating entire kingdoms, every block tells your story."
  },
  {
    id: 3,
    title: "Grand Theft Auto V",
    price: "$19.99",
    img: "/images/gta5collection.png",
    description: "Enter the sprawling city of Los Santos, where three unique criminals’ lives intertwine in a dangerous pursuit of fortune and survival. From daring heists to street chaos, the city is yours to conquer—if you can survive it."
  },
  {
    id: 4,
    title: "Plants vs. Zombies",
    price: "$19.99",
    img: "/images/pvzcollection.png",
    description: "The lawn is the battlefield, and only your plants stand between a hungry zombie horde and your home. Strategize, grow your defenses, and blast away waves of the undead in this hilarious and addictive fight for survival."
  },
  {
    id: 5,
    title: "Avatar: Frontiers of Pandora",
    price: "$69.99",
    img: "/images/avatarcollection.png",
    description: "Journey into the breathtaking world of Pandora, a land rich with life and danger. As a Na’vi warrior, explore vast jungles, soar on banshees, and protect your home against the invading RDA forces threatening its future."
  },
  {
    id: 6,
    title: "Uncharted 4: A Thief's End",
    price: "$29.99",
    img: "/images/unchartedcollection.png",
    description: "Nathan Drake returns for one last adventure, pulled into a globe-trotting treasure hunt that will test his skill, loyalty, and resolve. From lost pirate colonies to deadly rivals, the stakes have never been higher."
  },
  {
    id: 7,
    title: "Lego Jurassic World",
    price: "$19.99",
    img: "/images/legocollection.png",
    description: "Relive the epic adventures of Jurassic Park with a Lego twist. Explore the islands, solve puzzles, and play through iconic moments with dinosaurs and characters brought to life in hilarious Lego style."
  },
  {
    id: 8,
    title: "Tomb Raider Definitive Edition",
    price: "$19.99",
    img: "/images/tombraidercollection.png",
    description: "Before she became the Tomb Raider, Lara Croft was a survivor. Stranded on a mysterious island, she must fight to endure, uncover dark secrets, and embrace her destiny in a thrilling reimagining of her origins."
  }
]

const allProducts = [...collectionProducts, ...carouselProducts, ...discountProducts, ...bannerProducts]

export default allProducts;
