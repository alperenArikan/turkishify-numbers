# numbers2turkish

Converts numbers to their Turkish equivalents

## Install

```bash
$ npm install numbers2turkish
```

## Usage

```js
const convert = require("numbers2turkish");

convert(1000200014);
// => "Bir Milyar İki Yüz Bin On Dört"

convert("841241212324212912010201");
// => "Sekiz Yüz Kırk Bir Sekstilyon İki Yüz Kırk Bir Kentilyon İki Yüz On İki Katrilyon Üç Yüz Yirmi Dört Trilyon İki Yüz On İki Milyar Dokuz Yüz On İki Milyon On Bin İki Yüz Bir"

convert(-5);
// => "Eksi Beş"

convert(0);
// => "Sıfır"
```
