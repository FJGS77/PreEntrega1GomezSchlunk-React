import Logo from "../assets/Logo.svg";

const LogoChef = () => {
  return (
    <>
      <div className="grid grid-cols-1">
        <img src={Logo} alt="Chef" />
        <h1 className="text-center text-white italic pb-2">Little Chef</h1>
      </div>
    </>
  );
};

export default LogoChef;
