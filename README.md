# intl-web
Localization for Literary Universe web app.

## Found an issue or type?

If you have found an issue with the translation feel free to open an issue where you please describe the nature of the issue. Please don't forget mention where the issue occurs and in what languages.

Or if you know where the issue occurs you can go straight to the language file and fix the offending line and submit a request for change (aka Pull Request) with the changes.

## Getting started

Take the `en.js` file and rename it according to your locale. e.g. For all spanish: `es.js`, for British English: `en-UK.js`.

Change the author name on the top of the file and the locales associated with that language (`locales: ['en', 'en-US'],`). Now you can start translating.

The basic structure of the translation file consist of identificator and text. The identificator is a unique id that Literary Universe uses to find the translation and place it into the app. Under no circumstance change this!

```js
'identificator': 'translation text',
```

The translation text will be enclosed either in single quotes `'text'` or backticks \`text\`. Backticks allow you to spread the string across multiple lines. When using single quotes keep in mind that to use single quote for appostrophies or similar they need to be preceded by back tilda `\`, this will force the app to ignore the programatic functionality of the symbol for that one time. The back tilda will not appear in the final text.  

We are using the [Message Syntax](http://formatjs.io/guides/message-syntax/) for structuring our translations. It is very straight forward.

In short you translate as you wish, but anything in curly braces `{special}` has a special meaning. If alone by itself it means that it is a variable that is being passed from the app to be put in the string. Usually this will be easy to recognize what the variable is from its name. These variables names must remain as they are or you are going to brake things.

Second, also in curly braces is advanced functionality. It will be in the following format `{variable, operation-type, what to do }`. Here you will be editing the "what to do part" of the function. Reffer to the [formatted argument](http://formatjs.io/guides/message-syntax/#formatted-argument) part of the message syntax guide for detailed information. Keep in mind that options for things like `plural` will vary from language to language. If you see the option `select` like here:

```js
`{gender, select,
    male {He}
    female {She}
    other {They}
} will respond shortly.`
```

You will be changeing only options in the curly braces, so in this case `{He}`, `{She}`, `{They}`. The first part, the `male`, `female` is recieved from the app via the `gender` variable and `other` is a reserved value for the Message Syntax.

When dealing with numerical selections you might see `#` inside the curly braces. This stands for the number that has been recieved via the variable and will be displayed in that spot.  

If you have any questions feel free to open issue or to contact us.

## Resources

* [How to contribute to open source project on Github](http://blog.davidecoppola.com/2016/11/howto-contribute-to-open-source-project-on-github/)
* [Message Syntax](http://formatjs.io/guides/message-syntax/)
* [ICU Guide](http://userguide.icu-project.org/formatparse/messages)
* [Languages plural rules](https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)
