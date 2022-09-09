export const portsFeth = () => fetch("/ports").then((res) => res.json());
export const statusFeth = () => fetch("/status").then((res) => res.json());
