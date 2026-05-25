export type MissionStatus =
  | "featured"
  | "live"
  | "distinction"
  | "capstone"
  | "professional"
  | "archived";

export interface MissionStat {
  value: string;
  label: string;
}

export interface MissionStep {
  key: string;
  body: string;
}

export interface MissionLink {
  label: string;
  href: string;
  primary?: boolean;
}

export interface Mission {
  slug: string;
  number: string; // "M_01"
  title: string;
  titleItalic: string; // the italicised tail of the title
  year: string;
  context: string; // "RMIT Programming Project", "Personal project"
  status: MissionStatus;
  difficulty: 1 | 2 | 3 | 4 | 5;
  summary: string;
  problem: string;
  approach: string;
  steps: MissionStep[];
  lesson?: { title: string; body: string };
  stats: MissionStat[];
  stack: string[];
  links?: MissionLink[];
  featuredOnHome: boolean;
}
