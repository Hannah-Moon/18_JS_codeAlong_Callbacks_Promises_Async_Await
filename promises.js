// https://www.youtube.com/watch?v=PoRJizFvM7s&t=449s?
// Traversy Media: Async JS Crash Course - Callbacks, Promises, Async Await


const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output +=`<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
}, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: something went wrong')
            }
        }, 2000);
    });
}

// createPost ({ title: 'Post Three', body: 'This is post three'})
//     .then(getPosts)
//     .catch(err => console.log(err));

// --------------------------{ Async / Await }

// async function init() {
//     await createPost ({ title: 'Post Three', body: 'This is post three'})
//     getPosts();
// }

// init();

// --------------------------{ Async / Await / Fetch }
async function fetchUsers() {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users')

    const data = await res.json();

    console.log(data);
}

fetchUsers();

// Promise.all
// const proimse1 = Promise.resolve('Hello World!');
// const promist2 = 10;
// const promise3 = new Promise((resolve, reject) => 
//     setTimeout(resolve, 2000, 'Goodbye'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')

// Promise.all([promise1, promise2, promise3, promise4])
//     .then(values => console.log(values));

// const promise1 = Promise.resolve('Hello World!');
// const promise2 = Promise.resolve(10);
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Goodbye'), 2000);
// });

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//         return []; // Return empty array to fulfill the Promise.all requirement
//     });

// Promise.all([promise1, promise2, promise3, promise4])
//     .then(values => console.log(values))
//     .catch(error => console.error('Promise.all error:', error));