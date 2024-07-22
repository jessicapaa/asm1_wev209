import React from "react";

type Props = {};

const FeedBack = (props: Props) => {
    return (
        <>
            <div className="container pt-[60px] pb-[100px]">
                <div className="feedBack_title ml-[140px]">
                    <h2 className="title_1 text-[#505F4E] font-bold text-[40px] tracking-[1.05px] capitalize">
                        Etwas abonnieren
                    </h2>
                    <br />
                    <h2 className="title_2 text-[#505F4E] ml-[100px] font-bold text-[40px] tracking-[1.05px] capitalize">
                        Unser Newsletter
                    </h2>
                </div>
                <div className="feedback_content flex mt-[50px] ml-[200px]">
                    <p className="max-w-[238px] text-[#555] font-medium leading-[22px]">
                        Get weekly update about our product on your email, no
                        spam guaranteed we promise ✌️
                    </p>
                    <form
                        autoComplete="off"
                        className="ml-[90px] flex relative justify-center bg-white items-center w-[500px] h-[60px] p-3"
                    >
                        <div className="mail w-12 h-10 bg-[#f8f8f8] flex items-center justify-center ">
                            <img src="/assets/img/mail.png" alt="" />
                        </div>
                        <input
                            className="w-full h-full outline-none border-none mx-5"
                            type="email"
                            required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            placeholder="youremail123@gmail.com"
                        />
                        <button className="hover:bg-[#4E7C32] absolute right-0 bottom-[-30px] p-0 rounded-none border-none w-[160px] h-[52px] bg-[#656C66] text-white font-semibold tracking-[2px] ">
                            ABONNIEREN
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FeedBack;
