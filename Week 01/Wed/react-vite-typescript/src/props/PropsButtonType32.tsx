import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { FaRegEyeSlash } from "react-icons/fa6";
import { WiDayCloudy } from "react-icons/wi";
import { FaPlayCircle } from "react-icons/fa";
import { CiCamera } from "react-icons/ci";

import MUFlag from '../../public/images/manchester-united-flag.png';
import avatar from '../../public/images/avatar.png';
import nike from '../../public/images/nike-logo.png';
import landescape from '../../public/images/landescape.png';
import landescape2 from '../../public/images/landescape2.png';
import sunny from '../../public/images/sunny.png';
import avatar2 from '../../public/images/avatar2.png';

const PropsButtonType32 = {
  propsButtonType321: {
    title: 'Manchester United',
    background: 'bg-light',
    image: MUFlag,
    endIcon: <HiOutlineDotsHorizontal />,
  },
  propsButtonType322: {
    title: 'Wade Warren',
    subtitle: '4293 3242 ••••',
    background: 'bg-light',
    image: avatar,
    imageSize: 'large-image',
    endIcon: <FaRegEyeSlash />,
    alignItems: 'items-end',
  },
  propsButtonType323: {
    title: 'Nike store',
    background: 'bg-light',
    image: nike,
    imageSize: 'medium-imgage',
    subtitle: '6 months of promotions',
    title2: '-27.50',
    subtitle2: '11:00AM',    
  },
  propsButtonType324: {
    title: 'Landescape',
    background: 'bg-light-yellow',
    imageSize: 'medium-imgage',
    image: landescape,
    subtitle: '423Km',  
    endIcon: <HiOutlineDotsHorizontal />,
  },
  propsButtonType325: {
    title: 'Falset Mountains',
    background: 'bg-light',
    image: landescape2,
    imageSize: 'medium-imgage',
    subtitle: '423Km, 3 Week',  
    endIcon: <WiDayCloudy />,
  },
  propsButtonType326: {
    title: 'Great day to schedule',
    background: 'bg-light-yellow',
    image: sunny,
    imageSize: 'medium-imgage',
    subtitle: 'Lorem ipsum dolor sitamet.',  
    endIcon: <FaPlayCircle color='#7113e9'/>,
  },
  propsButtonType327: {
    title: 'Yolanda',
    background: 'bg-light',
    image: avatar2,
    imageSize: 'medium-imgage',
    subtitle: 'Web Development',  
    endIcon: <CiCamera />,
  },
};

export default PropsButtonType32;
