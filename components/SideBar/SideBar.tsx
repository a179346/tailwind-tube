import React from 'react';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import { SiPlaycanvas } from 'react-icons/si';
import {
  BsCollectionPlayFill,
  BsCollectionPlay,
  BsPlayBtnFill,
  BsPlayBtn,
  BsPlayCircleFill,
  BsPlayCircle,
  BsDownload,
} from 'react-icons/bs';

import { Path } from '../../common/Path';
import { ePage } from '../../types/ePage';

import { IconLink } from './IconLink';
interface ISideBarProps {
  page: ePage;
}

export const SideBar: React.FC<ISideBarProps> = ({ page }) => {
  return (
    <div className="hidden md:flex w-18 h-screen fixed flex-col top-14 left-0 px-1">
      <IconLink title="Home" href={Path[ePage.HOME]}>
        {page === ePage.HOME ? (
          <AiFillHome className="w-6 h-6" />
        ) : (
          <AiOutlineHome className="w-6 h-6" />
        )}
      </IconLink>
      <IconLink title="Shorts" href={Path[ePage.SHORTS]}>
        {page === ePage.SHORTS ? (
          <SiPlaycanvas className="w-6 h-6" />
        ) : (
          <SiPlaycanvas className="w-6 h-6" />
        )}
      </IconLink>
      <IconLink title="Subscriptions" href={Path[ePage.SUBSCRIPTIONS]}>
        {page === ePage.SUBSCRIPTIONS ? (
          <BsCollectionPlayFill className="w-6 h-6" />
        ) : (
          <BsCollectionPlay className="w-6 h-6" />
        )}
      </IconLink>
      <IconLink title="Originals" href={Path[ePage.CHANNEL] + '/UCqVDpXKLmKeBU_yyt_QkItQ'}>
        {page === ePage.CHANNEL ? (
          <BsPlayBtnFill className="w-6 h-6" />
        ) : (
          <BsPlayBtn className="w-6 h-6" />
        )}
      </IconLink>
      <IconLink title="Twtube Music" href={Path[ePage.MUSIC]}>
        {page === ePage.MUSIC ? (
          <BsPlayCircleFill className="w-6 h-6" />
        ) : (
          <BsPlayCircle className="w-6 h-6" />
        )}
      </IconLink>
      <IconLink title="Library" href={Path[ePage.LIBRARY]}>
        {page === ePage.LIBRARY ? (
          <MdOutlineVideoLibrary className="w-6 h-6" />
        ) : (
          <MdOutlineVideoLibrary className="w-6 h-6" />
        )}
      </IconLink>
      <IconLink title="Downloads" href={Path[ePage.DOWNLOADS]}>
        {page === ePage.DOWNLOADS ? (
          <BsDownload className="w-6 h-6" />
        ) : (
          <BsDownload className="w-6 h-6" />
        )}
      </IconLink>
    </div>
  );
};
