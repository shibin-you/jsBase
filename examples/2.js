var Book = function (id, name, price) {
  //私有属性
  var num = 0
  // 私有方法
  function check() {}
  // 特权方法
  this.getName = function () {}
  this.setName = function () {}
  //公有属性
  this.id = id
  this.name = name
  this.price = price
  // 公有方法
  this.copy = function () {}
  // 构造器
  this.setName(name)
}
// 类静态公有属性，对象不能访问
Book.language = 'en'
// 类静态公有方法，对象不能访问
Book.language = 'en'

Book.prototype.isSale = true

var book = new Book(1, 'Pro JavaScript Design Patterns', '￥80')
console.log(book.name)
console.log(book.isSale)

console.log(book.language) //undefined
console.log(Book.language) //en

// 通过闭包来实现类的静态变量
var Book = (function () {
  // 静态私有变量
  var pages = 500
  // 静态私有方法
  function sayName(name) {

  }
  return function (id, name, price) {
    //私有属性
    var num = 0
    // 私有方法
    function check() {}
    // 特权方法
    this.getName = function () {}
    this.setName = function () {}
    //公有属性
    this.id = id
    this.name = name
    this.price = price
    // 公有方法
    this.copy = function () {}
    // 构造器
    this.setName(name)
  }
})()
// var Person = function ({
//   name,
//   sex,
//   age
// }) {
//   if (this instanceof Person) {
//     this.name = name
//     this.sex = sex
//     this.age = age
//   } else {
//     return new Person({
//       name,
//       sex,
//       age
//     })
//   }
// }
// var a = new Person({
//   name: 'shibin',
//   sex: 'boy',
//   age: '10'
// })
// console.log(a.name)
// console.log(a.age)
// console.log(a.sex)
// var b = Person({
//   name: 'shibin',
//   sex: 'boy',
//   age: '10'
// })
// console.log(b.name)
// console.log(b.age)
// console.log(b.sex)


// 继承
//子类的原型对象 类式继承
// function Parent() {
//   this.parentValue = 1
//   this.name = 'parent'
// }
// Parent.prototype.type = 'Dog'

// function Son() {
//   this.value = 3
//   this.name = 'son'
// }
// Son.prototype = new Parent()
// var son = new Son()
// console.log(son.parentValue)
// console.log(son.value)
// console.log(son.type)
// // 用instanceof 来检查某个对象是否是某个类的实例
// console.log(son instanceof Parent) //true
// console.log(son instanceof Son) //true
// console.log(Son instanceof Parent) //false
// console.log(Son.prototype instanceof Parent) //true

/*
缺点
1、由于子类通过原型prototype对父类进行了实例化，继承了父类，所以父类中的共有属性要是引用类型，就会在子类中被所有实例共用，子类的实例更改子类原型从父类构造函数继承来的共有属性就会影响其他子类
2、实例化父类的时候无法对父类构造函数内的属性传递参数
*/

// //构造函数继承
// function Parent(id) {
//   this.id = id
//   this.books = ['js', 'html', 'css']
// }
// Parent.prototype.showBooks = function () {
//   console.log(this.books)
// }

// function Son(id) {
//   Parent.call(this, id)
// }
// var son1 = new Son(1)
// var son2 = new Son(2)

// son1.books.push('nodejs')
// console.log(son1.books) //[ 'js', 'html', 'css', 'nodejs' ]
// console.log(son2.books) //[ 'js', 'html', 'css' ]
// son1.showBooks() // error son1.showBooks is not a function
// 缺点 父类的原型不会被继承 


// // 组合继承
// function Parent(id) {
//   this.id = id
//   this.books = ['js', 'html', 'css']
// }
// Parent.prototype.getId = function () {
//   console.log(this.id)
// }
// //  构造函数继承
// function Son(id, time) {
//   Parent.call(this, id)
//   this.time = time
// }
// // 类式继承
// Son.prototype = new Parent()
// var son1 = new Son(1, 3000)
// var son2 = new Son(2, 1993)
// son1.books.push('Nodejs in Action')
// console.log(son1.books) //[ 'js', 'html', 'css', 'Nodejs in Action' ]
// son1.getId() //1
// console.log(son1.time) //3000
// console.log(son2.books) //[ 'js', 'html', 'css' ]
// son2.getId() //2
// console.log(son2.time) //1993



//原型式继承
// function inheritObject(o) {
//   function F() {}
//   F.prototype = o
//   return new F()
// }
// var book = {
//   name: 'js book',
//   alikeBook: ['css', 'html']
// }
// var book1 = inheritObject(book)
// book1.name = 'nodejs book'
// book1.alikeBook.push('koa')

// var book2 = inheritObject(book)
// book2.name = 'python book'
// book2.alikeBook.push('flask')

// console.log(book1.name) //nodejs book
// console.log(book1.alikeBook) //[ 'css', 'html', 'koa', 'flask' ]
// console.log(book2.name) //python book
// console.log(book2.alikeBook) //[ 'css', 'html', 'koa', 'flask' ]
// console.log(book.name) //js book
// console.log(book.alikeBook) //[ 'css', 'html', 'koa', 'flask' ]


// 寄生式继承
// function inheritObject(o) {
//   function F() {}
//   F.prototype = o
//   return new F()
// }
// var book = {
//   name: 'js book',
//   alikeBook: ['css', 'html']
// }

// function createBook(obj) {
//   var o = inheritObject(obj)
//   // 拓展新对象
//   o.getName = function () {
//     console.log(name)
//   }
//   return o
// }



// 寄生组合继承
