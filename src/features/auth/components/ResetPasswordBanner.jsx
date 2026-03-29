import bannerImage from '../../../assets/reset-password-banner-image.png';

export const ResetPasswordBanner = () => {
  return (
    <div className="reset-password-banner" role='banner'>
        <div className="image-container">
            <img src={bannerImage} alt="banner image" />
        </div>
      <h1>Ensure optimal security.</h1>
      <p>Access high-end learning resources without a hassle..</p>
    </div>
  );
};