import aswang1 from "../assets/characters/aswang/1.png";
import aswang2 from "../assets/characters/aswang/2.png";
import aswang3 from "../assets/characters/aswang/3.png";
import aswang4 from "../assets/characters/aswang/4.png";
import aswang5 from "../assets/characters/aswang/5.png";
import aswang6 from "../assets/characters/aswang/6.png";
import aswang7 from "../assets/characters/aswang/7.png";
import aswang8 from "../assets/characters/aswang/8.png";


import tikbalang1 from "../assets/characters/tikbalang/1.png";
import tikbalang2 from "../assets/characters/tikbalang/2.png";
import tikbalang3 from "../assets/characters/tikbalang/3.png";
import tikbalang4 from "../assets/characters/tikbalang/4.png";
import tikbalang5 from "../assets/characters/tikbalang/5.png";
import tikbalang6 from "../assets/characters/tikbalang/6.png";
import tikbalang7 from "../assets/characters/tikbalang/7.png";
import tikbalang8 from "../assets/characters/tikbalang/8.png";


import tiyanak1 from "../assets/characters/tiyanak/1.png";
import tiyanak2 from "../assets/characters/tiyanak/2.png";
import tiyanak3 from "../assets/characters/tiyanak/3.png";
import tiyanak4 from "../assets/characters/tiyanak/4.png";
import tiyanak5 from "../assets/characters/tiyanak/5.png";
import tiyanak6 from "../assets/characters/tiyanak/6.png";
import tiyanak7 from "../assets/characters/tiyanak/7.png";
import tiyanak8 from "../assets/characters/tiyanak/8.png";

import duwende1 from "../assets/characters/duwende/1.png";
import duwende2 from "../assets/characters/duwende/2.png";
import duwende3 from "../assets/characters/duwende/3.png";
import duwende4 from "../assets/characters/duwende/4.png";
import duwende5 from "../assets/characters/duwende/5.png";
import duwende6 from "../assets/characters/duwende/6.png";
import duwende7 from "../assets/characters/duwende/7.png";
import duwende8 from "../assets/characters/duwende/8.png";

import kapre1 from "../assets/characters/kapre/1.png";
import kapre2 from "../assets/characters/kapre/2.png";
import kapre3 from "../assets/characters/kapre/3.png";
import kapre4 from "../assets/characters/kapre/4.png";
import kapre5 from "../assets/characters/kapre/5.png";
import kapre6 from "../assets/characters/kapre/6.png";
import kapre7 from "../assets/characters/kapre/7.png";
import kapre8 from "../assets/characters/kapre/8.png";


import multo1 from "../assets/characters/multo/1.png";
import multo2 from "../assets/characters/multo/2.png";
import multo3 from "../assets/characters/multo/3.png";
import multo4 from "../assets/characters/multo/4.png";
import multo5 from "../assets/characters/multo/5.png";
import multo6 from "../assets/characters/multo/6.png";
import multo7 from "../assets/characters/multo/7.png";
import multo8 from "../assets/characters/multo/8.png";


export const enemyCards = [
  {
    name: "Multo",
    type: "Spirit",
    desc: "Born from whispered tales in remote barrios, the Aswang is feared as a flesh-eating creature that hides among ordinary people by day and hunts at night. It is said to prey on the weak and defenseless, moving in silence until its victim is already lost to terror.",
    frames: [multo1, multo2, multo3, multo4, multo5, multo6, multo7, multo8],
    accent: "from-red-700/20 to-transparent",
    tags: ["Shoots damage"],
    spriteSize: "h-[150px] md:h-[175px]",
  },
  {
    name: "Aswang",
    type: "Predator",
    desc: "Born from whispered tales in remote barrios, the Aswang is feared as a flesh-eating creature that hides among ordinary people by day and hunts at night. It is said to prey on the weak and defenseless, moving in silence until its victim is already lost to terror.",
    frames: [aswang1, aswang2, aswang3, aswang4, aswang5, aswang6, aswang7, aswang8],
    accent: "from-red-700/20 to-transparent",
    tags: ["Slash"],
    spriteSize: "h-[150px] md:h-[175px]",
  },
  {
    name: "Tikbalang",
    type: "Forest Monster/ Path Trickster",
    desc: "Legends tell of the Tikbalang as a towering half-horse being that guards the deep forest and delights in leading travelers astray. Those who wander into its domain are cursed to walk in circles, trapped in confusion until they lose their sense of direction and hope.",
    frames: [tikbalang1, tikbalang2, tikbalang3, tikbalang4, tikbalang5, tikbalang6, tikbalang7, tikbalang8],
    accent: "from-orange-700/20 to-transparent",
    tags: ["Speed, Tanky"],
    spriteSize: "h-[155px] md:h-[180px]",
  },
  {
    name: "Tiyanak",
    type: "Unborn Enemy",
    desc: "The Tiyanak is said to be the spirit of an unborn child or an infant denied peace, taking the form of a helpless baby to lure the compassionate. Its cries echo through the dark, but those who answer its call soon discover the monster hidden beneath its innocent disguise.",
    frames: [tiyanak1, tiyanak2, tiyanak3, tiyanak4, tiyanak5, tiyanak6, tiyanak7, tiyanak8],
    accent: "from-red-800/20 to-transparent",
    tags: ["Speed, Bleeding Act"],
    spriteSize: "h-[135px] md:h-[155px]",
  },
  {
    name: "Duwende",
    type: "Cursed",
    desc: "Deep in old lands and hidden corners dwell the Duwende, ancient beings tied to places humans often disturb without respect. Though small in form, they are known to curse those who trespass, bringing misfortune, sickness, or fear upon anyone who dares offend them.",
    frames: [duwende1, duwende2, duwende3, duwende4, duwende5, duwende6, duwende7, duwende8],
    accent: "from-cyan-700/20 to-transparent",
    tags: ["Speed, Silenced"],
    spriteSize: "h-[150px] md:h-[175px]",
  },
  {
    name: "Kapre",
    type: "Tree Guardian",
    desc: "The Kapre is a giant shadowy being said to dwell in ancient trees, watching over the forest with glowing eyes and the smoke of its ever-burning cigar. It is both guardian and terror, punishing intruders who enter its territory with arrogance or disrespect.",
    frames: [kapre1, kapre2, kapre3, kapre4, kapre5, kapre6, kapre7, kapre8],
    accent: "from-emerald-700/20 to-transparent",
    tags: ["Slow effect"],
    spriteSize: "h-[165px] md:h-[190px]",
  },
];