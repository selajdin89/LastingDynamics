import {
  HomeIcon,
  PurpleBoxIcon,
  RedBoxIcon,
  SettingsIcon,
  TrelloIcon,
  YellowBoxIcon,
  YellowLogo,
} from "../assets/icons";

export const Tabs = [
  {
    id: "t1",
    initials: "LW",
    name: "LD Website",
    color: "#DB54FD",
  },
  {
    id: "t2",
    initials: "LW",
    name: "LD Website Marketing",
    color: "#61D26F",
  },
  {
    id: "t3",
    initials: "R",
    name: "Roundrush",
    color: "#1FAAE9",
  },
  {
    id: "t4",
    initials: "LW",
    name: "Roundrush Website",
    color: "#4086E0",
  },
  {
    id: "t5",
    initials: "M",
    name: "Marketing",
    color: "#7A6FEF",
  },
  {
    id: "t6",
    initials: "RDO",
    name: "Roundrush DevOps",
    color: "#EEC301",
  },
  {
    id: "t7",
    initials: "SL",
    name: "Social LD",
    color: "#61D26F",
  },
  {
    id: "t8",
    initials: "ML",
    name: "Machine Learning",
    color: "#FD612C",
  },
];

export const nestedList = [
  {
    id: "1",
    company: "Coraly",
    topics: [
      {
        topic: (
          <>
            <YellowBoxIcon />
            Coraly Tech & Dev
          </>
        ),
        id: "t1",
        initials: "C",
        name: "Coraly Tech & Dev",
        color: "#DB54FD",
        starColor: "yellow",
        todos: [
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "high",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
        ],
      },

      {
        topic: (
          <>
            <RedBoxIcon />
            Design Board
          </>
        ),
        id: "t2",
        initials: "DB",
        name: "Design Board",
        color: "#61D26F",
        todos: [
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "high",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
        ],
      },
      {
        topic: (
          <>
            <PurpleBoxIcon />
            Growth Hacking
          </>
        ),
        id: "t3",
        initials: "GH",
        name: "Growth Hacking",
        color: "#1FAAE9",
        todos: [
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "high",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    company: "Lasting Dynamics",
    topics: [
      {
        topic: (
          <>
            <YellowBoxIcon />
            Website
          </>
        ),
        id: "t4",
        initials: "LD",
        name: "Website",
        color: "#4086E0",
        todos: [
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "high",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "high",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
        ],
      },
      {
        topic: (
          <>
            <RedBoxIcon />
            Growth Hacking
          </>
        ),
        id: "t5",
        initials: "M",
        name: "Marketing",
        color: "#7A6FEF",
        todos: [
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "high",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "high",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
        ],
      },
      {
        topic: (
          <>
            <PurpleBoxIcon />
            UI/UX Design
          </>
        ),
        id: "t6",
        initials: "RDO",
        name: "Roundrush DevOps",
        color: "#EEC301",
        todos: [
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "high",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "medium",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "low",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    company: "Vetrina Live",

    topics: [
      {
        topic: (
          <>
            <YellowBoxIcon />
            VL - Tech & Dev
          </>
        ),
        id: "t7",
        initials: "RDO",
        name: "Roundrush DevOps",
        color: "#61D26F",
        todos: [
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "high",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
          {
            todo: "Certe, inquam pertinax non intell....",
            priority: "urgent",
            status: "done",
          },
        ],
      },

      {
        topic: (
          <>
            <RedBoxIcon />
            VL - Growth Hacking
          </>
        ),
        id: "t8",
        initials: "RDO",
        name: "Roundrush DevOps",
        color: "#FD612C",
        todos: [],
      },
    ],
  },
];

export const Todos = [
  {
    todo: "Certe, inquam pertinax non intell....",
    priority: "urgent",
    status: "done",
  },
  {
    todo: "Certe, inquam pertinax non intell....",
    priority: "high",
    status: "done",
  },
  {
    todo: "Certe, inquam pertinax non intell....",
    priority: "urgent",
    status: "done",
  },
  {
    todo: "Certe, inquam pertinax non intell....",
    priority: "urgent",
    status: "done",
  },
  {
    todo: "Certe, inquam pertinax non intell....",
    priority: "urgent",
    status: "done",
  },
  {
    todo: "Certe, inquam pertinax non intell....",
    priority: "urgent",
    status: "done",
  },
  {
    todo: "Certe, inquam pertinax non intell....",
    priority: "urgent",
    status: "done",
  },
];

export const top5Songs = [
  { label: "Organise" },
  { label: "Joha" },
  { label: "Terminator" },
  { label: "Dull" },
  { label: "Nzaza" },
];
