export interface BannerProps {
  text: string;
}

export function Banner({ text }: BannerProps) {
  return <header>{text}</header>;
}

export default Banner;
