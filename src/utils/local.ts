export const formatMany = (amount: number) =>
	new Intl.NumberFormat("pl-PL", {
		style: "currency",
		currency: "PLN",
	}).format(amount);
