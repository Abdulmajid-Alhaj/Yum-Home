import './Hero.css';

function Hero() {
  return (
    <div className="container">
      <div className="left-section">
        <p className=" text-white text-[52px]">Are you Hungry?</p>
        <h1>Don’t Wait!</h1>
        <p className=" text-[#F1543F] text-[32px] pb-10">Let's start order food now</p>
        <button className="menu-button">See the Menu →</button>
      </div>
      <div className="right-section">
      <img src={'./images/food.png'} alt="food" />
      </div>
    </div>
  );
}

export default Hero;
