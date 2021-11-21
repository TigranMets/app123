const HOME = 'HOME';

const initialState = {
  socImages: [
    {
      iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png',
      iconAlt: 'github'
    },
    {
      iconSrc: 'https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512',
      iconAlt: 'facebook'
    },
    {
      iconSrc: 'https://icon-library.com/images/gmail-circle-icon/gmail-circle-icon-5.jpg',
      iconAlt: 'gmail'
    },
    {
      iconSrc: 'https://www.instagram.com/static/images/ico/favicon-200.png/ab6eff595bb1.png',
      iconAlt: 'instagram'
    },

    {
      iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png',
      iconAlt: 'linkedin'
    },
    {
      iconSrc: 'https://www.vectorico.com/wp-content/uploads/2018/02/youtube-icon.png',
      iconAlt: 'youtube'
    },
    {
      iconSrc: 'https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/stackoverflow-512.png',
      iconAlt: 'stackoverflow'
    },

  ]
}

export default function HomeReducer(state = initialState, action) {

  switch (action.type) {
    default:

      return state;
  }
}