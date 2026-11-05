import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';

export const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  '.NET',
  'C#',
  'PHP',
  'Laravel',
  'Python',
  'SQL',
  'REST APIs',
  'Git',
];

export const projects = [
  {
    title: 'URL Shortener Service',
    description:
      'A robust URL shortening backend featuring duplicate link detection, custom aliases, and TTL-based expiration handling.',
    tags: ['NestJS', 'MongoDB', 'Mongoose', 'REST API'],
    icon: StorageIcon,
    link: "https://github.com/guidopj/url-shortener"
  },
  {
    title: 'Kafka Demo',
    description:
      'Event-driven architecture demo using Apache Kafka and .NET. Implements message production and consumption with multiple consumers, consumer groups, partitions and offsets, orchestrated with Docker Compose.',
    tags: ['.NET 10', 'Apache Kafka', 'Docker', 'C#', 'Microservices'],
    icon: StorageIcon,
    link: 'https://github.com/guidopj/kafka-demo',
},
];
