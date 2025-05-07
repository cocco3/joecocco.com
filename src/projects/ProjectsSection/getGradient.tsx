export function getGradient(index: number) {
  const gradients = [
    'linear-gradient(120deg, #6d92a1, #c2b49a)',
    'linear-gradient(75deg, #a1686d, #b8a58f)',
    'linear-gradient(200deg, #5f799d, #a4b4c0)',
    'linear-gradient(145deg, #7d6570, #b3a27a)',
    'linear-gradient(180deg, #48669c, #8fa88b)',
    'linear-gradient(220deg, #866597, #b9a7b1)',
  ]

  return gradients[index % gradients.length]
}
