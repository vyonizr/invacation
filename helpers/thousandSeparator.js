module.exports = function thousandSeparator(num) {
  num = String(num)
  return (
    num
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  )
}