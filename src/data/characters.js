import albularyo1 from "../assets/characters/albularyo/1.png";
import albularyo2 from "../assets/characters/albularyo/2.png";
import albularyo3 from "../assets/characters/albularyo/3.png";
import albularyo4 from "../assets/characters/albularyo/4.png";
import albularyo5 from "../assets/characters/albularyo/5.png";
import albularyo6 from "../assets/characters/albularyo/6.png";
import albularyo7 from "../assets/characters/albularyo/7.png";


import mandirigma1 from "../assets/characters/mandirigma/1.png";
import mandirigma2 from "../assets/characters/mandirigma/2.png";
import mandirigma3 from "../assets/characters/mandirigma/3.png";
import mandirigma4 from "../assets/characters/mandirigma/4.png";
import mandirigma5 from "../assets/characters/mandirigma/5.png";
import mandirigma6 from "../assets/characters/mandirigma/6.png";
import mandirigma7 from "../assets/characters/mandirigma/7.png";
import mandirigma8 from "../assets/characters/mandirigma/8.png";



import mangkukulam1 from "../assets/characters/mangkukulam/1.png";
import mangkukulam2 from "../assets/characters/mangkukulam/2.png";
import mangkukulam3 from "../assets/characters/mangkukulam/3.png";
import mangkukulam4 from "../assets/characters/mangkukulam/4.png";
import mangkukulam5 from "../assets/characters/mangkukulam/5.png";
import mangkukulam6 from "../assets/characters/mangkukulam/6.png";


export const characterCards = [
  {
    name: "Albularyo",
    role: "Support / Healer",
    desc: "A keeper of ancient remedies and sacred rituals who protects the living from curses and unseen forces.",
    frames: [albularyo1, albularyo2, albularyo3, albularyo4, albularyo5, albularyo6, albularyo7],
    accent: "from-orange-700/20 to-transparent",
    tags: ["Heal", "Light Damage", "Buff"],
     spriteSize: "h-[125px] md:h-[145px]",
  },
  {
    name: "Mandirigma",
    role: "Frontline / Fighter",
    desc: "A fearless warrior who confronts darkness head-on and stands as the shield of the innocent.",
    frames: [mandirigma1, mandirigma2, mandirigma3, mandirigma4, mandirigma5, mandirigma6,mandirigma7,mandirigma8],
    accent: "from-red-700/20 to-transparent",
    tags: ["Melee", "Defense", "Taunt"],
     spriteSize: "h-[125px] md:h-[145px]",
  },
  {
    name: "Mangkukulam",
    role: "Magic / Risk",
    desc: "A wielder of forbidden power whose spells grow stronger as corruption slowly takes hold.",
    frames: [mangkukulam1, mangkukulam2, mangkukulam3,mangkukulam4, mangkukulam5, mangkukulam6],
    accent: "from-emerald-700/20 to-transparent",
    tags: ["Dark Magic", "AOE", "Corruption"],
    spriteSize: "h-[125px] md:h-[145px]",
  },
];