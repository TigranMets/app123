const EXPERIENCES = 'EXPERIENCES';

const initialState = {
    carts: [
        {
            companyName: 'Facebook',
            companyImageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png',
            job: 'Software Engeneer',
            jobExperience: '120 տարի',
            impressions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sunt maiores quod distinctio nisi, ratione corrupti doloremque veniam eos magni perferendis aspernatur quo vel tenetur iusto ipsam amet numquam sapiente.'
        },
        {
            companyName: 'Google',
            companyImageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/512px-Google_Chrome_icon_%28September_2014%29.svg.png',
            job: 'it@',
            jobExperience: '300 տարի',
            impressions: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, pariatur. adipisicing elit. Fugit sunt maiores quod distinctio nisi, ratione corrupti doloremque veniam eos magni perferendis aspernatur quo vel tenetur iusto ipsam amet numquam sapiente.'
        },
        {
            companyName: 'Pixart',
            companyImageSrc: 'https://assets.materialup.com/uploads/ef26d4c2-1f7c-4aaf-8b43-979c15e5af52/preview.jpg',
            job: 'divan qshox',
            jobExperience: '50 տարի',
            impressions: 'quo vel tenetur iusto ipsam amet numquam sapiente.'
        }
    ]
}

export default function ExperiencesReducer(state = initialState, action) {

    switch (action.type) {
        default:

            return state;
    }
}