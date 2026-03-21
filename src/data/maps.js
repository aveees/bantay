
import cemetery from '../assets/imgs/map_cemetery.png';
import farm from '../assets/imgs/map_farm.png';
import forest from '../assets/imgs/map_forest.png';
import mountain from '../assets/imgs/map_mountain.png';
import normal from '../assets/imgs/map_normal.png';
import river from '../assets/imgs/map_river.png';
export const islandGroups = [
  {
    id: "luzon",
    name: "Luzon",
    subtitle: "Northern lands of mountains, forests, and buried fear.",
    maps: [
      {
        name: "Sierra Madre",
        desc: "A cursed mountain forest swallowed by fog, whispers, and old spirits.",
        image: mountain,
      },
      {
        name: "Manila North Cemetery",
        desc: "A forsaken burial ground where silence breaks only when the dead begin to move.",
        image:
          cemetery,
      },
    ],
  },
  {
    id: "visayas",
    name: "Visayas",
    subtitle: "Islands of rituals, coastlines, and whispers in the dark.",
    maps: [
      {
        name: "Siquijor",
        desc: "An island of rituals, shadows, and secrets buried beneath moonlit shores.",
        image:
          forest,
      },
      {
        name: "Samar",
        desc: "A haunted landscape where old legends still linger between the plains.",
        image:
          farm,
      },
    ],
  },
  {
    id: "mindanao",
    name: "Mindanao",
    subtitle: "Frontiers of jungle, darkness, and ancient unrest.",
    maps: [
      {
        name: "Surigao del Sur",
        desc: "A haunted frontier where jungle trails lead straight into the unknown.",
        image:
          normal,
      },
      {
        name: "Cotabato",
        desc: "A shadowed region where the land with something always seems to be watching.",
        image:
          river,
      },
    ],
  },
];