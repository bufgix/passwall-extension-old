<h1 align="center">Welcome to passwall-firefox 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.4.0-blue.svg?cacheSeconds=2592000" />
</p>

> Passwall Firefox Extension

<a href="https://addons.mozilla.org/tr/firefox/addon/passwall/"><img src="https://discourse-prod-uploads-81679984178418.s3.dualstack.us-west-2.amazonaws.com/original/3X/c/0/c03e12b8fae82e431eabaf0f6e250bfc78504182.png"></a>


![passwall](https://user-images.githubusercontent.com/22038798/80119497-7271c700-8592-11ea-8953-f866c01f7275.gif)

Check out the [awesome passwall community](https://github.com/pass-wall) and learn how to setup your unique password manager 🎉

### Installation
Clone the repository

```sh
$ git clone https://github.com/pass-wall/passwall-extension
```

Install the project dependencies

```sh
$ yarn
```

### Testing as a web app
You can test as a web app in your browser. To do this start development server

```sh
$ yarn serve
```

and visit `http://localhost:8080`

### Testing on Firefox 🧪
Firstly, build extension with yarn
```sh
$ yarn build
``` 
Next, go to `about:debugging` page in your Firefox. Switch the `This Firefox` tab and click `Install temporary extension`. Select `manifest.json` in the `dist/` directory you build.

![resim](https://user-images.githubusercontent.com/22038798/79805204-4aa21980-836e-11ea-8f5f-da6361561bd2.png)


***