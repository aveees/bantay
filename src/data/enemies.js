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


import manananggal1 from "../assets/characters/manananggal/1.png";
import manananggal2 from "../assets/characters/manananggal/2.png";
import manananggal3 from "../assets/characters/manananggal/3.png";
import manananggal4 from "../assets/characters/manananggal/4.png";
import manananggal5 from "../assets/characters/manananggal/5.png";
import manananggal6 from "../assets/characters/manananggal/6.png";
import manananggal7 from "../assets/characters/manananggal/7.png";
import manananggal8 from "../assets/characters/manananggal/8.png";


export const enemyCards = [
  {
    name: "Aswang",
    type: "Predator / Night Stalker",
    desc: "A silent predator that hunts under cover of darkness and strikes when fear is strongest.",
    frames: [aswang1, aswang2, aswang3,aswang4,aswang5, aswang6, aswang7, aswang8],
    accent: "from-red-700/20 to-transparent",
    tags: ["Stealth", "Night", "Ambush"],
    spriteSize: "h-[150px] md:h-[175px]",
  },
  {
    name: "Tikbalang",
    type: "Trickster / Path Twister",
    desc: "A towering creature that confuses travelers and bends the path into endless wandering.",
    frames: [tikbalang1, tikbalang2, tikbalang3,tikbalang4, tikbalang5, tikbalang6, tikbalang7, tikbalang8],
    accent: "from-orange-700/20 to-transparent",
    tags: ["Confuse", "Speed", "Fear"],
    spriteSize: "h-[155px] md:h-[180px]",
  },
  {
    name: "Tiyanak",
    type: "Lure / Ambush",
    desc: "A deceptive creature whose cries attract the innocent before it attacks.",
    frames: [tiyanak1, tiyanak2, tiyanak3],tiyanak4,tiyanak5, tiyanak6, tiyanak7, tiyanak8,
    accent: "from-red-800/20 to-transparent",
    tags: ["Lure", "Burst", "Savage"],
    spriteSize: "h-[135px] md:h-[155px]",
  },
  {
    name: "Duwende",
    type: "Control / Illusion",
    desc: "A haunting entity of the waters whose voice drags victims closer to doom.",
    frames: [duwende1, duwende2, duwende3, duwende4, duwende5, duwende6, duwende7, duwende8],
    accent: "from-cyan-700/20 to-transparent",
    tags: ["Charm", "Water", "Control"],
    spriteSize: "h-[150px] md:h-[175px]",
  },
  {
    name: "Kapre",
    type: "Tank / Terror",
    desc: "A giant smoking spirit that looms over the forest and overwhelms intruders with brute force.",
    frames: [kapre1, kapre2, kapre3,kapre4, kapre5, kapre6, kapre7, kapre8],
    accent: "from-emerald-700/20 to-transparent",
    tags: ["Tank", "Smoke", "Fear"],
    spriteSize: "h-[165px] md:h-[190px]",
  },
  {
    name: "Manananggal",
    type: "Specter / Haunt",
    desc: "A ghostly presence that appears in silence and fills the area with dread and confusion.",
    frames: [manananggal1, manananggal2, manananggal3,manananggal4, manananggal5, manananggal6, manananggal7, manananggal8],
    accent: "from-slate-400/20 to-transparent",
    tags: ["Haunt", "Fear", "Phase"],
    spriteSize: "h-[150px] md:h-[175px]",
  },
 
];