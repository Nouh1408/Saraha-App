/**
 * 
 * @param {*} expireTime - in milliesecons
 * @returns object {otp,otpExpire}
 */
export const generateOtp = (expireTime = 15*60*1000)=>{
     const otp = Math.floor(Math.random() * 1000000 + 10000);
    const otpExpire = Date.now() + expireTime;
    return {otp,otpExpire}
}