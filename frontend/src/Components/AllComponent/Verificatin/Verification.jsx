import React, { useState, useEffect } from 'react';
import './verification.css';

const Verification = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        } else {
            setIsDisabled(false);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleResendOTP = () => {
        setIsDisabled(true);
        setTimer(180); // 3 minutes = 180 seconds
        // Add your resend OTP logic here
    };

    return (
        <div className="mx-auto border border-[#FFAB2D] rounded-[15px] max-w-[15rem] md:max-w-xs lg:max-w-sm mt-20 bg-[rgba(21,25,42,0.5)]">
            <form className="shadow-md px-4 py-6 rounded-[15px]">
                <div className="flex justify-center gap-2 mb-6">
                    <input className="w-10 md:w-11 lg:w-12 h-10 md:h-11 lg:h-12 text-center border rounded-md shadow-sm focus:border-[#ffab2d33] focus:ring-[#ffab2d33]" type="text" maxLength="1" pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                    <input className="w-10 md:w-11 lg:w-12 h-10 md:h-11 lg:h-12 text-center border rounded-md shadow-sm focus:border-[#ffab2d33] focus:ring-[#ffab2d33]" type="text" maxLength="1" pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                    <input className="w-10 md:w-11 lg:w-12 h-10 md:h-11 lg:h-12 text-center border rounded-md shadow-sm focus:border-[#ffab2d33] focus:ring-[#ffab2d33]" type="text" maxLength="1" pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                    <input className="w-10 md:w-11 lg:w-12 h-10 md:h-11 lg:h-12 text-center border rounded-md shadow-sm focus:border-[#ffab2d33] focus:ring-[#ffab2d33]" type="text" maxLength="1" pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                </div>
                <div className="flex items-center justify-center">
                    <button className="btnverify" type="submit">
                        Verify
                    </button>
                    <button
                        className="inline-block align-baseline font-bold text-[0.8em] lg:text-[1em] md:text-[0.9em] text-[#FFAB2D] hover:text-[#F1543F]"
                        onClick={handleResendOTP}
                        disabled={isDisabled}
                    >
                        {isDisabled ? `Resend OTP in ${timer}s` : 'Resend OTP'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Verification;

