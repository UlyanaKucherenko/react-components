class QuotesService {
  getResource = async (url) => {
    let res = await fetch(url)

    if (!res) {
      throw new Error(`Error statusCode: ${res.statusCode} `)
    }

    return await res.json()
  }

  getAllQuotes = () => {
    return  this.getResource(`https://quote-garden.herokuapp.com/api/v3/quotes`)
  }
}