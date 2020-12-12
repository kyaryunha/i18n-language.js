# i18n-language.js
![](https://img.shields.io/npm/l/i18n-language)
![](https://img.shields.io/npm/v/i18n-language)
![](https://img.shields.io/github/stars/kyaryunha/i18n-language.js?style=social) 

i18n-language.js is Simple i18n language with Vanilla Javascript

Write by Hyun SHIN

Demo Page: http://kyaryunha.com/i18n-language

npm link: https://www.npmjs.com/package/i18n-language


## Introduce

There are a lot of approaches to internationalisation, but this project offers unique advantages like: followings. 

- Inline translation in HTML documents
- Lightweight JS implementation in 48 lines
- Written in pure HTML/CSS/JS so beginners can use it easily
- When visiting for the first time, the language is set as the browser setting value, and if there is no setting value, English is displayed first
- When the language is changed, it is stored in the local storage and displayed in the corresponding language when revisiting


## Usage:

#### HTML

```html
<!-- Example -->
<h4 data-lang="ko">
    바닐라 JS로 하는 간단한 다국어 지원
</h4>
<h4 data-lang="en">
    Simple i18n language with Vanilla JS
</h4>
<h4 data-lang="jp">
    バニラJSで簡単な多言語サポート
</h4>
<!-- How To Change Language -->
<select id="change-language">
    <option value="ko" selected="selected">
        Korean
    </option>
    <option value="en">
        English
    </option>
    <option value="jp">
        Japanese
    </option>
</select> 
```


#### JS
Download i18n-language.js and write this code. 

```js
<script type="text/javascript" src="./i18n-language.js"></script>
```

If you want use just link, 

```javascript
<script type="text/javascript" src="https://unpkg.com/i18n-language@1.0.4/i18n-language.js"></script>
```



