var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Article",
  "number": "",
  "title": "In-Class Activities",
  "body": " In-Class Activities    Mathematics Department Fort Lewis College  Last Updated:         These activities are designed to be used in class to help students understand the material. They are not graded, but students are encouraged to work on them in groups and ask the instructor for help when needed.     "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
