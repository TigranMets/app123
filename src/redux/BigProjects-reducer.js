const BigProjects = 'BigProjects';

const initialState = {
    carts: [
        {
            imgSrc: 'https://c.tenor.com/aXPGXXcE1NwAAAAi/hehe-boi.gif',
            imgAlt: "itworld's image",
            name: 'itWorld',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            imgSrc: 'https://c.tenor.com/aXPGXXcE1NwAAAAi/hehe-boi.gif',
            imgAlt: "avto's image",
            name: 'Avto',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
    ]
}

export default function BigProjectsReducer(state = initialState, action) {

    switch (action.type) {
        default:
            return state;
    }
}