export const statisticsQuery = () => `{
  
    collateralType(id: "ETH-A") {
currentPrice {
    value
}
      totalAnnualizedStabilityFee
    }
    systemState(id: "current") {
      currentRedemptionRate {
        eightHourlyRate
        annualizedRate
        hourlyRate
        createdAt
      }
      currentRedemptionPrice {
        value
      }
    }

  }`
