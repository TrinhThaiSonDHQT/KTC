import { Search } from 'lucide-react';
import { ChartCandlestick } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Heart } from 'lucide-react';

const PropsButtonType2 = {
  propsButtonType21: {
    content: '',
    placeholder: '',
    background: 'bg-light',
    startIcon: <Search width={20} height={20} />,
    endIcon: null,
  },
  propsButtonType22: {
    content: '',
    placeholder: 'Search',
    background: 'bg-light',
    startIcon: <Search width={20} height={20} />,
    endIcon: null,
  },
  propsButtonType23: {
    content: 'Textfield',
    placeholder: '',
    background: 'bg-light',
    startIcon: <Search width={20} height={20} />,
    endIcon: null,
  },
  propsButtonType24: {
    content: '',
    placeholder: 'Search in the web',
    background: 'bg-light',
    startIcon: <Search width={20} height={20} />,
    endIcon: <Heart width={20} height={20} />,
  },
  propsButtonType25: {
    content: '',
    placeholder: 'Search crypto',
    background: 'bg-light',
    startIcon: <Search width={20} height={20} />,
    endIcon: <ChartCandlestick width={20} height={20} />,
  },
  propsButtonType26: {
    content: '',
    placeholder: 'Phone number',
    background: 'bg-light',
    startIcon: null,
    endIcon: (
      <Phone
        width={20}
        height={20}
        style={{ padding: '8px', background: '#d3ffd8', borderRadius: '10px' }}
      />
    ),
  },
  propsButtonType27: {
    content: '',
    placeholder: 'Search in the web',
    background: 'bg-light',
    startIcon: <Search width={20} height={20} />,
    endIcon: <Heart width={20} height={20} />,
  },
};

export default PropsButtonType2;
