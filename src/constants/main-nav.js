// Icons for menu items
import networking from "../icon/app-nav/network.svg"
import discuss from "../icon/app-nav/discuss.svg"
import jobs from "../icon/app-nav/career.svg"
import events from "../icon/app-nav/events.svg"
import podcast from "../icon/app-nav/podcast.svg"
import courses from "../icon/app-nav/learn.svg"
import equip from "../icon/app-nav/equip.svg"
import resources from "../icon/app-nav/resources.svg"
import updates from "../icon/app-nav/updates.svg"
import news from "../icon/app-nav/news.svg"

export const MENU_NAME = Object.freeze({
  DISCUSS: "Discuss",
  JOBS: "Jobs",
  EVENTS: "Events",
  PODCASTS: "Podcasts",
  COURSES: "Courses",
  EQUIP: "Equip",
  NEWS: "News",
  RESOURCES: "Resources",
  UPDATES: "Updates",
});

export const MENU_SCHEME = Object.freeze([
  {name: MENU_NAME.DISCUSS, to: "/discuss", img: discuss},
  {name: MENU_NAME.JOBS, to: "/jobs", img: jobs},
  {name: MENU_NAME.EVENTS, to: "/events", img: events},
  {name: MENU_NAME.PODCASTS, to: "/podcasts", img: podcast},
  {name: MENU_NAME.COURSES, to: "/courses", img: courses},
  {name: MENU_NAME.EQUIP, to: "/equip", img: equip},
  {name: MENU_NAME.NEWS, to: "/News", img: news},
  {name: MENU_NAME.RESOURCES, to: "#", img: resources},
  {name: MENU_NAME.UPDATES, to: "/app/updates", img: updates},
]);
