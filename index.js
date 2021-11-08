const lists = document.querySelector('.lists');

function showList(){
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {

      data.forEach(post => {
        const postLists = `
        <h3>Title: ${post.title}</h3>
          ${post.body}
      `;

        lists.insertAdjacentHTML('beforeend', postLists);
      });
    });
};

function sorting() {
  // fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res => res.json())
  //   .then(data => {
  //     data.forEach.sort(post => {
  //       const sorted = `
  //       <h3>Title: ${post.title}</h3>
  //         ${post.body}
  //     `;
  //     lists.insertAdjacentHTML('beforeend', sorted);
  //     });
  //   });
};
