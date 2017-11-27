export class AppService {
  amount = 1
  total = 0

  increment() {
    this.total += this.amount
  }
}
