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
      for (const item in data) {
        const sorted = `
        <h3>Title: ${data[item].title}</h3>
        <p>${data[item].body}</p>
        <p>Posted by: User ${data[item].userId}</p>
        `;
        lists.insertAdjacentHTML("beforeend", sorted);
      };
    });
};

function groupById(){
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      // reducer method
      const groupBy = (arr, key) => {
        return arr.reduce((result, obj) => {
          (result[obj[key]] = result[obj[key]] || []).push(obj);
          return result;
        }, {});
      };
      const a = groupBy(data, "userId");
      const groupingResult = `
        <h3>Posts by User ${a[1][0].userId}</h3>
        <p><b>Title:</b> ${a[1][0].title}</p>
        <p>${a[1][0].body}</p>
      `
      lists.insertAdjacentHTML('beforeend', groupingResult)
      console.log(a);
      });
}

