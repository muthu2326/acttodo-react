import Card from "./Card";

const CardContainer = () => {
  return (
    <div className="flex justify-between gap-7 flex-wrap my-5">
      <Card bgColor={'#8272DA'} title={'23°'} subtitle={'Benagluru'} />
      <Card bgColor={'#FD6663'} title={30} subtitle={'December'} />
      <Card bgColor={'#FCA201'} title={'Built using'} subtitle={'React'} />
    </div>
  );
};

export default CardContainer;
