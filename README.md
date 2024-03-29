<div align="center">
    <picture>
        <source media="(prefers-color-scheme: light)" srcset="https://lauerman.dev/img/logo-bg.svg" width="80" height="80">
        <source media="(prefers-color-scheme: dark)" srcset="https://lauerman.dev/img/logo.svg" width="80" height="80">
        <img src="https://lauerman.dev/img/logo-bg.svg" alt="logo" width="80" height="80">
    </picture>
    <h3>lauerman.dev</h3>
    <h4><a href="https://lauerman.dev/">check out the full site ➡️</a></h4>
    <br/>
    <img src="https://img.shields.io/github/last-commit/tommylau-exe/lauerman.dev?style=for-the-badge"/>
    <img src="https://img.shields.io/github/issues-raw/tommylau-exe/lauerman.dev?style=for-the-badge"/>
    <img src="https://img.shields.io/github/license/tommylau-exe/lauerman.dev?style=for-the-badge"/>
    <br/>
</div>

# ℹ️ About the project

lauerman.dev is my personal website where I showcase things like personal projects, work
experience and my professional resume.

Because I believe in using the right tool for the right job, this site was built using a static
site-generator (SSG) called [Eleventy (11ty)][1]. 11ty excels at creating static content from
dynamic data, so I have all my work experience being pulled [from a `.yml` file][2] automatically.
That way, I only need to update the backing data in the `.yml` file, and all the webpage content
automatically changes!

This is made possible by templates that 11ty uses. You can pick from a selection of templating
languages to insert the dynamic data into an HTML page, and my choice was [Nunjucks][3]. It's
simple and close to HTML, which means I have full control over the HTML tags that get output.
It's just like writing normal HTML, with some extra header data and useful functionality inside
curly braces (if statements, basic loops, etc.).

11ty also supports many features of common build tools like Gulp.js (which I previously used).
In addition to its existing responsibilities, [I extended 11ty][4] to minify files, post-process (S)CSS,
and move everything into the right place to prepare for deployment.

Finally, everything is hosted on the wonderful [GitHub Pages][5], using my custom domain name
[lauerman.dev](https://lauerman.dev). 🚀

# 🛠️ Built with

- [Eleventy][1]
- [Nunjucks][3]
- [GitHub Pages][5]

# 📃 License

Distributed under the MIT License. See `LICENSE.txt` for more information.

[1]: https://www.11ty.dev/
[2]: https://github.com/tommylau-exe/lauerman.dev/blob/main/src/_data/experience.yaml
[3]: https://mozilla.github.io/nunjucks/
[4]: https://github.com/tommylau-exe/lauerman.dev/blob/main/.eleventy.js
[5]: https://pages.github.com