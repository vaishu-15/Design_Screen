export const IMAGES = {
    cross: require("../../assets/images/cross.png"),
    profilePic: require("../../assets/images/profilePic.png"),
    send: require("../../assets/images/arrow.png"),
    play: require("../../assets/images/play.png"),
    pause: require("../../assets/images/pause.png"),
}

export const FONTS ={
    interRegular:'Inter-Regular',
    interSemi: 'Inter-SemiBold',
    interThin:'Inter-Thin',
    interBlack:'Inter_Black',
    interBold:'Inter-Bold',
    interExtraB:'Inter-ExtraBold',
    interExtraL:'Inter-ExtraLight',
    interLight:'Inter-Light',
    interMedium:'Inter-Medium'
}

export const COLORS = {
    dGreen:'#4B9460',
    green: '#5DB075',
    grey: '#BDBDBD',
    darkGrey:'#C4C4C4',
    dGrey:'#666666',
    lGrey:'#E8E8E8',
    bGrey:'#F0F0F0',
    white:'#ffffff',
    lWhite:'#F6F6F6',
    black:'#000000',
    yellow:'#FFB84E',
    blue:'#262483'
  }

  export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // export const password = (password) =>{
  // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={};':"|,.<>?`~[\]\\\/-]).{8,}$/;
// }
