export const TOP_NAV_DISCOVER_NAME = Object.freeze({
  NEWS: "News",
  DISCUSSIONS: "Discussions",
  JOBS: "Jobs",
  EVENTS: "Events",
  PODCASTS: "Podcasts",
  MARKETPLACE: "Marketplace",
  COURSES: "Courses",
  RESOURCES: "Resources",
});

export const TOP_NAV_MENTORS_NAME = Object.freeze({
  OUR_MENTORS: "Our Mentors",
  BECOME_A_MENTOR: "Become a Mentor",
  CODE_OF_CONDUCT: "Code of Conduct",
});


export const TOP_NAV_LEARN_MORE_NAME = Object.freeze({
  OUR_PLATFORM: "Our Platform",
  ABOUT: "About Us",
  OUR_DONORS: "Our Donors",
  PARTNERSHIPS: "Partnerships",
  GET_INVOLVED: "Get Involved",
  DONATE: "Donate",
  FAQ: "FAQ",
  SHOP_GEAR: "Shop Gear",
  CONTACT: "Contact"
});
export const TOP_NAV_DISCOVER_SCHEME = Object.freeze([
  {name: TOP_NAV_DISCOVER_NAME.DISCUSSIONS, to: "/discuss"},
  {name: TOP_NAV_DISCOVER_NAME.JOBS, to: "/jobs"},
  {name: TOP_NAV_DISCOVER_NAME.PODCASTS, to: "/podcasts"},
]);

export const TOP_NAV_MENTORS_SCHEME = Object.freeze([
  {name: TOP_NAV_MENTORS_NAME.OUR_MENTORS, to: "/our-mentors"},
  {name: TOP_NAV_MENTORS_NAME.BECOME_A_MENTOR, to: "/join"},
  {name: TOP_NAV_MENTORS_NAME.CODE_OF_CONDUCT, to: "/legal/code-of-conduct"},
]);

export const TOP_NAV_LEARN_MORE_SCHEME = Object.freeze([
  {name: TOP_NAV_LEARN_MORE_NAME.ABOUT, to: "/about"},
  {name: TOP_NAV_LEARN_MORE_NAME.OUR_DONORS, to: "/our-donors"},
  {name: TOP_NAV_LEARN_MORE_NAME.GET_INVOLVED, to: "/get-involved"},
  {name: TOP_NAV_LEARN_MORE_NAME.DONATE, to: "/donate"},
  {name: TOP_NAV_LEARN_MORE_NAME.SHOP_GEAR, to: "http://shop.designed.org", external: true},
  {name: TOP_NAV_LEARN_MORE_NAME.CONTACT, to: "/contact"},
]);
