const ITEMS_PER_PAGE = 10;

fetchPeople().then(render);

async function fetchPeople(page = 1) {
  const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  const body = await response.json();
  return body;
}

function render(data) {
  updateCountOnHeader(data);
  updateList(data);
  createPaginationButtons(data);
}

function updateCountOnHeader({ count }) {
  document.querySelector("span").innerHTML = count;
}

async function updateList({ results }) {
  const $lis = await Promise.all(
    results.map(async ({ name, species: speciesLinks }) => {
      const id = speciesLinks.length
        ? speciesLinks[0].split("/").at(-2)
        : undefined;
      const species = await fetchSpecies(id);
      return `<li>${name} (${species.name})</li>`;
    })
  );

  document.querySelector("ul").innerHTML = $lis.join("");
}

function createPaginationButtons(data) {
  const pageCount = Math.ceil(data.count / ITEMS_PER_PAGE);
  const currentPage =
    data.next != null
      ? Number(data.next.split("=").at(-1)) - 1
      : Number(data.previous.split("=").at(-1)) + 1;

  $pagination = document.querySelector("#pagination");
  $pagination.innerHTML = `
  <button id="previous">&lt;</button>
  ${currentPage} / ${pageCount}
  <button id="next">&gt;</button>
  `;

  updateButton("previous", data);
  updateButton("next", data);
}

function updateButton(name, data) {
  const $button = document.querySelector(`#${name}`);

  if (data[name] == null) {
    $button.setAttribute("disabled", "disabled");
  } else {
    const followingPage = Number(data[name].at(-1));
    $button.addEventListener("click", () =>
      fetchPeople(followingPage).then(render)
    );
  }
}

async function fetchSpecies(id = 1) {
  const response = await fetch(`https://swapi.dev/api/species/${id}/`);
  const body = await response.json();
  return body;
}

function oldRender(data) {
  document.querySelector("span").innerHTML = data.count;

  document.querySelector("ul").innerHTML = data.results
    .map(({ name, species }) => `<li>${name} (${species[0]})</li>`)
    .join("");

  const $prev = document.querySelector("#prev");
  if (data.previous == null) {
    $prev.setAttribute("disabled", "disabled");
  } else {
    $prev.removeAttribute("disabled");
    const previousPage = Number(data.previous.at(-1));
    $prev.onclick = () => fetchPeople(previousPage).then(render);
  }

  const $next = document.querySelector("#next");
  if (data.next == null) {
    $next.setAttribute("disabled", "disabled");
  } else {
    $next.removeAttribute("disabled");
    const nextPage = Number(data.next.at(-1));
    $next.onclick = () => fetchPeople(nextPage).then(render);
  }
}
