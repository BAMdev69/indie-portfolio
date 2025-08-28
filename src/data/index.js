const pub = (p) => `${import.meta.env.BASE_URL}${p}`;

export const PROFILE = {
  name: 'BAM',
  title: 'Indie Game Developer',
  bio: 'I build tight-feeling 2D/3D gameplay, performant systems, and small but punchy games. Comfortable across Unity C#, web, and data tooling.',
  location: 'Bangalore, India',
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
  'Level Design',
  'AI/State Machines',
  'DOTween / Animations',
  'Web (React, JS)',
  'SQL',
]



export const PROJECTS = [
    {
    id: 'nocturn',
    name: 'Nocturn',
    year: 2025,
    description:
      'A sleek, high-speed, hyper-casual runner in a neon world. Jump between platforms as speed ramps up and chase the rhythm. Mouse click / tap to jump.',
    tags: ['Unity', '2D', 'Endless', 'Casual', 'Web'],
    tech: ['Unity', 'HTML5'],
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
    tech: ['Unity', 'HTML5', 'Leaderboards'],
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
    tags: ['Unity', 'Platformer', '2D', 'Physics', 'Singleplayer', 'Skating', 'Web', 'Windows'],
    tech: ['Unity', 'HTML5', 'Windows'],
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
    tags: ['Unity', 'Strategy', 'Action', 'Crafting', 'Pixel Art', 'Singleplayer', 'Web', 'Windows'],
    tech: ['Unity', 'HTML5', 'Windows'],
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
