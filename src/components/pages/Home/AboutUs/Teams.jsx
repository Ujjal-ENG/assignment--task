/* eslint-disable max-len */
import React from 'react';
import HandleLazyLoading from '../../../layouts/shared/HandleLazyLoading';

const Teams = () => {
    return (
        <div className="my-container">
            <h5 className="text-xl font-bold tracking-wider text-center uppercase py-4 text-[#1B627C]">The Team</h5>

            <h1 className="text-xl md:text-2xl xl:text-4xl lg:text-3xl text-center tracking-wider font-bold  max-w-4xl w-full mx-auto space-x-5 py-3">
                Meet our team of experts in photography, videography and designing
            </h1>

            <p className="text-xl font-bold tracking-wider text-center uppercase py-4 max-w-5xl w-full mx-auto text-[#1B627C]">
                To be the company want to be, it takes an eclectic group of passionate creators. Get to know the people leading the way at united.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-14">
                {/* ceo card */}
                <div className="card mt-8">
                    <div>
                        <HandleLazyLoading width="100%" height="100%" image="https://iau.edu.lc/wp-content/uploads/2016/09/dummy-image.jpg" alt="ceo-img" />
                    </div>
                    <div className="text-[#1B627C] space-y-2 py-4">
                        <h2 className="text-xl md:text-2xl font-bold tracking-wider">Souvik Jana</h2>
                        <h4 className="text-xl font-medium">Founder & CEO</h4>
                    </div>
                </div>

                {/* operation manager card */}
                <div className="card mt-8">
                    <div>
                        <HandleLazyLoading width="100%" height="100%" image="https://iau.edu.lc/wp-content/uploads/2016/09/dummy-image.jpg" alt="operation-img" />
                    </div>
                    <div className="text-[#1B627C] space-y-2 py-4">
                        <h2 className="text-xl md:text-2xl font-bold tracking-wider">Biplab Panda</h2>
                        <h4 className="text-xl font-medium">Sales & Marketing Head</h4>
                    </div>
                </div>

                {/* Lead PhotoGrphaer card */}
                <div className="card mt-8">
                    <div>
                        <HandleLazyLoading width="100%" height="100%" image="https://iau.edu.lc/wp-content/uploads/2016/09/dummy-image.jpg" alt="photographer-img" />
                    </div>
                    <div className="text-[#1B627C] space-y-2 py-4">
                        <h2 className="text-xl md:text-2xl font-bold tracking-wider">Bikram Ghosh</h2>
                        <h4 className="text-xl font-medium">Senior Photographer</h4>
                    </div>
                </div>

                {/* hr card */}
                <div className="card mt-8">
                    <div>
                        <HandleLazyLoading width="100%" height="100%" image="https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737_1280.jpg" alt="hr-img" />
                    </div>
                    <div className="text-[#1B627C] space-y-2 py-4">
                        <h2 className="text-xl md:text-2xl font-bold tracking-wider">Payel Panigrahi</h2>
                        <h4 className="text-xl font-medium">HR & Operation Head</h4>
                    </div>
                </div>

                {/* developer card1 */}
                <div className="card mt-8">
                    <div>
                        <HandleLazyLoading width="100%" height="100%" image="https://avatars.githubusercontent.com/u/63545258?v=4" alt="developer-img" />
                    </div>
                    <div className="text-[#1B627C] space-y-2 py-4">
                        <h2 className="text-xl md:text-2xl font-bold tracking-wider">Ujjal Kumar Roy</h2>
                        <h4 className="text-xl font-medium">Senior Software Developer</h4>
                    </div>
                </div>
                {/* developer card2 */}
                <div className="card mt-8">
                    <div>
                        <HandleLazyLoading width="100%" height="80%" image="https://iau.edu.lc/wp-content/uploads/2016/09/dummy-image.jpg" alt="developer-img" />
                    </div>
                    <div className="text-[#1B627C] space-y-2 py-4">
                        <h2 className="text-xl md:text-2xl font-bold tracking-wider">Rupok Raihan</h2>
                        <h4 className="text-xl font-medium">Frontend Developer</h4>
                    </div>
                </div>
                {/* developer card2 */}
                <div className="card mt-8">
                    <div className="rounded-lg">
                        <HandleLazyLoading width="100%" height="100%" image="https://iau.edu.lc/wp-content/uploads/2016/09/dummy-image.jpg" alt="developer-img" />
                    </div>
                    <div className="text-[#1B627C] space-y-2 py-4">
                        <h2 className="text-xl md:text-2xl font-bold tracking-wider">Shimul Chandra Das</h2>
                        <h4 className="text-xl font-medium">System Support and DevOps</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams;
