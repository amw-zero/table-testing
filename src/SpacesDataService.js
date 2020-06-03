function httpFetch(filter) {
  // return fetch(`/spaces?filter=${filter}`);

  if (filter === "available") {

    // "/spaces?filter=available"
    return [
      { suite: "S1", tenant: "Starbucks", size: 2000, type: "retail" },
      { suite: "S2", tenant: "Dunkin Donuts", size: 3000, type: "retail" },
    ];
  } else {
    // "/spaces?filter=all"
    return [
      { suite: "S3", tenant: "Nordstrom", size: 2000, type: "retail" },
      { suite: "S4", tenant: "Macy's", size: 3000, type: "retail" },
    ];
  }
}

/*
  Implicit types:

  type filter = 
    | Availalble
    | Unavailable
    | All

  type query = { filter: filter };
 */
export async function SpacesDataService(query, fetch = httpFetch) {
  let { filter } = query;

  return fetch(filter);
};
