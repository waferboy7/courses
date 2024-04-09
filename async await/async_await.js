async function fetchPosts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3").then(
    (response) => response.json()
  );

  console.log(JSON.stringify(data, null, 2));

  return data;
}

fetchPosts();