const Skills = 'Skills';

const initialState = {
    programmingLanguages: [
        {
            imgSrc: 'https://webref.ru/assets/images/book/html5.png',
            imgAlt: 'HTML',
            languageName: 'HTML',
        },
        {
            imgSrc: 'https://www.toolbox.am/img/trainings/icons//css3-logo.png',
            imgAlt: 'CSS',
            languageName: 'CSS',
        },
        {
            imgSrc: 'https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg',
            imgAlt: 'JavaScript',
            languageName: 'JavaScript',
        },
        {
            imgSrc: 'https://avatars.githubusercontent.com/u/70142?s=200&v=4',
            imgAlt: 'jQuery',
            languageName: 'jQuery',
        },
        {
            imgSrc: 'https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/react-js.png',
            imgAlt: 'React',
            languageName: 'React',
        },
        {
            imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/redux-283024.png',
            imgAlt: 'Redux',
            languageName: 'Redux',
        },
        {
            imgSrc: 'https://image.flaticon.com/icons/png/512/174/174881.png',
            imgAlt: 'Wordpress',
            languageName: 'Wordpress',
        },
    ]
}

export default function SkillsReducer(state = initialState, action) {

    switch (action.type) {
        default:
            return state;
    }
}