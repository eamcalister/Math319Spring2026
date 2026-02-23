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
},
{
  "id": "DiscreteRVModels",
  "level": "1",
  "url": "DiscreteRVModels.html",
  "type": "Worksheet",
  "number": "",
  "title": "Discrete Random Variable Models",
  "body": " Discrete Random Variable Models    In this activity we will practice recognizing scenarios that use each of four known discrete random variable types (two of which are new in this activity). We will also see how they might belnd together and introduce the basic idea of a hypothesis test.    Basic Discrete Random Variables and What They Model  Each of the following descriptions is really a theorem. For the purposes of this class, they are definitions and the probability mass functions and cumulative distribution functions for them are given by the appropriate R commands with d and p commands, respectively.    Binomial  If counts the number of successes in independent and identically distributed Bernoulli trials, each with probability of success , then .  The expected value of a binomial random variable is and the variance is .    Geometric  Let be the random variable that counts the number of failures before the first success in a Bernoulli process with probability of success . Then is a geometric random variable.  The expected value of a geometric random variable is .    Poisson  If counts the number of randomly occurring and relatively rare events of the same type, that occur independently with a frequency of per time unit, then is a Poisson random variable with rate .  The expected value of a Poisson random variable is and the variance is also .    Hypergeometric  If counts the number successes in draws without replacement from a finite population of with successes and failures, then is a hypergeometric random variable with parameters , , and , i.e. .  The expected value of a hypergeometric random variable is , where .    In the following exercises you will need to recognize which random variables should be in the given scenario, then do whatever calculations are indicated using R. Your write-ups should include all your reasoning and any R code you used.       A high-volume line produces items with independent defect probability . You test items one by one. Let be the number of tests before the first defective item is found.     What type of random variable is and what are its parameters? Explain.      Compute .      Now suppose you test items after the first defective item is found and let be the total number of defective items found. What is and ? Explain your answer completely.       Ski chairlifts stop randomly because of gapers who can't figure out how to sit down on a chair. For a specific lift, the average number of stops per -minute period is (on a typical day). Let be the number of stops you count on a -minute ride to the top of the mountain.     What type of random variable is and what are its parameters? Explain.      Find the probability of no stops on a ride of this lift, as well as the probability of three or more stops.      (A hypothesis test, done informally.) Suppose you count seven stops on a single ride. What is the probability of this happening given the parameters of the random variable given above? Should you conclude this is not a \"typical\" day on the mountain (maybe it's Spring break for public schools in Dallas)?       A manufacturer of electronic components receives a shipment of microchips, of which are defective. The manufacturer does not know how many are defective, but does not want to test all chips. So, they test of them, one at a time, without replacement. Letting denote the number of defective chips they find (which must depend on ), they can compute to estimate the number of defective chips in the shipment.     What types of random variable is ? Explain.      What is the expected value of ? Use one of the expected values of the basic random variables given above and a result from the text to justify.      Simulate using the appropriate r prefixed function in R. Use this to answer the following: How large must be so that is within of the true value of for percent of the simulations?      "
},
{
  "id": "DiscreteRVModels-3-1",
  "level": "2",
  "url": "DiscreteRVModels.html#DiscreteRVModels-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  A high-volume line produces items with independent defect probability . You test items one by one. Let be the number of tests before the first defective item is found.     What type of random variable is and what are its parameters? Explain.      Compute .      Now suppose you test items after the first defective item is found and let be the total number of defective items found. What is and ? Explain your answer completely.    "
},
{
  "id": "DiscreteRVModels-3-2",
  "level": "2",
  "url": "DiscreteRVModels.html#DiscreteRVModels-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Ski chairlifts stop randomly because of gapers who can't figure out how to sit down on a chair. For a specific lift, the average number of stops per -minute period is (on a typical day). Let be the number of stops you count on a -minute ride to the top of the mountain.     What type of random variable is and what are its parameters? Explain.      Find the probability of no stops on a ride of this lift, as well as the probability of three or more stops.      (A hypothesis test, done informally.) Suppose you count seven stops on a single ride. What is the probability of this happening given the parameters of the random variable given above? Should you conclude this is not a \"typical\" day on the mountain (maybe it's Spring break for public schools in Dallas)?    "
},
{
  "id": "DiscreteRVModels-3-3",
  "level": "2",
  "url": "DiscreteRVModels.html#DiscreteRVModels-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  A manufacturer of electronic components receives a shipment of microchips, of which are defective. The manufacturer does not know how many are defective, but does not want to test all chips. So, they test of them, one at a time, without replacement. Letting denote the number of defective chips they find (which must depend on ), they can compute to estimate the number of defective chips in the shipment.     What types of random variable is ? Explain.      What is the expected value of ? Use one of the expected values of the basic random variables given above and a result from the text to justify.      Simulate using the appropriate r prefixed function in R. Use this to answer the following: How large must be so that is within of the true value of for percent of the simulations?    "
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
