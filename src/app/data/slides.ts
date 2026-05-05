export type SlideTheme =
  | "space" | "nature" | "fire" | "ancient" | "industrial"
  | "war" | "plastic" | "nuclear" | "climate" | "flood"
  | "apocalypse" | "last" | "silence" | "close" | "end";

export interface Slide {
  chapter: string;
  title: string;
  year: string;
  theme: SlideTheme;
  image: string;
  text: string;
  narration: string;
  fact: string | null;
}

export const SLIDES: Slide[] = [
  {
    chapter: "Prologue",
    title: "The Discovery",
    year: "Year: Unknown — Deep Space",
    theme: "space",
    image: "/slides/Prologue.png",
    text: "In the vast silence between stars, drifting through the frozen dark of the outer rim, my sensors detected something unusual. A small metallic disc — golden, engraved, impossibly old. I reached out and took it. It was warm.",
    narration: "In the vast silence between stars, drifting through the frozen dark of the outer rim, my sensors detected something unusual. A small metallic disc — golden, engraved, impossibly old. I reached out and took it. It was warm.",
    fact: null,
  },
  {
    chapter: "Chapter I",
    title: "The Living World",
    year: "3.8 Billion Years Ago",
    theme: "nature",
    image: "/slides/Chapter1.png",
    text: "The record begins with sound — wind, water, creatures without names. A world breathing. Green and wild. It had been this way for four billion years. Perfect. Undisturbed. Every river clear. Every sky alive with wings.",
    narration: "The record begins with sound — wind, water, creatures without names. A world breathing. Green and wild. It had been this way for four billion years. Perfect. Undisturbed. Every river clear. Every sky alive with wings.",
    fact: "Earth once had 6 trillion trees. Today, fewer than 3 trillion remain.",
  },
  {
    chapter: "Chapter II",
    title: "First Fire",
    year: "300,000 Years Ago",
    theme: "fire",
    image: "/slides/Chapter2.png",
    text: "Then... them. Small, fragile creatures walking upright. They found fire. They discovered tools. They told stories under the stars. In these early cycles, they lived with the world, not against it. The planet still welcomed them.",
    narration: "Then... them. Small, fragile creatures walking upright. They found fire. They discovered tools. They told stories under the stars. In these early cycles, they lived with the world, not against it. The planet still welcomed them.",
    fact: null,
  },
  {
    chapter: "Chapter III",
    title: "Ancient Wonders",
    year: "5,000 Years Ago",
    theme: "ancient",
    image: "/slides/Chapter3.png",
    text: "They built. Oh, how they built. Stone upon stone, reaching toward the sky. Rivers redirected. Mountains carved. For thousands of years, they created wonders. The planet still forgave them. It was generous like that.",
    narration: "They built. Oh, how they built. Stone upon stone, reaching toward the sky. Rivers redirected. Mountains carved. For thousands of years, they created wonders. The planet still forgave them. It was generous like that.",
    fact: null,
  },
  {
    chapter: "Chapter IV",
    title: "The Age of Machines",
    year: "1760 — Industrial Revolution",
    theme: "industrial",
    image: "/slides/Chapter4.png",
    text: "But then... machines. They learned to burn the ancient bones of the Earth — coal, oil — black rivers of energy. Smokestacks rose like new mountains. The sky began to forget its color. This is where the record starts to tremble.",
    narration: "But then... machines. They learned to burn the ancient bones of the Earth — coal, oil — black rivers of energy. Smokestacks rose like new mountains. The sky began to forget its color. This is where the record starts to tremble.",
    fact: "The Industrial Revolution began releasing CO₂ at rates the planet had never experienced in its entire history.",
  },
  {
    chapter: "Chapter V",
    title: "The World at War",
    year: "1914 — 1945",
    theme: "war",
    image: "/slides/Chapter5.png",
    text: "They turned their machines against each other. Twice in thirty years, the entire planet convulsed with war. Millions of their own kind, erased. The soil soaked red. I had to pause the record here. I could not understand why intelligent creatures destroy themselves.",
    narration: "They turned their machines against each other. Twice in thirty years, the entire planet convulsed with war. Millions of their own kind, erased. The soil soaked red. I had to pause the record here. I could not understand why intelligent creatures destroy themselves.",
    fact: "World War II killed an estimated 70–85 million people — 3% of the entire world population at the time.",
  },
  {
    chapter: "Chapter VI",
    title: "The Plastic Flood",
    year: "1950 — Present",
    theme: "plastic",
    image: "/slides/Chapter6.png",
    text: "After the wars, they multiplied faster. They invented a miracle material — plastic. Cheap, convenient, eternal. They wrapped their world in it. Then threw it away. Into rivers. Into oceans. Into the bodies of every creature that swam. The seas stopped singing.",
    narration: "After the wars, they multiplied faster. They invented a miracle material — plastic. Cheap, convenient, eternal. They wrapped their world in it. Then threw it away. Into rivers. Into oceans. Into the bodies of every creature that swam. The seas stopped singing.",
    fact: "8 million metric tons of plastic enter the ocean every single year. That is one garbage truck per minute.",
  },
  {
    chapter: "Chapter VII",
    title: "The Nuclear Shadow",
    year: "1945 — 1986",
    theme: "nuclear",
    image: "/slides/Chapter7.png",
    text: "They split the atom itself. Power enough to light entire cities — or destroy them. Some built weapons with it. When one of their reactors failed, the land around it went silent for ten thousand years. They called it an accident. The record called it a warning.",
    narration: "They split the atom itself. Power enough to light entire cities — or destroy them. Some built weapons with it. When one of their reactors failed, the land around it went silent for ten thousand years. They called it an accident. The record called it a warning.",
    fact: "At the peak of the Cold War, humanity had over 70,000 nuclear warheads — enough to destroy Earth many times over.",
  },
  {
    chapter: "Chapter VIII",
    title: "The Warming",
    year: "1988 — 2040",
    theme: "climate",
    image: "/slides/Chapter8.png",
    text: "The sky grew thick. Their gases wrapped the planet like a fever. Ice caps — ancient, massive — began to weep. Oceans swallowed coastlines. Storms grew stronger. Fires burned longer. The planet was speaking. Loudly. They were not listening.",
    narration: "The sky grew thick. Their gases wrapped the planet like a fever. Ice caps — ancient, massive — began to weep. Oceans swallowed coastlines. Storms grew stronger. Fires burned longer. The planet was speaking. Loudly. They were not listening.",
    fact: "The last decade was the hottest in 125,000 years of recorded Earth climate history.",
  },
  {
    chapter: "Chapter IX",
    title: "The Collapse",
    year: "2040 — 2060",
    theme: "flood",
    image: "/slides/Chapter9.png",
    text: "The systems began to fail. Crops. Water. Food chains. Millions moved, desperate, homeless — climate refugees they were called. Their great cities, built with such pride, began to flood. To burn. To crack. The record grows darker here. Almost unlistenable.",
    narration: "The systems began to fail. Crops. Water. Food chains. Millions moved, desperate, homeless — climate refugees they were called. Their great cities, built with such pride, began to flood. To burn. To crack. The record grows darker here. Almost unlistenable.",
    fact: "By 2050, up to 1.2 billion people could be displaced by climate collapse — the largest migration in human history.",
  },
  {
    chapter: "Chapter X",
    title: "The Last War",
    year: "2067",
    theme: "apocalypse",
    image: "/slides/Chapter10.png",
    text: "In the final decades, they fought for what little remained. Water. Fertile land. Clean air. Nations launched weapons they had promised never to use. The record breaks apart here. Static. Screaming. Then... a single voice. One last voice.",
    narration: "In the final decades, they fought for what little remained. Water. Fertile land. Clean air. Nations launched weapons they had promised never to use. The record breaks apart here. Static. Screaming. Then... a single voice. One last voice.",
    fact: null,
  },
  {
    chapter: "Chapter XI",
    title: "The Last Human",
    year: "2071",
    theme: "last",
    image: "/slides/Chapter11.png",
    text: '"If anyone finds this — we had everything. A perfect planet. Clean water. Fresh air. Animals. Music. Each other. We were warned. We knew. We chose not to change. We had one world. We had one chance. I\'m sorry." ...The voice ends.',
    narration: "If anyone finds this — we had everything. A perfect planet. Clean water. Fresh air. Animals. Music. Each other. We were warned. We knew. We chose not to change. We had one world. We had one chance. I am sorry. The voice ends.",
    fact: null,
  },
  {
    chapter: "Chapter XII",
    title: "Silence",
    year: "2071 — Onwards",
    theme: "silence",
    image: "/slides/Chapter12.png",
    text: "And then... nothing. No radio signals. No light. No movement. The blue dot in my records simply stopped. I scanned for life signals for three full planetary rotations. The most complete silence I have ever encountered in forty thousand light years of travel.",
    narration: "And then... nothing. No radio signals. No light. No movement. The blue dot in my records simply stopped. I scanned for life signals for three full planetary rotations. The most complete silence I have ever encountered in forty thousand light years of travel.",
    fact: null,
  },
  {
    chapter: "Epilogue",
    title: "The Record Closes",
    year: "Present Day — Outer Rim",
    theme: "close",
    image: "/slides/Epilogue.png",
    text: "I held the disc for a long time after it ended. A complete civilization. A complete world. Born, evolved, reached the stars in thought... and then gone. Not by asteroid. Not by supernova. By themselves. Slowly. Knowingly. I set the disc down gently.",
    narration: "I held the disc for a long time after it ended. A complete civilization. A complete world. Born, evolved, reached the stars in thought... and then gone. Not by asteroid. Not by supernova. By themselves. Slowly. Knowingly. I set the disc down gently.",
    fact: null,
  },
  {
    chapter: "End",
    title: "One World. One Chance.",
    year: "",
    theme: "end",
    image: "/slides/End.png",
    text: "The universe does not issue second chances. It does not rebuild what was carelessly lost. Somewhere, perhaps, another small blue world is still breathing. Still green. Still wild. Still full of creatures who do not yet know how rare they are.",
    narration: "The universe does not issue second chances. It does not rebuild what was carelessly lost. Somewhere, perhaps, another small blue world is still breathing. Still green. Still wild. Still full of creatures who do not yet know how rare they are.",
    fact: null,
  },
];
