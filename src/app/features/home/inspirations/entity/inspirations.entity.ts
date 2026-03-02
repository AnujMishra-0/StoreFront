export interface InspirationCardEntity {
  id: number;
  title: string;
  imageUrl: string;
  isBgDark: boolean;
  targetUrl: string;
}

export interface InspirationHeaderEntity {
  title: string;
  description: string;
  buttonText: string;
  buttonTargetUrl: string;
}
