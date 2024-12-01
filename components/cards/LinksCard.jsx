import React from "react";

const LinksCard = () => {
    return (
        <div className="bg-[rgba(217,217,217,0.4)] backdrop-blur-sm rounded-xl p-4 w-[100%]">
            <div className="flex justify-between mb-2 flex-wrap" >
                <p className="break-all">
                    https://www.verylongexampleurl.com/some/long/path/that/
                </p>

                <p className="font-extrabold" >245</p>
            </div>
            <p className="break-all">https://bit.ly/3tKcYjD</p>
        </div>
    );
};

export default LinksCard;
