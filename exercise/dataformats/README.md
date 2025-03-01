# dataformats

## CSV

<details>
<summary>CSV Exercise</summary>

> Create a simple CSV document representing the CBS4DH course.
>
> It should contain a record for every day of the course.
>
> The values of the records should be the date, the weekday, the content of the first session and the content of the second session (see the table on the github page)
>
> Store the file as a gist on gist.github.com so that it is displayed as a table

</details>

## XML

<details>
<summary>XML Exercise</summary>

> Create a simple XML document representing the CBS4DH course.
>
> It should contain a root element &lt;cbs4dh&gt;.
>
> The root element should contain one child element for each day with an attribute called 'date' that specifies the date.
>
> Every day should contain two child elements &lt;part1&gt; and &lt;part2&gt; which have the content of the lectures as enclosed text.
>
> Open the file in your browser

</details>

<details>
<summary>XML XPath Exercise</summary>

> Go to [xpather](http://xpather.com/) and copy the contents of `bookstore.xml` in the left text field.
>
> On the top of the window you have an input form that you can use to run xpath queries against the XML document.
>
> Try to find all books that contain the word `Interesing` in the title
> 
> Only output the price of those books
>
> Can you find out how to list all books publised before 1995?

</details>

## JSON

<details>
<summary>JSON Exercise</summary>

> Create a simple JSON document representing the CBS4DH course.
>
> It should contain an object with the key `cbs4dh`.
>
> That object should contain an object `lectures` which contains a list of lecture JSON objects containing the keys `date`, `part1` and `part2` for each lecture day.
>
> Open the file in your browser

</details>
