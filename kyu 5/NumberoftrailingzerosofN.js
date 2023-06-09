





function zeros(n) {
    for (var result = 0, i = 5; n >= i; i *= 5) result += 0 | n / i
    return result
  }