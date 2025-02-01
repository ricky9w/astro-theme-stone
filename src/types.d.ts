export interface Service {
  step: string;
  name: string;
  description: string;
}

export interface ServicesProps {
  title: string;
  services: Service[];
}

export interface AboutProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface CtaProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface Testimonial {
  name: string;
  description: string;
  image: string;
  message: string;
}

export interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
}

export interface ExpertiseFeature {
  id: string;
  name: string;
  description: string;
}

export interface ExpertiseProps {
  title: string;
  features: ExpertiseFeature[];
}

export interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface HeadingProps {
  title: string;
  subtitle?: string;
}

export interface MissionStat {
  name: string;
  value: string;
}

export interface MissionProps {
  title: string;
  description: string[];
  stats: MissionStat[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface TeamMember {
  name: string;
  image: string;
  job: string;
}

export interface TeamProps {
  title: string;
  team: TeamMember[];
}

export interface Value {
  ref: string;
  name: string;
  description: string;
}

export interface ValuesProps {
  title: string;
  values: Value[][]
}