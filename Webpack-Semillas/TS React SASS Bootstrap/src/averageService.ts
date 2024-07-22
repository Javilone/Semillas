export function getAvg(scores: number[]): number {
  return getTotalScore(scores) / scores.length;
}

export function getTotalScore(scores: number[]): number {
  return scores.reduce((score, count) => score + count);
}

export default { scores: [90, 75, 100, 99, 94, 30] };

console.log(`Api base: ${process.env.API_BASE}`);
