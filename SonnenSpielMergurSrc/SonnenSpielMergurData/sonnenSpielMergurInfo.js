export const spielMergurFacts = [
  'Germany has more than 25,000 castles, many of which are open to visitors.',
  'The country is home to over 6,000 museums covering art, history, science and culture.',
  'The Berlin Wall stood for 28 years and today its remaining pieces are preserved as public art.',
  'Germany has the largest economy in Europe and one of the strongest in the world.',
  'There are more than 1,500 different types of sausages made across the country.',
  'The Autobahn includes long sections with no speed limit, unique in Europe.',
  'Germany produces more books annually than almost any other country.',
  'The Cologne Cathedral took over 600 years to complete.',
  'Oktoberfest, held in Munich, is the world’s largest folk festival.',
  'Germany is one of the greenest countries in Europe, with over one-third of its land covered by forests.',
];

export const spielMergurQuizQuestions = [
  {
    question: 'What type of architectural atmosphere attracts you the most?',
    answers: [
      { text: 'Romantic, historic, peaceful', category: 'A' },
      { text: 'Modern, innovative, futuristic', category: 'B' },
      { text: 'Majestic, dramatic, fairy-tale inspired', category: 'C' },
    ],
  },
  {
    question: 'What surroundings do you enjoy in architecture?',
    answers: [
      { text: 'Gardens and soft natural landscapes', category: 'A' },
      { text: 'Urban skylines and modern infrastructure', category: 'B' },
      { text: 'Mountains, forests, or rivers with epic views', category: 'C' },
    ],
  },
  {
    question: 'Which color palette appeals to you?',
    answers: [
      { text: 'Warm earthy tones', category: 'A' },
      { text: 'Metal, glass, sleek surfaces', category: 'B' },
      { text: 'Bold contrasts, dark colors', category: 'C' },
    ],
  },
  {
    question: 'What emotional feeling should a building evoke?',
    answers: [
      { text: 'Calmness and harmony', category: 'A' },
      { text: 'Innovation and ambition', category: 'B' },
      { text: 'Awe and wonder', category: 'C' },
    ],
  },
];

export const spielMergurLocationsByCategory = {
  A: [
    {
      title: 'Sanssouci Palace, Potsdam',
      details:
        'Sanssouci Palace is a refined rococo residence surrounded by terraced vineyards and lush gardens. Designed as the summer retreat for Frederick the Great, it features delicate stucco decorations, pastel interiors, and elegant sculptures. Its harmonious architecture and serene landscape appeal to admirers of classical, romantic, and nature-integrated designs.',
      coords: '52.4001, 13.0399',
      image: require('../../assets/images/spielerguloc1.png'),
    },
    {
      title: 'Heidelberg Castle',
      details:
        'Heidelberg Castle is an iconic Renaissance ruin overlooking the old town and Neckar River. Its warm sandstone walls and fragmentary towers create a poetic atmosphere that has inspired artists and writers for centuries. The blend of grandeur and decay makes it ideal for visitors who love old-world charm and dramatic historical settings.',
      coords: '49.4108, 8.7153',
      image: require('../../assets/images/spielerguloc2.png'),
    },
    {
      title: 'Frauenkirche, Dresden',
      details:
        'The Frauenkirche is a baroque masterpiece rebuilt stone-by-stone after WWII. Its towering dome, curved façade, and glowing sandstone exterior symbolize peace and restoration. Inside, soft colors and ornate detailing create an uplifting atmosphere. Perfect for those who appreciate spiritual architecture and reborn historical icons.',
      coords: '51.0510, 13.7416',
      image: require('../../assets/images/spielerguloc3.png'),
    },
  ],

  B: [
    {
      title: 'Reichstag Building, Berlin',
      details:
        'The Reichstag is a blend of imperial architecture and modern innovation. The contemporary glass dome by Norman Foster offers panoramic city views and symbolizes political transparency. Visitors who enjoy a combination of history, modernity, and conceptual design will find this building compelling.',
      coords: '52.5186, 13.3762',
      image: require('../../assets/images/spielerguloc4.png'),
    },
    {
      title: 'Elbphilharmonie, Hamburg',
      details:
        'This striking concert hall merges a historic warehouse base with a shimmering glass structure resembling ocean waves. The façade reflects light like a crystal sculpture, while the interior is engineered for acoustic perfection. A dream spot for fans of futuristic aesthetics and bold architectural statements.',
      coords: '53.5413, 9.9840',
      image: require('../../assets/images/spielerguloc5.png'),
    },
    {
      title: 'Mercedes-Benz Museum',
      details:
        'The museum features a fluid, spiraling form inspired by a DNA helix. Its sleek metallic surfaces, organic curves, and open interior spaces showcase cutting-edge engineering and architectural innovation. Ideal for visitors attracted to modern, dynamic, and technologically inspired design.',
      coords: '48.7936, 9.2361',
      image: require('../../assets/images/spielerguloc6.png'),
    },
  ],

  C: [
    {
      title: 'Neuschwanstein Castle',
      details:
        'This fairy-tale castle towers above forests and lakes, blending medieval fantasy with romanticism. With its snow-white turrets and dramatic Alpine setting, it radiates magic and escapism. Perfect for visitors who love whimsical, majestic, and cinematic landscapes.',
      coords: '47.5576, 10.7498',
      image: require('../../assets/images/spielerguloc7.png'),
    },
    {
      title: 'Cologne Cathedral',
      details:
        'A pinnacle of Gothic architecture, the cathedral features soaring spires, elaborate tracery, and incredible stained-glass windows. The sheer verticality and spiritual intensity make it a must-see for admirers of grand, dramatic, and awe-inspiring architecture.',
      coords: '50.9413, 6.9580',
      image: require('../../assets/images/spielerguloc8.png'),
    },
    {
      title: 'Speicherstadt, Hamburg',
      details:
        'This historic warehouse district offers narrow canals, brick-gothic buildings, and atmospheric nighttime lighting. Its moody industrial charm appeals to those who enjoy complex textures, water-architecture combinations, and urban historic environments.',
      coords: '53.5436, 9.9916',
      image: require('../../assets/images/spielerguloc9.png'),
    },
  ],
};

export const spielMergurOnboardBgImages = [
  require('../../assets/images/spielerguron1.png'),
  require('../../assets/images/spielerguron2.png'),
  require('../../assets/images/spielerguron3.png'),
  ,
];

export const blogArticles = [
  {
    id: 1,
    title: 'Quedlinburg: The Town Where Time Forgot to Move',
    excerpt:
      'Quedlinburg is often described as a “living museum,” but those words barely capture its atmosphere...',
    full: `Quedlinburg is often described as a “living museum,” but those words barely capture its atmosphere. The moment you enter the old town, the world shifts — the streets narrow, the roofs bend gently forward, and the patterned timber frames create a warm patchwork of ochre and deep browns. Many houses lean slightly, softened by centuries of storms and repairs. Instead of feeling fragile, they feel wise.

Walking through Quedlinburg at dawn is a surreal experience. The town is so quiet that you hear your own footsteps echoing between houses built before Columbus reached America. Every façade seems to hide a story: a merchant’s pride, a family’s fortune, a craftsman’s signature detail. Standing there, you realize that time doesn’t always flow in one direction — sometimes it circles back and welcomes you in.`,
  },

  {
    id: 2,
    title: 'Cologne Cathedral: Six Centuries of Patience',
    excerpt:
      'People often admire Cologne Cathedral for its size, but its most impressive trait is patience...',
    full: `People often admire Cologne Cathedral for its size, but its most impressive trait is patience. Construction began in 1248 with ambitious Gothic plans meant to reflect the heavens. But centuries later, the world changed, wars came and went, money disappeared, and the project was abandoned. For 300 years the cathedral stood half-finished, a stone skeleton rising above the Rhine.

Then, in the 19th century, something miraculous happened. The original medieval plans resurfaced, hidden away in dusty archives, and the city decided to finish the cathedral exactly as envisioned centuries before. The final stone was set in 1880, making it one of the longest architectural commitments in history. When you stand beneath its spires now, you don’t just see a cathedral — you see the endurance of human vision across generations.`,
  },

  {
    id: 3,
    title: 'Neuschwanstein: The Castle Built from Dreams',
    excerpt:
      'High in the Bavarian Alps, Neuschwanstein Castle rises like a mirage...',
    full: `High in the Bavarian Alps, Neuschwanstein Castle rises like a mirage. It was never built for defense or political prestige — it was built for imagination. King Ludwig II wanted a place where stories could come alive: halls inspired by legends, balconies opening onto mountains, and interiors filled with mythical murals. It was a personal sanctuary, a private escape from the responsibilities of rule.

Ironically, Ludwig spent less than six months living there before his mysterious death. Yet his dream lives on more vividly than he ever might have imagined. The castle has inspired countless works of art, including Disney’s iconic fairy-tale castle. Visitors often say that Neuschwanstein feels strangely familiar even on a first visit — as if everyone carries a little piece of it in their childhood dreams.`,
  },

  {
    id: 4,
    title: 'Berlin’s “Hollow Tooth”: A Monument to Memory',
    excerpt:
      'The Kaiser Wilhelm Memorial Church was bombed during WWII, but the ruin was never rebuilt...',
    full: `When Kaiser Wilhelm Memorial Church was bombed during World War II, the tower was left broken and charred. Instead of repairing it, Berlin decided to preserve the ruin exactly as it was. Locals nicknamed it the “Hollow Tooth,” a symbol of the city’s resilience and scars. What could have been an eyesore became one of Berlin’s most meaningful landmarks.

Standing before it, you sense a silence that doesn’t require explanation. It’s a reminder that cities carry wounds just like people do. Around the old tower, a modern church complex glows with blue glass panels, creating a dialogue between destruction and renewal. In Berlin, history is never erased — it becomes part of the architecture.`,
  },

  {
    id: 5,
    title: 'Lübeck: A City of Brick Waves',
    excerpt:
      'Lübeck’s historic center looks like it was crafted with theatrical flair...',
    full: `Lübeck’s historic center looks like it was crafted with theatrical flair. Its iconic stepped gables — tall, rhythmic, and gently curving — are built from deep red brick that glows warmly in afternoon light. Merchants in the Middle Ages competed not only in trade but in architectural beauty. A more dramatic gable meant more prestige, more attention, more customers.

Today, Lübeck’s silhouettes still feel proud and welcoming. Wandering through the city, you catch glimpses of its maritime past everywhere: warehouses shaped like waves, narrow alleys named after old crafts, and facades decorated with symbols of seafaring life. It’s a place where brick feels alive, telling stories through patterns and geometry.`,
  },

  {
    id: 6,
    title: 'Hundertwasserhaus Magdeburg: A Rebellion Against Straight Lines',
    excerpt:
      'Hundertwasser believed that straight lines were against human nature...',
    full: `Hundertwasser believed that straight lines were an invention of pure logic — and that humans were anything but logical. His building in Magdeburg is a joyful rebellion against convention. Floors undulate gently, windows are mismatched like a joyful collage, and trees grow directly out of walls. The roof is a garden, alive with grass and shrubs that change color with the seasons.

Walking inside feels like stepping into a dream where rules dissolve. Even the air seems softer, shaped by curves instead of corners. It’s an architecture that refuses to be quiet, whispering instead that creativity can reshape everyday life. Hundertwasser once said, “The straight line is ungodly.” Standing in his creation, you understand what he meant.`,
  },

  {
    id: 7,
    title: 'Dresden’s Reborn Frauenkirche',
    excerpt:
      'For half a century, Dresden’s Frauenkirche stayed a ruin — until a careful, decade-long restoration began...',
    full: `For half a century, the Frauenkirche in Dresden lay in ruins after WWII — a massive pile of stones preserved as a memorial. When reconstruction began in the 1990s, architects used each original stone like a puzzle piece. They cleaned it, numbered it, and placed it back where it belonged. This meticulous work took over a decade, resulting in a breathtaking blend of old and new.

From afar, you can still see which stones survived the fire — dark, scarred pieces embedded among lighter ones. The contrast isn’t a flaw; it’s a deliberate reminder. Frauenkirche stands not only as a masterpiece of Baroque architecture but also as a symbol of reconciliation and the resilience of culture.`,
  },

  {
    id: 8,
    title: 'Freiburg’s Bächle: The Streams Beneath Your Feet',
    excerpt:
      'Tiny canals called Bächle run through Freiburg like silver threads...',
    full: `In Freiburg, tiny canals called Bächle run through the old town like silver threads. They were originally built for practical purposes: providing water for livestock, firefighting, and cooling the streets. Today, they add an unexpected charm to the city, sparkling in sunlight and reflecting the facades above.

There’s also a local legend that if you accidentally step into a Bächle, you’re destined to marry a Freiburger. Locals joke that tourists who wander too closely are either reckless or romantic. Whether or not the legend is true, the Bächle make every walk feel lively, turning ordinary streets into playful pathways.`,
  },

  {
    id: 9,
    title: 'Brandenburg Gate: More Than a Monument',
    excerpt:
      'The Brandenburg Gate has carried many symbolic meanings throughout Germany’s history...',
    full: `The Brandenburg Gate has lived many symbolic lives. It once represented peace, then imperial triumph, then division during the Cold War, and finally unity after the fall of the Berlin Wall. Its Quadriga — the chariot atop the gate — was stolen by Napoleon and returned years later with renewed meaning.

When you stand in front of it today, you feel all these layers overlapping. Tourists take photos, children chase pigeons, musicians play, and yet the weight of history is always present. Few monuments have carried so many identities, adapting with the country they stand in.`,
  },

  {
    id: 10,
    title: 'Augsburg’s Fuggerei: 500 Years of Affordable Living',
    excerpt:
      'Founded in 1521, the Fuggerei is the world’s oldest social housing complex still in use...',
    full: `Founded in 1521, the Fuggerei is the world’s oldest social housing complex still in use. Inside its walled grounds, residents live in charming rows of yellow houses with green shutters — at a rent of just €1 per year. The only condition is to say three daily prayers for the benefactor, Jakob Fugger.

Walking through the Fuggerei feels like wandering into a peaceful village within a city. Time moves slower there. The houses are simple but beautifully kept, and the streets are lined with gardens and flowers. It’s proof that architecture can shape not only cities but also social values, reminding us that community and dignity can go hand in hand.`,
  },

  {
    id: 11,
    title: 'Munich’s Olympic Roof: A Floating Sculpture',
    excerpt:
      'The roof of Munich’s Olympic Stadium is a marvel of engineering...',
    full: `The roof of Munich’s Olympic Stadium is a marvel of engineering and imagination. Designed to resemble the Alps, it stretches in translucent waves over the sports grounds. Engineers used shipbuilding techniques, weaving cables like ropes on a giant sail. From above, it looks like a piece of fabric caught in mid-air.

When sunlight passes through, the entire space glows softly, creating an atmosphere both futuristic and gentle. It was a bold vision for the 1972 Olympics — architecture as movement, not monument. Even today, the roof feels ahead of its time, a reminder that creativity can lift structures into poetry.`,
  },

  {
    id: 12,
    title: 'Black Forest Farmhouses: Built for Harsh Winters',
    excerpt:
      'Traditional Black Forest houses look unlike any other architecture in Germany...',
    full: `Traditional Black Forest houses look unlike any other architecture in Germany. Their roofs descend almost to the ground, forming a protective shell against heavy snow and icy winds. These structures often housed entire families, animals, and tools under one enormous roof, making them self-contained worlds.

Inside, the smell of wood, grain, and fire would mix into a warm winter perfume. The design was practical, but it also created a unique sense of coziness. Seen from afar, these houses appear to crouch into the landscape, becoming part of the forest’s rhythm. They are architecture shaped by nature, not imposed upon it.`,
  },

  {
    id: 13,
    title: 'Speicherstadt Hamburg: A City of Warehouses on Water',
    excerpt:
      'Hamburg’s Speicherstadt is a labyrinth of red-brick warehouses rising directly from canals...',
    full: `Hamburg’s Speicherstadt is a labyrinth of red-brick warehouses rising directly from canals. Built on thousands of wooden piles, the district blends Gothic revival motifs with industrial function. When the tide rises, water flows quietly between the buildings, giving the area a mysterious floating quality.

At night, golden lights illuminate the bridges and facades, turning Speicherstadt into a cinematic scene. The district once stored spices, coffee, and carpets from all over the world, making it a gateway for global trade. Today it remains one of the most atmospheric places in Germany — a reminder of Hamburg’s deep connection to water.`,
  },

  {
    id: 14,
    title: 'Regensburg: A Rare Medieval Time Capsule',
    excerpt:
      'Regensburg escaped most wartime destruction, making its old town a nearly untouched medieval gem...',
    full: `Regensburg escaped most wartime destruction, making its old town a nearly untouched medieval gem. Roman remnants, Gothic spires, Baroque mansions, and Renaissance courtyards coexist in a harmonious tangle of history. Walking its streets is like reading a thousand-year-old book with no missing chapters.

Every corner offers a surprise: a stone tower built by merchants to show off wealth, a narrow alley leading to a forgotten courtyard, or a bridge that has carried travelers for 900 years. Regensburg isn’t preserved — it’s alive. People shop, talk, and laugh among walls that witnessed emperors and poets.`,
  },

  {
    id: 15,
    title: 'Weimar: Where the Bauhaus Revolution Began',
    excerpt:
      'The Bauhaus School transformed global design, but its origins were surprisingly humble...',
    full: `The Bauhaus School transformed global design, but its origins were surprisingly humble. In 1919, a small group of architects and artists in Weimar sought to unify art and craftsmanship. Their ideas — clean lines, functional forms, and honest materials — spread worldwide and reshaped everything from furniture to skyscrapers.

Yet if you walk through Weimar today, the city remains quiet and intimate. It’s filled with parks, classical buildings, and small ateliers. This gentle atmosphere makes the boldness of the Bauhaus spirit feel even more remarkable — a reminder that big ideas often come from small, peaceful places.`,
  },

  {
    id: 16,
    title: 'Frankfurt’s Unexpected Skyline',
    excerpt:
      'Most European cities avoid skyscrapers, but Frankfurt embraced them...',
    full: `Most European cities avoid skyscrapers, but Frankfurt embraced them. Its financial district, filled with shimmering towers, stands in striking contrast to the surrounding historic neighborhoods. Locals jokingly call it “Mainhattan,” blending the river’s name with New York’s skyline.

From the riverbank, the view is breathtaking. Glass towers reflect the clouds, while church spires peek between them, creating a dialogue between old and new. Frankfurt proves that architectural identity is not about uniformity — it’s about harmony in diversity.`,
  },

  {
    id: 17,
    title: 'The Glass Chapel of the Bavarian Forest',
    excerpt: 'The Glass Chapel appears like a crystal rising from the earth...',
    full: `Hidden among gentle hills, the Glass Chapel appears like a crystal rising from the earth. Built entirely by local craftsmen, it blends modern transparency with traditional stained-glass techniques. When sunlight enters, colors ripple across the interior like liquid light.

Sitting inside feels meditative. The structure reflects the ever-changing sky — blue at noon, gold at sunset, and deep violet on cloudy days. It’s a reminder that architecture can be a celebration of light itself.`,
  },

  {
    id: 18,
    title: 'Leipzig’s Monument to the Battle of the Nations',
    excerpt: 'This imposing structure commemorates a pivotal 1813 battle...',
    full: `This imposing structure commemorates a pivotal 1813 battle. With stone warriors guarding the interior and a massive dome rising 91 meters high, the monument feels like a fortress of memory. Climbing the inner staircase is an experience — narrow passages, echoing chambers, and sudden views opening onto the city.

At the top, Leipzig stretches out in every direction. You feel the scale of history and the resilience of the city below. Despite its size, the monument is deeply emotional, a place where silence carries weight.`,
  },

  {
    id: 19,
    title: 'Bebenhausen: A Monastery Hidden in the Forest',
    excerpt:
      'Tucked away among trees, the Bebenhausen Monastery feels almost forgotten by time...',
    full: `Tucked away among trees, the Bebenhausen Monastery feels almost forgotten by time. Built in the 12th century, it combines Gothic and Renaissance elements in a slow architectural dialogue. Ivy creeps across stone walls, birds nest in wooden beams, and sunlight filters through ancient cloisters.

Walking through its quiet halls, you sense centuries of contemplation. The wooden dormitories and elegant chapter house evoke a life of simplicity and devotion. Nature and architecture intertwine so seamlessly that it’s hard to tell where one ends and the other begins.`,
  },

  {
    id: 20,
    title: 'Potsdam’s Dutch Quarter: A Little Netherlands in Germany',
    excerpt:
      'Rows of narrow red-brick houses create a quiet, charming atmosphere...',
    full: `Built for Dutch craftsmen in the 18th century, the Dutch Quarter in Potsdam feels like a cultural echo from Amsterdam. Rows of narrow red-brick houses with graceful gables line calm, walkable streets. The symmetry is soothing, the details delightful — curved windows, small courtyards, neat flowerpots.

Exploring the neighborhood feels like stepping into a postcard. Cafés spill onto the sidewalks, artists sell handmade goods from studio windows, and the air carries a relaxed, friendly rhythm. It’s a charming reminder of how architecture can carry influences across borders and centuries.`,
  },
];
