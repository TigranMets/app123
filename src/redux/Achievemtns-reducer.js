const Achievemtns = 'Achievemtns';

const initialState = {
    carts: [
        {
            imgSrc: 'https://developerfolio.js.org/static/media/codeInLogo.47a7a717.webp',
            achievementHeader: 'Google Assistant Action',
            achievementDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi nobis, provident beatae sit nesciunt.',
            buttonText: 'View Google Assistant Actionbutton',
        },
        {
            imgSrc: 'https://developerfolio.js.org/static/media/googleAssistantLogo.e79c6392.webp',
            achievementHeader: 'Google Assistant Action',
            achievementDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi nobis, provident beatae sit nesciunt.',
            buttonText: 'View Google Assistant Actionbutton',
        },
        {
            imgSrc: 'https://developerfolio.js.org/static/media/pwaLogo.ee62cb58.webp',
            achievementHeader: 'PWA Web App Developer',
            achievementDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi nobis, provident beatae sit nesciun.',
            buttonText: 'View Google Assistant Actionnbutton',
        },
    ]
}

export default function AchievemtnsReducer(state = initialState, action) {

    switch (action.type) {
        default:
            return state;
    }
}