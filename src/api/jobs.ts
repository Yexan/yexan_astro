export interface JobType {
	company: string;
	date: string;
	imageName: string;
  websiteUrl: string;
}

export const jobs: JobType[] = [
  {
    company: "Rosemood",
    date: "10/2018 - 12/2023",
    imageName: "rosemood.svg",
    websiteUrl: "https://www.rosemood.fr/"
  },
  {
    company: "Cheerz",
    date: "10/2015 - 01/2018",
    imageName: "cheerz.png",
    websiteUrl: "https://www.cheerz.com/"
  },
  {
    company: "20 degrés à l'ombre",
    date: "10/2014 - 01/2017",
    imageName: "20degres.png",
    websiteUrl: "https://www.facebook.com/20degresalombre/"
  },
  {
    company: "Groupe OnePoint",
    date: "02/2013 - 09/2014",
    imageName: "onepoint.png",
    websiteUrl: "https://www.groupeonepoint.com/"
  },
  {
    company: "Zone Rouge",
    date: "10/2012 - 12/2012",
    imageName: "zonerouge.png",
    websiteUrl: "https://www.zonerouge.fr/"
  },
  {
    company: "L’atelier de la creation",
    date: "04/2012 - 08/2012",
    imageName: "ateliercreation.png",
    websiteUrl: "https://www.atelierdelacreation.com/"
  }
]
