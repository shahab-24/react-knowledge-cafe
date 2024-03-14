import profile from '../images/profile.png'

const Header = () => {
  return (
    <div>
       <h1 className='text-4xl font-bold'>KnowLedge Cafe</h1>
      <img src={profile.png} alt="" />
    </div>
  );
};

export default Header;