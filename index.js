const lists = document.querySelector('.lists');

function showList(){
  // call the API
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      // go through each of the array
      // get the title, body
      data.forEach(post => {
        const postLists = `
        <h3>Title: ${post.title}</h3>
          <p>${post.body}</p>
        <hr>
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
        <hr>
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
        r[a.userId] = r[a.userId] || [];
        r[a.userId].push(a);
        return r;
      }, {});

      for (const i in groupBy) {
        const user = `<h3>Posts by User ${groupBy[i][i].userId}</h3>`
        lists.insertAdjacentHTML('beforeend', user)

        groupBy[i].forEach(e => {
          const groupingResult = `
          <p><b>Title:</b> ${e.title}</p>
          <p>${e.body}</p>
          <hr>
          `
          lists.insertAdjacentHTML('beforeend', groupingResult)
        });
      }
    });
}
