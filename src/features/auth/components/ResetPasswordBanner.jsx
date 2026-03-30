import bannerImage from '../../../assets/reset-password-banner-image.png';

export const ResetPasswordBanner = () => { 
  return (
    <div className="reset-password-banner bg-[#FFFFFF] w-full min-[900px]:w-[50%]  lg:w-[55%]  " role='banner'>
      <div className="
        image-container
        w-[90%]
        max-w-[576px]
        rounded-[16px]
        mx-auto
        shadow-[0_10px_15px_0_#001C3B14]
        min-[500px]:h-[400px]
        lg:shadow-[0_40px_40px_0_#001C3B14]
        mt-4"
      >
        <img src={bannerImage} alt="banner image" className="banner-image w-full m-auto min-[500px]:h-full min-[500px]:w-[400px] "/>
      </div>
      <div className="text-container font-[Inter] tracking-normal hidden w-[90%] max-w-[576px] mx-auto min-[900px]:block  m-auto mt-[30px]  ">
        <h1 className='reset-password-header font-extrabold leading-[52.8px]  w-[100%] m-auto text-[#001C3B] mb-[10px] text-[clamp(1.5rem,3.5vw,2.5rem)] lg:text-[clamp(30px,4vw,48px)]'>Ensure optimal <span className="text-[#7C3AED]">security</span></h1>
        <p className='reset-password-paragraph font-normal text-[18px] leading-[29.25px] w-[90%] lg:w-[420.72px]' >Access high-end learning resources without a hassle..</p>
      </div>
    </div>
  );
};