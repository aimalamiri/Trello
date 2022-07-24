import { CardContainer } from './styles';

type CardPorps = {
  title: string;
  id: string;
};

export const Card = ({ title }: CardPorps) => {
  return <CardContainer>{title}</CardContainer>;
};
