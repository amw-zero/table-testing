function httpFetch(filter) {
  if (filter === "available") {
    // "/spaces?page=0"
    return [
      { suite: "S1", tenant: "Starbucks", size: 2000, type: "retail" },
      { suite: "S2", tenant: "Dunkin Donuts", size: 3000, type: "retail" },
    ];
  } else {
    // "/spaces?page=1"
    return [
      { suite: "S3", tenant: "Nordstrom", size: 2000, type: "retail" },
      { suite: "S4", tenant: "Macy's", size: 3000, type: "retail" },
    ];
  }
}

export async function SpacesDataService(query, fetch = httpFetch) {
  let { filter } = query;

  return fetch(filter);
};

function test() {
  let spaces = SpacesDataService("available", 
    (filter) => [{ suite: "S1", tenant: "Starbucks", size: 2000, type: "retail" }]);

  console.log(spaces);
}

test();
