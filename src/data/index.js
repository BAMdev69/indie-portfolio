const pub = (p) => `${import.meta.env.BASE_URL}${p}`;

export const PROFILE = {
  name: 'BAM',
  title: 'Indie Game Developer',
  bio: 'I build tight-feeling 2D/3D gameplay, performant systems, and small but punchy games. Comfortable across Unity C#, web, and data tooling.',
  location: 'India',
  email: 'mailto:steins654murali@gmail.com',
  avatar: pub('images/00Profile/profilePic.jpg'), // <-- replace with your image
  links: {
    github: 'https://github.com/BAMdev69?tab=repositories',
    itch: 'https://bam-dev.itch.io/',
    youtube: 'https://www.youtube.com/@bam_dev/videos',
    instagram: 'https://www.instagram.com/bam_dev69/',
    twitter: 'https://x.com/BAM_dev69'
  },
}


export const SKILLS = [
  'Unity (2D/3D)',
  'C#',
  'C++',
  'Python',
  'Photoshop',
  'Design Patterns',
  'Aniamtions',
  'React',
  'Node',
]



export const PROJECTS = [
  {
    id: 'chesscrush',
    name: 'ChessCrush',
    year: 2025,
    description:
      'BYOG 2025 submission. Chess meets match-3: move like classic chess, line up 3 of the same piece to crush them. 15 handcrafted levels, themes/skins, crisp SFX.',
    tags: ['Unity', 'HTML5', 'Windows', 'Puzzle', 'Strategy', '2D', 'Singleplayer', 'BYOG 2025', 'Game Jam'],
    tech: ['Unity', 'WebGL'],
    images: [
      pub('images/chesscrush/ss01.png'),
      pub('images/chesscrush/ss02.png'),
      pub('images/chesscrush/ss03.png'),
    ],
    cover: pub('images/chesscrush/Main.png'),
    links: {
      play: 'https://bam-dev.itch.io/chesscrush',
      // repo: '',       // add later if you open-source
      // trailer: '',    // add a YouTube id later if you post one
      // devlog: ''
    },
    highlights: [
      'Chess logic + match-3 loop with readable UX',
      '15 levels from easy to mind-bending; themed boards',
      'Built for BYOG (IGDC) 2025 jam window',
    ],
  },
    {
    id: 'nocturn',
    name: 'Nocturn',
    year: 2025,
    description:
      'A sleek, high-speed, hyper-casual runner in a neon world. Jump between platforms as speed ramps up and chase the rhythm. Mouse click / tap to jump.',
    tags: ['Unity', '2D', 'Endless', 'Casual', 'Ads'],
    tech: ['Unity', 'C#', 'Ad-Mob Integration'],
    images: [
      pub('images/nocturn/3.jpg'),
      pub('images/nocturn/2.jpg'),
      pub('images/nocturn/1.png'),
    ],
    cover: pub('images/nocturn/main.png'),
    links: {
      play: 'https://bam-dev.itch.io/nocturn',
    },
    highlights: [
      'Shape-shifting feel and rising speed curve',
      'One-button input for tight, readable jumps',
    ],
  },

  {
    id: 'tiny-defender',
    name: 'Tiny Defender',
    year: 2025,
    description:
      'Defend the castle from waves of goblins at night; by day, build up defenses, earn gems, and buy skins. Climb the leaderboard.',
    tags: ['Unity', 'Tower Defense', 'Strategy', 'Survival', 'Web'],
    tech: ['Unity', 'C#', 'PlaygamaSDK', 'Public/Private Leaderboards', 'Rewarded Ads'],
    images: [
      pub('images/tinydefender/1.png'),
      pub('images/tinydefender/2.png'),
      pub('images/tinydefender/3.png'),
    ],
    cover: pub('images/tinydefender/main.png'),
    links: {
      play: 'https://bam-dev.itch.io/tiny-defender',
    },
    highlights: [
      'Day/Night loop for build vs defend',
      'Skins + gems economy; leaderboard chasing',
    ],
  },

  {
    id: 'cat-n-skate',
    name: "Cat 'N' Skate",
    year: 2025,
    description:
      "A platformer made for GMTK 2025: you're an attention-seeking cat on a skateboard. Do loops, flips, and tricks to impress other cats across maps.",
    tags: ['Unity', 'Platformer', '2D', 'Physics', 'Character Selection'],
    tech: ['Unity', 'C#','ScriptableObjects'],
    images: [
      pub('images/catnskate/1.png'),
      pub('images/catnskate/2.png'),
      pub('images/catnskate/3.png'),
    ],
    cover:  pub('images/catnskate/main.png'),
    links: {
      play: 'https://bam-dev.itch.io/cat-n-skate',
    },
    highlights: [
      'Coyote time + buffered inputs for responsive feel',
      'Loops & trick system tuned for flow',
    ],
  },

  {
    id: 'fantasycraft',
    name: 'FantasyCraft',
    year: 2025,
    description:
      'Drag-and-combine crafting roguelite: fuse items in forge slots, equip to fight waves, and face bosses on floors 10/20/30. 30+ recipes, gems, achievements.',
    tags: ['Unity', 'Strategy', 'Action', 'Crafting', 'AI Generated', 'Shop System', 'Achievement System'],
    tech: ['Unity', 'C#', 'Scriptable Objects'],
    images: [
      pub('images/fantasycraft/1.png'),
      pub('images/fantasycraft/2.png'),
      pub('images/fantasycraft/3.png'),
    ],
    cover: pub('images/fantasycraft/main.png'),
    links: {
      play: 'https://bam-dev.itch.io/fantasycraft',
    },
    highlights: [
      '30+ discoverable recipes; curve-based progression',
      'Boss fights at floors 10/20/30; mobile-web optimized',
    ],
  },
]
