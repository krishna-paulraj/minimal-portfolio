interface Props {
  children: React.ReactNode;
}
const Contanier = ({ children }: Props) => {
  return <div className="mx-auto max-w-3xl px-5 pt-16 border border-gray-200">{children}</div>;
};

export default Contanier;
