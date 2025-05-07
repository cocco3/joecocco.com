type Experience = Record<
  string,
  {
    name: string;
    dates: string;
    title: string;
    points: string[];
  }
>;

export const experience: Experience = {
  DocuSign: {
    name: "DocuSign",
    dates: "2022",
    title: "Title",
    points: ["point 1", "point 2"],
  },
};
