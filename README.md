# babel-helper-error-stack

make your error stack from this 

```
Error: something error
	at WhatClass.method(index.js 10:1)
	at WhatClass2.method(index.js 20:3)
```

to this

```
Error: something error
	at WhatClass.method(/home/name/projects/project-name/components/componentA/index.js 10:1)
	at WhatClass2.method(/home/name/projects/project-name/components/componentB/index.js 20:3)
```

## Install

```
$ npm install babel-helper-error-stack
```

## Usage for your entry js

```js
import from "babel-helper-error-stack";

// or

require("babel-helper-error-stack");
```


