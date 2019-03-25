const formatePrice = price => price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')

export default formatePrice;
