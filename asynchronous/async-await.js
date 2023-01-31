async function fetchAuthorName(postId) {
    const postRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post=await postRes.json();
    const userId=post.userId;
    const userRes=await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user=await userRes.json();
    return user.name;
}
fetchAuthorName(1).then((name)=>console.log("name:",name));