export interface NetworkType {
	networkName: string;
	networkImage: string;
	networkLink: string;
  nickname: string;
}

export const networks: NetworkType[] = [
  {
    networkName: "Codepen",
    networkImage: "codepen.png",
    networkLink: "https://codepen.io/Yexan/",
    nickname: "Yexan"
  },
  {
    networkName: "Github",
    networkImage: "github.png",
    networkLink: "https://github.com/Yexan/",
    nickname: "Yexan"
  },
  {
    networkName: "LinkedIn",
    networkImage: "linkedin.png",
    networkLink: "https://www.linkedin.com/in/adrienmartinet/",
    nickname: "adrienmartinet"
  }
]
