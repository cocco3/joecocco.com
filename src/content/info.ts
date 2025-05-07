type Info = {
  name: string;
  title: string;
  about: string;
  email: string;
  location: string;
  links: Record<string, string>;
};

export const info: Info = {
  name: "Joe Cocco",
  title: "Software Developer / Front-end Engineer",
  about:
    "Passionate web developer with 18+ years of experience building beautifuyl scalable front-ends.",
  email: "cocco3@gmail.com",
  location: "San Francisco, CA",
  links: {
    github: "https://github.com/cocco3",
    linkedIn: "https://www.linkedin.com/in/joecocco",
  },
};
