abonnements.push(
    {
        name: "TotalEnergie - Offre standard fixe",
        lastUpdate: "2024-01-19",
        prices: [{
            puissance: 3,
            abonnement: 9.51,
            bleu: {
                prixKwhHC: 18.92
            }
        },
        {
            puissance: 6,
            abonnement: 12.50,
            bleu: {
                prixKwhHC: 18.92
            }
        },
        {
            puissance: 9,
            abonnement: 15.75,
            bleu: {
                prixKwhHC: 18.92
            }
        },
        {
            puissance: 12,
            abonnement: 19.08,
            bleu: {
                prixKwhHC: 18.92
            }
        },
        {
            puissance: 15,
            abonnement: 22.14,
            bleu: {
                prixKwhHC: 18.92
            }
        },
        {
            puissance: 18,
            abonnement: 25.17,
            bleu: {
                prixKwhHC: 18.92
            }
        },
        {
            puissance: 24,
            abonnement: 32.05,
            bleu: {
                prixKwhHC: 18.92
            }
        },
        {
            puissance: 30,
            abonnement: 30.71,
            bleu: {
                prixKwhHC: 18.92
            }
        },
        {
            puissance: 36,
            abonnement: 44.62,
            bleu: {
                prixKwhHC: 18.92
            }
        }],
        hc: [{
            start: {hour:0, minute:0},
            end: {hour:24, minute:0}
        }],
        hasHCCustom: false,
        hasSpecialDaysCustom: false,
        specialDays: [],
        getDayType: function (day) {
            let dayType = "bleu";
            return dayType;
        }
    }
);

