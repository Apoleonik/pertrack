const fetchExpenses = ([from, to]) => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: [
            { icon: '1', name: 'A', amount: 123, category: 'Shop' },
            { icon: '2', name: 'B', amount: 134, category: 'GIS' },
            { icon: '3', name: 'X', amount: 1233, category: 'Test' },
            { icon: '4', name: 'D', amount: 1223, category: 'Audio' },
            { icon: '5', name: 'F', amount: 1623, category: 'Train' },
            { icon: '6', name: 'S', amount: 21323, category: 'Shop' }
          ]
        }),
      400
    );
  });
};

const fetchSalary = ([from, to]) => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: [
            { icon: '1', name: 'A', amount: 100000, category: 'Test' },
            { icon: '2', name: 'B', amount: 50000, category: 'Check' },
            { icon: '3', name: 'X', amount: 30000, category: 'Inner' },
            { icon: '4', name: 'D', amount: 20000, category: 'Track' },
            { icon: '5', name: 'F', amount: 1000, category: 'Fail' },
            { icon: '6', name: 'S', amount: 40000, category: 'Sent' }
          ]
        }),
      400
    );
  });
};

const budgetService = { fetchExpenses, fetchSalary };

export default budgetService;
