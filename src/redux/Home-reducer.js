const HOME = 'HOME';

const initialState = {
  socImages: [
    {
      iconSrc: 'https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512',
      iconAlt: 'facebook'
    },
    {
      iconSrc: 'https://www.instagram.com/static/images/ico/favicon-200.png/ab6eff595bb1.png',
      iconAlt: 'instagram'
    },
    { iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png',
     iconAlt: 'gmail' },
    {
      iconSrc: 'https://www.vectorico.com/wp-content/uploads/2018/02/youtube-icon.png',
      iconAlt: 'youtube'
    },

  ]
}

export default function HomeReducer(state = initialState, action) {

  switch (action.type) {
    default:

      return state;
  }
}