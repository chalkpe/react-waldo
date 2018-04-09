# react-waldo
Converts the given sentences to [Waldoche].

![waldo](waldo.png)

## Waldoche?
**[Waldoche]** (Korean: 왈도체) is a popular Korean meme, similar to [AYBABTU] meme.

## Usage
```bash
> yarn && yarn start
```

You may want to modify the address of [translation server](https://github.com/ChalkPE/translation-server) in [translate.js](src/api/translate.js).

## Deploy to [GitHub Pages]
```bash
> yarn build && yarn deploy
```
This pushes `./dist` directory to a remote `gh-pages` branch.

## License
[MIT License](LICENSE)

[GitHub Pages]: https://pages.github.com/
[Waldoche]: https://namu.wiki/w/%EC%99%88%EB%8F%84%EC%B2%B4
[AYBABTU]: https://en.wikipedia.org/wiki/All_your_base_are_belong_to_us
