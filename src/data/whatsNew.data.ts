export type WhatsNewPost = {
  author: string;
  time: string;
  title: string;
  image: string;
};

export const posts: WhatsNewPost[] = [
  {
    author: "Ray Saddiq",
    time: "3 mins",
    title: "Rise at Seven Appoints Hollie Lowell as Senior Operations Lead",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=900&auto=format&fit=crop",
  },
  {
    author: "Sarah Malik",
    time: "5 mins",
    title: "Rise at Seven announces new search-first strategy for global brands",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=900&auto=format&fit=crop",
  },
  {
    author: "Tom Wilson",
    time: "7 mins",
    title: "How content, search and social are changing brand discovery",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop",
  },
];