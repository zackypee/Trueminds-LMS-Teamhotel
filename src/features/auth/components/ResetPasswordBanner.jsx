import bannerImage from '../../../assets/reset-password-banner-image.png';

export const ResetPasswordBanner = () => {
  return (
    <div className="reset-password-banner w-[55%] border-1  " role='banner'>
        <div className="image-container  w-[576px] m-auto shadow-[0_40px_80px_0_#001C3B14]  mt-4">
            <img src={bannerImage} alt="banner image" className="banner-image  m-auto" />
        </div>
        <div className="text-container  w-[576px] m-auto ">
            <h1 className='reset-password-header w-[100%] m-auto text-[#001C3B] my-[30px_10px]'>Ensure optimal <span className="text-[#7C3AED]">security</span>.</h1>
            <p className='reset-password-paragraph w-[420.72px]' >Access high-end learning resources without a hassle..</p>
      </div>
    </div>
  );
};