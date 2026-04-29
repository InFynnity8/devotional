export interface Devotional {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  topic: string;
}

export const devotionals: Devotional[] = [
  {
    id: "1",
    title: "Walking in Faith, Not Sight",
    slug: "walking-in-faith",
    excerpt: "Discovering what it means to trust the path you cannot see.",
    content: "Faith is the substance of things hoped for, the evidence of things not seen. In our daily lives, we are often confronted with situations that seem insurmountable. We look at the circumstances around us and feel overwhelmed. However, true faith requires us to look beyond the physical and trust in the spiritual promises given to us.\n\nWhen you walk by faith, you acknowledge that there is a higher purpose at play. It means taking a step forward even when you don't know where your foot will land. Today, challenge yourself to release the need for absolute certainty and embrace the peace that comes from trusting in divine guidance.",
    date: "2026-04-28",
    topic: "Faith"
  },
  {
    id: "2",
    title: "The Power of Patient Endurance",
    slug: "power-of-patience",
    excerpt: "Why waiting is often the most important part of the journey.",
    content: "Patience is rarely easy. In a world that demands instant gratification, waiting can feel like a punishment. Yet, many of life's most profound lessons are learned not in the achieving, but in the waiting.\n\nEndurance builds character. It refines our desires and aligns our hearts with a slower, more intentional rhythm. When you find yourself in a season of waiting, try not to rush the process. Let the quiet moments teach you resilience. Remember that a tree with deep roots can withstand any storm, and deep roots take time to grow.",
    date: "2026-04-27",
    topic: "Patience"
  },
  {
    id: "3",
    title: "Abounding in Grace",
    slug: "abounding-in-grace",
    excerpt: "Learning to give and receive unmerited favor in our daily interactions.",
    content: "Grace is a gift we neither earn nor deserve. It is the unmerited favor that covers our imperfections and allows us to start anew. We often find it easier to accept grace from above than to extend it to ourselves or to those around us.\n\nTo abound in grace means to make it the default posture of your heart. When someone wrongs you, respond with grace. When you make a mistake, forgive yourself with grace. By creating a culture of grace in your own life, you become a beacon of light in a world that is often quick to judge.",
    date: "2026-04-26",
    topic: "Grace"
  },
  {
    id: "4",
    title: "Finding Peace in the Storm",
    slug: "peace-in-the-storm",
    excerpt: "Maintaining an inner calm when everything around you is chaotic.",
    content: "Storms are an inevitable part of life. They come in the form of unexpected news, difficult relationships, or sudden loss. While we cannot always control the storms that rage around us, we can control the atmosphere within us.\n\nPeace is not the absence of trouble, but the presence of calm amidst it. Cultivate peace by anchoring your thoughts on things that are true and steadfast. Take a deep breath, ground yourself in the present moment, and trust that this storm, too, shall pass. You are stronger than the winds that try to shake you.",
    date: "2026-04-25",
    topic: "Peace"
  }
];

export function getDevotionalBySlug(slug: string): Devotional | undefined {
  return devotionals.find((devotional) => devotional.slug === slug);
}
