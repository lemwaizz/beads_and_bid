import { PrismaClient } from "@prisma/client";
// import orders from "./products_seed.ts";
// import subs from "./subscriptions_seed.ts";
interface Product {
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  short_description: string;
}

const orders: Product[] = [
  {
    name: "Ocean Glow Bead",
    category: "bead",
    price: 5993,
    image: "bead1.jpg",
    description:
      "A translucent blue bead inspired by the calming waves of the ocean, perfect for beach-themed jewelry.",
    short_description: "Translucent blue ocean-inspired bead.",
  },
  {
    name: "Sunset Amber Bead",
    category: "bead",
    price: 6495,
    image: "bead2.jpg",
    description:
      "Warm amber hues capture the essence of a sunset, adding a golden touch to your designs.",
    short_description: "Golden amber bead reflecting sunset hues.",
  },
  {
    name: "Emerald Essence Bead",
    category: "bead",
    price: 7999,
    image: "bead3.jpg",
    description:
      "A vibrant green bead symbolizing renewal and vitality, ideal for nature-inspired creations.",
    short_description: "Vibrant green bead for natural designs.",
  },
  {
    name: "Twilight Spark Bead",
    category: "bead",
    price: 8290,
    image: "bead4.jpg",
    description:
      "Deep purple with subtle sparkles, this bead is perfect for evening wear or mystical themes.",
    short_description: "Deep purple bead with sparkling accents.",
  },
  {
    name: "Crystal Frost Bead",
    category: "bead",
    price: 4990,
    image: "bead5.jpg",
    description:
      "A clear bead with a frosty finish, ideal for adding a touch of winter elegance.",
    short_description: "Clear frosted bead with a wintry vibe.",
  },
  {
    name: "Golden Horizon Bead",
    category: "bead",
    price: 9493,
    image: "bead6.jpg",
    description:
      "Shimmering gold tones reminiscent of the morning sun, a luxurious choice for statement pieces.",
    short_description: "Shimmering gold bead for luxury designs.",
  },
  {
    name: "Ruby Bloom Bead",
    category: "bead",
    price: 8755,
    image: "bead7.jpg",
    description:
      "A deep red bead with floral accents, perfect for romantic or vintage-inspired jewelry.",
    short_description: "Deep red bead with floral detailing.",
  },
  {
    name: "Azure Sky Bead",
    category: "bead",
    price: 5026,
    image: "bead8.jpg",
    description:
      "Bright blue like the midday sky, this bead brings clarity and brightness to your designs.",
    short_description: "Bright blue bead inspired by the sky.",
  },
  {
    name: "Citrine Glow Bead",
    category: "bead",
    price: 6890,
    image: "bead9.jpg",
    description:
      "Radiant yellow with a touch of sparkle, perfect for sunny and cheerful creations.",
    short_description: "Radiant yellow bead with sparkle.",
  },
  {
    name: "Onyx Midnight Bead",
    category: "bead",
    price: 725,
    image: "bead10.jpg",
    description:
      "A sleek black bead with a glossy finish, ideal for adding drama to any design.",
    short_description: "Sleek black bead with a glossy finish.",
  },
  {
    name: "Rose Quartz Bead",
    category: "bead",
    price: 6196,
    image: "bead11.jpg",
    description:
      "Soft pink with a subtle shine, this bead represents love and compassion.",
    short_description: "Soft pink bead symbolizing love.",
  },
  {
    name: "Tropical Wave Bead",
    category: "bead",
    price: 7551,
    image: "bead12.jpg",
    description:
      "A swirl of turquoise and white that evokes the beauty of tropical beaches.",
    short_description: "Turquoise and white swirl bead.",
  },
  {
    name: "Mystic Amethyst Bead",
    category: "bead",
    price: 899,
    image: "bead13.jpg",
    description:
      "Rich purple hues with a mystical glow, ideal for spiritual or elegant designs.",
    short_description: "Rich purple bead with a mystical glow.",
  },
  {
    name: "Sapphire Shine Bead",
    category: "bead",
    price: 9296,
    image: "bead14.jpg",
    description:
      "A deep blue bead with a glossy shine, perfect for royal or classic designs.",
    short_description: "Deep blue bead with a royal shine.",
  },
  {
    name: "Carnelian Flame Bead",
    category: "bead",
    price: 6793,
    image: "bead15.jpg",
    description:
      "Vibrant orange-red that adds warmth and energy to your creations.",
    short_description: "Vibrant orange-red bead for warmth.",
  },
  {
    name: "Pearl Glow Bead",
    category: "bead",
    price: 5996,
    image: "bead16.jpg",
    description:
      "A classic white bead with a pearlescent finish, perfect for timeless elegance.",
    short_description: "Classic white bead with pearlescent shine.",
  },
  {
    name: "Lavender Mist Bead",
    category: "bead",
    price: 6299,
    image: "bead17.jpg",
    description:
      "Soft lavender hues for a calming and serene touch to your designs.",
    short_description: "Soft lavender bead for a serene vibe.",
  },
  {
    name: "Jade Harmony Bead",
    category: "bead",
    price: 7990,
    image: "bead18.jpg",
    description:
      "A rich green bead symbolizing harmony and balance, ideal for nature-themed pieces.",
    short_description: "Rich green bead for harmony.",
  },
  {
    name: "Coral Reef Bead",
    category: "bead",
    price: 649,
    image: "bead19.jpg",
    description:
      "A vibrant coral bead inspired by underwater treasures, perfect for oceanic themes.",
    short_description: "Vibrant coral bead with oceanic vibes.",
  },
  {
    name: "Smoky Quartz Bead",
    category: "bead",
    price: 740,
    image: "bead20.jpg",
    description:
      "A smoky grey bead with subtle shine, ideal for earthy or neutral designs.",
    short_description: "Smoky grey bead with earthy tones.",
  },
];

const subs = [
  {
    id: 1,
    name: "Master",
    price: 2000,
    duration: 30,
  },
  {
    id: 2,
    name: "Kiongoss",
    price: 5000,
    duration: 30,
  },
  {
    id: 3,
    name: "Bazu",
    price: 10000,
    duration: 30,
  },
];

export const trainers_seed = [
  {
    name: "Sarah Wanjiru",
    phone_number: "0722-789-1234",
    email: "sarahwanjiru@example.com",
    location: "Nyeri, Kenya",
    bio: "Passionate and dedicated swimming instructor with 5 years of experience. Specializing in children and adults.",
    services_offered: [
      "Swimming Lessons",
      "Water Safety Training",
      "Competitive Coaching",
    ],
    availability: "Tuesday, Thursday, Sunday, 3:00 PM - 7:00 PM",
    rates: "KES 1,500 per session",
    credentials: ["Certified Swim Instructor", "First Aid and CPR Certified"],
    experience: "5 years",
    reviews: [
      {
        client_name: "John Mwangi",
        review:
          "Sarah is an amazing instructor! My son learned to swim confidently within a few months.",
      },
      {
        client_name: "Jane Kamau",
        review:
          "Sarah's water safety training was invaluable. I feel much more prepared to keep my family safe around water.",
      },
    ],
  },
  {
    name: "Jane Doe",
    phone_number: "123-456-7890",
    email: "janedoe@example.com",
    location: "Nairobi, Kenya",
    bio: "Certified personal trainer with 5 years of experience specializing in strength training and weight loss.",
    services_offered: ["Personal Training", "Group Fitness"],
    availability: "Monday to Friday, 8:00 AM - 6:00 PM",
    rates: "KES 5,000 per hour",
    credentials: ["NASM Certified Personal Trainer"],
    experience: "5 years",
    reviews: [
      {
        client_name: "John Smith",
        review:
          "Jane is an amazing trainer! She helped me achieve my fitness goals.",
      },
      {
        client_name: "Emily Johnson",
        review: "Highly recommend Jane for anyone looking to get in shape.",
      },
    ],
  },
  {
    name: "Alice Johnson",
    phone_number: "555-123-4567",
    email: "alicejohnson@example.com",
    location: "Kisumu, Kenya",
    bio: "Certified yoga instructor passionate about helping clients find balance and strength through yoga practice.",
    services_offered: ["Yoga Classes", "Meditation Sessions"],
    availability: "Tuesday and Thursday evenings, Saturday mornings",
    rates: "KES 4,000 per hour",
    credentials: ["RYT-200 Yoga Alliance Certified"],
    experience: "6 years",
    reviews: [
      {
        client_name: "Emma Brown",
        review:
          "Alice's yoga classes are rejuvenating. I always leave feeling refreshed and relaxed.",
      },
      {
        client_name: "Michael Clark",
        review:
          "I appreciate Alice's attention to detail in correcting poses. She's helped me improve my practice.",
      },
    ],
  },
  {
    name: "John Smith",
    phone_number: "987-654-3210",
    email: "johnsmith@example.com",
    location: "Mombasa, Kenya",
    bio: "Experienced fitness coach specializing in HIIT and circuit training.",
    services_offered: ["Personal Training", "Online Coaching"],
    availability: "Flexible schedule, contact for availability",
    rates: "KES 6,000 per hour",
    credentials: ["ACE Certified Personal Trainer", "CrossFit Level 2 Trainer"],
    experience: "8 years",
    reviews: [
      {
        client_name: "Sarah Johnson",
        review:
          "John is an excellent trainer. He pushes you to your limits while keeping the workouts fun.",
      },
      {
        client_name: "David Williams",
        review:
          "I've seen significant improvements in my fitness level since training with John.",
      },
    ],
  },
  {
    name: "David Ngugi",
    phone_number: "123-789-4560",
    email: "davidngugi@example.com",
    location: "Eldoret, Kenya",
    bio: "Experienced athletics coach specializing in track and field events. Former national champion.",
    services_offered: ["Athletics Coaching", "Speed Training"],
    availability: "Monday to Saturday, 6:00 AM - 12:00 PM",
    rates: "KES 7,000 per hour",
    credentials: ["Former National Champion in Track and Field"],
    experience: "12 years",
    reviews: [
      {
        client_name: "Grace Muthoni",
        review:
          "David's training methods are effective. I've seen significant improvements in my sprint times.",
      },
      {
        client_name: "Peter Kipchoge",
        review:
          "Training with David has been a game-changer for me. His expertise is unmatched.",
      },
    ],
  },
  {
    name: "Sarah Wanjiru",
    phone_number: "0722-789-1234",
    email: "sarahwanjiru@example.com",
    location: "Nyeri, Kenya",
    bio: "Passionate and dedicated swimming instructor with 5 years of experience. Specializing in children and adults.",
    services_offered: [
      "Swimming Lessons",
      "Water Safety Training",
      "Competitive Coaching",
    ],
    availability: "Tuesday, Thursday, Sunday, 3:00 PM - 7:00 PM",
    rates: "KES 1,500 per session",
    credentials: ["Certified Swim Instructor", "First Aid and CPR Certified"],
    experience: "5 years",
    reviews: [
      {
        client_name: "John Mwangi",
        review:
          "Sarah is an amazing instructor! My son learned to swim confidently within a few months.",
      },
      {
        client_name: "Jane Kamau",
        review:
          "Sarah's water safety training was invaluable. I feel much more prepared to keep my family safe around water.",
      },
    ],
  },
  {
    name: "Juma Mohammed",
    phone_number: "0733-456-2198",
    email: "jumamohammed@example.com",
    location: "Malindi, Kenya",
    bio: "Skilled and experienced tour guide with a deep knowledge of Kenyan history and culture. Offering personalized tours for individuals and groups.",
    services_offered: ["Day Tours", "Safaris", "Cultural Experiences"],
    availability: "Monday to Saturday, 8:00 AM - 6:00 PM",
    rates: "KES 5,000 per person per day",
    credentials: ["Certified Tour Guide", "First Aid and CPR Certified"],
    experience: "8 years",
    reviews: [
      {
        client_name: "Alice Walker",
        review:
          "Juma is an amazing guide! He showed us all the hidden gems of Malindi and made our trip unforgettable.",
      },
      {
        client_name: "Michael Jackson",
        review:
          "Juma's safari was incredible! We saw all the Big Five and learned so much about Kenyan wildlife.",
      },
    ],
  },
  {
    name: "Aisha Ahmed",
    phone_number: "0700-123-4567",
    email: "aishahamed@example.com",
    location: "Kisumu, Kenya",
    bio: "Creative and talented graphic designer with a passion for branding and illustration. Offering a wide range of design services for businesses and individuals.",
    services_offered: ["Logo Design", "Branding", "Web Design", "Illustration"],
    availability: "Monday to Friday, 9:00 AM - 5:00 PM",
    rates: "KES 2,500 per hour",
    credentials: [
      "Bachelor of Arts in Graphic Design",
      "Member of the Kenya Graphic Designers Association",
    ],
    experience: "3 years",
    reviews: [
      {
        client_name: "John Doe",
        review:
          "Aisha is a fantastic designer! She created a beautiful and effective logo for my business.",
      },
      {
        client_name: "Jane Doe",
        review:
          "Aisha helped me redesign my website and it looks amazing! She is very creative and easy to work with.",
      },
    ],
  },
  {
    name: "Abdi Hassan",
    phone_number: "0711-987-4567",
    email: "abdihassan@example.com",
    location: "Mombasa, Kenya",
    bio: "Talented Swahili language tutor with over 10 years of experience. Offering personalized lessons for all levels.",
    services_offered: [
      "Swahili Language Lessons",
      "Conversational Swahili",
      "Business Swahili",
    ],
    availability: "Monday, Wednesday, Friday, 10:00 AM - 2:00 PM",
    rates: "KES 2,000 per hour",
    credentials: ["Master's Degree in Linguistics", "TESOL Certified"],
    experience: "10+ years",
    reviews: [
      {
        client_name: "Mary Smith",
        review:
          "Abdi is an excellent teacher! He made learning Swahili fun and engaging.",
      },
      {
        client_name: "David Jones",
        review:
          "Abdi helped me improve my business Swahili significantly. Now I feel confident communicating with my clients.",
      },
    ],
  },
];

const prisma = new PrismaClient();

async function main() {
  const subscriptionTiers = await prisma.subscriptionTier.createMany({
    data: subs.map((sub) => ({
      id: sub.id,
      name: sub.name,
      duration: sub.duration,
      price: sub.price,
    })),
  });
  const products = await prisma.product.createMany({
    data: orders.map((order) => ({
      name: order.name,
      shortDesc: order.short_description,
      description: order.description,
      image: order.image,
      category: order.category as any,
      price: order.price,
    })),
  });

  const trainersData = await prisma.trainer.createMany({
    data: trainers_seed.map((trainer) => ({
      name: trainer.name,
      phoneNumber: trainer.phone_number,
      email: trainer.email,
      location: trainer.location,
      bio: trainer.bio,
      servicesOffered: trainer.services_offered,
      availability: trainer.availability,
      rates: trainer.rates,
      credentials: trainer.credentials,
      experience: trainer.experience,
    })),
  });

  console.log({ products, subscriptionTiers, trainersData });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
