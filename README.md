# American-Oxford-3000

## What is the Oxford 3000

The Oxford 3000 is a list of the 3,000 core words that every learner of English needs to know.

The words have been chosen based on their frequency in the Oxford English Corpus and relevance to learners of English. Every word is aligned to the CEFR, guiding learners on the words they should know at A1-B2 level.

## What is the Oxford 5000

The Oxford 5000 is an expanded core word list for advanced learners of English.

As well as the Oxford 3000 core word list, it includes an additional 2,000 words that are aligned to the CEFR, guiding advanced learners at B2-C1 level on the most useful high-level words to learn to expand their vocabulary.

## Some useful commands

```shell
# get random 20 words
cat American_Oxford_5000.txt| shuf  | head -n 20 > fileA
# difference set. get words from 5000 not contain the words in fileA
grep -vf fileA American_Oxford_5000.txt 
```

## Notice

- oxford_3000 - 2972
- oxford_5000 - 1993
- duolingo B2 - 1111


- B2_3000 - the common words of b2 * 3000 - 330
- B2_5000 - the common words of b2 * 5000 - 380
