module.exports = function thousandSeparator(num) {
  return (
    num
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  )
}