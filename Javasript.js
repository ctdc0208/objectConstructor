function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    console.log(name + "by" + author, pages + "pages", read)
  }
}

const theHobbit = new Book("The Hobbit by J.R.R","J.R.R. Tolkien", 295," not read yet")
theHobbit.info()
