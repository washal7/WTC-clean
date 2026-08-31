(() => {
  const data = window.WTC_DATA;
  const WALLET_KEY = "wtc.wallet.v0.2";
  const PREFS_KEY = "wtc.prefs.v0.2";
  const LANG_KEY = "wtc.lang.v0.15";
  const $ = id => document.getElementById(id);
  const homeGrid = $("homeGrid");
  const resultPanel = $("resultPanel");
  const walletDialog = $("walletDialog");
  const walletList = $("walletList");

  const I18N = {
    en: {
      myCards:"My Cards", walletSettings:"Wallet & settings", localOnly:"Your selections stay only in this browser/device.",
      quarterlyActivation:"Quarterly bonus activation", chaseActivated:"Chase Freedom Q3 activated",
      discoverActivated:"Discover Q3 activated", needed5:"Needed for the 5% Q3 categories.",
      samsMembership:"Sam's Club membership", choose:"Choose…", samsHelp:"This changes the best card for eligible Sam's Club in-club purchases.",
      selectAll:"Select all", save:"Save", prototypeDisclaimer:"Personal prototype · verify issuer terms before unusual purchases.",
      useThisCard:"USE THIS CARD", topPick:"TOP PICK", alsoWallet:"Also in your wallet", sameRate:"Same-rate / next options",
      why:"Why", bonusIfActivated:"Bonus available if activated:", activationHint:"Mark activation in My Cards after you activate with the issuer.",
      chooseSams:"Choose Club or Plus under My Cards first. Sam's membership level changes the best answer.", noReward:"No active reward rule found for this category.",
      quarter:"2026 Q3 · Jul 1–Sep 30", verified:"Rewards verified Aug 16, 2026",
      movie:"Movies", concert:"Concerts", museum:"Museums", otherEntertainment:"Other Entertainment",
      online:"Other Online Shopping", department:"Department Stores", aliasEntertainmentHint:"This shortcut currently uses the same reward rule as the general entertainment category.",
      drugstoreHelpTitle:"Qualified drugstores",
      drugstoreHelp1:"Examples: CVS, Walgreens, Rite Aid.",
      drugstoreHelp2:"Not included: pharmacy counters inside Walmart, Target, Costco, or grocery stores.",
      departmentHelpTitle:"Department stores",
      departmentHelp1:"Use this for typical department stores only.",
      departmentHelp2:"Not included: Walmart, Target, warehouse clubs, or specialty electronics stores like Best Buy.",
      onlineHelpTitle:"Other online shopping",
      onlineHelp1:"Use this for non-Amazon online purchases.",
      costcoFoodHelpTitle:"Costco Food Court",
      costcoFoodHelp1:"This shortcut uses a conservative warehouse-club assumption.",
      costcoFoodHelp2:"If your statement shows restaurant coding, a dining card may earn more."
    },
    zh: {
      myCards:"我的卡", walletSettings:"卡包与设置", localOnly:"你的选择只保存在当前浏览器/设备中。",
      quarterlyActivation:"季度奖励激活状态", chaseActivated:"Chase Freedom 第三季度已激活",
      discoverActivated:"Discover 第三季度已激活", needed5:"需要激活后才能获得第三季度 5% 返点。",
      samsMembership:"Sam's Club 会员等级", choose:"请选择…", samsHelp:"会员等级会影响 Sam's Club 店内消费的最佳刷卡选择。",
      selectAll:"全选", save:"保存", prototypeDisclaimer:"个人测试版 · 特殊消费前请核对发卡行条款。",
      useThisCard:"刷这张卡", topPick:"最佳选择", alsoWallet:"你钱包里的其他选择", sameRate:"同返点 / 其他选择",
      why:"为什么", bonusIfActivated:"激活后可获得：", activationHint:"在发卡行完成激活后，到“我的卡”里勾选已激活。",
      chooseSams:"请先在“我的卡”中选择 Sam's Club 的 Club 或 Plus 会员等级；会员等级会改变推荐结果。", noReward:"这个类别目前没有可用的奖励规则。",
      quarter:"2026 Q3 · 7月1日–9月30日", verified:"返点信息核对于 2026年8月16日",
      movie:"电影", concert:"演唱会", museum:"博物馆", otherEntertainment:"其他娱乐",
      online:"其他网购", department:"百货商店", aliasEntertainmentHint:"这个快捷入口目前使用与“现场娱乐”相同的奖励规则。",
      drugstoreHelpTitle:"Qualified drugstore",
      drugstoreHelp1:"例如：CVS、Walgreens、Rite Aid。",
      drugstoreHelp2:"不包括：Walmart、Target、Costco 或超市里的 pharmacy 柜台。",
      departmentHelpTitle:"Department stores",
      departmentHelp1:"仅用于典型百货商店。",
      departmentHelp2:"不包括：Walmart、Target、仓储店，以及 Best Buy 这类专业电子零售店。",
      onlineHelpTitle:"其他网购",
      onlineHelp1:"用于 Amazon 以外的网上购物。",
      costcoFoodHelpTitle:"Costco 餐饮区",
      costcoFoodHelp1:"这里采用保守的仓储店编码假设。",
      costcoFoodHelp2:"如果你的账单显示为 restaurant 编码，餐饮卡可能返点更高。"
    },
    es: {
      myCards:"Mis tarjetas", walletSettings:"Tarjetas y ajustes", localOnly:"Tus selecciones se guardan solo en este navegador/dispositivo.",
      quarterlyActivation:"Activación del bono trimestral", chaseActivated:"Chase Freedom Q3 activado",
      discoverActivated:"Discover Q3 activado", needed5:"Necesario para obtener el 5% de las categorías de Q3.",
      samsMembership:"Membresía de Sam's Club", choose:"Elegir…", samsHelp:"El nivel de membresía cambia la mejor tarjeta para compras elegibles dentro de Sam's Club.",
      selectAll:"Seleccionar todo", save:"Guardar", prototypeDisclaimer:"Prototipo personal · verifica los términos del emisor antes de compras inusuales.",
      useThisCard:"USA ESTA TARJETA", topPick:"MEJOR OPCIÓN", alsoWallet:"Otras opciones en tu cartera", sameRate:"Mismo rendimiento / otras opciones",
      why:"Por qué", bonusIfActivated:"Bono disponible si activas:", activationHint:"Después de activar con el emisor, marca la activación en Mis tarjetas.",
      chooseSams:"Primero elige Club o Plus en Mis tarjetas. El nivel de membresía de Sam's cambia la recomendación.", noReward:"No hay una regla de recompensas activa para esta categoría.",
      quarter:"2026 Q3 · 1 jul–30 sep", verified:"Recompensas verificadas el 16 ago 2026",
      movie:"Cine", concert:"Conciertos", museum:"Museos", otherEntertainment:"Otro entretenimiento",
      online:"Otras compras en línea", department:"Grandes almacenes", aliasEntertainmentHint:"Este atajo usa por ahora la misma regla que la categoría general de entretenimiento.",
      drugstoreHelpTitle:"Farmacias válidas",
      drugstoreHelp1:"Ejemplos: CVS, Walgreens, Rite Aid.",
      drugstoreHelp2:"No incluye farmacias dentro de Walmart, Target, Costco o supermercados.",
      departmentHelpTitle:"Grandes almacenes",
      departmentHelp1:"Usa este atajo solo para grandes almacenes típicos.",
      departmentHelp2:"No incluye Walmart, Target, clubes mayoristas ni tiendas especializadas como Best Buy.",
      onlineHelpTitle:"Otras compras en línea",
      onlineHelp1:"Úsalo para compras en línea que no sean Amazon.",
      costcoFoodHelpTitle:"Comida en Costco",
      costcoFoodHelp1:"Este atajo usa una suposición conservadora de codificación de club mayorista.",
      costcoFoodHelp2:"Si el estado de cuenta muestra codificación de restaurante, una tarjeta de restaurantes puede rendir más."
    }
  };

  const CATEGORY_NAMES = {
    en:{ gas:"Gas", ev:"EV Charging", costco:"Costco", costcoGas:"Costco Gas", costcoFood:"Costco Food Court", sams:"Sam's Club", samsGas:"Sam's Gas", samsCafe:"Sam's Café", grocery:"Grocery", walmart:"Walmart", target:"Target", amazon:"Amazon", online:"Other Online Shopping", dining:"Dining", department:"Department Stores", drugstore:"Drugstore", travel:"Travel", transit:"Transit", other:"Other", entertainment:"Entertainment" },
    zh:{ gas:"加油", ev:"电动车充电", costco:"Costco 店内", costcoGas:"Costco 加油", costcoFood:"Costco 餐饮区", sams:"Sam's Club 店内", samsGas:"Sam's 加油", samsCafe:"Sam's 餐饮区", grocery:"超市买菜", walmart:"Walmart", target:"Target", amazon:"Amazon", online:"其他网购", dining:"餐饮", department:"百货商店", drugstore:"药店", travel:"旅行", transit:"公共交通", other:"其他", entertainment:"现场娱乐" },
    es:{ gas:"Gasolina", ev:"Carga EV", costco:"Costco", costcoGas:"Gasolina en Costco", costcoFood:"Comida en Costco", sams:"Sam's Club", samsGas:"Gasolina en Sam's", samsCafe:"Café de Sam's", grocery:"Supermercado", walmart:"Walmart", target:"Target", amazon:"Amazon", online:"Otras compras en línea", dining:"Restaurantes", department:"Grandes almacenes", drugstore:"Farmacia", travel:"Viajes", transit:"Transporte", other:"Otros", entertainment:"Entretenimiento" }
  };

  const NOTE_TRANSLATIONS = {
    zh: {
      "First $6,000/year in qualifying gas, then 1%.":"符合条件的加油消费每年前 $6,000 为 5%，之后为 1%。",
      "Same 5% rate as the rotating cards, but its gas cap is a separate $6,000 annual bucket.":"同样是 5%，但它有独立的每年 $6,000 加油额度，可把季度卡额度留给其他类别。",
      "Q3 bonus; $1,500 combined Q3 cap.":"第三季度奖励；季度奖励类别合计上限 $1,500。",
      "Activate by Sep 14, 2026.":"请在 2026年9月14日前激活。",
      "1% when you buy + 1% as you pay.":"消费时 1% + 还款时 1%，合计 2%。",
      "When rewards are deposited into an eligible Fidelity account.":"奖励存入符合条件的 Fidelity 账户时按 2% 计算。",
      "Q3 gas bonus; Costco Gas accepts Visa.":"第三季度加油奖励；Costco Gas 接受 Visa 信用卡。",
      "$1,500 combined Q3 bonus cap. Activate by Sep 14.":"第三季度奖励类别合计上限 $1,500；请在 9月14日前激活。",
      "Visa; eligible at Costco Gas.":"Visa，可在 Costco Gas 使用。",
      "Q3 public-transit bonus; $1,500 combined Q3 cap.":"第三季度公共交通奖励；季度奖励类别合计上限 $1,500。",
      "Q3 Transportation bonus; $1,500 combined Q3 cap.":"第三季度交通奖励；季度奖励类别合计上限 $1,500。",
      "Q3 EV-charging bonus; $1,500 combined Q3 cap.":"第三季度电动车充电奖励；季度奖励类别合计上限 $1,500。",
      "Q3 drug-store bonus; $1,500 combined Q3 cap.":"第三季度药店奖励；季度奖励类别合计上限 $1,500。",
      "Includes takeout and eligible delivery.":"包括外卖自取及符合条件的配送。",
      "Dining and takeout.":"餐饮及外卖自取。",
      "Best flat-rate Visa in your wallet; U.S. Costco warehouses accept Visa credit cards.":"你钱包里返点最高的固定返点 Visa；美国 Costco 仓库接受 Visa 信用卡。",
      "Generic travel. Citi says 5% total on hotels, car rentals & attractions booked through Citi Travel.":"普通旅行消费为 2%；通过 Citi Travel 预订酒店、租车和景点时，Citi 当前说明为合计 5%。",
      "Generic travel.":"普通旅行消费。",
      "Use Chase Travel for the 5% rate.":"通过 Chase Travel 才可获得 5%。",
      "Q3 select-live-entertainment bonus; $1,500 combined Q3 cap.":"第三季度指定现场娱乐奖励；季度奖励类别合计上限 $1,500。",
      "2% value when deposited into eligible Fidelity account.":"奖励存入符合条件的 Fidelity 账户时价值为 2%。",
      "3% from the Mastercard + 2% Plus membership on qualifying eligible in-club purchases.":"符合条件的店内消费：Mastercard 3% + Plus 会员 2%。",
      "Club members earn 1% from the Sam's Club Mastercard.":"Club 会员使用 Sam's Club Mastercard 获得 1%。",
      "For Plus members, this stacks the card's 3% with the membership's 2% on qualifying purchases.":"Plus 会员符合条件的消费可叠加信用卡 3% 和会员 2%。",
      "2% Fidelity card + 2% Plus membership on qualifying purchases.":"符合条件的消费：Fidelity 卡 2% + Plus 会员 2%。",
      "2% Fidelity card.":"Fidelity 卡 2%。",
      "2% Double Cash + 2% Plus membership on qualifying purchases.":"符合条件的消费：Double Cash 2% + Plus 会员 2%。",
      "2% total from Double Cash.":"Double Cash 合计 2%。",
      "1.5% card + 2% Plus membership on qualifying purchases.":"符合条件的消费：信用卡 1.5% + Plus 会员 2%。",
      "1.5% from the card.":"信用卡返点 1.5%。",
      "Best flat-rate option in your current wallet.":"你目前钱包里返点最高的固定返点选择。",
      "Conservative pick: treat the food court as Costco/warehouse coding. If your statement shows restaurant coding, a dining card may earn more.":"保守推荐：先按 Costco/仓储店类别计算。如果账单显示为 restaurant 编码，餐饮卡可能返点更高。",
      "Chase says food sold inside stores is not automatically dining unless the merchant sets the purchase up as a restaurant category.":"Chase 明确说明，店中店出售的餐饮并不会自动算作 Dining，除非商户把交易设置成餐厅类别。",
      "Visa; use 3% dining only if your actual Costco Food Court transaction codes as a restaurant.":"Visa 可用；只有当你实际的 Costco 餐饮区交易被编码为 restaurant 时，才按 3% 餐饮计算。",
      "Sam's Club café coding can vary. This recommendation uses the in-club rule unless you confirm restaurant coding on your statement.":"Sam's Club 餐饮区的商户编码可能不同。这里先按店内消费规则推荐；如果你的账单确认是 restaurant 编码，再按餐饮返点计算。"
    },
    es: {
      "First $6,000/year in qualifying gas, then 1%.":"5% en los primeros $6,000 al año en gasolina elegible; después, 1%.",
      "Same 5% rate as the rotating cards, but its gas cap is a separate $6,000 annual bucket.":"Tiene el mismo 5%, pero usa un límite anual separado de $6,000 para gasolina.",
      "Q3 bonus; $1,500 combined Q3 cap.":"Bono de Q3; límite combinado de $1,500 en Q3.",
      "Activate by Sep 14, 2026.":"Activa antes del 14 de septiembre de 2026.",
      "1% when you buy + 1% as you pay.":"1% al comprar + 1% al pagar, 2% total.",
      "When rewards are deposited into an eligible Fidelity account.":"2% de valor al depositar las recompensas en una cuenta Fidelity elegible.",
      "Q3 gas bonus; Costco Gas accepts Visa.":"Bono de gasolina de Q3; Costco Gas acepta Visa.",
      "$1,500 combined Q3 bonus cap. Activate by Sep 14.":"Límite combinado de $1,500 en Q3; activa antes del 14 de septiembre.",
      "Visa; eligible at Costco Gas.":"Visa; aceptada en Costco Gas.",
      "Q3 public-transit bonus; $1,500 combined Q3 cap.":"Bono de transporte público de Q3; límite combinado de $1,500.",
      "Q3 Transportation bonus; $1,500 combined Q3 cap.":"Bono de transporte de Q3; límite combinado de $1,500.",
      "Q3 EV-charging bonus; $1,500 combined Q3 cap.":"Bono de carga EV de Q3; límite combinado de $1,500.",
      "Q3 drug-store bonus; $1,500 combined Q3 cap.":"Bono de farmacia de Q3; límite combinado de $1,500.",
      "Includes takeout and eligible delivery.":"Incluye comida para llevar y entregas elegibles.",
      "Dining and takeout.":"Restaurantes y comida para llevar.",
      "Best flat-rate Visa in your wallet; U.S. Costco warehouses accept Visa credit cards.":"La mejor Visa de tasa fija de tu cartera; Costco en EE. UU. acepta tarjetas Visa.",
      "Generic travel. Citi says 5% total on hotels, car rentals & attractions booked through Citi Travel.":"Viajes generales: 2%. Citi indica 5% total en hoteles, alquiler de autos y atracciones reservados por Citi Travel.",
      "Generic travel.":"Viajes generales.",
      "Use Chase Travel for the 5% rate.":"Usa Chase Travel para obtener el 5%.",
      "Q3 select-live-entertainment bonus; $1,500 combined Q3 cap.":"Bono de Q3 en entretenimiento en vivo seleccionado; límite combinado de $1,500.",
      "2% value when deposited into eligible Fidelity account.":"2% de valor al depositar en una cuenta Fidelity elegible.",
      "3% from the Mastercard + 2% Plus membership on qualifying eligible in-club purchases.":"3% de la Mastercard + 2% de membresía Plus en compras elegibles dentro del club.",
      "Club members earn 1% from the Sam's Club Mastercard.":"Los miembros Club ganan 1% con la Sam's Club Mastercard.",
      "For Plus members, this stacks the card's 3% with the membership's 2% on qualifying purchases.":"Para miembros Plus, el 3% de la tarjeta se combina con el 2% de la membresía.",
      "2% Fidelity card + 2% Plus membership on qualifying purchases.":"2% de Fidelity + 2% de membresía Plus en compras elegibles.",
      "2% Fidelity card.":"2% con la tarjeta Fidelity.",
      "2% Double Cash + 2% Plus membership on qualifying purchases.":"2% de Double Cash + 2% de membresía Plus en compras elegibles.",
      "2% total from Double Cash.":"2% total con Double Cash.",
      "1.5% card + 2% Plus membership on qualifying purchases.":"1.5% de la tarjeta + 2% de membresía Plus en compras elegibles.",
      "1.5% from the card.":"1.5% con la tarjeta.",
      "Best flat-rate option in your current wallet.":"La mejor opción de tasa fija de tu cartera actual.",
      "Conservative pick: treat the food court as Costco/warehouse coding. If your statement shows restaurant coding, a dining card may earn more.":"Opción conservadora: trata la zona de comida como Costco/club mayorista. Si el estado de cuenta la clasifica como restaurante, una tarjeta de restaurantes puede rendir más.",
      "Chase says food sold inside stores is not automatically dining unless the merchant sets the purchase up as a restaurant category.":"Chase indica que la comida vendida dentro de tiendas no cuenta automáticamente como restaurantes, salvo que el comercio procese la compra en una categoría de restaurante.",
      "Visa; use 3% dining only if your actual Costco Food Court transaction codes as a restaurant.":"Usa 3% en restaurantes solo si la compra real en Costco aparece codificada como restaurante.",
      "Sam's Club café coding can vary. This recommendation uses the in-club rule unless you confirm restaurant coding on your statement.":"La codificación del café de Sam's Club puede variar. Esta recomendación usa la regla de compra dentro del club salvo que confirmes una codificación de restaurante."
    }
  };

  const GROUPS = [
    { items:["gas","ev"] },
    { items:["costco","costcoGas","costcoFood"] },
    { items:["sams","samsGas","samsCafe"] },
    { items:["grocery","walmart","target"] },
    { items:["movie","concert","museum","otherEntertainment"] },
    { items:["amazon","online"] }
  ];
  const SINGLES = ["dining","department","drugstore","travel","transit","other"];
  const ENTERTAINMENT_ALIASES = ["movie","concert","museum","otherEntertainment"];

  function detectLanguage() {
    const saved = localStorage.getItem(LANG_KEY);
    if (["en","zh","es"].includes(saved)) return saved;
    const browser = (navigator.language || "en").toLowerCase();
    if (browser.startsWith("zh")) return "zh";
    if (browser.startsWith("es")) return "es";
    return "en";
  }
  let lang = detectLanguage();
  const t = key => I18N[lang][key] || I18N.en[key] || key;
  const categoryName = id => (
    CATEGORY_NAMES[lang]?.[id] || I18N[lang]?.[id] ||
    CATEGORY_NAMES.en?.[id] || I18N.en?.[id] || id
  );

  function translateNote(text="") { return lang === "en" ? text : (NOTE_TRANSLATIONS[lang]?.[text] || text); }
  function translateDisplay(text="") {
    if (lang === "zh") return text.replace(/% back/g,"% 返现").replace(/% total/g,"% 合计").replace("1.5% direct / 5% Chase Travel", "直接消费 1.5% / Chase Travel 5%");
    if (lang === "es") return text.replace(/% back/g,"% de reembolso").replace("1.5% direct / 5% Chase Travel", "1.5% directo / 5% con Chase Travel");
    return text;
  }
  function applyStaticTranslations() {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
    document.querySelectorAll("[data-i18n]").forEach(el => { const v = I18N[lang][el.dataset.i18n]; if (v) el.textContent = v; });
    $("quarterLabel").textContent = t("quarter");
    $("updatedLabel").textContent = t("verified");
    document.querySelectorAll(".language-option").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
  }
  function escapeHtml(value="") {
    return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
  }
  function loadJSON(key,fallback) { try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; } }

  let wallet = loadJSON(WALLET_KEY, data.cards.map(c => c.id));
  let prefs = loadJSON(PREFS_KEY, { chaseActivated:false, discoverActivated:false, samsMembership:"unknown" });
  const cardById = id => data.cards.find(c => c.id === id);

  function resolveTargetId(uiId) { return ENTERTAINMENT_ALIASES.includes(uiId) ? "entertainment" : uiId; }
  function uiLabel(id) { return categoryName(id); }

  function iconHTML(id) {
    const src = SINGLES.includes(id)
      ? `v15_${escapeHtml(id)}.png?v=15`
      : `assets_v15/icons/${escapeHtml(id)}.png?v=15`;
    return `<img class="icon-image" src="${src}" alt="">`;
  }

  function renderHome() {
    const groupArea = `
      <div class="group-area">
        ${GROUPS.map(group => `
          <div class="group-block ${group.items.length === 2 ? "compact" : ""}">
            <div class="group-items cols-2">
              ${group.items.map(id => `<button class="icon-button" data-ui-category="${escapeHtml(id)}" aria-label="${escapeHtml(uiLabel(id))}">${iconHTML(id)}<span class="icon-label">${escapeHtml(uiLabel(id))}</span></button>`).join("")}
            </div>
          </div>`).join("")}
      </div>`;
    const singleArea = `
      <div class="single-area">
        ${SINGLES.map(id => `<button class="icon-button" data-ui-category="${escapeHtml(id)}" aria-label="${escapeHtml(uiLabel(id))}">${iconHTML(id)}<span class="icon-label">${escapeHtml(uiLabel(id))}</span></button>`).join("")}
      </div>`;
    homeGrid.innerHTML = groupArea + singleArea;
    homeGrid.querySelectorAll("[data-ui-category]").forEach(btn => btn.addEventListener("click", () => showResult({ id: btn.dataset.uiCategory })));
  }

  function samsRewards() {
    if (!["samsMastercard","fidelityVisa","citiDoubleCash","chaseFreedomUnlimited","chaseFreedom","discover"].some(id => wallet.includes(id))) return [];
    if (prefs.samsMembership === "unknown") return [];
    const plus = prefs.samsMembership === "plus";
    const rows=[];
    function addFor(category, cafe=false) {
      const cafeNote = cafe ? "Sam's Club café coding can vary. This recommendation uses the in-club rule unless you confirm restaurant coding on your statement." : "";
      if (wallet.includes("samsMastercard")) rows.push({ cardId:"samsMastercard", category, display: plus ? "5% total*" : "1% Sam's Cash", value: plus ? 5 : 1, priority: plus ? 20 : 0, note: cafe ? cafeNote : (plus ? "3% from the Mastercard + 2% Plus membership on qualifying eligible in-club purchases." : "Club members earn 1% from the Sam's Club Mastercard."), why: plus && !cafe ? "For Plus members, this stacks the card's 3% with the membership's 2% on qualifying purchases." : "" });
      const plusAddon = plus ? 2 : 0;
      if (wallet.includes("fidelityVisa")) rows.push({ cardId:"fidelityVisa", category, display: plus ? "4% total*" : "2% back", value: 2 + plusAddon, note: cafe ? cafeNote : (plus ? "2% Fidelity card + 2% Plus membership on qualifying purchases." : "2% Fidelity card.") });
      if (wallet.includes("citiDoubleCash")) rows.push({ cardId:"citiDoubleCash", category, display: plus ? "4% total*" : "2% total", value: 2 + plusAddon, note: cafe ? cafeNote : (plus ? "2% Double Cash + 2% Plus membership on qualifying purchases." : "2% total from Double Cash.") });
      if (wallet.includes("chaseFreedomUnlimited")) rows.push({ cardId:"chaseFreedomUnlimited", category, display: plus ? "3.5% total*" : "1.5% back", value: 1.5 + plusAddon, note: cafe ? cafeNote : (plus ? "1.5% card + 2% Plus membership on qualifying purchases." : "1.5% from the card.") });
      if (wallet.includes("chaseFreedom")) rows.push({ cardId:"chaseFreedom", category, display: plus ? "3% total*" : "1% back", value: 1 + plusAddon, note: cafe ? cafeNote : "" });
      if (wallet.includes("discover")) rows.push({ cardId:"discover", category, display: plus ? "3% total*" : "1% back", value: 1 + plusAddon, note: cafe ? cafeNote : "" });
    }
    addFor("sams", false);
    addFor("samsCafe", true);
    return rows;
  }

  const allRewards = () => [...data.rewards, ...samsRewards()];
  const activationSatisfied = r => !r.activationKey || !!prefs[r.activationKey];
  function rankedRewards(categoryId) {
    return allRewards().filter(r => r.category === categoryId && wallet.includes(r.cardId) && activationSatisfied(r)).map(r => ({ ...r, card: cardById(r.cardId) })).filter(r => r.card).sort((a,b) => (b.value - a.value) || ((b.priority||0) - (a.priority||0)));
  }
  function inactiveBonuses(categoryId) {
    return allRewards().filter(r => r.category === categoryId && wallet.includes(r.cardId) && r.activationKey && !prefs[r.activationKey]).map(r => ({ ...r, card: cardById(r.cardId) })).filter(r => r.card).sort((a,b) => b.value - a.value);
  }
  function rulesHtml(r) {
    const bits = [];
    if (r.note) bits.push(translateNote(r.note));
    if (r.extra) bits.push(translateNote(r.extra));
    return bits.map(x => `<div class="rule-line">${escapeHtml(x)}</div>`).join("");
  }

  function helpHtml(uiId) {
    const target = resolveTargetId(uiId);
    if (target === "drugstore") {
      return `<div class="help-box"><strong>${escapeHtml(t("drugstoreHelpTitle"))}</strong><div class="help-line">${escapeHtml(t("drugstoreHelp1"))}</div><div class="help-line">${escapeHtml(t("drugstoreHelp2"))}</div></div>`;
    }
    if (target === "department") {
      return `<div class="help-box"><strong>${escapeHtml(t("departmentHelpTitle"))}</strong><div class="help-line">${escapeHtml(t("departmentHelp1"))}</div><div class="help-line">${escapeHtml(t("departmentHelp2"))}</div></div>`;
    }
    if (target === "online") {
      return `<div class="help-box"><strong>${escapeHtml(t("onlineHelpTitle"))}</strong><div class="help-line">${escapeHtml(t("onlineHelp1"))}</div></div>`;
    }
    if (target === "costcoFood") {
      return `<div class="help-box"><strong>${escapeHtml(t("costcoFoodHelpTitle"))}</strong><div class="help-line">${escapeHtml(t("costcoFoodHelp1"))}</div><div class="help-line">${escapeHtml(t("costcoFoodHelp2"))}</div></div>`;
    }
    return "";
  }

  function showResult(uiItem) {
    const uiId = uiItem.id;
    const targetId = resolveTargetId(uiId);
    $("resultCategory").textContent = uiLabel(uiId);
    $("inactiveBonusArea").innerHTML = "";
    $("categoryHelpArea").innerHTML = helpHtml(uiId);

    if (["sams","samsCafe"].includes(targetId) && prefs.samsMembership === "unknown") {
      $("bestCardArea").innerHTML = `<div class="no-result">${escapeHtml(t("chooseSams"))}</div>`;
      $("alternativesArea").innerHTML = "";
      resultPanel.classList.remove("hidden");
      return;
    }

    const ranked = rankedRewards(targetId);
    const inactive = inactiveBonuses(targetId);

    if (!ranked.length) {
      $("bestCardArea").innerHTML = `<div class="no-result">${escapeHtml(t("noReward"))}</div>`;
      $("alternativesArea").innerHTML = "";
    } else {
      const best = ranked[0];
      const tied = ranked.filter(r => r.value === best.value);
      const aliasHint = ENTERTAINMENT_ALIASES.includes(uiId) ? `<div class="alias-hint">${escapeHtml(t("aliasEntertainmentHint"))}</div>` : "";
      $("bestCardArea").innerHTML = `
        <div class="best-card">
          <div class="use-label">${escapeHtml(t(tied.length > 1 ? "topPick" : "useThisCard"))}</div>
          <div class="best-card-name">${escapeHtml(best.card.name)}</div>
          <div class="reward-value">${escapeHtml(translateDisplay(best.display))}</div>
          ${best.why ? `<div class="why-line"><strong>${escapeHtml(t("why"))}:</strong> ${escapeHtml(translateNote(best.why))}</div>` : ""}
          ${aliasHint}
          ${rulesHtml(best)}
        </div>`;
      const alternatives = ranked.slice(1, 5);
      $("alternativesArea").innerHTML = alternatives.length ? `<div class="alt-title">${escapeHtml(t(tied.length > 1 ? "sameRate" : "alsoWallet"))}</div>${alternatives.map(item => `
        <div class="alt-row"><div><div class="alt-card">${escapeHtml(item.card.name)}</div><div class="alt-note">${escapeHtml(translateNote(item.note || item.card.issuer || ""))}</div></div><div class="alt-reward">${escapeHtml(translateDisplay(item.display))}</div></div>`).join("")}` : "";
    }

    if (inactive.length) {
      $("inactiveBonusArea").innerHTML = `<div class="inactive-box"><strong>${escapeHtml(t("bonusIfActivated"))}</strong><br>${inactive.map(x => `${escapeHtml(x.card.name)} — ${escapeHtml(translateDisplay(x.display))}`).join("<br>")}<br><span style="color:rgba(228,233,246,.68)">${escapeHtml(t("activationHint"))}</span></div>`;
    }

    resultPanel.classList.remove("hidden");
  }

  function renderWallet() {
    walletList.innerHTML = data.cards.map(card => `
      <label class="wallet-item">
        <input type="checkbox" value="${escapeHtml(card.id)}" ${wallet.includes(card.id) ? "checked" : ""}>
        <span>
          <div class="wallet-card-name">${escapeHtml(card.name)}</div>
          <div class="wallet-issuer">${escapeHtml([card.issuer, card.network].filter(Boolean).join(" · "))}</div>
        </span>
      </label>`).join("");
    $("chaseActivated").checked = !!prefs.chaseActivated;
    $("discoverActivated").checked = !!prefs.discoverActivated;
    $("samsMembership").value = prefs.samsMembership || "unknown";
  }

  document.querySelectorAll(".language-option").forEach(btn => btn.addEventListener("click", () => {
    lang = btn.dataset.lang;
    localStorage.setItem(LANG_KEY, lang);
    applyStaticTranslations();
    renderHome();
    resultPanel.classList.add("hidden");
  }));
  $("openWalletBtn").addEventListener("click", () => { renderWallet(); walletDialog.showModal(); });
  $("selectAllBtn").addEventListener("click", () => walletList.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = true));
  $("saveWalletBtn").addEventListener("click", () => {
    wallet = [...walletList.querySelectorAll('input[type="checkbox"]:checked')].map(cb => cb.value);
    prefs = { chaseActivated: $("chaseActivated").checked, discoverActivated: $("discoverActivated").checked, samsMembership: $("samsMembership").value };
    localStorage.setItem(WALLET_KEY, JSON.stringify(wallet));
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  });
  $("closeResultBtn").addEventListener("click", () => resultPanel.classList.add("hidden"));

  applyStaticTranslations();
  renderHome();
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then(rs => rs.forEach(r => r.unregister()));
  }
  if (window.caches && caches.keys) { caches.keys().then(keys => keys.forEach(k => caches.delete(k))); }
})();