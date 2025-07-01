const blogs = [
    {
    "id": "1",
    "title": "The Candy Bar Incident",
    "body": "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request.",
    "tags": ["mystery", "crime", "thriller"],
    "reactions": {
        "likes": 359,
        "dislikes": 18
    },
    "views": 4548,
    "userId": 47
    },
    {
    "id": "2",
    "title": "A Walk in the Park",
    "body": "She walked through the park, enjoying the crisp autumn air. The leaves crunched under her feet, and she felt at peace.",
    "tags": ["nature", "peace", "autumn"],
    "reactions": {
        "likes": 120,
        "dislikes": 5
    },
    "views": 1023,
    "userId": 12
    },
    {
    "id": "3",
    "title": "The Lost Key",
    "body": "He searched everywhere for the key. It was the only thing standing between him and the treasure.",
    "tags": ["adventure", "mystery", "treasure"],
    "reactions": {
        "likes": 245,
        "dislikes": 12
    },
    "views": 3201,
    "userId": 33
    },
    {
    "id": "4",
    "title": "The Forgotten Letter",
    "body": "The letter had been sitting on the desk for weeks. She finally opened it, and her life changed forever.",
    "tags": ["drama", "romance", "mystery"],
    "reactions": {
        "likes": 400,
        "dislikes": 20
    },
    "views": 5000,
    "userId": 21
    },
    {
    "id": "5",
    "title": "The Haunted House",
    "body": "The house had been abandoned for years, but tonight, it seemed alive.",
    "tags": ["horror", "ghosts", "thriller"],
    "reactions": {
        "likes": 500,
        "dislikes": 30
    },
    "views": 6000,
    "userId": 15
    },
    {
    "id": "6",
    "title": "The Secret Garden",
    "body": "Hidden behind the old mansion was a garden full of wonders.",
    "tags": ["fantasy", "nature", "magic"],
    "reactions": {
        "likes": 300,
        "dislikes": 10
    },
    "views": 4000,
    "userId": 8
    },
    {
    "id": "7",
    "title": "The Midnight Train",
    "body": "The train arrived at midnight, carrying secrets from another world.",
    "tags": ["mystery", "travel", "fantasy"],
    "reactions": {
        "likes": 350,
        "dislikes": 15
    },
    "views": 4500,
    "userId": 19
    },
    {
    "id": "8",
    "title": "The Last Sunset",
    "body": "He watched the sunset, knowing it would be the last one he ever saw.",
    "tags": ["drama", "emotional", "nature"],
    "reactions": {
        "likes": 280,
        "dislikes": 8
    },
    "views": 3200,
    "userId": 25
    },
    {
    "id": "9",
    "title": "The Hidden Cave",
    "body": "Deep in the forest, they found a cave that held ancient secrets.",
    "tags": ["adventure", "mystery", "history"],
    "reactions": {
        "likes": 400,
        "dislikes": 20
    },
    "views": 5000,
    "userId": 30
    },
    {
    "id": "10",
    "title": "The Broken Clock",
    "body": "The clock had stopped ticking years ago, but today, it started again.",
    "tags": ["mystery", "time", "thriller"],
    "reactions": {
        "likes": 310,
        "dislikes": 12
    },
    "views": 4100,
    "userId": 11
    },
    {
    "id": "11",
    "title": "The Forgotten Island",
    "body": "The island was not on any map, but they found it by accident.",
    "tags": ["adventure", "mystery", "exploration"],
    "reactions": {
        "likes": 450,
        "dislikes": 25
    },
    "views": 5500,
    "userId": 22
    },
    {
    "id": "12",
    "title": "The Silent Forest",
    "body": "The forest was eerily silent, as if it were holding its breath.",
    "tags": ["nature", "mystery", "thriller"],
    "reactions": {
        "likes": 320,
        "dislikes": 10
    },
    "views": 4200,
    "userId": 18
    },
    {
    "id": "13",
    "title": "The Golden Compass",
    "body": "The compass pointed to a place no one had ever been before.",
    "tags": ["adventure", "fantasy", "mystery"],
    "reactions": {
        "likes": 500,
        "dislikes": 30
    },
    "views": 6000,
    "userId": 27
    },
    {
    "id": "14",
    "title": "The Secret Tunnel",
    "body": "Underneath the city, they discovered a tunnel that led to another world.",
    "tags": ["mystery", "adventure", "fantasy"],
    "reactions": {
        "likes": 400,
        "dislikes": 20
    },
    "views": 5000,
    "userId": 35
    },
    {
    "id": "15",
    "title": "The Lost Painting",
    "body": "The painting had been missing for decades, but now it was found.",
    "tags": ["art", "mystery", "history"],
    "reactions": {
        "likes": 300,
        "dislikes": 10
    },
    "views": 4000,
    "userId": 9
    },
    {
    "id": "16",
    "title": "The Forgotten Book",
    "body": "The book contained secrets that could change the world.",
    "tags": ["mystery", "history", "thriller"],
    "reactions": {
        "likes": 350,
        "dislikes": 15
    },
    "views": 4500,
    "userId": 14
    },
    {
    "id": "17",
    "title": "The Hidden Treasure",
    "body": "The treasure was buried deep beneath the old castle.",
    "tags": ["adventure", "mystery", "history"],
    "reactions": {
        "likes": 400,
        "dislikes": 20
    },
    "views": 5000,
    "userId": 20
    },
    {
    "id": "18",
    "title": "The Silent Witness",
    "body": "The witness had seen everything, but they refused to speak.",
    "tags": ["crime", "mystery", "thriller"],
    "reactions": {
        "likes": 310,
        "dislikes": 12
    },
    "views": 4100,
    "userId": 13
    },
    {
    "id": "19",
    "title": "The Forgotten City",
    "body": "The city had been abandoned for centuries, but now it was alive again.",
    "tags": ["history", "mystery", "exploration"],
    "reactions": {
        "likes": 450,
        "dislikes": 25
    },
    "views": 5500,
    "userId": 26
    },
    {
    "id": "20",
    "title": "The Hidden Door",
    "body": "Behind the hidden door was a world no one had ever seen.",
    "tags": ["fantasy", "mystery", "adventure"],
    "reactions": {
        "likes": 320,
        "dislikes": 10
    },
    "views": 4200,
    "userId": 17
    },
    {
      "id": "21",
      "title": "The Clockmaker's Secret",
      "body": "He crafted timepieces with such precision that one held the power to turn back time.",
      "tags": ["mystery", "time", "fantasy"],
      "reactions": { "likes": 410, "dislikes": 14 },
      "views": 4800,
      "userId": 31
    },
    {
      "id": "22",
      "title": "The Vanishing Point",
      "body": "Everything that entered the alley vanished. No one dared go in.",
      "tags": ["thriller", "mystery", "urban legend"],
      "reactions": { "likes": 390, "dislikes": 18 },
      "views": 4600,
      "userId": 23
    },
    {
      "id": "23",
      "title": "The Iceberg Journal",
      "body": "A journal frozen in ice for over a century contained a chilling warning.",
      "tags": ["history", "adventure", "mystery"],
      "reactions": { "likes": 430, "dislikes": 22 },
      "views": 4900,
      "userId": 29
    },
    {
      "id": "24",
      "title": "Echoes in the Library",
      "body": "Late at night, whispers echoed through the old library, guiding her to a hidden room.",
      "tags": ["mystery", "ghost", "literature"],
      "reactions": { "likes": 370, "dislikes": 13 },
      "views": 4400,
      "userId": 16
    },
    {
      "id": "25",
      "title": "The Rainmaker",
      "body": "He could summon rain with a chant passed down for generations.",
      "tags": ["fantasy", "myth", "powers"],
      "reactions": { "likes": 340, "dislikes": 11 },
      "views": 4100,
      "userId": 10
    },
    {
      "id": "26",
      "title": "Voices From the Deep",
      "body": "Divers heard voices calling them from the ocean floor—voices that knew their names.",
      "tags": ["horror", "ocean", "thriller"],
      "reactions": { "likes": 460, "dislikes": 28 },
      "views": 5300,
      "userId": 6
    },
    {
      "id": "27",
      "title": "The Puzzle Box",
      "body": "Each turn of the box revealed more than just its intricate design.",
      "tags": ["mystery", "artifact", "puzzle"],
      "reactions": { "likes": 390, "dislikes": 16 },
      "views": 4700,
      "userId": 28
    },
    {
      "id": "28",
      "title": "The Starlight Message",
      "body": "A signal from the stars arrived, written in a forgotten Earth language.",
      "tags": ["sci-fi", "mystery", "space"],
      "reactions": { "likes": 420, "dislikes": 19 },
      "views": 4950,
      "userId": 24
    },
    {
      "id": "29",
      "title": "The Masked Visitor",
      "body": "Every night, a figure stood at the window wearing a porcelain mask.",
      "tags": ["horror", "suspense", "mystery"],
      "reactions": { "likes": 380, "dislikes": 20 },
      "views": 4600,
      "userId": 7
    },
    {
      "id": "30",
      "title": "The Time Capsule",
      "body": "Buried in 1910, the time capsule contained photos of people from today.",
      "tags": ["mystery", "history", "thriller"],
      "reactions": { "likes": 470, "dislikes": 25 },
      "views": 5100,
      "userId": 36
    },
    {
      "id": "31",
      "title": "The Lighthouse Signal",
      "body": "A decommissioned lighthouse started transmitting a signal every midnight.",
      "tags": ["mystery", "sea", "thriller"],
      "reactions": { "likes": 360, "dislikes": 17 },
      "views": 4350,
      "userId": 32
    },
    {
      "id": "32",
      "title": "The Shadow Festival",
      "body": "Once every decade, shadows moved freely during the town’s festival.",
      "tags": ["fantasy", "folklore", "mystery"],
      "reactions": { "likes": 440, "dislikes": 21 },
      "views": 4800,
      "userId": 34
    },
    {
      "id": "33",
      "title": "The Fifth Mirror",
      "body": "Of the six mirrors in the mansion, one always reflected something different.",
      "tags": ["thriller", "mystery", "paranormal"],
      "reactions": { "likes": 395, "dislikes": 18 },
      "views": 4700,
      "userId": 5
    },
    {
      "id": "34",
      "title": "Midnight on Mars",
      "body": "The Mars rover captured a figure walking across the crater's edge.",
      "tags": ["sci-fi", "space", "thriller"],
      "reactions": { "likes": 510, "dislikes": 26 },
      "views": 5600,
      "userId": 38
    },
    {
      "id": "35",
      "title": "The Inverted Tower",
      "body": "A tower built downward into the earth held the answers to an ancient riddle.",
      "tags": ["adventure", "mystery", "architecture"],
      "reactions": { "likes": 420, "dislikes": 15 },
      "views": 4900,
      "userId": 39
    },
    {
      "id": "36",
      "title": "The Candle That Burned Backwards",
      "body": "The candle grew taller the longer it burned, taking time with it.",
      "tags": ["fantasy", "time", "mystery"],
      "reactions": { "likes": 400, "dislikes": 14 },
      "views": 4700,
      "userId": 40
    },
    {
      "id": "37",
      "title": "The Third Moon",
      "body": "One night, a third moon appeared and changed everything.",
      "tags": ["sci-fi", "cosmic", "fantasy"],
      "reactions": { "likes": 450, "dislikes": 19 },
      "views": 5200,
      "userId": 41
    },
    {
      "id": "38",
      "title": "The Echo Chamber",
      "body": "In the chamber, every sound repeated your deepest fear.",
      "tags": ["horror", "psychological", "mystery"],
      "reactions": { "likes": 370, "dislikes": 20 },
      "views": 4550,
      "userId": 42
    },
    {
      "id": "39",
      "title": "The City Beneath the Lake",
      "body": "When the lake dried up, the ruins of a city emerged—perfectly preserved.",
      "tags": ["adventure", "mystery", "history"],
      "reactions": { "likes": 460, "dislikes": 24 },
      "views": 5300,
      "userId": 43
    },
    {
      "id": "40",
      "title": "The Sleepless Town",
      "body": "No one had slept in the town for ten years—and no one knew why.",
      "tags": ["mystery", "thriller", "science fiction"],
      "reactions": { "likes": 390, "dislikes": 22 },
      "views": 4600,
      "userId": 44
    }
  ];

  const usersCollection = [
    {
      "id": "cfd2b8a4-63a0-4a1a-bc2e-b92d9d6599d4",
      "username": "pghataorre@gmail.com",
      "password": "permy1",
      "name": "Permy"
    },
    {
      "id": "4a6f69f9-74c7-4c89-ae7c-0c5ce4de298e",
      "username": "alice.johnson@example.com",
      "password": "alice123",
      "name": "Alice"
    },
    {
      "id": "9e5cc441-6a96-4389-aef9-2e4dfdc2d3ec",
      "username": "bob.smith@example.com",
      "password": "bobby456",
      "name": "Bob"
    },
    {
      "id": "dc28b4f6-2185-4fe3-b137-dc292d588fef",
      "username": "carla.green@example.com",
      "password": "carla789",
      "name": "Carla"
    },
    {
      "id": "7c9b2c59-9b0a-4bc3-8412-fd4b8b7a8d3d",
      "username": "david.lee@example.com",
      "password": "dave000",
      "name": "David"
    },
    {
      "id": "f6edb99e-2f93-4a69-8727-1edfbfc2c755",
      "username": "emma.brown@example.com",
      "password": "emma321",
      "name": "Emma"
    },
    {
      "id": "b3be4d0a-6d18-4ce2-bc2b-9379acb89b52",
      "username": "frank.taylor@example.com",
      "password": "frank654",
      "name": "Frank"
    },
    {
      "id": "f8b84889-56b6-4521-86c3-80d2dfb0c35c",
      "username": "grace.miller@example.com",
      "password": "grace987",
      "name": "Grace"
    },
    {
      "id": "95b2e9a7-f1b4-4bfb-a2fc-ff07a7ad194c",
      "username": "harry.wilson@example.com",
      "password": "harry555",
      "name": "Harry"
    },
    {
      "id": "e50a48f4-e4a0-43a4-bae0-17acb08efdfc",
      "username": "isla.thomas@example.com",
      "password": "isla777",
      "name": "Isla"
    }
  ]





const sortShit = () => {
  const userIdsCollection = usersCollection.map((user) => {
    return user.id; 
  });

  const userCount = userIdsCollection?.length;

    const blogswithNewId = blogs.map((item) => {
        const randomId = Math.floor(Math.random() * userCount);
        item.userId = randomId;

        return item;
    });
    return blogswithNewId;
}

export default sortShit;