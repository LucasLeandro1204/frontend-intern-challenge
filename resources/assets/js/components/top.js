export default {
  data () {
    return {
      links: [
        {
          "id":"23094",
          "hits":1003,
          "url":"http://globo.com",
          "shortUrl":"http://chr.dc/9dtr4"
        },
        {
          "id":"76291",
          "hits":1922,
          "url":"http://google.com",
          "shortUrl":"http://chr.dc/aUx71"
        },
        {
          "id":"66761",
          "hits":765,
          "url":"http://terra.com.br",
          "shortUrl":"http://chr.dc/u9jh3"
        },
        {
          "id":"70001",
          "hits":1519,
          "url":"http://facebook.com",
          "shortUrl":"http://chr.dc/qy61p"
        },
        {
          "id":"21220",
          "hits":311,
          "url":"http://diariocatarinense.com.br",
          "shortUrl":"http://chr.dc/87itr"
        },
        {
          "id":"10743",
          "hits":722,
          "url":"http://uol.com.br",
          "shortUrl":"http://chr.dc/y81xc"
        },
        {
          "id":"19122",
          "hits":1320,
          "url":"http://chaordic.com.br",
          "shortUrl":"http://chr.dc/qy5k9"
        },
        {
          "id":"55324",
          "hits":997,
          "url":"http://youtube.com",
          "shortUrl":"http://chr.dc/1w5tg"
        },
        {
          "id":"70931",
          "hits":487,
          "url":"http://twitter.com",
          "shortUrl":"http://chr.dc/7tmv1"
        },
        {
          "id":"87112",
          "hits":130,
          "url":"http://bing.com",
          "shortUrl":"http://chr.dc/9opw2"
        }
      ]
    }
  },

  selector () {
    return '#top article';
  },

  template () {
    return `
      <h1>TOP ${this.filter().length}</h1>
      <ul>
        ${this.filter().map((link) => (
          `<li><a href='${link.url}'>${link.url}</a><span>${link.hits}</span></li>`
          )
        ).join('')}
      </ul>
    `
  },

  methods: {
    filter (length = 5) {
      return this.links.sort((a, b) => b.hits - a.hits).slice(0, length);
    }
  }
}
