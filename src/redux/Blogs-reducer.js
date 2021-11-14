const Blogs = 'Blogs';

const initialState = {
    carts: [

        {
            title: 'Why I am THE BEST?',
            description: '"Iron man | Aspiring Software Developer 👾 | Open Source Contributor 🔥 | Speaker🎙 | Tech Writer ✍️ "',
        },
        {
            title: 'Why I am THE BEST?',
            description: '"Iron man | Aspiring Software Developer 👾 | Open Source Contributor 🔥 | Speaker🎙 | Tech Writer ✍️ "',
        },
    ]
}

export default function BlogsReducer(state = initialState, action) {

    switch (action.type) {
        default:
            return state;
    }
}