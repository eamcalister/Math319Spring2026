var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Mathematics Department Fort Lewis College  Last Updated:       "
},
{
  "id": "PooledCovid",
  "level": "1",
  "url": "PooledCovid.html",
  "type": "Worksheet",
  "number": "",
  "title": "More on Pooled Testing",
  "body": " More on Pooled Testing    Occasionally we should stop and do some follow-up on some things we've learned. It can serve as an exercise in synthesizing previously learned material and motivate things we will see in the future. In this scenario, you will play the role of a mathematician\/statistician advising local authorities on how to best preserve your stock of tests for a new and disturbing virus.  The virus is called Trans-Systemic Virus 4 (TSV-4). There is no cure and late stage symptoms include hallucinations, violent outbursts, and explosive diarrhea. An unknown fraction, , of the population has the virus, but is pre-symptomatic. The number of tests is limited. Thus, we want to test as many people as possible while using the minimum number of tests.     (Two Sample Pooling) Recall the pooled sample COVID testing problem. In that problem we had the probability that any individual was infected was . If we pooled two samples and let be the number of tests required to determine if two people have COVID, then we obtained the following probability mass function for :                        We then obtained the expected value . This is fewer than two tests, so pooling sounds like a good idea in this case.     We wish to consider the expected number of tests as a function of when we pool two samples. Using technology of your choice, decide how high can go before it becomes more economical to just test everyone individually. Write a paragraph and include some graphic that you could use to explain your answer to the local authorities.      Now the local officials ask you the following: How do we decide how many samples to pool to minimize the number of tests we use, given that we can pool at most samples together at once? Answer this for them. Again, write a paragraph and give answers that are digestible to both a math professor and the local authorities.   Note: The optimal pool size should depend on . Your answer should be something like \"For in some range, the optimal size is blank . For this other range, it's something else .\"         In the previous problem, the reasoning behind the in the first part is that selections are essentially like rolling a sided die twice; unless both rolls come up , we don't need to test again. This is saying the person A being positive is independent of person B being positive. We wish to explore whether this is really true, and if not, is it close enough?     Consider the following scenario: A population of individuals has a positivity rate of . Use simulation to estimate the probability of choosing two people out of the who are both negative. Is it ? What is the reason?      What circumstances of our problem could make the estimate of reasonable?      "
},
{
  "id": "PooledCovid-2-2",
  "level": "2",
  "url": "PooledCovid.html#PooledCovid-2-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  (Two Sample Pooling) Recall the pooled sample COVID testing problem. In that problem we had the probability that any individual was infected was . If we pooled two samples and let be the number of tests required to determine if two people have COVID, then we obtained the following probability mass function for :                        We then obtained the expected value . This is fewer than two tests, so pooling sounds like a good idea in this case.     We wish to consider the expected number of tests as a function of when we pool two samples. Using technology of your choice, decide how high can go before it becomes more economical to just test everyone individually. Write a paragraph and include some graphic that you could use to explain your answer to the local authorities.      Now the local officials ask you the following: How do we decide how many samples to pool to minimize the number of tests we use, given that we can pool at most samples together at once? Answer this for them. Again, write a paragraph and give answers that are digestible to both a math professor and the local authorities.   Note: The optimal pool size should depend on . Your answer should be something like \"For in some range, the optimal size is blank . For this other range, it's something else .\"    "
},
{
  "id": "PooledCovid-3-1",
  "level": "2",
  "url": "PooledCovid.html#PooledCovid-3-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  In the previous problem, the reasoning behind the in the first part is that selections are essentially like rolling a sided die twice; unless both rolls come up , we don't need to test again. This is saying the person A being positive is independent of person B being positive. We wish to explore whether this is really true, and if not, is it close enough?     Consider the following scenario: A population of individuals has a positivity rate of . Use simulation to estimate the probability of choosing two people out of the who are both negative. Is it ? What is the reason?      What circumstances of our problem could make the estimate of reasonable?    "
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
