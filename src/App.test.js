import React from 'react';

import { SpacesDataService } from './SpacesDataService';

test('fetches data correctly', async () => {
  let spaces = await SpacesDataService("available",
    (filter) => [{ suite: "S1", tenant: "Starbucks", size: 2000, type: "retail" }]);

  expect(spaces[0]).toStrictEqual({ suite: "S1", tenant: "Starbucks", size: 2000, type: "retail" });
});
