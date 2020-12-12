// the user types in something in the input
// the user clicks on send (or presses enter) - submits

const form = document.getElementById('clearbitForm');

const processDataAndUpdateDOM = (data) => {
  
  const name = data.person.name.fullName;
  const email = data.person.email;
  const bio = data.person.bio;
  const location = data.person.location;

  const userName = document.getElementById('userName');
  userName.innerText = name;

  const userEmail = document.getElementById('userEmail');
  userEmail.innerText = email;

  const userBio = document.getElementById('userBio');
  userBio.innerText = bio;
  
  const userLocation = document.getElementById('userLocation');
  userLocation.innerText = location;

}

// fetch the api
const fetchTheAPI = (personEmail) => {
  // const url = 'https://person.clearbit.com/v2/combined/find?email=boris@lewagon.org'
  const url = `https://person.clearbit.com/v2/combined/find?email=${personEmail}`
  fetch(url, {
    headers: {
      Authorization: 'Bearer sk_f3f04bef2d500f1b9e7f42152a47edc3'
    }
  })
    .then(res => res.json())
    .then((data) => {
      // with this data -> process it somehow
      // update the DOM (html)
      processDataAndUpdateDOM(data);
    })
};

// cldd
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // find the person's email
  // give it to the function
  const input = document.querySelector("#clearbitEmail");
  const personEmail = input.value;
  fetchTheAPI(personEmail);
})

