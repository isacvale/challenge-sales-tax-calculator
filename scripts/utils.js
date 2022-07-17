export const format = {
    currency: value => {
        const inDollars = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        });
        return inDollars.format(value)
    }
}