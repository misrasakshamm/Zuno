// Put poster files in /public/posters (e.g. joker.jpg). Missing files fall back to a gradient tile.
const p = (title, file, type = "movie") => ({ title, src: `/posters/${file}.jpg`, type });
export const CATEGORIES = [
  { name: "Featured", items: [p("STAR WARS: The Last Jedi","starwars"),p("Weird Hotels","weirdhotels","series"),p("JOKER:The World is a Stage","joker"),p("The Lost City of Z","lostcity"),p("High school in jakarta","jakarta","series"),p("Visions","visions"),p("Dune","dune"),p("Titanic","titanic")] },
  { name: "Action", items: [p("JOKER:The World is a Stage","joker"),p("BATMAN: Unmask the Truth","batman"),p("STAR WARS: The Last Jedi","starwars"),p("The Lost City of Z","lostcity"),p("STAR WARS: The Last Jedi","starwars2"),p("AVENGERS: INFINITY WAR","avengers"),p("Lorem Ipsum Movie","loremipsum")] },
  { name: "Horror", items: [p("ANNABELLE","annabelle"),p("TALK TO ME","talktome"),p("THE NUN","nun"),p("US","us"),p("THE SHINING","shining"),p("MAN IN THE DARK","maninthedark")] },
  { name: "Sci-fy", items: [p("DUNE: THE ORIGINS","dune","series"),p("THE MARTIAN","martian"),p("Star Trek","startrek"),p("Blade runner","bladerunner"),p("Interstellar","interstellar"),p("Inception","inception")] },
  { name: "Drama", items: [p("The Terminal","terminal"),p("Monster","monster","series"),p("LA LA LAND","lalaland"),p("I Can Only Imagine","icanonly"),p("The Shape of Water","shapeofwater"),p("The Greatest Showman","showman")] },
  { name: "Romantic", items: [p("We Live in Time","weliveintime"),p("The Idea of You","ideaofyou"),p("TITANIC","titanic"),p("Nos Etoiles Contraires","nosetoiles"),p("The Notebook","notebook"),p("Before Sunrise","beforesunrise")] },
  { name: "Crime", items: [p("PHOTOCOPIER","photocopier"),p("YOU","you","series"),p("GLASS","glass"),p("VISIONS","visions"),p("High School in Jakarta","jakarta","series"),p("Inconnu","inconnu")] },
];
export const RECENT = [
  ["S2.E2 : Demon Slayer","ds1"],["S2.E5 : Demon slayer","ds2"],["S2.E6 : Demon Slayer","ds3"],["S2.E4 : Demon Slayer","ds4"],
  ["S2.E5 : Game Of Thrones","got1"],["S2.E4: Game Of Thrones","got2"],["S1.E2 : Breaking Bad","bb1"],["S1.E1: Breaking Bad","bb2"],
  ["S1.E3 : Breaking Bad","bb3"],["S1.E4 : Breaking Bad","bb4"],["S2.E7 : Demon Slayer","ds5"],["S2.E8 : Demon Slayer","ds6"],
].map(([title, f]) => ({ title, src: `/posters/${f}.jpg` }));
export const FAQS = [
  ["How is my data protected?","We use industry-standard encryption for your account and payment details, and we never sell your personal data."],
  ["Can I share my account with family/friends?","Yes. The number of devices that can stream at once depends on your plan."],
  ["What should I do if I notice suspicious activity?","Change your password right away and contact Zuno support so we can secure your account."],
  ["How can I contact Zuno support?","Use the Contact us link in the footer or the Help centre."],
  ["Do you offer 24/7 customer service?","Premium members get priority support around the clock; other plans have extended hours."],
];
export const PLANS = [
  { name: "BASIC PLAN", price: 9, features: ["1 device at a time","SD (480p) quality","Limited content library","Ad-supported","No offline downloads"] },
  { name: "STANDARD PLAN", price: 19, features: ["2 devices at a time","HD (1080p) quality","Full content library","Ad-free streaming","Offline downloads available"] },
  { name: "PREMIUM PLAN", price: 29, features: ["8 devices at a time","Ultra HD (4K) + HDR quality","early releases","Ad-free streaming","Offline downloads available","Priority customer support"] },
];
export const SUGGESTIONS = ["demon slayer","fight club","game of thrones","journey to the west"];
