<h2 align="center">
  JS: Async - Code along to learn Callbacks-Promises-Async-Await <br/>
</h2>


## JS Code for Callbacks 

```c#

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

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post three'}, getPosts);

```


## Promises: Async / Await / Fetch


```c#
async function fetchUsers() {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users')

    const data = await res.json();

    console.log(data);
}

fetchUsers();

```

## Code Alonged YouTube Video
### Traversy Media on YouTube: Async JS Crash Course - Callbacks, Promises, Async Await
[![Traversy Media on YouTube: Async JS Crash Course - Callbacks, Promises, Async Await](https://i.ytimg.com/vi/PoRJizFvM7s/hqdefault_81800.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEUTFiqupglxvPMiIe2zyIyNFm0w)](https://youtu.be/PoRJizFvM7s?si=cDF9iqnl1PNj6z7o)


## Give a Star! :star:
If you like or are using this project, please give it a star. Thanks!

