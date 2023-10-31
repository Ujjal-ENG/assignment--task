import React from 'react';

import HeaderTitle from '../../../layouts/shared/HeaderTitle';
import Category from './Category/Category';
import RunningTitle from './RunningTitle';

const Room = () => {
  return (
    <div data-aos="fade-zoom-in" data-aos-duration="1200" data-aos-delay="400">

      <div className="pt-10 lg:pt-20 md:pt-20">
      <HeaderTitle title="ROOM CATEGORY" />
      </div>
      <RunningTitle title="Check in – 12noon, Check out - 11:00 am	swimming pool, Game zone (Table tennis, Chess, Carrom), Children play area, Inhouse restaurant and room service facility., Banquet, Lush green lawn, WI-fi, Intercom, Doctor on call, Free parking, 24 hrs power backup, In room tea coffee maker" />
      <div className="my-container p-20">
        <Category />
      </div>

    </div>
  );
};

export default Room;
