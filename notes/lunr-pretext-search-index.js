var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ch-course-notes",
  "level": "1",
  "url": "ch-course-notes.html",
  "type": "Article",
  "number": "",
  "title": "Course Notes",
  "body": " Course Notes   The following notes are intended to remind you what we covered each week. They are not a substitute for attending class and not a substitute for reading the textbook.      "
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
