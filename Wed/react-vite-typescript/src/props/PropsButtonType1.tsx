import { MoveRight } from 'lucide-react';
import { Apple } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Facebook } from 'lucide-react';

const PropsButtonType1 = {
  propsButtonType11: {
    content: 'Get started',
    background: 'bg-dark',
    outline: false,
    startIcon: null,
    endIcon: <MoveRight width={17} height={16} />,
  },

  propsButtonType12: {
    content: 'Continue with Apple',
    background: 'bg-dark',
    outline: false,
    startIcon: <Apple width={20} height={22} />,
    endIcon: null,
  },

  propsButtonType13: {
    content: 'Continue with Google',
    background: 'bg-light',
    outline: true,
    startIcon: <Facebook width={21} height={21} />,
    endIcon: null,
  },

  propsButtonType14: {
    content: 'Continue with Facebook',
    background: 'bg-light',
    outline: true,
    startIcon: <Heart width={21} height={21} />,
    endIcon: null,
  },
};

export default PropsButtonType1;
