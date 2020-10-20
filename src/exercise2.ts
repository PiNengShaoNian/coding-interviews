class Singleton {
  private constructor() {}

  private static instance: Singleton | null = null

  static Instance(): Singleton {
    if (!this.instance) this.instance = new Singleton()

    return this.instance
  }
}
