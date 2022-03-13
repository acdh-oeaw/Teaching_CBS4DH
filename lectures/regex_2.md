# Regular Expressions 2
Reminder: Anchors match a pattern based on its position in the string. 
Note: Most _RE engines_ have a _multi-line_ mode that makes _caret_ `^` match after any line break (so every sentence begin), and _dollar_sign_ `$` before any line break (so every end of a sentence). 

| String | RE | Match |
| --- | --- | --- |
| complicated | `^comp` | Yes |
| appreciated | `ed$` | Yes |  
| rain | `^rain$` | Yes |
| rain | `^r[ai]+n$` | Yes |
| raaaain | `^r[ai]+n$` | Yes |
| complicated | `^comp.*ed$` | Yes |

**Remarks:**
* `^pattern$` has the meaning of a total match, as 

## Special sequence anchors

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


## More functions

In the last lecture, we had the function `match`. We will introduce some more useful functions that are supported by Python:

* `search`: similar to `match`, but more generalized. Looks for a match in the whole given string. It returns (if not defined otherwise) the first occurence that matches.

* `findall`: similar to `search`, but returns the list of all matches, and not only the first one.

* `sub`: replaces the matched part in the string/text with another predefined string. Depends on the settings, can replace one or more occurences/matches.

* `split`: relevant to the use of regex in python. splits the string on the pattern occurence.

```Python
import re

re.search(r"^our pattern$","our string")

re.finall(r"pattern", "string")

re.sub(r"pattern", "insert_instead", "input_string")

re.split(r"pattern", "string")

```

## Flags

To enable some more flexibility or specification during the search for the pattern, some regex flags can be used. We will quickly overview the important ones that can be integrated in more complicated patterns:
* **global** search through the whole string, and do not return just after the first occurence 
* **multi line** total string match, equal to: `^pattern$`
* **insensitive** case insensitive search (both lower and upper case search)
* **extended** ignore whitespace

## Some links
* [Atom](https://atom.io/) desktop text editor that supports regular expressions 
<!-- 
In this excercise we'll take data from Wikipedia and make a csv file out of it by using regular expressions for searching and replacing.

* You'll need [Atom](https://atom.io/)
* First go to  https://de.wikipedia.org/wiki/2011 (we'll work with a German text)
* Click on "Quelltext bearbeiten"
* What you see there is the Wikipedia markdown format
* Copy the section "Auswahl bekannter Verstorbener" into a plain text file
* In Atom you can now use regular expressions for converting that list into a csv file like [this one](../exercise/lecture3/data.csv) -->
