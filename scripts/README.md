# Sales Tax Calculator

This small app was created according to a challenge for a position of engineer. While I cannot divulge the specifics of the challenge, it involved:
- keep it vanilla, not using frameworks or libraries;
- calculate sales taxes that included exemptions, import fees, and rounding, then writing a receipt;
- unit testing, and adding functional tests for three scenarios.

## How does it work

Inventory data is kept ina deticated file. Basket data is privately kept in a store, which exports methods that allow reading and mutating the store. When the store is mutated, it dispatches custom events, allowing the interface to update itself.

The screen is divided in sections that independently listen to the store's mutation, imperatively changing the dom accordingly (there's no optimizations such as a virtual dom and diffing, because this scale of a project doesn't require them).

The sections are:

- **Inventory** - the items available, created from static file;
- **Basket** - lists acquired items and before sale value, as well as an option to remove items;
- **Receipt** - a list of items, values and taxes, in the format specified by the challenge.
- **Testing** - there are unit tests for each exported method from store, and functional tests for each case in the challenge specification.

## How to run the app
Download the code from [GitHub](https://github.com/isacvale/challenge-sales-tax-calculator), then on the root folder, run `npx lite-server`.

## How to run the tests
Open the app, as per above, and click the `Run` button.
