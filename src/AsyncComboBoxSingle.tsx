import { useState, useEffect } from "react";
import { fetchOptions } from "./fetch";
function AsyncComboBoxSingle() {
  const [query, setQuery] = useState("");
  const [emptyMenu, setEmptyMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{ value: string; label: string }[]>(
    []
  );

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!query || query.length < 2) {
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const data = await fetchOptions(query);
        setResults(data);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 250); // debounce: waits 250ms after input stops before searching

    return () => clearTimeout(timer);
  }, [query]);
  return (
    <sgds-combo-box
      async={true}
      loading={loading}
      onsgds-input={(e: CustomEvent) => setQuery(e.detail.displayValue)}
      clearable
      label="Single select async combo box"
      placeholder="Type a fruit. e.g. 'apple' "
    >
      {results.map((re) => (
        <sgds-combo-box-option value={re.value}>
          {re.label}
        </sgds-combo-box-option>
      ))}
    </sgds-combo-box>
  );
}

export default AsyncComboBoxSingle;
