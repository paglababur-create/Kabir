
export interface Skill {
  name: string;
  percentage: number;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readTime: string;
}

export interface NavItem {
  label: string;
  href: string;
}
