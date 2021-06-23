const Product = require('./model/product')

class SampleDb {

  constructor() {
    this.products = [
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: 'A large phone with 4 color',
        heading2: 'サンプルテキスト２',
        heading3: 'サンプルテキスト３',
        headingtext1: '',
        headingtext2: '',
        headingtext3: ''
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: 'A great phone with 6 color',
        heading2: 'サンプルテキスト２',
        heading3: 'サンプルテキスト３',
        headingtext1: '詳細説明　詳細説明　詳細説明　詳細説明　詳細説明　詳細説明　詳細説明　詳細説明',
        headingtext2: 'スペック　スペック　スペック　スペック　スペック　スペック　スペック　スペック',
        headingtext3: '取扱方法　取扱方法　取扱方法　取扱方法　取扱方法　取扱方法　取扱方法　取扱方法　'
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading1: 'A standard phone with 3 color',
        heading2: 'サンプルテキスト２',
        heading3: 'サンプルテキスト３',
        headingtext1: '詳細説明　詳細説明　詳細説明　詳細説明　詳細説明　詳細説明　詳細説明　詳細説明',
        headingtext2: 'スペック　スペック　スペック　スペック　スペック　スペック　スペック　スペック',
        headingtext3: '取扱方法　取扱方法　取扱方法　取扱方法　取扱方法　取扱方法　取扱方法　取扱方法　'
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Special',
        price: 999,
        description: '',
        heading1: 'A special phone with 5 color',
        heading2: 'サンプルテキスト２',
        heading3: 'サンプルテキスト３',
        headingtext1: '詳細説明　詳細説明　詳細説明　詳細説明　詳細説明　詳細説明　詳細説明　詳細説明',
        headingtext2: 'スペック　スペック　スペック　スペック　スペック　スペック　スペック　スペック',
        headingtext3: '取扱方法　取扱方法　取扱方法　取扱方法　取扱方法　取扱方法　取扱方法　取扱方法　'
      }
    ]
  }

  async initDb(){
    await this.cleanDb()
    this.pushProductsToDb()
  }

  async cleanDb() {
    await Product.deleteMany({})
  }

  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }

  seeDb() {
    this.pushProductsToDb()
  }

}

module.exports = SampleDb