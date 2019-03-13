# Regular expressions

* Will test in Atom and on cli
* https://regex101.com/
* https://regexcrossword.com/
* https://regexone.com/
* Play with example file from Wikipedia: https://en.wikipedia.org/wiki/2011
* Convert wiki md to csv with regex

_Regular expressions_ (called _REs_, _regexes_, _regexps_, _regex patterns_) are essentially a tiny, _highly specialized programming language_ embedded inside general purpose programming languages (Python, XQuery, javascript). Please note that there are differences in how all general purpose programming langugages implement thier RE language.
When using a _RE language_, you specify the _rules_ for the _set_ of possible _strings_ that you want to _match_:
* sentences in a language,
* e-mail addresses,
* TeX commands, or
* anything you like.

It does not replace a parser for XML or HTML since you can easily create invalid and non-wellformed markup.

You can then ask questions such as:
* Does this _string_ _match_ _the pattern_?, or
* Is there a _match_ for the _pattern_ _anywhere_ in this _string_?.

You can also use _REs_ to _modify_ a _string_ or to _split it apart_ in various ways.

_RE patterns_ are usually compiled into a series of bytecodes which are then executed by a matching engine.
(For advanced use, it may be necessary to pay careful attention to how the engine will execute a given _RE_, and write the _RE_ in a certain way in order to produce bytecode that runs faster or just not use too much resources to be useful).

Since a _RE language_ is relatively small and restricted not all possible string processing tasks can be done using _REs_. There are also tasks that can be done with _REs_, but the expressions turn out to be very complicated.

In these cases, you may be better off writing code in the programming language, e.g. Python, to do the processing; Usually it is **slower** than an elaborate _RE_ but probably **a lot easier to understand**.

Your best use would probably be to assert negative patterns, e.g. things you know are wrong.

## Simple patterns
We will start by learning about the _simplest possible REs_. Since _REs_ are used to operate on strings, we will begin with the most common task: _matching characters_.

### Characters

* Most letters and characters will simply match themselves.
* Though some characters are special _metacharacters_, and do not match themselves:
  * They signal that some out-of-the-ordinary thing should be matched, or
  * affect other portions of the _RE_ by repeating them or changing their meaning.

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

_Sequences_ can be included inside a _character class_. E.g. `[\s:;]` will match any whitespace character, a colon `:` or semicolon `;`.

The final metacharacter in this section is _dot_ `.`. It matches anything except a newline character.
(In Python you can use `re.DOTALL` to match even a _newline_. _Dot_ `.` is often used where you want to match _any character_.)

## Repetition

_Matching varying sets of characters_ is the first thing REs can do. Another capability is that you can specify that portions of the _RE_ must be _repeated_, i.e. _qualified_, a certain number of times.

All four _repeating qualifiers_:
```
* + ? {m,n}
```

The first single _metacharacter_ for _repeating_ things that we will look at is _star_ `*`. _Star_ `*` does not match the _literal character_ `*`. It specifies that the previous character can be matched _zero or more times_, instead of _exactly once_. This means whatever is being repeated may not be present at all.

| String | RE | Match |
| --- | --- | --- |
| star | `[e]*` | Yes |
| staar | `t[a]*r` | Yes |

The second _repeating metacharacter_ is plus `+` which matches _one or more times_. This requires _at least one occurrence_ compared to _asterisk_ `*`.

| String | RE | Match |
| --- | --- | --- |
| plus | `pl[au]+s` | Yes |
| pluus | `plu+s` | Yes |
| plusplus | `uss+` | No |  
| plussusch | `us[cs]+` | Yes |  


The third single repeating _qualifiers_ is  the _question mark_ `?` which matches either _once or zero times_.

| String | RE | Match |
| --- | --- | --- |
| question | `qu?e` | Yes |
| question | `est?s` | Yes |
| markka | `rk?a` | No |  
| mark | `a?r` | Yes |

The fourth and most complicated repeated qualifier is `{m,n}`, where `m` and `n` are _decimal integers_. This _qualifier_ means there must be _at least_ `m` repetitions, and _at most_ `n` repetitions.

| String | RE | Match |
| --- | --- | --- |
| complicated | `li{1,1}c` | Yes |
| appreciated | `p{2,2}` | Yes |  
| rain | `[ai]{2,2}` | Yes |
| rain | `[ai]{1,2}` | Yes |
| complicated | `li[act]{3,}ed` | Yes |

If either `m` or `n` is omitted it becomes for e.g. `{3,}` _three or more_ and `{,3}` _up to three_ repetitions.

With this qualifier you can express all the single repeating qualifiers, e.g. `?` as `{0,1}` `+` as `{1,}`, and `*` as `{0,}` but the single versions are both easier on the eye and shorter to write.

## Anchors
Anchors match a position not characters.

### Metacharacter anchors

| Metacharacter |  Matches at |
| --- | --- |
| `^` | the start of a string |
| `$` | the end of a string |

Most _RE engines_ have a _multi-line_ mode that makes _caret_ `^` match after any line break, and _dollar_sign_ `$` before any line break.

| String | RE | Match |
| --- | --- | --- |
| complicated | `^comp` | Yes |
| appreciated | `ed$` | Yes |  
| rain | `^rain$` | Yes |
| rain | `$r[ai]+n$` | Yes |
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
| complicated | `\bcomp.+\b` | Yes |

# Regular Expressions 2

Last session we covered _simple patterns_ and _repetition_. We also did some exercises on this using `egrep`. Today we firstly want to cover _alternation_ and _grouping_ before we continue using `egrep` with more andvanced expressions. Later on we will start compare `egrep`s REs to `python`.

## Alternation

_Alternation_ is the _RE_ equivalent of `or`. `word|weapon` matches _words_ in _About words and other mighty weapons_. Applied again the _RE alternation_ matches _weapons_. You can add as many alternatives as you want, e.g. `letter|syllable|word|phrase|sentence|paragraph`.

_Alternation_ has the **lowest precedence** of all _RE operators_.

Exercise: Find the preference for all types, e.g _concatenation_, _repetition_ and _alternation_.

## Grouping
Since we introduced _precedence_ in the previous section we also want to be able to change the behaviour. This is one of the things _grouping_ does.  

| Metacharacter | Explanation |
| --- | --- |
| `(` | starts a group |
| `)` | ends a group |

### Precedence examples

<table>
<tr><th>String</th><th>Pattern</th><th>Match?</th></tr>
<tr><td> word and phrase level</td><td><code>word|phrase level</code></td><td>Yes, both <em>word</em> and <em>phrase level</em></td></tr>
<tr><td>walked up to the talking lamp post</td><td><code>ed\b|ing\b</code></td><td>Yes, both <em>ed</em> at the end of <em>walked</em> and <em>ing</em> at the end of <em>talking</em></td></tr>
<tr><td>word level and phrase level</td><td><code>word|phrase level</code></td><td>Yes, but only <em>word</em> and <em>phrase level</em> (not all of <em>word level</em>)</td></tr>
<tr><td>word level and phrase level</td><td><code>(word|phrase) level</code></td><td>Yes, both <em>word level</em> and <em>phrase level</em></td></tr>
</table>

In addition to use the _grouping metachararacters_ to alter the precedence you can use it for _back reference_. Some RE implementations have named grouping back references others just `\1`, `\2` etcetera.

Exercise: Check out how this is in `egrep`.   


## Comparing to Python
Without going into actual Python programming we are going to see how the `egrep` REs compare to Python's:  
* [Regular expressions 101](https://regex101.com/)

Make sure to tick Python in the _Flavour_ list to the left.
