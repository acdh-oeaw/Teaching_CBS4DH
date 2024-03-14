# Regular Expressions

_Regular Expressions_ (called _REs_, _regex_, _regexps_, _regex patterns_) describe a **search pattern** in a text and are supported by multiple programming languages (Python, Java, Javascript, and many more) and serve as an integral part in several tasks. There are subtle differences between each implementation of Regex in the different programming languages but they are all based on the same basic principles.

They are useful especially for cases where the dataset is complicated and "not-clean", as they support many important tasks in string processing (searching, replacing, validating, parsing, etc.), as they focus on defining the rules of the searched (sub-)string. Depending on the task and on the search pattern, they could spare a lot of work for programmers but can consume a lot of computational power as well. Regex have some limitations and they do not enable the performance of _all possible_ string processing tasks.

The search pattern defines some generalized way to describe a possible string:</br>
The pattern _3 digits and one following capital letter_ would match both: _123A_ and _456B_, but not _123a_.</br>
The pattern _possibly some digit(s) and a final exclamation mark_ would match: _10000!_, _2022!_, and also _!_ (why? later!).

<!-- _RE_ patterns are usually compiled into series of bytes/bytecode and are then executed by a matching engine. Therefore, it may be necessary to pay more attention to how the engine executes a given _RE_ as the order of compilation might play a role (order of compilation, how fast it runs and amount of computational ressources needed).
Processing with Regex does not replace a parser for XML or HTML since you can easily create invalid and non-wellformed markup. -->

## Theoretical Part

The origin of regular expressions finds its way to the world of _theoretical computer science_. When we talk about some languages, we can define **regular languages** as those who are built from some _Alphabet_ that is closed under _union_, _concatenation_ and the _Kleene star operator_ (arbitrary repetition(s) of some string, including 0 repetitions, so an empty string), as well as _intersection_, _complement_, _difference_, and some more several operators. By the term _closed under_ we indicate that every time we apply one of the operators, we still have a regular language.

Since a _RE language_ is relatively small and restricted not all possible string processing tasks can be done using _REs_. There are also tasks that can be done with _REs_, but the expressions turn out to be very complicated.

There are different notations for regular expressions:

- Algebraic notion
- EBNF notation
- Syntax diagrams
- POSIX

We will focus on POSIX notations which are mostly the standard in the different technologies.

## Define Patterns

We want to use the Regex as a tool to define some generalized pattern, so that it could match a possible set of strings that have some _common elements_.<br>
Some common examples:

- e-mail addresses
- phone numbers
- clean out time stamps or (special notationed) notes in transcriptions

We will firstly treat basic characters and later see some possibilities to combine them on a higher level to enable more complicated patterns.
Notice the multiple ways to define the same pattern along this introduction. It is important to compose the regular expression in a way that is readable and understandable for another person.

## Characters

| Special sequence | Matches                          | Equivalent Sets  |
| ---------------- | -------------------------------- | ---------------- |
| `\d`             | any _decimal digit_              | `[0-9]`          |
| `\D`             | any _non-digit character_        | `[^0-9]`         |
| `\s`             | any _whitespace character_       | `[ \t\n\r\f\v]`  |
| `\S`             | any _non-whitespace character_   | `[^ \t\n\r\f\v]` |
| `\w`             | any _alphanumeric character_     | `[a-zA-Z0-9_]`   |
| `\W`             | any _non-alphanumeric character_ | `[^a-zA-Z0-9_]`  |

Besides using the predefined special sequences, also the exact text (as well single characters) can be used. <br>
For the characters, either you specify them _individually_ or use _ranges_ by giving a _hyphen_ `-` inbetween. We will see some examples later.

**Exercises**
- a) https://regexone.com/lesson/introduction_abcs
- b) https://regexone.com/lesson/letters_and_digits
- c) https://regexone.com/lesson/character_ranges 
- d) https://regexone.com/lesson/whitespaces


**Example:** The pattern `\d\d\s[A-Z][a-z][a-z][a-z][a-z]\s\d\d\d\d` matches the string `10 March 2022`. <br> It can also be expressed with the pattern: `[0-9][0-9]\s[A-Z][a-z][a-z][a-z][a-z]\s[0-9][0-9][0-9][0-9]`.<br> We can, of course, just write the string and search it in our sentence, but in this case we lose generalization.<br> Is there a compacter way to write this Regex? Can we make it even more general to include other months as well? Later!


## Metacharacters

| Metacharacter | Name              | Meaning                                                                 |
| ------------- | ----------------- | ----------------------------------------------------------------------- |
| `[]`          | _brackets_        | a set of characters                                                     |
| `()`          | _parenthesis_     | create a group                                                          |
| `.`           | _period_ or _dot_ | any character besides new line                                          |
| `^`           | _caret_           | anchor operator: starts with or negation, exclude (inside the brackets) |
| `$`           | _dollar sign_     | anchor operator: ends with, final pattern                               |
| `\`           | _backslash_       | indicate sequences or escape metacharacters                             |
| `\|`          | _pipe_ or _bar_   | logical OR                                                              |

### Some remarks

* About **sets** of characters `[ ]`
  * Remember that one set corresponds to **one** character in the expression we want to match, i.e. even if we put five characters between the brackets (like `[abcde]`) this still means *one single* character among the five listed
  * You can specify individual characters between the brackets `[abcde]` or **ranges** of characters by using the *hyphen* symbol, e.g. `[A-Z]` (all characters between A and Z, i.e. the whole Latin alphabet) or `[0-9]` (all numbers). Be aware that ranges follow the order of characters in the [ASCII standard](https://theasciicode.com.ar).
  * You can also specify **several sequences inside a set**, for example `[A-Za-z]` to have the whole Latin alphabet both in capital and small letters. (This is better than the range `[A-z]`, because the latter would include characters like `[` and `]`: see the [ASCII table](https://theasciicode.com.ar) and the previous bullet point).
  * If you want to use the **hyphen** as an actual character inside a set (and not to specify a range), you can add it **at the beginning or end of a set**, for example `[-A-Z]` or `[abcd-]` (or between two ranges, but this might complicate things).
* About **groups** of characters `( )`
  * Groups can be used for a **variety of purposes**. We will see some uses of groups later, but in the meantime let's say that groups can be used to apply repeating qualifiers (which we will see in the next section) to multiple characters
  * Also, they can be **backreferenced**. For example, if we want to find all words of four letters where the first two letters are the inverse of the last two, like `noon` and `peep`, we can use the pattern `\b(\w)(\w)\2\1\b`. The expression `\2` will match the second group identified before, while the expression `\1` the first group.
  * Groups are also very useful when you have to specify **alternatives** using the character `|`. We will see an example of this in exercise **d** below.

**Exercises**

* a) https://regexone.com/lesson/matching_characters
* b) https://regexone.com/lesson/excluding_characters
* c) https://regexone.com/lesson/line_beginning_end
* d) https://regexone.com/lesson/conditionals

## Repeating Qualifiers

| Metacharacter | Name                 | Meaning                                    |
| ------------- | -------------------- | ------------------------------------------ |
| `*`           | _asterisk_ or _star_ | arbitrary many occurences (including zero) |
| `+`           | _plus sign_          | arbitrary many occurences (at least one)   |
| `?`           | _question mark_      | at most one time (including zero)          |
| `{}`          | _curly brackets_     | range or number of repetitions             |

Having characters in a set, it means that each of the character is connected to the other with an OR logical connector. `[abc]` has the meaning of `a or b or c`. <br>
A group refers to **whole** the characters in their sequence. `(abc)` has the meaning `abc`. Therefore, this pattern does not match the string `ab`, whereas `[ab][ab]` (or `[ab]+` does).

### **Concrete examples:**

The _metacharacter star_ `*`, does not match the _literal character_ `*`, and its meaning is matching _zero or more times_. To match the _literal character_ `*`, we use the backslash for escaping the metacharacter: `\*`.

| String | RE         | Match |
| ------ | ---------- | ----- |
| hello  | `[hello]*` | Yes   |
| hello  | `h[ello]*` | Yes   |
| hello  | `H[ello]*` | No    |
| hello  | `[Hell]*o` | Yes   |
| star   | `[e]*`     | Yes   |
| staar  | `st[a]*r`  | Yes   |

The _repeating metacharacter_ plus `+` means matching _one or more times_. This requires _at least one occurrence_ compared to _asterisk_ `*`.

| String    | RE          | Match |
| --------- | ----------- | ----- |
| plus      | `pl[au]+s`  | Yes   |
| pluus     | `plu+s`     | Yes   |
| plusplus  | `pluss+`    | No    |
| plussusch | `plus[cs]+` | Yes   |

The third single repeating _qualifiers_ is the _question mark_ `?` which matches either _once or zero times_.

| String   | RE           | Match |
| -------- | ------------ | ----- |
| question | `qu?estion`  | Yes   |
| question | `qa?estion`  | No    |
| question | `qa?`        | Yes   |
| question | `qa?e`       | No    |
| question | `quest?tion` | Yes   |
| markka   | `rk?a`       | No    |
| mark     | `ma?r`       | Yes   |

The fourth repeated qualifier is `{m,n}`, where `m` and `n` are _decimal integers_. This _qualifier_ means there must be _at least_ `m` repetitions, and _at most_ `n` repetitions.

| String      | RE                  | Match |
| ----------- | ------------------- | ----- |
| complicated | `compli{1,1}cated`  | Yes   |
| appreciated | `ap{2,2}`           | Yes   |
| rain        | `r[ai]{2,2}`        | Yes   |
| rain        | `r(ai){1,2}`        | Yes   |
| rain        | `r(ai){2,2}`        | No    |
| complicated | `compli[act]{3,}ed` | Yes   |
| complicated | `compli[act]{3}ed`  | Yes   |
| complicated | `compli(act){3,}ed` | No    |

If either `m` or `n` is omitted it becomes for e.g. `{3,}` _three or more_ and `{,3}` _up to three_ repetitions. `{x}` it means exactly x times.
With this qualifier you can express all the single repeating qualifiers, e.g. `?` as `{0,1}` `+` as `{1,}`, and `*` as `{0,}` but the single versions are both easier on the eye and shorter to write.

We now go back to our example from above, we want to form some regex to match a date that looks like: `DAY MONTH YEAR` where the day and the year appear in digits and the month in letters. <br>
`(\d){2}\s[A-Z][a-z]+\s(\d){4}` <br> We have here a set of groups, we firstly have 2 digits followed by a space, one upper case letter, some arbitrary number of lower case letters, another space and 4 final digits.<br>
With this regex the following strings would match:

- `30 January 2021`
- `01 February 1990`
- `15 April 2000`<br>

_But also:_

- `90 Fix 9999`
- `00 January 2000`
- `29 February 2022`
- `30 Ja 2021`

We cannot cover _all_ edge cases, however, we can definitely make the specification more percise while still maintaining generalization:<br>
`(0-3)\d\s[A-Z][a-z]{2, 8}\s(0-2)(\d){3}`<br>
What invalid strings that matched before do not match anymore? Can we improve it even more?

**Some Remarks:**

- `?` is equal to `{0, 1}`
- `[0123456789]` is equal to `[0-9]`
- `[012]` is equal to `(0|1|2)`. `(123)` does not represent the same, as the pattern would look after exactly `"123"` in the string.
- Note: for German characters (or some other languages with Latin characters) you need to redefine the group of letters `[a-zA-Z]` to include also the extra letters: `[a-zA-ZäöüÄÖÜß]`. Don't forget that some alphabets (e.g. Greek) share similar letters with Latin characters (e.g., Greek "omikron", etc.); these characters are perceived differently in the regex system, therefore, you need to include them when dealing with multilingual documents.
- Regex for simple punctuation: `[\.\,!\?]`

**Exercises** 

- a) https://regexone.com/lesson/repeating_characters
- b) https://regexone.com/lesson/kleene_operators
- c) https://regexone.com/lesson/optional_characters

## **Outlook**

In the next lecture we will review: anchors, regex-based functions and go over more examples and use cases.

Some links to practice:

- https://regex101.com/
- https://regexone.com/
- https://regex.sketchengine.co.uk/

Links to more sources:

- https://www.geeksforgeeks.org/write-regular-expressions/
- https://www.w3schools.com/jsref/jsref_obj_regexp.asp
- https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285
