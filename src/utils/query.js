export const statisticsQuery = () => `{
  
    collateralType(id: "ETH-A") {

      totalAnnualizedStabilityFee
    }
    systemState(id: "current") {
      currentRedemptionRate {
        eightHourlyRate
        annualizedRate
        hourlyRate
        createdAt
      }
      currentCoinMedianizerUpdate{
        value
      }
      currentRedemptionPrice {
        value
      }
    }

  }`
