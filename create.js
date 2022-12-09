const posts = [
    {
        title: 'Post One ', body: 'this is post one', },
    { title: 'Post two', body: 'this is post two',  }

];

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() });
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject('Error:something went wrong')
            }
        }, 3000);
    });
}
function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const lastelement = posts.pop()
                resolve(lastelement);
            }
            else {
                reject('Array is Empty now');
            }

        }, 1000);
    });

}



createPost({ title: 'post three', body: ' this is  post three ' })

.then(() => {
    getPost();
    deletePost().then((deletedElement) => {
        console.log(deletedElement)
        getPost();
        deletePost().then(() => {
            getPost();
            deletePost().then(() => {
                getPost();
                deletePost().then(() => {})
.catch ((err) => {
                        console.log('inside catch block', err)

                    })
            })
        })
    })

})

function getPost() {
    setTimeout(() => {
        let output = '';
        for (let i = 0; i < posts.length; i++) {
            output += `<li>${posts[i].title}</li>`
        }
        document.body.innerHTML = output;
    }, 1000)

}





    