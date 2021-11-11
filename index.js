const lists = document.querySelector('.lists');

function showList(){
  // call the API
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      // go through each of the array
      // get the title, body and user ID
      data.forEach(post => {
        const postLists = `
        <h3>Title: ${post.title}</h3>
          <p>${post.body}</p>
          <p>Posted by: User ${post.userId}</p>
      `;
        // insert into HTML for display
        lists.insertAdjacentHTML('beforeend', postLists);
      });
    });
};

function sortByAlphabetically() {
  // comparer function
  function sorting(prop) {
    return function(a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    }
  };

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      data.sort(sorting('title')); // sorting by title property
      for (const i in data) {
        const sorted = `
        <h3>Title: ${data[i].title}</h3>
        <p>${data[i].body}</p>
        <p>Posted by: User ${data[i].userId}</p>
        `;
        lists.insertAdjacentHTML("beforeend", sorted);
      };
    });
};

function groupById(){
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      // reduce method
      const groupBy = data.reduce((r, a) => {
        r[a.userId] = [...r[a.userId] || [], a];
        return r;
      }, {});
      console.log(groupBy);
      for (const i in groupBy) {
        groupBy[i].forEach(e => {
          const groupingResult = `
          <h3>Posts by User ${e.userId}</h3>
          <p><b>Title:</b> ${e.title}</p>
          <p>${e.body}</p>
          `
          lists.insertAdjacentHTML('beforeend', groupingResult)
        });
      }
    });
}
