
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Skill, PortfolioItem, BlogPost, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'Copywriting', percentage: 95 },
  { name: 'SEO Strategy', percentage: 88 },
  { name: 'Content Marketing', percentage: 92 },
  { name: 'Technical Writing', percentage: 85 },
  { name: 'Social Media Strategy', percentage: 80 },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: 'The Future of Remote Work',
    category: 'Digital Trends',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    description: 'In-depth analysis of how decentralized teams are reshaping corporate culture.'
  },
  {
    id: 2,
    title: 'Minimalist Lifestyle Guide',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800',
    description: 'A comprehensive journey into finding more by owning less.'
  },
  {
    id: 3,
    title: 'AI in Modern Journalism',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    description: 'Exploring the ethical implications of automated reporting.'
  },
  {
    id: 4,
    title: 'Eco-Friendly Travel Habits',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    description: 'Practical tips for reducing your carbon footprint while exploring the globe.'
  },
  {
    id: 5,
    title: 'Productivity Hacks for Writers',
    category: 'Professional',
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800',
    description: 'Science-backed methods to overcome writers block and hit deadlines.'
  },
  {
    id: 6,
    title: 'The Rise of Personal Branding',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
    description: 'Why your identity is your most valuable asset in the modern economy.'
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: '10 Secrets to Captivating Headlines',
    excerpt: 'Mastering the art of the click without resorting to clickbait strategies.',
    date: 'Oct 12, 2024',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=400',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Why Consistency Trumps Talent',
    excerpt: 'Building a writing habit that survives through burnout and lack of inspiration.',
    date: 'Nov 05, 2024',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=400',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'The Psychology of Storytelling',
    excerpt: 'How to use narrative structures to keep your readers glued to the screen.',
    date: 'Dec 20, 2024',
    image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=400',
    readTime: '10 min read'
  },
];

export const SOCIAL_LINKS = [
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com', label: 'Twitter' },
  { icon: <Github className="w-5 h-5" />, href: 'https://github.com', label: 'GitHub' },
];
