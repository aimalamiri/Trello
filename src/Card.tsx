import { CardContainer } from './styles';

type CardPorps = {
  title: string;
};

export const Card = ({ title }: CardPorps) => {
  return <CardContainer>{title}</CardContainer>;
};
