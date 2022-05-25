// TODO: PLS IMPROVE THIS; OAUTH 2.0.

const registerLinkedIn = async () => {
  // https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin%2Fcontext&tabs=HTTPS

  const currentHost = window.location.origin;

  const config = {
    client_id: '78pctji9v7v9at',
    redirect_uri: currentHost + '/signin', // CHANGE TO WORK ON PROD
  };
  const linkedinRedirectUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${config.client_id}&redirect_uri=${config.redirect_uri}&scope=r_emailaddress,r_liteprofile`;

  const openPopUp = () => {
    window.location.href = linkedinRedirectUrl;
  };

  openPopUp();
};

export default registerLinkedIn;
