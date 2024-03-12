# Regular Expressions 2

[Link to excercises](https://github.com/acdh-oeaw/Teaching_CBS4DH/blob/2022S/exercise/regex%20exercises/regex2_exercise.txt).

## Anchors

Anchors match a pattern based on its position in the string.
Note: Most _RE engines_ have a _multi-line_ mode that makes _caret_ `^` match after any line break, and _dollar_sign_ `$` before any line break.

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

Reminder: Anchors match a pattern based on its position in the string.  
Note: Most _regex engines_ have a _multi-line_ mode that makes the _caret_ sign `^` match beginning of each line and the _dollar sign_ `$` match end of each line.

| String      | RE           | Match |
| ----------- | ------------ | ----- |
| complicated | `^comp`      | Yes   |
| appreciated | `ed$`        | Yes   |
| rain        | `^rain$`     | Yes   |
| rain        | `^r[ai]+n$`  | Yes   |
| raaaain     | `^r[ai]+n$`  | Yes   |
| complicated | `^comp.*ed$` | Yes   |

**Remarks:**

- `^pattern$` has the meaning of a total match

## Special sequence anchors

| Special sequence | Matches at          |
| ---------------- | ------------------- |
| `\b`             | a word boundary     |
| `\B`             | not a word boundary |

A word boundary is a position between a character that can be matched by the set of characters of `\w` and a character that cannot be matched by `\w`. `\b` also matches at the ends of the string if the first/last characters in the string are word characters. `\B` matches at every position where `\b` cannot match.

| String      | RE           | Match |
| ----------- | ------------ | ----- |
| complicated | `\bcomp`     | Yes   |
| appreciated | `\Bed\b`     | Yes   |
| rain        | `\brain\b`   | Yes   |
| rain        | `$r[ai]+n\b` | Yes   |
| complicated | `\bcomp.+\b` | Yes   |

## Substitution

Regular expression can be also used for the search & replace.

In the simple case you just search using the regular expression and replace it with a fixed text (try it out on the regex101 using the **Substition** function).

On top of that it is possible to use a selected parts of the match in the replace (so-called _backreferences_):

- _Backreference_ are defined using brackets, e.g. `a(.)b(.c.)d` defines two of them
  - any single character between a and b,
  - a sequence of any character, c and any character in between of a and d.
- How to refer to _backreferences_ in the replace string depends on the regular expressions engine but two most popular syntaxes are `\\backreferenceNumber` and `$backreferenceNumber`, e.g. `\\1` and `$1` (you can try it out on the regex101 by choosing various flavors).

As an example let's naively reorder a conditional sentence:

- search for: `(.*), ?(.*)[.]`
- replace with: `$2, $1.`
- test string: `If you see a red light, stop.`
- result: `stop, If you see a red light.`

## Flags

To enable some more flexibility or specification during the search for the pattern, some regex flags can be used. We will quickly overview the important ones that can be integrated in more complicated patterns:

- **global** search through the whole string, and do not return just after the first occurence
- **multi line** total string match, equal to: `^pattern$`
- **insensitive** case insensitive search (both lower and upper case search)
- **extended** ignore whitespace

**Remarks**:

- Flags available and their exact behavior may (and do) vary between regex implementations (check it on the regex101 by choosing different flavors). Check the documentation of the app/language for details.
- Some applications (most notably text editors) do not expose flags or do it indirectly (e.g. with a "ignore case" checkbox in the search dialog).

## Where you can use regular expressions?

All around! (which is why we are learning them)

Particularly:

- In almost any text editor.
- In Google Docs and LibreOffice (but surprisingly not in Ms Office).
- In dedicated tools (like the [regex101](https://regex101.com/) we used here)
- In each and every serious programming language.
- In each and every [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment) (once you start programming).
- In CLI tools like `grep` (find matching files/lines) or `sed` (find & replace).

## Regex with Python

We will now focus on Regex representation in _Python_. The Regex library is imported in Python with the `re` module:

```Python
import re

# example: substitute every "0" occurence with "1"
re.sub(r"0", "1", "023") # output = "123"
```

For the examples we will use the `match` function of Python, and will take a deeper look at the different functions in the next lecture.

```Python
import re

# search the regular expression pattern and return the first occurrence (it checks the match with the beginning of the string)
# first parameter is the pattern
# second parameter is the string
# output is TRUE or FALSE.
# If there is a match, we can get extra information from the console: <re.Match object; span=(first_index, last_index), match='matched_string'>
re.matches(r"REGEX", "STRING")
```

```Python
import re

re.matches(r"[e]*", "star")
re.matches(r"st[a]*r", "star")

# What are the outputs of the next functions?
re.matches(r"st[ea]*r", "star")
re.matches(r"sta[a]*r", "star")
re.matches(r"st[ea]*r", "star")
```

## Regex in Corpora and Text Collections

- Deutsches Textarchiv (DTA): [Corpus](https://www.deutschestextarchiv.de/)|[Documentation](https://www.deutschestextarchiv.de/doku/DDC-suche_hilfe#suche_mit_regul)
- Digitales Wörterbuch der deutschen Sprache (DWDS): [Corpus](https://www.dwds.de/)|[Documentation](https://www.dwds.de/d/korpussuche#re) 
- Wienerisches DIGITARIUM: [Corpus](https://digitarium-app.acdh.oeaw.ac.at/)|[Documentation]
- Brown Corpus: [Corpus](https://app.sketchengine.eu/#dashboard?corpname=preloaded%2Fbrown_1)|[Documentation](https://www.sketchengine.eu/quick-start-guide/concordance-lesson/)

**Tasks**

- Use Regex to find the longest word given within these corpora - which word is it and how many characters does it have? Which differences do you witness between the different corpora during your search?
<!--
- Identify as many street names (e.g. Judengasse, Wallnerstraße) as possible within ...
- Which events that happened on the ... are captured in the ...?

## More ambitious task

If we still have time, we can try to convert a Wikipedia's "year overview" to a spreadsheet (a CSV file).

* Open https://de.wikipedia.org/wiki/2011 . As you can see it's a large page describing what happened in 2011. The information is grouped in various ways: by country, by date or by topic.
* Let's try to choose one grouping and:
  * Extract it from the whole content
  * Split it into single records looking as `"header","content"` (header will be a country for grouping by country, date for grouping by date, etc.), e.g.
    ```
    "2. Januar","Ein Erdbeben der Stärke 7,1 erschüttert Chile."
    "5. Januar","Ein Erdbeben der Stärke 5,4 verursacht im Iran einige Schäden. Es gab 16 Verletzte."
    (...)
    ```
    This is a so-called CSV format which can be easily opened in a spreadsheet app (e.g. Ms Excel).
* To make our lives easier let's work with the [source code](https://de.wikipedia.org/w/index.php?title=2011&action=edit) of the page. Just copy it to any application you like (your favourite text editor or the regex101 or whatever) and try to search & replace it using regular expressions to get to the format mentioned in the previous point.
  * There is no single right result of this task and countless number of regular expressions leading to them. Just play around until you are satsified with the results.
  * It is a complex task so try to divide it into smaller steps, e.g.
    * Start with extracting the part of the whole document you are interested in (note that extracting is the same as "removing the other parts").
    * Then find a way to match the whole "record".
    * Finally try to split each record into header and content.
-->
