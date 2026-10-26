import company1 from "../assets/LogoBanner/logo1.svg";
import company2 from "../assets/LogoBanner/logo2.svg";
import company3 from "../assets/LogoBanner/logo3.svg";
import company4 from "../assets/LogoBanner/logo4.svg";

import thumbsUp from "../assets/features/thumbs-up.svg";
import branch from "../assets/features/branch.svg";
import flag from "../assets/features/flag.svg";
import globe from "../assets/features/globe.svg";
import graphicCircle from "../assets/features/graphic-circle.svg";
import hash from "../assets/features/hash.svg";

import individualPlan from "../assets/pricing/individual-plan.svg";
import teamPlan from "../assets/pricing/team-plan.svg";
import enterprisePlan from "../assets/pricing/enterprise-plan.svg";

export const navLinks = [
  {
    title: "Features",
    href: "#features",
  },

  {
    title: "Pricing",
    href: "#pricing",
  },

  {
    title: "FAQs",
    href: "#faqs",
  },

  {
    title: "Support",
    href: "#support",
  },
];

export const companys = [
  company1,
  company2,
  company3,
  company4,
  company1,
  company2,
  company3,
  company4,
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    testimonial:
      "The real-time synchronization and AI-powered organization have made our workflow more efficient than ever.",
  },
  {
    id: 2,
    name: "Michael Chen",
    testimonial:
      "This platform has transformed how our team collaborates. Everything is organized, accessible, and easy to share.",
  },
  {
    id: 3,
    name: "Emily Davis",
    testimonial:
      "I love how effortlessly I can capture ideas, manage notes, and collaborate with my colleagues in one place.",
  },
  {
    id: 4,
    name: "James Wilson",
    testimonial:
      "The intuitive interface and powerful features have helped our team save time and stay focused on what matters.",
  },
  {
    id: 5,
    name: "Olivia Martinez",
    testimonial:
      "Managing projects has never been easier. This tool keeps all our information organized and our team connected.",
  },
  {
    id: 6,
    name: "Daniel Thompson",
    testimonial:
      "The AI-powered features help us find information quickly and turn scattered ideas into actionable plans.",
  },
  {
    id: 7,
    name: "Sophia Anderson",
    testimonial:
      "Our productivity has improved significantly since we started using this platform. It makes teamwork feel seamless.",
  },
  {
    id: 8,
    name: "David Robinson",
    testimonial:
      "A reliable and flexible solution that simplifies our daily workflow and keeps everyone on the same page.",
  },
  {
    id: 9,
    name: "Isabella Taylor",
    testimonial:
      "I can organize my thoughts, share feedback, and work with my team without constantly switching between applications.",
  },
  {
    id: 10,
    name: "William Brown",
    testimonial:
      "This platform combines simplicity with powerful collaboration tools. It has become an essential part of our team's workflow.",
  },
];

export const features = [
  {
    id: 1,
    title: "Cross-Platform Accessibility",
    description:
      "Whether you're on your desktop, tablet, or smartphone, SmartNotes is accessible across all devices. Work seamlessly on the go and never miss a beat.",
    iconSrc: thumbsUp,
  },
  {
    id: 2,
    title: "Customizable Templates",
    description:
      "Create custom templates for your recurring tasks or projects to save time and ensure consistency. Tailor SmartNotes to fit your unique workflow and preferences.",
    iconSrc: globe,
  },
  {
    id: 3,
    title: "Secure Cloud Storage",
    description:
      "Rest easy knowing that your notes are securely stored in the cloud. Access your information from any device, anytime, without worrying about losing important data.",
    iconSrc: flag,
  },
  {
    id: 4,
    title: "Real-Time Collaboration",
    description:
      "Collaborate seamlessly with your team members or classmates in real-time on shared notes and projects.",
    iconSrc: graphicCircle,
  },
  {
    id: 5,
    title: "AI-Powered Organization",
    description:
      "Our AI-powered organization feature categorizes and prioritizes your notes, making it easy to find what you need when you need it.",
    iconSrc: hash,
  },
  {
    id: 6,
    title: "Integrations",
    description:
      "Connect SmartNotes with your favorite productivity tools like Google Drive, Trello, and Slack. Streamline your workflow by syncing data across platforms and enhancing collaboration.",
    iconSrc: branch,
  },
];

export const pricing = [
  {
    id: 1,
    planName: "Individual Plan",
    price: {
      monthly: "$9.99",
      yearly: "$99.99",
    },
    offers: [
      "Real-time collaboration",
      "AI-powered organization",
      "Customizable templates",
      "5GB cloud storage",
      "Basic integrations",
    ],
    iconSrc: individualPlan,
  },
  {
    id: 2,
    planName: "Team Plan",
    price: {
      monthly: "$19.99",
      yearly: "$199.99",
    },
    offers: [
      "Everything in the Individual Plan",
      "Unlimited cloud storage",
      "Advanced integrations",
      "Team management and permissions",
      "Shared templates and note libraries",
    ],
    iconSrc: teamPlan,
  },
  {
    id: 3,
    planName: "Enterprise Plan",
    price: {
      monthly: "Custom",
      yearly: "Custom",
    },
    offers: [
      "Everything in the Team Plan",
      "Dedicated account manager",
      "Enterprise-grade security",
      "Customized onboarding",
      "Advanced analytics",
    ],
    iconSrc: enterprisePlan,
  },
];

export const faqs = [
  {
    id: 1,
    question: "Who is SmartNotes designed for?",
    answer:
      "SmartNotes is designed for students, professionals, teams, and anyone who wants to organise their ideas and information more effectively. Whether you're taking class notes, preparing for meetings, or managing everyday tasks, SmartNotes helps keep everything organised in one place.",
  },
  {
    id: 2,
    question: "How do I get started with SmartNotes?",
    answer:
      "Getting started is simple. Create an account, explore the dashboard, and start creating your first notes. You can organise your notes into categories, customise your workspace, and discover features that help you build a note-taking routine that works for you.",
  },
  {
    id: 3,
    question: "Can I organise my notes into categories?",
    answer:
      "Yes! SmartNotes helps you keep your information organised by grouping notes into categories or folders. This makes it easier to find specific information, separate personal notes from work or study materials, and keep your workspace tidy as your collection grows.",
  },
  {
    id: 4,
    question: "What is SmartNotes?",
    answer:
      "SmartNotes is a simple and intuitive note-taking platform that helps you capture ideas, organise information, and keep track of important details. It provides a central place for your notes, helping you stay organised and access the information you need without unnecessary clutter.",
  },
  {
    id: 5,
    question: "How much does SmartNotes cost?",
    answer:
      "SmartNotes offers flexible pricing options to suit different needs. You can choose a monthly plan for greater flexibility or a yearly plan for better long-term value. Explore the pricing section on our website to compare available plans and find the option that works best for you.",
  },
];
