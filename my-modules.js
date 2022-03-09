const hello = (name) => {
    console.log("hello" + name);
}

const topla = (a, b) => a + b;

const cikar = (a, b) => a-b;

const text = 'Text';

const user = {
    name: "Batuhan",
    surname: "Sukan"
};

const users = [
    {
        name: "Messi",
        surname: "Lionel",
    },
    {
        name: "Ronaldo",
        surname: "Cristiano",
    },
];

export { topla, cikar, text, user, users };

export default hello; 