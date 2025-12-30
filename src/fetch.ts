export async function fetchOptions(query: string) {
  // Simulate REST API call with a mock response
  // Replace this with your actual fetch if needed
  await new Promise((r) => setTimeout(r, 500)); // Simulate network delay
  // Mock data
  const mockData = [
    { value: "apple", label: "Apple" },
    { value: "apricot", label: "Apricot" },
    { value: "banana", label: "Banana" },
    { value: "blueberry", label: "Blueberry" },
    { value: "blackberry", label: "Blackberry" },
    { value: "cherry", label: "Cherry" },
    { value: "date", label: "Date" },
    { value: "grape", label: "Grape" },
    { value: "kiwi", label: "Kiwi" },
    { value: "lemon", label: "Lemon" },
    { value: "mango", label: "Mango" },
    { value: "orange", label: "Orange" },
    { value: "peach", label: "Peach" },
    { value: "pear", label: "Pear" },
    { value: "plum", label: "Plum" },
    { value: "strawberry", label: "Strawberry" },
    { value: "watermelon", label: "Watermelon" },
  ];
  // Filter mock data by query
  const filteredData = mockData.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );
  console.log(filteredData);
  return filteredData;
}
