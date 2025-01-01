import { Course } from "@/types";
import { Category } from "@/enums";

const Courses: Course[] = [
  {
    id: 1,
    title: "Introduction to Web Development",
    AuthorId: 1,
    price: 29.99,
    featured: false,
    description:
      "Learn the basics of web development, from HTML to CSS and JavaScript. A perfect course for beginners looking to dive into web design and development.",
    lessons: [
      {
        unitTitle: "HTML Basics",
        lessons: [
          { lessonTitle: "Introduction to HTML", duration: "15 min" },
          { lessonTitle: "HTML Structure and Tags", duration: "20 min" },
        ],
      },
      {
        unitTitle: "CSS Fundamentals",
        lessons: [
          { lessonTitle: "Introduction to CSS", duration: "10 min" },
          { lessonTitle: "CSS Selectors and Styling", duration: "25 min" },
        ],
      },
      {
        unitTitle: "JavaScript Basics",
        lessons: [
          { lessonTitle: "Variables and Data Types", duration: "30 min" },
          { lessonTitle: "Functions and Loops", duration: "35 min" },
        ],
      },
    ],
    timeRequired: "3 hours",
    rating: 4.5,
    categories: [Category.WebDevelopment, Category.Beginner, Category.FrontEnd],
    image: require("../../assets/images/web-dev.webp"),
  },
  {
    id: 2,
    title: "Advanced Machine Learning",
    price: 99.99,
    AuthorId: 4,
    featured: true,
    description:
      "Take your machine learning skills to the next level with this in-depth course on advanced algorithms, neural networks, and deep learning.",
    lessons: [
      {
        unitTitle: "Neural Networks",
        lessons: [
          { lessonTitle: "Understanding Neural Networks", duration: "45 min" },
          { lessonTitle: "Backpropagation", duration: "50 min" },
        ],
      },
      {
        unitTitle: "Deep Learning Models",
        lessons: [
          { lessonTitle: "Convolutional Neural Networks", duration: "1 hour" },
          { lessonTitle: "Recurrent Neural Networks", duration: "1 hour" },
        ],
      },
      {
        unitTitle: "Optimization Techniques",
        lessons: [
          { lessonTitle: "Gradient Descent", duration: "30 min" },
          { lessonTitle: "Adam Optimizer", duration: "40 min" },
        ],
      },
    ],
    timeRequired: "10 hours",
    rating: 4.8,
    categories: [
      Category.MachineLearning,
      Category.Advanced,
      Category.AI,
      Category.DeepLearning,
    ],
    image: require("../../assets/images/advanced-ml.webp"),
  },
  {
    id: 3,
    title: "Photography for Beginners",
    price: 49.99,
    AuthorId: 2,
    featured: true,
    description:
      "Master the fundamentals of photography, learn to shoot with different lighting, and understand your camera settings to take stunning photos.",
    lessons: [
      {
        unitTitle: "Camera Basics",
        lessons: [
          { lessonTitle: "Understanding Your Camera", duration: "20 min" },
          { lessonTitle: "Choosing the Right Lens", duration: "25 min" },
        ],
      },
      {
        unitTitle: "Composition Techniques",
        lessons: [
          { lessonTitle: "Rule of Thirds", duration: "15 min" },
          { lessonTitle: "Leading Lines", duration: "20 min" },
        ],
      },
      {
        unitTitle: "Lighting and Exposure",
        lessons: [
          { lessonTitle: "Natural Lighting", duration: "30 min" },
          { lessonTitle: "Artificial Lighting", duration: "30 min" },
        ],
      },
    ],
    timeRequired: "5 hours",
    rating: 4.7,
    categories: [Category.Photography, Category.Beginner, Category.Creative],
    image: require("../../assets/images/web-dev.webp"),
  },
  {
    id: 4,
    title: "Complete Python Bootcamp",
    price: 39.99,
    AuthorId: 4,
    featured: false,
    description:
      "A comprehensive guide to learning Python programming. Start from the basics and progress to intermediate concepts like OOP and web development with Flask.",
    lessons: [
      {
        unitTitle: "Python Basics",
        lessons: [
          { lessonTitle: "Introduction to Python", duration: "20 min" },
          { lessonTitle: "Data Types and Variables", duration: "25 min" },
        ],
      },
      {
        unitTitle: "Intermediate Python",
        lessons: [
          { lessonTitle: "Loops and Conditionals", duration: "30 min" },
          { lessonTitle: "Functions and Modules", duration: "35 min" },
        ],
      },
      {
        unitTitle: "Advanced Python",
        lessons: [
          { lessonTitle: "Object-Oriented Programming", duration: "40 min" },
          { lessonTitle: "Web Development with Flask", duration: "50 min" },
        ],
      },
    ],
    timeRequired: "8 hours",
    rating: 4.9,
    categories: [Category.Python, Category.Beginner, Category.Intermediate],
    image: require("../../assets/images/python.webp"),
  },
  {
    id: 5,
    title: "Digital Marketing Masterclass",
    price: 79.99,
    AuthorId: 3,
    featured: false,
    description:
      "Learn the essential skills for becoming a digital marketing expert. From SEO to social media marketing, this course covers it all.",
    lessons: [
      {
        unitTitle: "Introduction to Digital Marketing",
        lessons: [
          { lessonTitle: "What is Digital Marketing?", duration: "20 min" },
          { lessonTitle: "Overview of Channels", duration: "25 min" },
        ],
      },
      {
        unitTitle: "SEO Fundamentals",
        lessons: [
          { lessonTitle: "Keyword Research", duration: "30 min" },
          { lessonTitle: "On-Page Optimization", duration: "35 min" },
        ],
      },
      {
        unitTitle: "Social Media Marketing",
        lessons: [
          { lessonTitle: "Creating Engaging Content", duration: "40 min" },
          {
            lessonTitle: "Paid Advertising on Social Media",
            duration: "45 min",
          },
        ],
      },
    ],
    timeRequired: "6 hours",
    rating: 4.6,
    categories: [
      Category.DigitalMarketing,
      Category.Business,
      Category.Beginner,
      Category.Intermediate,
    ],
    image: require("../../assets/images/marketing.webp"),
  },
];

export default Courses;
