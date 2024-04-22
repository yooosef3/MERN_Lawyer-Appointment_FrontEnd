import bank from "@/public/images/home-page/bank.jpg.webp";
import blog1 from "@/public/images/home-page/blog1.jpg.webp";
import blog2 from "@/public/images/home-page/blog2.jpg.webp";
import blog3 from "@/public/images/home-page/blog3.jpg.webp";
import blog_1 from "@/public/images/blogs/blog1.jpg.webp";
import blog_2 from "@/public/images/blogs/blog2.jpg.webp";
import blog_3 from "@/public/images/blogs/blog3.jpg.webp";
import blog_4 from "@/public/images/blogs/blog4.jpg.webp";
import blog_5 from "@/public/images/blogs/blog5.jpg.webp";
import blog_6 from "@/public/images/blogs/blog6.jpg.webp";
import criminal from "@/public/images/home-page/criminal.jpg.webp";
import family from "@/public/images/home-page/family.jpg.webp";
import injury from "@/public/images/home-page/injury.jpg.webp";
import law1 from "@/public/images/coverage/kisspng-family-law-lawyer.png";
import law10 from "@/public/images/coverage/Sexual+offenses.png";
import law2 from "@/public/images/coverage/business-law.jpg";
import law3 from "@/public/images/coverage/insurance.png";
import law4 from "@/public/images/coverage/criminal-law.png";
import law5 from "@/public/images/coverage/law-house.jpg";
import law6 from "@/public/images/coverage/employment-law.jpg";
import law7 from "@/public/images/coverage/accident.jpeg";
import law8 from "@/public/images/coverage/financial-law.jpg";
import law9 from "@/public/images/coverage/DrugLaw.png";
import person1 from "@/public/images/home-page/person_1.jpg.webp";
import person2 from "@/public/images/home-page/person_2.jpg.webp";
import person3 from "@/public/images/home-page/person_1.jpg.webp";
import person4 from "@/public/images/home-page/person_3.jpg.webp";
import person5 from "@/public/images/home-page/person_1.jpg.webp";
import person6 from "@/public/images/home-page/person_2.jpg.webp";
import person_1 from '@/public/images/blogs/person_1.jpg.webp'

const HEADER_ITEMS = [
  { id: 1, label: "خانه", route: "/" },
  { id: 2, label: "درباره", route: "/about" },
  { id: 3, label: "وکلا", route: "/lawyers" },
  { id: 4, label: "موارد تحت پوشش", route: "/coverage" },
  { id: 5, label: "بلاگ", route: "/blogs" },
  { id: 6, label: "تماس با ما", route: "/contact" }
];

const SERVICES = [
  {
    id: 1,
    label: "مبارزه برای عدالت",
    text: "عدالت خواهی در دنیا وقتی این دعوت را دنبال می کنیم یک سرمایه گذاری احساسی و قابل توجه است.",
  },
  {
    id: 2,
    label: "بهترین مورد استراتژی",
    text: "عدالت خواهی در دنیا وقتی این دعوت را دنبال می کنیم یک سرمایه گذاری احساسی و قابل توجه است.",
  },
  {
    id: 3,
    label: "وکیل با تجربه",
    text: "عدالت خواهی در دنیا وقتی این دعوت را دنبال می کنیم یک سرمایه گذاری احساسی و قابل توجه است.",
  },
];

const EXPERIENCE_TABS = [
  {
    id: 1,
    title: "ماموریت ما",
    text: "خیلی دور، پشت کلمه کوه ها، دور از کشورهای ایران و غنا متون کور زندگی می کنند. آنها جدا از هم در وسیع درست در ساحل زیبا زندگی می کنند، یک اقیانوس زبان بزرگ. خیلی دور، پشت کلمه کوه ها، دور از کشورهای ایران و غنا متون کور زندگی می کنند. آنها جدا از هم در وسیع درست در ساحل زیبا زندگی می کنند، یک اقیانوس زبان بزرگ.",
    label: "mission",
  },
  {
    id: 2,
    title: "دیدگاه ما",
    text: "خیلی دور، پشت کلمه کوه ها، دور از کشورهای ایران و غنا متون کور زندگی می کنند. آنها جدا از هم در وسیع درست در ساحل زیبا زندگی می کنند، یک اقیانوس زبان بزرگ. خیلی دور، پشت کلمه کوه ها، دور از کشورهای ایران و غنا متون کور زندگی می کنند. آنها جدا از هم در وسیع درست در ساحل زیبا زندگی می کنند، یک اقیانوس زبان بزرگ.",
    label: "vision",
  },
  {
    id: 3,
    title: "ارزش ما",
    text: "خیلی دور، پشت کلمه کوه ها، دور از کشورهای ایران و غنا متون کور زندگی می کنند. آنها جدا از هم در وسیع درست در ساحل زیبا زندگی می کنند، یک اقیانوس زبان بزرگ. خیلی دور، پشت کلمه کوه ها، دور از کشورهای ایران و غنا متون کور زندگی می کنند. آنها جدا از هم در وسیع درست در ساحل زیبا زندگی می کنند، یک اقیانوس زبان بزرگ.",
    label: "value",
  },
];

const COVERAGE = [
  {
    id: 1,
    title: "بانک و مالی",
    text: "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    image: bank,
  },
  {
    id: 2,
    title: "صدمات شخصی",
    text: "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    image: injury,
  },
  {
    id: 3,
    title: "قانون خانواده",
    text: "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    image: family,
  },
  {
    id: 4,
    title: "قانون کیفری",
    text: "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    image: criminal,
  },
];

const REVIEWS = [
  {
    id: 1,
    role: "برنامه نویس",
    name: "نادر ولی",
    text: "عالی بودین, اخیرا از یکی از وکلای شما استفاده کردم که واقعا هم از لحاظ اخلاق و هم از نظر دانش در سطح بالایی بودن,  موفق باشین.",
    image: person1,
  },
  {
    id: 2,
    role: "برنامه نویس",
    name: "علی راد",
    text: "عالی بودین, اخیرا از یکی از وکلای شما استفاده کردم که واقعا هم از لحاظ اخلاق و هم از نظر دانش در سطح بالایی بودن,  موفق باشین.",
    image: person2,
  },
  {
    id: 3,
    role: "برنامه نویس",
    name: "ستار زارع",
    text: "عالی بودین, اخیرا از یکی از وکلای شما استفاده کردم که واقعا هم از لحاظ اخلاق و هم از نظر دانش در سطح بالایی بودن,  موفق باشین.",
    image: person3,
  },
  {
    id: 4,
    role: "برنامه نویس",
    name: "زانیار خرم",
    text: "عالی بودین, اخیرا از یکی از وکلای شما استفاده کردم که واقعا هم از لحاظ اخلاق و هم از نظر دانش در سطح بالایی بودن,  موفق باشین.",
    image: person4,
  },
  {
    id: 5,
    role: "برنامه نویس",
    name: "سام سرابی",
    text: "عالی بودین, اخیرا از یکی از وکلای شما استفاده کردم که واقعا هم از لحاظ اخلاق و هم از نظر دانش در سطح بالایی بودن,  موفق باشین.",
    image: person5,
  },
  {
    id: 6,
    role: "برنامه نویس",
    name: "شهرام بام",
    text: "عالی بودین, اخیرا از یکی از وکلای شما استفاده کردم که واقعا هم از لحاظ اخلاق و هم از نظر دانش در سطح بالایی بودن,  موفق باشین.",
    image: person6,
  },
];

const BLOGS = [
  {
    id: 1,
    title: "حوزه های اصلی تمرین این شرکت شامل نیروی دریایی است",
    summary:
      "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    text: "عالی بودین, اخیرا از یکی از وکلای شما استفاده کردم که واقعا هم از لحاظ اخلاق و هم از نظر دانش در سطح بالایی بودن,  موفق باشین.",
    image: blog1,
  },
  {
    id: 2,
    title: "حوزه های اصلی تمرین این شرکت شامل نیروی دریایی است",
    summary:
      "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    text: "عالی بودین, اخیرا از یکی از وکلای شما استفاده کردم که واقعا هم از لحاظ اخلاق و هم از نظر دانش در سطح بالایی بودن,  موفق باشین.",
    image: blog2,
  },
  {
    id: 3,
    title: "حوزه های اصلی تمرین این شرکت شامل نیروی دریایی است",
    summary:
      "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    text: "عالی بودین, اخیرا از یکی از وکلای شما استفاده کردم که واقعا هم از لحاظ اخلاق و هم از نظر دانش در سطح بالایی بودن,  موفق باشین.",
    image: blog3,
  },
  {
    id: 4,
    title: "حوزه های اصلی تمرین این شرکت شامل نیروی دریایی است",
    summary:
      "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    text: "عالی بودین, اخیرا از یکی از وکلای شما استفاده کردم که واقعا هم از لحاظ اخلاق و هم از نظر دانش در سطح بالایی بودن,  موفق باشین.",
    image: blog1,
  },
  {
    id: 5,
    title: "حوزه های اصلی تمرین این شرکت شامل نیروی دریایی است",
    summary:
      "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    text: "عالی بودین, اخیرا از یکی از وکلای شما استفاده کردم که واقعا هم از لحاظ اخلاق و هم از نظر دانش در سطح بالایی بودن,  موفق باشین.",
    image: blog2,
  },
  {
    id: 6,
    title: "حوزه های اصلی تمرین این شرکت شامل نیروی دریایی است",
    summary:
      "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    text: "عالی بودین, اخیرا از یکی از وکلای شما استفاده کردم که واقعا هم از لحاظ اخلاق و هم از نظر دانش در سطح بالایی بودن,  موفق باشین.",
    image: blog3,
  },
];

const STATICS = [
  { id: 1, value: 18000, label: "کل موکلان" },
  { id: 2, value: 1000, label: "موکلان راضی" },
  { id: 3, value: 1230, label: "موارد حل شده" },
  { id: 4, value: 800, label: "موارد موفق" },
];

const AREAS = [
  { id: 1, label: "قانون خانواده" },
  { id: 2, label: "قانون تجارت" },
  { id: 3, label: "قانون بیمه" },
  { id: 4, label: "قانون جنایی" },
  { id: 5, label: "قانون استخدام" },
  { id: 6, label: "قانون املاک" },
];
const SKILLS_LIST = [
  { id: 1, slug: 'migration', label: "مهاجرت" },
  { id: 2, slug: 'insurance', label: "بیمه" },
  { id: 3, slug: 'international', label: "بین الملل" },
  { id: 4, slug: 'divorce', label: "طلاق" },
  { id: 5, slug: 'stolen', label: "سرقت" },
  { id: 6, slug: 'attack', label: "تعرض" },
  { id: 7, slug: 'inheritage', label: "وراثت" },
  { id: 8, slug: 'contact', label: "قرارداد" },
  { id: 9, slug: 'employee', label: "استخدام" },
]
const COVERAGE_OPTIONS = [
  {
    id: 1,
    name: "قانون خانواده",
    info: "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    image: law1,
  },
  {
    id: 2,
    name: "قانون کسب و کار",
    info: "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    image: law2,
  },
  {
    id: 3,
    name: "قانون بیمه",
    info: "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    image: law3,
  },
  {
    id: 4,
    name: "قانون کیفری",
    info: "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    image: law4,
  },
  {
    id: 5,
    name: "قانون اموال",
    info: "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    image: law5,
  },
  {
    id: 6,
    name: "قانون کار",
    info: "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    image: law6,
  },
  {
    id: 7,
    name: "حادثه آتش سوزی",
    info: "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    image: law7,
  },
  {
    id: 8,
    name: "قانون مالی",
    info: "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    image: law8,
  },
  {
    id: 9,
    name: "جرایم مواد مخدر",
    info: "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    image: law9,
  },
  {
    id: 10,
    name: "جرایم جنسی",
    info: "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    image: law10,
  },
];

const BLOGS_ITEMS = [
  {
    id: 1,
    summary: "حتی «اشاره‌گر» توانا هیچ کنترلی در مورد متون کور ندارد",
    info: "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    image: blog_1,
    time: '02/05/24',
    comments: [
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
  ]
  },
  {
    id: 2,
    summary: "حتی «اشاره‌گر» توانا هیچ کنترلی در مورد متون کور ندارد",
    info: "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    image: blog_2,
    time: '02/05/24',
    comments: [
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
  ]
  },
  {
    id: 3,
    summary: "حتی «اشاره‌گر» توانا هیچ کنترلی در مورد متون کور ندارد ",
    info: "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    image: blog_3,
    time: '02/05/24',
    comments: [
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
  ]
  },
  {
    id: 4,
    summary: "حتی «اشاره‌گر» توانا هیچ کنترلی در مورد متون کور ندارد",
    info: "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    image: blog_4,
    time: '02/05/24',
    comments: [
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
  ]
  },
  {
    id: 5,
    summary: "حتی «اشاره‌گر» توانا هیچ کنترلی در مورد متون کور ندارد",
    info: "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    image: blog_5,
    time: '02/05/24',
    comments: [
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
  ]
  },
  {
    id: 6,
    summary: "حتی «اشاره‌گر» توانا هیچ کنترلی در مورد متون کور ندارد",
    info: "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند.",
    image: blog_6,
    time: '02/05/24',
    comments: [
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
      {id:1, name: 'علی اکبری',text: 'بسیار عالی بود', image: person_1, time: '22 آذر 1402 13:30'},
  ]
  },
];

export const getHeaderItems = () => {
  return HEADER_ITEMS;
};

export const getServices = () => {
  return SERVICES;
};

export const getTabs = () => {
  return EXPERIENCE_TABS;
};

export const getCoverage = () => {
  return COVERAGE;
};

export const getReviews = () => {
  return REVIEWS;
};

export const get_ITEMS = () => {
  return BLOGS;
};

export const getStatics = () => {
  return STATICS;
};

export const getAreas = () => {
  return AREAS;
};

export const getOptions = () => {
  return COVERAGE_OPTIONS;
};

export const getBlogs = () => {
  return BLOGS_ITEMS;
};

export const getSkills = () => {
  return SKILLS_LIST;
};
