//I am changing the image links from firebase to amazon, firebase has issues with these direct links. Please remember to add the amazon link(that will show up at the error) instead of firebase at the cofig for it to work out.

export const packages = [
  {
    id: "64a654593e91b8e73a351e9b",
    name: "MONGOLIAN ODYSSEY",
    description: "Short description",
    price: 2999,
    category: "Activity",
    inStock: true,
    images: [
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: "/image/aylal.jpg",
      },
      {
        color: "Gray",
        colorCode: "#808080",
        image: "/image/aylal.jpg",
      },
    ],
    reviews: [],
  },
  {
    id: "64a4ebe300900d44bb50628a",
    name: "IKHNART ROCKS WILDERNESS GER CAMP",
    description:
      "PERFECT STROKE KEYS - Spherically-dished keys match the shape of your fingertips, offering satisfying feedback with every tap\nCOMFORT AND STABILITY - Type with confidence on a keyboard crafted for comfort, stability, and precision",
    price: 102.99,
    category: "classic",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "/image/aylal.jpg",
      },
    ],
    reviews: [
      {
        id: "64a65a6158b470c6e06959ee",
        userId: "6475af156bad4917456e6e1e",
        packageId: "64a4ebe300900d44bb50628a",
        rating: 5,
        comment: "good",
        createdDate: "2023-07-06T06:08:33.067Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image: "/image/aylal.jpg",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "648437b38c44d52b9542e340",
    name: "SOUTH GOBI",
    description:
      'The package is refurbished, fully functional, and in excellent condition. Backed by the 90-day E~Shop Renewed Guarantee.\n- This pre-owned package has been professionally inspected, tested and cleaned by Amazon qualified vendors. It is not certified by Apple.\n- This package is in "Excellent condition". The screen and body show no signs of cosmetic damage visible from 12 inches away.\n- This package will have a battery that exceeds 80% capacity relative to new.\n- Accessories may not be original, but will be compatible and fully functional. Package may come in generic box.\n- Package will come with a SIM removal tool, a charger and a charging cable. Headphone and SIM card are not included.\n- This package is eligible for a replacement or refund within 90-day of receipt if it does not work as expected.\n- Refurbished phones are not guaranteed to be waterproof.',
    price: 40,
    category: "classic",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "/image/aylal.jpg",
      },
      {
        color: "Blue",
        colorCode: " #0000FF",
        image: "/image/aylal.jpg",
      },
      {
        color: "Red",
        colorCode: "#FF0000",
        image: "/image/aylal.jpg",
      },
    ],
    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        packageId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image: "/image/aylal.jpg",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        packageId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image: "/image/aylal.jpg",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "64a4e9e77e7299078334019f",
    name: "ALTAI MOUNTAIN RIDE",
    description:
      "Cross computer control: Game changing capacity to navigate seamlessly on 3 computers, and copy paste text, images, and files from 1 to the other using Logitech flow\nDual connectivity: Use with upto 3 Windows or Mac computers via included Unifying receiver or Bluetooth Smart wireless technology. Gesture button- Yes",
    price: 70,
    brand: "logitech",
    category: "Horseback",
    inStock: true,
    images: [
      {
        color: "Graphite",
        colorCode: " #383838",
        image: "/image/aylal.jpg",
      },
    ],
    reviews: [],
  },
  {
    id: "649d775128b6744f0f497040",
    name: "ALTAI MOUNTAINS, GREAT LAKES AND SANDS",
    description:
      'Bluetooth Call and Message Reminder: The smart watch is equipped with HD speaker, after connecting to your phone via Bluetooth, you can directly use the smartwatches to answer or make calls, read messages, store contacts, view call history. The smartwatch can set up more message notifications in "GloryFit" APP. You will never miss any calls and messages during meetings, workout and riding.',
    price: 50,
    brand: "Nerunsa",
    category: "Western Mongolia",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "/image/aylal.jpg",
      },
      {
        color: "Silver",
        colorCode: "#C0C0C0",
        image: "/image/aylal.jpg",
      },
    ],
    reviews: [],
  },
];
