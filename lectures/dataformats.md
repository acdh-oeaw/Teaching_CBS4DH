# Data formats

We want to look at how structured data is stored in files.

## CSV

CSV = Comma separated values

It is a very simple format for structured data, but it is also very common for exchanging data.

* the file consists of plain text
* the file consists of records and there is one record per line
* the records are divided into fields by a delimiter (usually a comma)
* the records have the same sequence of fields

Example:

```csv
Alice,25,New York,Engineer
Bob,30,Los Angeles,Doctor
Charlie,35,Chicago,Artist
David,40,Houston,Chef
Eve,45,Phoenix,Teacher
```

CSV can be read and exported by most of the spreadsheet programs.
The format also is very similar to how relational databases store values-
relational databases contain tables that have records which again have fields.
This can be mapped directly to CSV files, where every table is one file and
every record is one line

CSV files can contain a header to describe the values in the fields:

```csv
Name,Age,City,Occupation
Alice,25,New York,Engineer
Bob,30,Los Angeles,Doctor
...
```

If a value in a CSV file contains the same character as is used as the
delimiter, the value has to be quoted:

```csv
Bob,30,"Los Angeles, CA",Doctor
```

A downside of CSV is, that the format is rather flat and it is not suited
for representing nested data.

## XML

XML = Extensible Markup Language

XML files are called XML documents. They contain
* elements
* tags
* attributes

An XML element consists of a start tag and and end tag:

```xml
<foo>content</foo>
```

An XML element can contain
* text
* attributes
* other elements
* a combination of the above

```xml
<message date="12/11/2025">
  <to>Henni</to>
  <from>Sid</from>
</message>
```

* XML is case sensitive!
* XML always has a root element.
* XML has to be well formed.

XML documents can contain comments:

```xml
<!-- This is a comment -->
```

### XML Schema

XML Schema is a XML format for describing how XML documents have to be structured.

You can use the tool `xmllint` or various webservices to check if a document conforms to a XML schema.

### XPATH

XPATH is a query language for XML. It uses selectors to query the XML documents. XPATH also
provides various predicates and functions and is thus very powerful. It is a standard, so
you can write an XPATH query and use it with `xmllint` as well as with Python.

XML is used as a basis for various data formats:

* [TEI](https://tei-c.org)
* EPUB
* [RDF/XML](https://www.wikidata.org/wiki/Special:EntityData/Q30268470.rdf)
* XML/RPC
* [SVG](https://en.wikipedia.org/wiki/SVG)
* MARC

## JSON

JSON is the Javascript Object Notation. It stems from the programming language Javascript but
is nowadays supported by nearly every programming language.

JSON represents data in key/value pairs. Multiple pairs are separated by comma.
Curly brackets hold JSON objects. Square brackets hold JSON arrays.

JSON knows different data types:

* string
* number
* object
* array
* boolean
* null

JSON is also used as a basis for various data formats:

* [GEOJSON](https://geojson.org/)
* [JSON-LD](https://www.wikidata.org/wiki/Special:EntityData/Q30268470.jsonld)
* JSON-RPC
* also the de-facto standard for APIs (for example the [API endpoint for the ÖAW bluesky account](https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=oeaw.bsky.social))
