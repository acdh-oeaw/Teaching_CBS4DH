# Regular expressions

_Regular Expressions_ (called  _REs_, _regex_, _regexps_, _regex patterns_) describe a **search pattern** in a text and are supported by multiple programming languages (Python, Java, Javascript, and many more) and serve as an integral part in several tasks. There are subtle differences between each implementation of Regex in the different programming languages but they are all based on the same basic principles. 

They are useful especially for cases where the dataset is complicated and "not-clean", as they support many important tasks in string processing (searching, replacing, validating, parsing, etc.), as they focus on defining the rules of the searched (sub-)string. Depending on the task and on the search pattern, they could spare a lot of work for programmers but can consume a lot of computational power as well. Regex have some limitations and they do not enable the performance of _all possible_ string processing tasks.

The search pattern defines some generalized way to describe a possible string:</br>
The pattern _3 digits and one following capital letter_ would match both: _123A_ and _456B_, but not _123a_.</br>
The pattern _possibly some digit(s) and a final exclamation mark_ would match: _10000!_, _2022!_, and also _!_ (why? later!). 

_RE_ patterns are usually compiled into series of bytes/bytecode and are then executed by a matching engine. Therefore, it may be necessary to pay more attention to how the engine executes a given _RE_ as the order of compilation might play a role (order of compilation, how fast it runs and amount of computational ressources needed).
Processing with Regex does not replace a parser for XML or HTML since you can easily create invalid and non-wellformed markup.

## Theoretical Part
The origin of regular expressions finds its way to the world of _theoretical computer science_. When we talk about some languages, we can define **regular languages** as those who are built from some _Alphabet_ that is closed under _union_, _concatenation_ and the _Kleene star operator_ (arbitrary repetition(s) of some string, including 0 repetitions, so an empty string), as well as _intersection_, _complement_, _difference_, and some more several operators. By the term _closed under_ we indicate that every time we apply one of the operators, we still have a regular language. 

Since a _RE language_ is relatively small and restricted not all possible string processing tasks can be done using _REs_. There are also tasks that can be done with _REs_, but the expressions turn out to be very complicated.

There are different notations for regular expressions:
* Algebraic notion
* EBNF notation
* Syntax diagrams
* POSIX

Your best use would probably be to assert negative patterns, e.g. things you know are wrong.

## Define Patterns
We want to use the Regex as a tool to define some generalized pattern, so that it could match a possible set of strings that have some _common elements_.<br>
Some common examples:
* e-mail addresses
* phone numbers
* clean out time stamps or (special notationed) notes in transcriptions

### Characters

We will focus on Regex representation in _Python_. The Regex library is imported in Python with the `re` module:
```Python
import re

# example: substitute every "0" occurence with "1" 
re.sub(r"0", "1", "023") # output = "123"
```
We will firstly treat basic characters and later see some possibilities to combine them on a higher level to enable more complicated patterns.
Notice the multiple ways to define the same pattern along this introduction. It is important to compose the regular expression in a way that is readable and understandable for another person.

#### Metacharacters
The complete list of metacharacters:

| Metacharacter | Name |
| --- | --- |
| `.` | _period_ or _dot_ |
| `^` | _caret_ |
| `$` | _dollar sign_ |
| `*` | _asterisk_ or _star_ |
| `+` | _plus sign_ |
| `?` | _question mark_ |
| `{` | _opening curly brace_ |
| `}` | _closing curly brace_ |
| `[` | _opening square bracket_ |
| `]` | _closing square bracket_ |
| `\` | _backslash_ |
| `\|` | _pipe_ or _bar_ |
| `(` | _opening parenthesis_ |
| `)` | _closing parenthesis_ |


Character classes are surrounded by _opening square bracket_ `[` and _closing square bracket_ `]` to form a _set of characters_. Either you specify the characters _individually_ or use _ranges_ by giving a _hyphen_ `-` inbetween. _Metacharacters_ **are not active** inside _character classes_. Since the _character class_ is a _set_ you can also _complement_ it. To do complementing you give a _caret_ `^` as the first character of the class.

One of the most important metacharacters is the _backslash_ `\` which is used to:
* _indicate_ various _special sequences_
* _escape_ all _metacharacters_ so they can be used in patterns without their special mening, e.g. use `\[` to match an actual _opening square bracket_ `[` in the string.

Some of the special sequences beginning with _backslash_ `\` represent predefined shorthand sets of characters that are often useful:
* the set of _digits_,
* the set of _letters_, or
* the set of anything that is _not whitespace_.

`\w` matches any _alphanumeric_ character. For use with Python this set **differs** depending on whether the _RE pattern_ is:
* a _string_, `\w` will match all the characters marked as letters or digits in the Unicode data plus underscore, or
* _bytes_, then this is equivalent to the class `[a-zA-Z0-9_]`.


| Special sequence | Matches | Restricted<sup>1</sup> equivalent to |
|----------------- | ------- | ------------------------------------ |
| `\d` | any _decimal digit_ | `[0-9]` |
| `\D` | any _non-digit character_ | `[^0-9]` |
| `\s` | any _whitespace character_ | `[ \t\n\r\f\v]` |
| `\S` | any _non-whitespace character_ | `[^ \t\n\r\f\v]` |
| `\w` | any _alphanumeric character_ | `[a-zA-Z0-9_]` |
| `\W` | any _non-alphanumeric character_ | `[^a-zA-Z0-9_]` |

<sup>1</sup> With Python you can use the more restricted definition of e.g. `\w` in a string pattern by supplying the `re.ASCII` flag when compiling the regular expression. Otherwise the Unicode character categories are used and thus the sequence sets include a lot more characters.

Besides using the predefined special sequences, also the exact text (as well single characters) can be used. <br>
For the characters, either you specify them _individually_ or use _ranges_ by giving a _hyphen_ `-` inbetween. We will see some examples later.
<br><br>
**Example:** The pattern `\d\d\s[A-Z][a-z][a-z][a-z][a-z]\s\d\d\d\d` matches the string `10 March 2022`. <br> It can also be expressed with the pattern: `[0-9][0-9]\s[A-Z][a-z][a-z][a-z][a-z]\s[0-9][0-9][0-9][0-9]`.<br> We can, of course, just write the string and search it in our sentence, but in this case we lose generalization.<br> Is there a compacter way to write this Regex? Can we make it even more general to include other months as well? Later!

The final metacharacter in this section is _dot_ `.`. It matches anything except a newline character.
(In Python you can use `re.DOTALL` to match even a _newline_. _Dot_ `.` is often used where you want to match _any character_.)

## Repetition

| Metacharacter | Name | Meaning |
| --- | --- | --- |
| `[]` | _brackets_ | a set of characters |
| `()` | _parenthesis_ | create a group |  
| `.` | _period_ or _dot_ | any character besides new line |
| `^` | _caret_ | anchor operator: starts with or negation, exclude (inside the brackets) |
| `$` | _dollar sign_ | anchor operator: ends with, final pattern |
| `\` | _backslash_ | indicate sequences or escape metacharacters |
| `\|` | _pipe_ or _bar_ | logical OR |

#### Repeating Qualifiers
| Metacharacter | Name | Meaning |
| --- | --- | --- |
| `*` | _asterisk_ or _star_ | arbitrary many occurences (including zero) |
| `+` | _plus sign_ | arbitrary many occurences (at least one) |
| `?` | _question mark_ | at most one time (including zero) |
| `{}` | _curly brackets_ | range or number of repetitions |

Having characters in a set, it means that each of the character is connected to the other with an OR logical connector. `[abc]` has the meaning of `a or b or c`. <br>
A group refers to __whole__ the characters in their sequence. `(abc)` has the meaning `abc`. Therefore, this pattern does not match the string `ab`, whereas `[ab][ab]` (or `[ab]+` does).  


We now go back to our example from above, we want to form some regex to match a date that looks like: `DAY MONTH YEAR` where the day and the year appear in digits and the month in letters. <br>
`(\d){2}\s(A-Z)(a-z)+\s(\d){4}` <br> We have here a set of groups, we firstly have 2 digits followed by a space, one upper case letter, some arbitrary number of lower case letters, another space and 4 final digits.<br>
With this regex the following strings would match:
* `30 January 2021`
* `01 February 1990`
* `15 April 2000`<br>

_But also:_
* `90 Fix 9999`
* `00 January 2000`
* `29 February 2022`
* `30 Ja 2021`

We cannot cover _all_ edge cases, however, we can definitely make the specification more percise while still maintaining generalization:<br>
`(0-3)\d\s(A-Z)(a-z){2, 8}\s(0-2)(\d){3}`<br>
What invalid strings that matched before do not match anymore? Can we improve it even more?

#### **Some Remarks:**
* `?` is equal to `{0, 1}`
* `[0123456789]` is equal to `[0-9]`
* `[012]` is equal to `(0|1|2)`. `(123)` does not represent the same, as the pattern would look after exactly `"123"` in the string.
* Note: for German characters (or some other languages with Latin characters) you need to redefine the group of letters `[a-zA-Z]` to include also the extra letters: `[a-zA-ZäöüÄÖÜß]`.
* Regex for simple punctuation: `[\.\,!\?]`

#### **More examples:**

For the examples we will use the ```match``` function of Python, and will take a deeper look at the different functions in the next lecture.
```Python
import re

# search the regular expression pattern and return the first occurrence (it checks the match with the beginning of the string)
# first parameter is the pattern
# second parameter is the string 
# output is TRUE or FALSE. 
# If there is a match, we can get extra information from the console: <re.Match object; span=(first_index, last_index), match='matched_string'>
re.matches(r"REGEX", "STRING")
```

The _metacharacter star_ `*`, does not match the _literal character_ `*`, and its meaning is matching _zero or more times_. To match the _literal character_ `*`, we use the backslash for escaping the metacharacter: `\*`. 

| String | RE | Match |
| --- | --- | --- |
| hello | `[hello]*` | Yes |
| hello | `h[ello]*` | Yes |
| hello | `H[ello]*` | No |
| hello | `[Hell]*o` | Yes |
| star | `[e]*` | Yes |
| staar | `t[a]*r` | Yes |

```Python
import re

re.matches(r"[e]*", "star")
re.matches(r"st[a]*r", "star")

# What are the outputs of the next functions?
re.matches(r"st[ea]*r", "star")
re.matches(r"sta[a]*r", "star")
re.matches(r"st[ea]*r", "star")
```

The _repeating metacharacter_ plus `+` means matching _one or more times_. This requires _at least one occurrence_ compared to _asterisk_ `*`.

| String | RE | Match |
| --- | --- | --- |
| plus | `pl[au]+s` | Yes |
| pluus | `plu+s` | Yes |
| plusplus | `uss+` | No |  
| plussusch | `us[cs]+` | Yes |  


The third single repeating _qualifiers_ is  the _question mark_ `?` which matches either _once or zero times_.

| String | RE | Match |
| --- | --- | --- |
| question | `qu?estion` | Yes |
| question | `qa?estion` | No |
| question | `qa?` | Yes |
| question | `qa?e` | No |
| question | `quest?tion` | Yes |
| markka | `rk?a` | No |  
| mark | `a?r` | Yes |

The fourth and most complicated repeated qualifier is `{m,n}`, where `m` and `n` are _decimal integers_. This _qualifier_ means there must be _at least_ `m` repetitions, and _at most_ `n` repetitions.

| String | RE | Match |
| --- | --- | --- |
| complicated | `compli{1,1}cated` | Yes |
| appreciated | `ap{2,2}` | Yes |  
| rain | `r[ai]{2,2}` | Yes |
| rain | `r(ai){1,2}` | Yes |
| rain | `r(ai){2,2}` | No |
| complicated | `compli[act]{3,}ed` | Yes |
| complicated | `compli[act]{3}ed` | Yes |
| complicated | `compli(act){3,}ed` | No |

If either `m` or `n` is omitted it becomes for e.g. `{3,}` _three or more_ and `{,3}` _up to three_ repetitions. `{x}` it means exactly x times.

With this qualifier you can express all the single repeating qualifiers, e.g. `?` as `{0,1}` `+` as `{1,}`, and `*` as `{0,}` but the single versions are both easier on the eye and shorter to write.

## Anchors
Anchors match a position not characters.

#### Anchors
Anchors match a pattern based on its position in the string. 
Note: Most _RE engines_ have a _multi-line_ mode that makes _caret_ `^` match after any line break, and _dollar_sign_ `$` before any line break. We will review the examples next lecture, as they are relevant to other functions.

<!-- #### Examples:

| String | RE | Match |
| --- | --- | --- |
| complicated | `^comp` | Yes |
| appreciated | `ed$` | Yes |  
| rain | `^rain$` | Yes |
| rain | `^r[ai]+n$` | Yes |
| complicated | `^comp.*ed$` | Yes |

### Special sequence anchors

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
| complicated | `\bcomp.+\b` | Yes | -->

In the next lecture we will review: anchors, regex-based functions and go over more examples and use cases.

Some links to practice:
* https://regex101.com/
* https://regexone.com/
* https://regex.sketchengine.co.uk/

