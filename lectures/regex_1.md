# Regular expressions

_Regular Expressions_ (called  _REs_, _regex_, _regexps_, _regex patterns_) pose a **search pattern** in a text and are supported by multiple programming languages (Python, Java, Javascript, and many more) and serve as an integral part in several tasks. There are subtle differences between each implementation of Regex in the different programming languages but they are all based on the same basic principles. 

They are useful especially for cases where the dataset is complicated and "not-clean", as they support many important tasks in string processing (searching, replacing, validating, parsing, etc.), as they focus on defining the rules of the searched (sub-)string. Depends on the task and on the search pattern, they could spare a lot of work for programmers but can as well consume a lot of computational effort for the computer. Regex have some limitations and they do not enable the performance of _all possible_ string processing tasks.

The search pattern defines some generalized way to define a possible string:</br>
The pattern _3 digits and one following capital letter_ would match both: _123A_ and _456B_, but not _123a_.</br>
The pattern _possibly some digit(s) and a final exclamation mark_ would match: _10000!_, _2022!_, and also _!_ (why? later!). 

_RE_ patterns are usually compiled into series of bytecode and are then executed by a matching engine. Therefore, it may be necessary to pay more attention to how the engine executes a given _RE_ as the order of compilation might play a role (order of compilation, how fast it runs and amount of computational ressources needed).
Processing with Regex does not replace a parser for XML or HTML since you can easily create invalid and non-wellformed markup.

## Theoretical Part
The origin of regular expressions finds its way to the world of _theoretical computer science_. When we talk about some languages, we can define **regular languages** as those who are built from some _Alphabet_ that is closed under _union_, _concatenation_ and the _Kleene star operator_ (arbitrary repetition(s) of some string, including 0 repetitions, so an empty string), as well as _intersection_, _complement_, _difference_, and some more several operators. By the term _closed under_ we observe that every time we apply one of the operators, we still have a regular language. 

There is a strong correlation between regular languages and regular expressions. 
With the help of a regular expression, the corresponding regular language can be represented.

There are different notations for regular expressions:
* Algebraic notion
* EBNF notation
* Syntax diagramme
* POSIX

We will focus on POSIX notations which are mostly the standard in the different technologies.

## Define Patterns
We want to use the Regex as a tool to define some generalized pattern, so that it could match a possible set of strings that have some _common elements_.
Some common examples:
* e-mail addresses
* phone numbers
<!-- TODO ADD MORE EXAMPLES -->

For this we need some fixed notation for digits, (Latin) letters, logical operators: OR, AND, some negations and more.

We will focus on Regex represantion in _Python_. The Regex library is imported in Python with the `re` module.
We will firstly treat basic characters and later see some possibilities to combine them on a higher level to enable more complicated patterns.
Notice the multiple ways to define the same pattern along this introduction. It is important to compose the regular expression in a way that is readable and understandable for a third person.

#### characters:

| Special sequence | Matches | Equivalent sets |
|----------------- | ------- | ------------------------------------ |
| `\d` | any _decimal digit_ | `[0-9]` |
| `\D` | any _non-digit character_ | `[^0-9]` |
| `\s` | any _whitespace character_ | `[\t\n\r\f\v]` or `' '` (one space) |
| `\S` | any _non-whitespace character_ | `[^\t\n\r\f\v]` |
| `\w` | any _alphanumeric character or underscore_ | `[a-zA-Z0-9_]` |
| `\W` | any _non-alphanumeric character or underscore_ | `[^a-zA-Z0-9_]` |


Besides using the predefined special sequences, also the exact text (also single characters) can be used. <br>
For the characters, either you specify them _individually_ or use _ranges_ by giving a _hyphen_ `-` inbetween. We will see some examples later.
<br><br>
**Example:** `\d\d\s[A-Z][a-z][a-z][a-z][a-z]\s\d\d\d\d` would be equal to `10 March 2022`. <br> An equal regex would be: `[0-9][0-9]\s[A-Z][a-z][a-z][a-z][a-z]\s[0-9][0-9][0-9][0-9]`.<br> We can, of course, just write the string and search it in our sentence, but in this case we lose generalization.<br> Is there a compacter way to write this Regex? Can we make it even more general to include other months as well? Later!


#### Metacharacters
The complete list of metacharacters:

| Metacharacter | Name | Meaning |
| --- | --- | --- |
| `[]` | _brackets_ | a set of characters |
| `()` | _parenthesis_ | create a group |  
| `.` | _period_ or _dot_ | any character besides new line |
| `^` | _caret_ | anchor operator: starts with or negation, exclude (inside the brackets) |
| `$` | _dollar sign_ | anchor operator: ends with, final pattern |
| `\` | _backslash_ | indicate sequences or escape metacharacters |
| `|` | _pipe_ or _bar_ | logical OR |


#### Repeating Qualifiers
| Metacharacter | Name | Meaning |
| --- | --- | --- |
| `*` | _asterisk_ or _star_ | arbitrary many occurences (including zero) |
| `+` | _plus sign_ | arbitrary many occurences (at least one) |
| `?` | _question mark_ | at most one time (including zero) |
| `{}` | _curly brackets_ | range or number of repetitions |

We now go back to our example from above, we want to form some regex to match a date that looks like: `DAY MONTH YEAR` where the day and the year appear in digits and the month in letters.
`(\d){2}\s(A-Z)(a-z)+\s(\d){4}`: We have here a set of groups, we firstly have 2 digits followed by a space, one uper case letter, some arbitrary number of lower case letters, another space and 4 final digits.<br>
With this regex the following strings would match:
* `30 January 2021`
* `01 February 1990`
* `15 April 2000`<br>

_But also:_
* `90 Fix 9999`
* `00 January 2000`
* `29 February 2022`
* `30 Ja 2021`

We cannot cover _all_ edge cases, however, we can definitely make the specification perciser while still maintaining generalization:<br>
`[(0-3)\d\s(A-Z)(a-z){2, 8}\s(0-2)(\d){3}]`<br>
What invalid strings that matched before do not match anymore? Can we improve it even more?

#### Some Remarks:
* `?` is equal to `{0, 1}`
* `[0123456789]` is equal to `[0-9]`
* `[012]` is equal to `(0|1|2)`. `(123)` does not represent the same, as the pattern would look after exactly `"123"` in the string.
* Note: for German characters (or some other languages with Latin characters) you need to redefine the group of letters `[a-zA-Z]` to include also the extra letters: `[a-zA-ZäöüÄÖÜß]`.
* Regex for simple punctuation: `[\.\,!\?]`

#### More examples:

The _metacharacter star_ `*`, does not match the _literal character_ `*`, and its meaning is matching _zero or more times_. To match the _literal character_ `*`, we use the backslash for escaping the metacharacter: `\*`. 

| String | RE | Match |
| --- | --- | --- |
| star | `[e]*` | Yes |
| staar | `st[a]*r` | Yes |

The _repeating metacharacter_ plus `+` means matching _one or more times_. This requires _at least one occurrence_ compared to _asterisk_ `*`.

| String | RE | Match |
| --- | --- | --- |
| plus | `pl[au]+s` | Yes |
| pluus | `plu+s` | Yes |
| plu | `plu[s]+` | No |  
| plusss | `plus+` | Yes |
| plusususs | `pl(us)+` | No | 
| plusususs | `pl[us]+` | Yes | 
| plusususs | `pl(us)+s` | Yes |

Notice the three last examples and the difference between applying the operator on a set and on a group.


The third single repeating _qualifier_ is  the _question mark_ `?` which matches either _once or zero times_.

| String | RE | Match |
| --- | --- | --- |
| question | `qu?e` | Yes |
| question | `est?s` | Yes |
| markka | `rk?a` | No |  
| mark | `a?r` | Yes |


The fourth repeated qualifier is `{m,n}`, where `m` and `n` are _decimal integers_. This _qualifier_ means there must be _at least_ `m` repetitions, and _at most_ `n` repetitions.

| String | RE | Match |
| --- | --- | --- |
| complicated | `li{1,1}c` | Yes |
| appreciated | `p{2,2}` | Yes |  
| rain | `(ai){2,2}` | Yes |
| rain | `(ai){1,2}` | Yes |
| complicated | `li(act){3,}ed` | Yes |

If either `m` or `n` is omitted it becomes for e.g. `{3,}` _three or more_ and `{,3}` _up to three_ repetitions.

#### Remark: 
if we have a set or a group with no following _repeating metacharacter_ we refer to exactly one occurence by default.


#### Anchors
Anchors match a pattern based on its position in the string.
Note: Most _RE engines_ have a _multi-line_ mode that makes _caret_ `^` match after any line break, and _dollar_sign_ `$` before any line break.

#### Examples:

| String | RE | Match |
| --- | --- | --- |
| complicated | `^comp` | Yes |
| appreciated | `ed$` | Yes |  
| rain | `^rain$` | Yes |
| rain | `$r[ai]+n$` | Yes |
| complicated | `^comp.*ed$` | Yes |

#### Special sequence anchors

| Special sequence |  Matches at |
| --- | --- |
| `\b` | a word boundary |
| `\B` | not a word boundary |

A word boundary is a position between a character that can be matched by the set of characters of `\w` and a character that cannot be matched by `\w`. `\b` also matches at the ends of the string if the first/last characters in the string are word characters. `\B` matches at every position where `\b` cannot match.

| String | RE | Match |
| --- | --- | --- |
| complicated | `\bcomp` | Yes |
| appreciated | `\Bed\b` | Yes |  
| rain | `\brain\b` | Yes |
| rain | `$r[ai]+n\b` | Yes |
| complicated | `\bcomp.+\b` | Yes |

In the next lecture we will review: sets and groups, regex-based functions and go over examples.

Material to overview before the next lecture:


