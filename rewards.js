/*
  WTC Personal v0.2
  Verified: August 16, 2026

  IMPORTANT ASSUMPTION:
  "Discover" is treated as Discover it / Discover More with the rotating 5% program.
  If your Discover card is a different product, change it before relying on the result.

  Current official sources used:
  - Chase Freedom Q3: Chase Freedom 5% calendar / Chase press release
  - Chase Freedom Unlimited: Chase product page
  - Citi Double Cash: Citi product page
  - Discover Q3: Discover 5% Cashback Bonus calendar
  - Sam's Club Mastercard: Synchrony Sam's Club card page
  - Fidelity Rewards Visa Signature: Fidelity product page
  - Costco payment acceptance: Costco customer service

  This app compares reward rates, but card-network acceptance, caps, activation,
  merchant coding, exclusions, and redemption method can affect actual rewards.
*/

window.WTC_DATA = {
  meta: {
    label: "2026 Q3 · Jul 1–Sep 30",
    updated: "Rewards verified Aug 16, 2026"
  },

  categories: [
    { id: "walmart", name: "Walmart", emoji: "🏪" },
    { id: "target", name: "Target", emoji: "🎯" },
    { id: "costco", name: "Costco In-Club", emoji: "🛒" },
    { id: "sams", name: "Sam's Club", emoji: "🛒" },
    { id: "dining", name: "Dining", emoji: "🍽️" },
    { id: "grocery", name: "Grocery", emoji: "🥦" },
    { id: "gas", name: "Gas", emoji: "⛽" },
    { id: "costcoGas", name: "Costco Gas", emoji: "⛽" },
    { id: "costcoFood", name: "Costco Food Court", emoji: "🌭" },
    { id: "samsCafe", name: "Sam's Club Café", emoji: "🍕" },
    { id: "samsGas", name: "Sam's Gas", emoji: "⛽" },
    { id: "department", name: "Department Stores", emoji: "🛍️" },
    { id: "drugstore", name: "Drugstore", emoji: "💊" },
    { id: "transit", name: "Transit", emoji: "🚇" },
    { id: "ev", name: "EV Charging", emoji: "⚡" },
    { id: "amazon", name: "Amazon", emoji: "📦" },
    { id: "online", name: "Other Online Shopping", emoji: "🛍️" },
    { id: "travel", name: "Travel", emoji: "✈️" },
    { id: "entertainment", name: "Live Entertainment", emoji: "🎟️" },
    { id: "other", name: "Everything Else", emoji: "💳" }
  ],

  cards: [
    { id: "chaseFreedom", name: "Chase Freedom", issuer: "Chase", network: "Visa", note: "Legacy rotating-category card" },
    { id: "chaseFreedomUnlimited", name: "Chase Freedom Unlimited", issuer: "Chase", network: "Visa" },
    { id: "citiDoubleCash", name: "Citi Double Cash", issuer: "Citi", network: "Mastercard" },
    { id: "discover", name: "Discover", issuer: "Discover", network: "Discover", note: "Assumed rotating 5% product" },
    { id: "samsMastercard", name: "Sam's Club Mastercard", issuer: "Synchrony / Sam's Club", network: "Mastercard" },
    { id: "fidelityVisa", name: "Fidelity Rewards Visa Signature", issuer: "Fidelity", network: "Visa" }
  ],

  rewards: [
    // GAS
    {
      cardId: "samsMastercard", category: "gas", display: "5% Sam's Cash", value: 5, priority: 30,
      note: "First $6,000/year in qualifying gas, then 1%.",
      why: "Same 5% rate as the rotating cards, but its gas cap is a separate $6,000 annual bucket."
    },
    {
      cardId: "chaseFreedom", category: "gas", display: "5% back", value: 5, priority: 20,
      note: "Q3 bonus; $1,500 combined Q3 cap.", activationKey: "chaseActivated",
      extra: "Activate by Sep 14, 2026."
    },
    {
      cardId: "discover", category: "gas", display: "5% back", value: 5, priority: 10,
      note: "Q3 bonus; $1,500 combined Q3 cap.", activationKey: "discoverActivated"
    },
    { cardId: "citiDoubleCash", category: "gas", display: "2% total", value: 2, note: "1% when you buy + 1% as you pay." },
    { cardId: "fidelityVisa", category: "gas", display: "2% back", value: 2, note: "When rewards are deposited into an eligible Fidelity account." },
    { cardId: "chaseFreedomUnlimited", category: "gas", display: "1.5% back", value: 1.5 },

    // COSTCO GAS — U.S. Costco gas accepts Visa credit cards, not Mastercard/Discover.
    {
      cardId: "chaseFreedom", category: "costcoGas", display: "5% back", value: 5, priority: 20,
      note: "Q3 gas bonus; Costco Gas accepts Visa.", activationKey: "chaseActivated",
      extra: "$1,500 combined Q3 bonus cap. Activate by Sep 14."
    },
    { cardId: "fidelityVisa", category: "costcoGas", display: "2% back", value: 2, note: "Visa; eligible at Costco Gas." },
    { cardId: "chaseFreedomUnlimited", category: "costcoGas", display: "1.5% back", value: 1.5, note: "Visa; eligible at Costco Gas." },

    // TRANSIT
    {
      cardId: "chaseFreedom", category: "transit", display: "5% back", value: 5, priority: 10,
      note: "Q3 public-transit bonus; $1,500 combined Q3 cap.", activationKey: "chaseActivated"
    },
    {
      cardId: "discover", category: "transit", display: "5% back", value: 5, priority: 10,
      note: "Q3 Transportation bonus; $1,500 combined Q3 cap.", activationKey: "discoverActivated"
    },
    { cardId: "citiDoubleCash", category: "transit", display: "2% total", value: 2 },
    { cardId: "fidelityVisa", category: "transit", display: "2% back", value: 2 },

    // EV
    {
      cardId: "chaseFreedom", category: "ev", display: "5% back", value: 5,
      note: "Q3 EV-charging bonus; $1,500 combined Q3 cap.", activationKey: "chaseActivated"
    },
    { cardId: "citiDoubleCash", category: "ev", display: "2% total", value: 2 },
    { cardId: "fidelityVisa", category: "ev", display: "2% back", value: 2 },

    // DRUGSTORE
    {
      cardId: "discover", category: "drugstore", display: "5% back", value: 5,
      note: "Q3 drug-store bonus; $1,500 combined Q3 cap.", activationKey: "discoverActivated"
    },
    { cardId: "chaseFreedomUnlimited", category: "drugstore", display: "3% back", value: 3 },
    { cardId: "citiDoubleCash", category: "drugstore", display: "2% total", value: 2 },
    { cardId: "fidelityVisa", category: "drugstore", display: "2% back", value: 2 },

    // DINING
    { cardId: "chaseFreedomUnlimited", category: "dining", display: "3% back", value: 3, priority: 10, note: "Includes takeout and eligible delivery." },
    { cardId: "samsMastercard", category: "dining", display: "3% Sam's Cash", value: 3, priority: 10, note: "Dining and takeout." },
    { cardId: "citiDoubleCash", category: "dining", display: "2% total", value: 2 },
    { cardId: "fidelityVisa", category: "dining", display: "2% back", value: 2 },

    // GROCERY
    { cardId: "citiDoubleCash", category: "grocery", display: "2% total", value: 2, priority: 10 },
    { cardId: "fidelityVisa", category: "grocery", display: "2% back", value: 2, priority: 10 },
    { cardId: "chaseFreedomUnlimited", category: "grocery", display: "1.5% back", value: 1.5 },
    { cardId: "chaseFreedom", category: "grocery", display: "1% back", value: 1 },
    { cardId: "discover", category: "grocery", display: "1% back", value: 1 },
    { cardId: "samsMastercard", category: "grocery", display: "1% Sam's Cash", value: 1 },

    // COSTCO IN-CLUB — U.S. warehouses accept Visa credit cards.
    { cardId: "fidelityVisa", category: "costco", display: "2% back", value: 2, why: "Best flat-rate Visa in your wallet; U.S. Costco warehouses accept Visa credit cards." },
    { cardId: "chaseFreedomUnlimited", category: "costco", display: "1.5% back", value: 1.5 },
    { cardId: "chaseFreedom", category: "costco", display: "1% back", value: 1 },

    // SAM'S CLUB is computed dynamically in app.js because Club vs Plus changes the ranking.

    // WALMART — merchant-specific shortcut. No special Q3 bonus among this wallet.
    { cardId: "citiDoubleCash", category: "walmart", display: "2% total", value: 2, priority: 10, note: "Best flat-rate option in your current wallet." },
    { cardId: "fidelityVisa", category: "walmart", display: "2% back", value: 2, priority: 10, note: "Best flat-rate option in your current wallet." },
    { cardId: "chaseFreedomUnlimited", category: "walmart", display: "1.5% back", value: 1.5 },
    { cardId: "chaseFreedom", category: "walmart", display: "1% back", value: 1 },
    { cardId: "discover", category: "walmart", display: "1% back", value: 1 },
    { cardId: "samsMastercard", category: "walmart", display: "1% Sam's Cash", value: 1 },

    // TARGET — merchant-specific shortcut. No special Q3 bonus among this wallet.
    { cardId: "citiDoubleCash", category: "target", display: "2% total", value: 2, priority: 10, note: "Best flat-rate option in your current wallet." },
    { cardId: "fidelityVisa", category: "target", display: "2% back", value: 2, priority: 10, note: "Best flat-rate option in your current wallet." },
    { cardId: "chaseFreedomUnlimited", category: "target", display: "1.5% back", value: 1.5 },
    { cardId: "chaseFreedom", category: "target", display: "1% back", value: 1 },
    { cardId: "discover", category: "target", display: "1% back", value: 1 },
    { cardId: "samsMastercard", category: "target", display: "1% Sam's Cash", value: 1 },

    // SAM'S GAS — treated like general gas for this wallet.
    { cardId: "samsMastercard", category: "samsGas", display: "5% Sam's Cash", value: 5, priority: 30,
      note: "First $6,000/year in qualifying gas, then 1%.",
      why: "Same 5% rate as the rotating cards, but its gas cap is a separate $6,000 annual bucket." },
    { cardId: "chaseFreedom", category: "samsGas", display: "5% back", value: 5, priority: 20,
      note: "Q3 bonus; $1,500 combined Q3 cap.", activationKey: "chaseActivated",
      extra: "Activate by Sep 14, 2026." },
    { cardId: "discover", category: "samsGas", display: "5% back", value: 5, priority: 10,
      note: "Q3 bonus; $1,500 combined Q3 cap.", activationKey: "discoverActivated" },
    { cardId: "citiDoubleCash", category: "samsGas", display: "2% total", value: 2, note: "1% when you buy + 1% as you pay." },
    { cardId: "fidelityVisa", category: "samsGas", display: "2% back", value: 2, note: "When rewards are deposited into an eligible Fidelity account." },
    { cardId: "chaseFreedomUnlimited", category: "samsGas", display: "1.5% back", value: 1.5 },

    // DEPARTMENT STORES — generic department-store merchants only.
    { cardId: "citiDoubleCash", category: "department", display: "2% total", value: 2, priority: 10, note: "Best flat-rate option in your current wallet." },
    { cardId: "fidelityVisa", category: "department", display: "2% back", value: 2, priority: 10, note: "Best flat-rate option in your current wallet." },
    { cardId: "chaseFreedomUnlimited", category: "department", display: "1.5% back", value: 1.5 },
    { cardId: "chaseFreedom", category: "department", display: "1% back", value: 1 },
    { cardId: "discover", category: "department", display: "1% back", value: 1 },
    { cardId: "samsMastercard", category: "department", display: "1% Sam's Cash", value: 1 },

    // COSTCO FOOD COURT — conservative rule: treat as Costco/warehouse coding unless your statement proves restaurant coding.
    { cardId: "fidelityVisa", category: "costcoFood", display: "2% back", value: 2, priority: 10,
      note: "Conservative pick: treat the food court as Costco/warehouse coding. If your statement shows restaurant coding, a dining card may earn more.",
      why: "Chase says food sold inside stores is not automatically dining unless the merchant sets the purchase up as a restaurant category." },
    { cardId: "chaseFreedomUnlimited", category: "costcoFood", display: "1.5% back", value: 1.5,
      note: "Visa; use 3% dining only if your actual Costco Food Court transaction codes as a restaurant." },
    { cardId: "chaseFreedom", category: "costcoFood", display: "1% back", value: 1 },

    // AMAZON
    { cardId: "citiDoubleCash", category: "amazon", display: "2% total", value: 2, priority: 10 },
    { cardId: "fidelityVisa", category: "amazon", display: "2% back", value: 2, priority: 10 },
    { cardId: "chaseFreedomUnlimited", category: "amazon", display: "1.5% back", value: 1.5 },
    { cardId: "chaseFreedom", category: "amazon", display: "1% back", value: 1 },
    { cardId: "discover", category: "amazon", display: "1% back", value: 1 },
    { cardId: "samsMastercard", category: "amazon", display: "1% Sam's Cash", value: 1 },

    // ONLINE
    { cardId: "citiDoubleCash", category: "online", display: "2% total", value: 2, priority: 10 },
    { cardId: "fidelityVisa", category: "online", display: "2% back", value: 2, priority: 10 },
    { cardId: "chaseFreedomUnlimited", category: "online", display: "1.5% back", value: 1.5 },
    { cardId: "chaseFreedom", category: "online", display: "1% back", value: 1 },
    { cardId: "discover", category: "online", display: "1% back", value: 1 },
    { cardId: "samsMastercard", category: "online", display: "1% Sam's Cash", value: 1 },

    // TRAVEL — generic direct travel only; portal bonuses are surfaced as notes.
    {
      cardId: "citiDoubleCash", category: "travel", display: "2% total", value: 2, priority: 10,
      note: "Generic travel. Citi says 5% total on hotels, car rentals & attractions booked through Citi Travel."
    },
    {
      cardId: "fidelityVisa", category: "travel", display: "2% back", value: 2, priority: 10,
      note: "Generic travel."
    },
    {
      cardId: "chaseFreedomUnlimited", category: "travel", display: "1.5% direct / 5% Chase Travel", value: 1.5,
      note: "Use Chase Travel for the 5% rate."
    },

    // LIVE ENTERTAINMENT
    {
      cardId: "chaseFreedom", category: "entertainment", display: "5% back", value: 5,
      note: "Q3 select-live-entertainment bonus; $1,500 combined Q3 cap.", activationKey: "chaseActivated"
    },
    { cardId: "citiDoubleCash", category: "entertainment", display: "2% total", value: 2 },
    { cardId: "fidelityVisa", category: "entertainment", display: "2% back", value: 2 },

    // EVERYTHING ELSE
    { cardId: "citiDoubleCash", category: "other", display: "2% total", value: 2, priority: 10, note: "1% when you buy + 1% as you pay." },
    { cardId: "fidelityVisa", category: "other", display: "2% back", value: 2, priority: 10, note: "2% value when deposited into eligible Fidelity account." },
    { cardId: "chaseFreedomUnlimited", category: "other", display: "1.5% back", value: 1.5 },
    { cardId: "chaseFreedom", category: "other", display: "1% back", value: 1 },
    { cardId: "discover", category: "other", display: "1% back", value: 1 },
    { cardId: "samsMastercard", category: "other", display: "1% Sam's Cash", value: 1 }
  ]
};
