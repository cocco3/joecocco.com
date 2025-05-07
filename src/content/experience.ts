type Experience = Record<
  string,
  {
    name: string;
    dates: string;
    location: string;
    title: string;
    points: string[];
    tech: string[];
  }
>;

export const experience: Experience = {
  Cartavi: {
    name: "Cartavi",
    dates: "Jan 2010 – Apr 2013",
    location: "Chicago, IL",
    title: "Web Developer",
    tech: [".NET MVC", "jQuery"],
    points: [
      "Co-founded Cartavi with 5 others and acted as the sole front end engineer for three years before ultimately hiring three more front end developers.",
      "Designed and developed a web-based application to securely share and manage important documents for real estate professionals.",
    ],
  },
  GuaranteedRate: {
    name: "Guaranteed Rate",
    dates: "Feb 2011 – Oct 2012",
    location: "Chicago, IL",
    title: "Product Engineer",
    tech: [".NET MVC", "jQuery"],
    points: [
      "Designed and developed a web-based application using .NET MVC 3 to deliver a consumer friendly means of applying for a mortgage loan.",
      "Assisted in integrating four different external systems to bring a seamless and unified user experience to the customer, while still delivering an optimal experience during scheduled down-time.",
    ],
  },
  WestMonroe: {
    name: "West Monroe Partners",
    dates: "July 2007 – Feb 2011",
    location: "Chicago, IL",
    title: "Senior Integration Consultant",
    tech: [".NET MVC", "jQuery"],
    points: [
      "Assisted a team of 10 to rewrite a client's existing application from the ground up and served as the technical lead for all client-side code.",
      "Implemented and delivered two projects whose main focus was document management.",
    ],
  },
};
