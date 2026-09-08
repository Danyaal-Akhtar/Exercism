export function dayRate(ratePerHour) {
  return ratePerHour * 8
}

export function daysInBudget(budget, ratePerHour) {
  const dailyRate = dayRate(ratePerHour)
  return Math.floor(budget / dailyRate)
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const monthlyRate = dayRate(ratePerHour) * 22
  const discountedMonthlyRate = monthlyRate * (1 - discount)
  const months = Math.floor(numDays / 22)
  const remainingDays = numDays % 22

  return Math.ceil(
    months * discountedMonthlyRate +
    remainingDays * dayRate(ratePerHour)
  )
}

